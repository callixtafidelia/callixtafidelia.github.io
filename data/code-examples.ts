export const codeExamples = {
  // COVID-19 Time Series Analysis
  timeSeriesAnalysis: {
    r: `# COVID-19 Time Series Analysis with ARIMA and Prophet
# Load required libraries
library(tidyverse)
library(forecast)
library(prophet)
library(lubridate)

# Load and prepare COVID-19 data
covid_data <- read.csv("covid_data.csv")
covid_data$date <- as.Date(covid_data$date)

# Exploratory data analysis
ggplot(covid_data, aes(x = date, y = cases)) +
  geom_line(color = "steelblue") +
  labs(title = "COVID-19 Cases Over Time",
       x = "Date", y = "Daily Cases") +
  theme_minimal()

# Check for stationarity
adf_test <- adf.test(covid_data$cases)
print(adf_test)

# If non-stationary, difference the data
if (adf_test$p.value > 0.05) {
  covid_data$cases_diff <- c(NA, diff(covid_data$cases))
  covid_data <- covid_data %>% drop_na()
}

# Split data into training and testing sets
train_data <- covid_data %>% filter(date < as.Date("2022-01-01"))
test_data <- covid_data %>% filter(date >= as.Date("2022-01-01"))

# ARIMA modeling
# Auto-select ARIMA parameters
arima_model <- auto.arima(train_data$cases, seasonal = TRUE)
summary(arima_model)

# Forecast with ARIMA
arima_forecast <- forecast(arima_model, h = nrow(test_data))
plot(arima_forecast)

# Calculate ARIMA accuracy
arima_accuracy <- accuracy(arima_forecast, test_data$cases)
print(arima_accuracy)

# Prophet modeling
# Prepare data for Prophet
prophet_data <- train_data %>%
  select(date, cases) %>%
  rename(ds = date, y = cases)

# Fit Prophet model
prophet_model <- prophet(prophet_data)

# Create future dataframe for prediction
future <- make_future_dataframe(prophet_model, periods = nrow(test_data))
prophet_forecast <- predict(prophet_model, future)

# Plot Prophet forecast
plot(prophet_model, prophet_forecast)
prophet_plot_components(prophet_model, prophet_forecast)

# Calculate Prophet accuracy
prophet_predictions <- prophet_forecast %>%
  filter(ds >= min(test_data$date)) %>%
  pull(yhat)

prophet_accuracy <- accuracy(prophet_predictions, test_data$cases)
print(prophet_accuracy)

# Compare models
models_comparison <- data.frame(
  Model = c("ARIMA", "Prophet"),
  RMSE = c(arima_accuracy[1, "RMSE"], prophet_accuracy[1]),
  MAE = c(arima_accuracy[1, "MAE"], prophet_accuracy[2]),
  MAPE = c(arima_accuracy[1, "MAPE"], prophet_accuracy[5])
)
print(models_comparison)`,
    python: `# COVID-19 Time Series Analysis with ARIMA and Prophet
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.tsa.stattools import adfuller
from prophet import Prophet
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Load and prepare COVID-19 data
covid_data = pd.read_csv("covid_data.csv")
covid_data['date'] = pd.to_datetime(covid_data['date'])
covid_data.set_index('date', inplace=True)

# Exploratory data analysis
plt.figure(figsize=(12, 6))
plt.plot(covid_data.index, covid_data['cases'])
plt.title('COVID-19 Cases Over Time')
plt.xlabel('Date')
plt.ylabel('Daily Cases')
plt.grid(True)
plt.show()

# Check for stationarity
adf_result = adfuller(covid_data['cases'].dropna())
print(f'ADF Statistic: {adf_result[0]}')
print(f'p-value: {adf_result[1]}')

# If non-stationary, difference the data
if adf_result[1] > 0.05:
    covid_data['cases_diff'] = covid_data['cases'].diff()
    covid_data = covid_data.dropna()

# Split data into training and testing sets
train_data = covid_data[:'2021-12-31']
test_data = covid_data['2022-01-01':]

# ARIMA modeling
model = SARIMAX(train_data['cases'], 
                order=(1, 1, 1), 
                seasonal_order=(1, 1, 1, 12))
results = model.fit()
print(results.summary())

# Forecast with ARIMA
forecast_steps = len(test_data)
forecast = results.get_forecast(steps=forecast_steps)
forecast_ci = forecast.conf_int()

# Plot ARIMA forecast
plt.figure(figsize=(12, 6))
plt.plot(train_data.index, train_data['cases'], label='Training Data')
plt.plot(test_data.index, test_data['cases'], label='Actual Test Data')
plt.plot(test_data.index, forecast.predicted_mean, label='ARIMA Forecast')
plt.fill_between(test_data.index, 
                 forecast_ci.iloc[:, 0], 
                 forecast_ci.iloc[:, 1], 
                 color='k', alpha=0.1)
plt.title('ARIMA Forecast vs Actual')
plt.legend()
plt.grid(True)
plt.show()

# Calculate ARIMA accuracy
arima_rmse = np.sqrt(mean_squared_error(test_data['cases'], forecast.predicted_mean))
arima_mae = mean_absolute_error(test_data['cases'], forecast.predicted_mean)
print(f'ARIMA RMSE: {arima_rmse}')
print(f'ARIMA MAE: {arima_mae}')

# Prophet modeling
# Prepare data for Prophet
prophet_data = train_data.reset_index()
prophet_data = prophet_data.rename(columns={'date': 'ds', 'cases': 'y'})

# Fit Prophet model
prophet_model = Prophet()
prophet_model.fit(prophet_data)

# Create future dataframe for prediction
future = prophet_model.make_future_dataframe(periods=forecast_steps)
prophet_forecast = prophet_model.predict(future)

# Plot Prophet forecast
fig = prophet_model.plot(prophet_forecast)
fig = prophet_model.plot_components(prophet_forecast)

# Calculate Prophet accuracy
prophet_predictions = prophet_forecast.tail(forecast_steps)['yhat']
prophet_rmse = np.sqrt(mean_squared_error(test_data['cases'], prophet_predictions))
prophet_mae = mean_absolute_error(test_data['cases'], prophet_predictions)
print(f'Prophet RMSE: {prophet_rmse}')
print(f'Prophet MAE: {prophet_mae}')

# Compare models
models_comparison = pd.DataFrame({
    'Model': ['ARIMA', 'Prophet'],
    'RMSE': [arima_rmse, prophet_rmse],
    'MAE': [arima_mae, prophet_mae]
})
print(models_comparison)`,
  },

  // Customer Segmentation
  customerSegmentation: {
    r: `# Customer Segmentation using K-means and Hierarchical Clustering
# Load required libraries
library(tidyverse)
library(cluster)
library(factoextra)
library(gridExtra)

# Load customer data
customer_data <- read.csv("customer_data.csv")

# Exploratory data analysis
summary(customer_data)
str(customer_data)

# Check for missing values
colSums(is.na(customer_data))

# Perform RFM analysis
# Recency: days since last purchase
# Frequency: number of purchases
# Monetary: total amount spent

# Calculate RFM metrics
rfm_data <- customer_data %>%
  group_by(customer_id) %>%
  summarize(
    Recency = as.numeric(Sys.Date() - max(purchase_date)),
    Frequency = n(),
    Monetary = sum(purchase_amount)
  )

# Scale the data
rfm_scaled <- scale(rfm_data[, c("Recency", "Frequency", "Monetary")])

# Determine optimal number of clusters using elbow method
set.seed(123)
wss <- sapply(1:10, function(k) {
  kmeans(rfm_scaled, centers = k, nstart = 25)$tot.withinss
})

# Plot elbow method
elbow_plot <- fviz_nbclust(rfm_scaled, kmeans, method = "wss") +
  labs(title = "Elbow Method for Optimal k")

# Silhouette method for optimal clusters
silhouette_plot <- fviz_nbclust(rfm_scaled, kmeans, method = "silhouette") +
  labs(title = "Silhouette Method for Optimal k")

# Display plots side by side
grid.arrange(elbow_plot, silhouette_plot, ncol = 2)

# Based on the plots, let's choose k = 5
k <- 5

# K-means clustering
kmeans_result <- kmeans(rfm_scaled, centers = k, nstart = 25)

# Add cluster assignment to the data
rfm_data$cluster <- as.factor(kmeans_result$cluster)

# Visualize the clusters
kmeans_plot <- fviz_cluster(list(data = rfm_scaled, cluster = kmeans_result$cluster),
             geom = "point",
             ellipse.type = "convex",
             palette = "jco",
             ggtheme = theme_minimal()) +
  labs(title = "K-means Clustering")

# Hierarchical clustering
# Calculate distance matrix
dist_matrix <- dist(rfm_scaled)

# Perform hierarchical clustering
hc_result <- hclust(dist_matrix, method = "ward.D2")

# Plot dendrogram
plot(hc_result, cex = 0.6, hang = -1,
     main = "Hierarchical Clustering Dendrogram")
rect.hclust(hc_result, k = k, border = rainbow(k))

# Cut the dendrogram to get cluster assignments
hc_clusters <- cutree(hc_result, k = k)
rfm_data$hc_cluster <- as.factor(hc_clusters)

# Compare K-means and hierarchical clustering
table(kmeans = rfm_data$cluster, hierarchical = rfm_data$hc_cluster)

# Analyze cluster characteristics
cluster_summary <- rfm_data %>%
  group_by(cluster) %>%
  summarize(
    Count = n(),
    Avg_Recency = mean(Recency),
    Avg_Frequency = mean(Frequency),
    Avg_Monetary = mean(Monetary),
    Total_Revenue = sum(Monetary)
  ) %>%
  arrange(desc(Avg_Monetary))

print(cluster_summary)

# Visualize cluster characteristics
# Recency vs Frequency
ggplot(rfm_data, aes(x = Recency, y = Frequency, color = cluster)) +
  geom_point(alpha = 0.7) +
  labs(title = "Customer Segments: Recency vs Frequency",
       x = "Recency (days)", y = "Frequency (purchases)") +
  theme_minimal()

# Frequency vs Monetary
ggplot(rfm_data, aes(x = Frequency, y = Monetary, color = cluster)) +
  geom_point(alpha = 0.7) +
  labs(title = "Customer Segments: Frequency vs Monetary",
       x = "Frequency (purchases)", y = "Monetary (amount spent)") +
  theme_minimal()

# Create customer personas based on clusters
personas <- data.frame(
  Cluster = 1:k,
  Persona = c("High-Value Loyal", "Recent Shoppers", "Potential Loyalists", 
              "At-Risk Customers", "Lost Customers"),
  Description = c(
    "High spending, frequent purchases",
    "Recent purchases but low frequency",
    "Moderate spending and frequency",
    "Haven't purchased recently",
    "Low spending, low frequency, not recent"
  )
)

# Join personas with cluster summary
cluster_personas <- left_join(cluster_summary, personas, by = c("cluster" = "Cluster"))
print(cluster_personas)`,
  },

  // Regression Analysis
  regressionAnalysis: {
    r: `# Multivariate Regression Analysis of Housing Prices
# Load required libraries
library(tidyverse)
library(caret)
library(car)
library(MASS)
library(lmtest)
library(ggcorrplot)

# Load housing data
housing_data <- read.csv("housing_data.csv")

# Exploratory data analysis
summary(housing_data)
str(housing_data)

# Check for missing values
colSums(is.na(housing_data))

# Handle missing values if any
housing_data <- na.omit(housing_data)

# Correlation matrix
correlation_matrix <- cor(housing_data %>% select_if(is.numeric))
ggcorrplot(correlation_matrix, hc.order = TRUE, type = "lower",
           lab = TRUE, lab_size = 3, 
           title = "Correlation Matrix of Housing Variables")

# Split data into training and testing sets
set.seed(123)
train_index <- createDataPartition(housing_data$price, p = 0.8, list = FALSE)
train_data <- housing_data[train_index, ]
test_data <- housing_data[-train_index, ]

# Build initial model with all variables
full_model <- lm(price ~ ., data = train_data)
summary(full_model)

# Check for multicollinearity
vif_values <- vif(full_model)
print(vif_values)

# Remove variables with high VIF (> 10)
high_vif_vars <- names(vif_values[vif_values > 10])
if (length(high_vif_vars) > 0) {
  train_data_reduced <- train_data %>% select(-all_of(high_vif_vars))
  reduced_model <- lm(price ~ ., data = train_data_reduced)
  summary(reduced_model)
} else {
  reduced_model <- full_model
}

# Stepwise variable selection
step_model <- stepAIC(reduced_model, direction = "both", trace = FALSE)
summary(step_model)

# Check model assumptions
# 1. Linearity
plot(step_model, which = 1)

# 2. Normality of residuals
plot(step_model, which = 2)
shapiro.test(residuals(step_model))

# 3. Homoscedasticity
plot(step_model, which = 3)
bptest(step_model)

# 4. Independence of residuals
dwtest(step_model)

# If assumptions are violated, consider transformations
# For example, log transformation of the dependent variable
log_model <- lm(log(price) ~ ., data = train_data)
summary(log_model)

# Choose the best model based on assumptions and fit
final_model <- step_model  # or log_model if it's better

# Make predictions on test data
predictions <- predict(final_model, newdata = test_data)

# If using log model, transform predictions back
if (identical(final_model, log_model)) {
  predictions <- exp(predictions)
}

# Evaluate model performance
test_data$predicted <- predictions
rmse <- sqrt(mean((test_data$price - test_data$predicted)^2))
mae <- mean(abs(test_data$price - test_data$predicted))
r_squared <- cor(test_data$price, test_data$predicted)^2

cat("RMSE:", rmse, "\n")
cat("MAE:", mae, "\n")
cat("R-squared:", r_squared, "\n")

# Visualize actual vs predicted
ggplot(test_data, aes(x = price, y = predicted)) +
  geom_point(alpha = 0.5) +
  geom_abline(intercept = 0, slope = 1, color = "red", linetype = "dashed") +
  labs(title = "Actual vs Predicted Housing Prices",
       x = "Actual Price", y = "Predicted Price") +
  theme_minimal()

# Variable importance (standardized coefficients)
# Scale the predictors
scaled_train <- train_data %>%
  mutate_at(vars(-price), scale)

# Fit model with scaled predictors
scaled_model <- lm(price ~ ., data = scaled_train)
std_coefficients <- coef(scaled_model)[-1]  # Exclude intercept
std_coefficients <- sort(abs(std_coefficients), decreasing = TRUE)

# Plot variable importance
var_importance <- data.frame(
  Variable = names(std_coefficients),
  Importance = as.numeric(std_coefficients)
)

ggplot(var_importance[1:10,], aes(x = reorder(Variable, Importance), y = Importance)) +
  geom_bar(stat = "identity", fill = "steelblue") +
  coord_flip() +
  labs(title = "Top 10 Variable Importance",
       x = "", y = "Standardized Coefficient (Absolute Value)") +
  theme_minimal()`,
  },

  // Survival Analysis
  survivalAnalysis: {
    r: `# Survival Analysis of Cancer Treatment Outcomes
# Load required libraries
library(survival)
library(survminer)
library(tidyverse)
library(ggplot2)

# Load patient data
patient_data <- read.csv("patient_data.csv")

# Explore the data
summary(patient_data)
str(patient_data)

# Check for missing values
colSums(is.na(patient_data))

# Handle missing values if necessary
patient_data <- na.omit(patient_data)

# Create survival object
surv_object <- Surv(time = patient_data$time, event = patient_data$status)

# Fit Kaplan-Meier survival curves by treatment
km_fit <- survfit(surv_object ~ treatment, data = patient_data)
summary(km_fit)

# Plot Kaplan-Meier curves
ggsurvplot(km_fit,
           data = patient_data,
           pval = TRUE,
           conf.int = TRUE,
           risk.table = TRUE,
           risk.table.col = "strata",
           linetype = "strata",
           surv.median.line = "hv",
           ggtheme = theme_minimal(),
           palette = c("#E7B800", "#2E9FDF", "#FC4E07"),
           title = "Kaplan-Meier Survival Curves by Treatment")

# Log-rank test to compare survival curves
log_rank_test <- survdiff(surv_object ~ treatment, data = patient_data)
print(log_rank_test)

# Cox proportional hazards model
cox_model <- coxph(surv_object ~ treatment + age + stage + comorbidities, 
                  data = patient_data)
summary(cox_model)

# Check proportional hazards assumption
ph_test <- cox.zph(cox_model)
print(ph_test)
plot(ph_test)

# If PH assumption is violated, consider stratified Cox model
if (any(ph_test$table[, "p"] < 0.05)) {
  # Identify variables that violate the PH assumption
  violating_vars <- rownames(ph_test$table)[ph_test$table[, "p"] < 0.05]
  
  # Create formula for stratified model
  strata_formula <- as.formula(paste("surv_object ~", 
                                    paste(setdiff(c("treatment", "age", "stage", "comorbidities"), 
                                                 violating_vars), 
                                          collapse = " + "),
                                    "+ strata(", paste(violating_vars, collapse = ", "), ")"))
  
  # Fit stratified model
  stratified_model <- coxph(strata_formula, data = patient_data)
  summary(stratified_model)
  
  # Use stratified model for further analysis
  final_model <- stratified_model
} else {
  # Use original model
  final_model <- cox_model
}

# Calculate hazard ratios with confidence intervals
hazard_ratios <- exp(coef(final_model))
conf_int <- exp(confint(final_model))
hr_table <- data.frame(
  HR = hazard_ratios,
  Lower_CI = conf_int[, 1],
  Upper_CI = conf_int[, 2]
)
print(hr_table)

# Forest plot of hazard ratios
ggforest(final_model, data = patient_data)

# Predict survival probabilities for specific patients
# Create new data for prediction
new_patients <- data.frame(
  treatment = c("A", "B", "C"),
  age = c(55, 55, 55),
  stage = c("II", "II", "II"),
  comorbidities = c(1, 1, 1)
)

# Predict survival curves
predicted_surv <- survfit(final_model, newdata = new_patients)

# Plot predicted survival curves
ggsurvplot(predicted_surv,
           data = new_patients,
           conf.int = TRUE,
           palette = c("#E7B800", "#2E9FDF", "#FC4E07"),
           ggtheme = theme_minimal(),
           title = "Predicted Survival Curves for Different Treatments")

# Calculate restricted mean survival time (RMST)
rmst_result <- rmst2(time = patient_data$time, 
                    status = patient_data$status, 
                    arm = patient_data$treatment,
                    tau = 60)  # 60-month (5-year) restriction
print(rmst_result)

# Visualize RMST
ggsurvplot_rmst(rmst_result$unadjusted,
               risk.table = TRUE,
               ggtheme = theme_minimal(),
               title = "Restricted Mean Survival Time by Treatment (5-year)")

# Competing risks analysis (if applicable)
# For example, if death can be due to cancer or other causes
if ("cause_of_death" %in% colnames(patient_data)) {
  # Create competing risks object
  cr_data <- patient_data %>%
    mutate(event_type = case_when(
      status == 0 ~ 0,  # Censored
      cause_of_death == "cancer" ~ 1,  # Death due to cancer
      cause_of_death == "other" ~ 2   # Death due to other causes
    ))
  
  # Fit competing risks model
  cr_fit <- cuminc(ftime = cr_data$time, 
                  fstatus = cr_data$event_type, 
                  group = cr_data$treatment)
  
  # Plot cumulative incidence functions
  ggcompetingrisks(cr_fit,
                  ggtheme = theme_minimal(),
                  title = "Cumulative Incidence of Death by Cause")
}`,
  },

  // A/B Testing
  abTesting: {
    r: `# A/B Testing for E-commerce Conversion Optimization
# Load required libraries
library(tidyverse)
library(bayesAB)
library(pwr)
library(ggplot2)

# Load A/B test data
ab_data <- read.csv("ab_test_data.csv")

# Explore the data
summary(ab_data)
str(ab_data)

# Check for missing values
colSums(is.na(ab_data))

# Basic statistics by design variant
ab_summary <- ab_data %>%
  group_by(design) %>%
  summarize(
    users = n(),
    conversions = sum(converted),
    conversion_rate = mean(converted) * 100,
    revenue = sum(revenue),
    avg_revenue_per_user = mean(revenue)
  )

print(ab_summary)

# Visualize conversion rates
ggplot(ab_summary, aes(x = design, y = conversion_rate, fill = design)) +
  geom_bar(stat = "identity") +
  geom_text(aes(label = sprintf("%.2f%%", conversion_rate)), 
            vjust = -0.5) +
  labs(title = "Conversion Rate by Design Variant",
       x = "Design Variant", y = "Conversion Rate (%)") +
  theme_minimal() +
  theme(legend.position = "none")

# Power analysis
# Calculate required sample size for detecting a meaningful difference
baseline_conv_rate <- ab_summary$conversion_rate[ab_summary$design == "A"] / 100
min_detectable_effect <- 0.10  # 10% relative improvement
target_power <- 0.8
alpha <- 0.05

power_result <- pwr.2p.test(
  h = ES.h(baseline_conv_rate, baseline_conv_rate * (1 + min_detectable_effect)),
  n = NULL,
  sig.level = alpha,
  power = target_power
)

required_sample_size <- ceiling(power_result$n)
cat("Required sample size per variant:", required_sample_size, "\n")

# Check if we have enough data
if (min(ab_summary$users) < required_sample_size) {
  warning("Sample size may be insufficient for reliable results")
}

# Frequentist hypothesis testing
# Prepare data for chi-square test
contingency_table <- matrix(
  c(
    sum(ab_data$converted[ab_data$design == "A"]),
    sum(ab_data$design == "A") - sum(ab_data$converted[ab_data$design == "A"]),
    sum(ab_data$converted[ab_data$design == "B"]),
    sum(ab_data$design == "B") - sum(ab_data$converted[ab_data$design == "B"]),
    sum(ab_data$converted[ab_data$design == "C"]),
    sum(ab_data$design == "C") - sum(ab_data$converted[ab_data$design == "C"])
  ),
  nrow = 2,
  dimnames = list(
    c("Converted", "Not Converted"),
    c("Design A", "Design B", "Design C")
  )
)

# Chi-square test
chi_sq_test <- chisq.test(contingency_table)
print(chi_sq_test)

# Pairwise proportion tests with Bonferroni correction
pairwise_tests <- pairwise.prop.test(
  x = c(
    sum(ab_data$converted[ab_data$design == "A"]),
    sum(ab_data$converted[ab_data$design == "B"]),
    sum(ab_data$converted[ab_data$design == "C"])
  ),
  n = c(
    sum(ab_data$design == "A"),
    sum(ab_data$design == "B"),
    sum(ab_data$design == "C")
  ),
  p.adjust.method = "bonferroni"
)

print(pairwise_tests)

# Calculate confidence intervals
ci_data <- data.frame()

for (design_var in c("A", "B", "C")) {
  design_data <- ab_data %>% filter(design == design_var)
  n <- nrow(design_data)
  conv_rate <- mean(design_data$converted)
  se <- sqrt(conv_rate * (1 - conv_rate) / n)
  ci_lower <- conv_rate - 1.96 * se
  ci_upper <- conv_rate + 1.96 * se
  
  ci_data <- rbind(ci_data, data.frame(
    design = design_var,
    conversion_rate = conv_rate * 100,
    ci_lower = ci_lower * 100,
    ci_upper = ci_upper * 100
  ))
}

# Plot conversion rates with confidence intervals
ggplot(ci_data, aes(x = design, y = conversion_rate, fill = design)) +
  geom_bar(stat = "identity") +
  geom_errorbar(aes(ymin = ci_lower, ymax = ci_upper), width = 0.2) +
  geom_text(aes(label = sprintf("%.2f%%", conversion_rate)), 
            vjust = -0.5) +
  labs(title = "Conversion Rate by Design Variant with 95% CI",
       x = "Design Variant", y = "Conversion Rate (%)") +
  theme_minimal() +
  theme(legend.position = "none")

# Bayesian A/B testing
# Prepare data for Bayesian analysis
A_data <- ab_data %>% filter(design == "A")
B_data <- ab_data %>% filter(design == "B")
C_data <- ab_data %>% filter(design == "C")

# Bayesian A/B test for conversion rates
AB_test <- bayesTest(
  A_data$converted, 
  B_data$converted, 
  priors = c('alpha' = 1, 'beta' = 1),
  distribution = 'bernoulli'
)

AC_test <- bayesTest(
  A_data$converted, 
  C_data$converted, 
  priors = c('alpha' = 1, 'beta' = 1),
  distribution = 'bernoulli'
)

BC_test <- bayesTest(
  B_data$converted, 
  C_data$converted, 
  priors = c('alpha' = 1, 'beta' = 1),
  distribution = 'bernoulli'
)

# Plot Bayesian results
plot(AB_test)
plot(AC_test)
plot(BC_test)

# Summary of Bayesian tests
summary(AB_test)
summary(AC_test)
summary(BC_test)

# Calculate probability of being best
# Using Monte Carlo simulation
set.seed(123)
n_simulations <- 100000

# Draw samples from posterior distributions
A_samples <- rbeta(n_simulations, 
                  1 + sum(A_data$converted), 
                  1 + nrow(A_data) - sum(A_data$converted))

B_samples <- rbeta(n_simulations, 
                  1 + sum(B_data$converted), 
                  1 + nrow(B_data) - sum(B_data$converted))

C_samples <- rbeta(n_simulations, 
                  1 + sum(C_data$converted), 
                  1 + nrow(C_data) - sum(C_data$converted))

# Calculate probabilities
prob_A_best <- mean(A_samples > B_samples & A_samples > C_samples)
prob_B_best <- mean(B_samples > A_samples & B_samples > C_samples)
prob_C_best <- mean(C_samples > A_samples & C_samples > B_samples)

prob_results <- data.frame(
  Design = c("A", "B", "C"),
  Probability_Best = c(prob_A_best, prob_B_best, prob_C_best) * 100
)

print(prob_results)

# Visualize probability of being best
ggplot(prob_results, aes(x = Design, y = Probability_Best, fill = Design)) +
  geom_bar(stat = "identity") +
  geom_text(aes(label = sprintf("%.1f%%", Probability_Best)), 
            vjust = -0.5) +
  labs(title = "Probability of Each Design Being the Best",
       x = "Design Variant", y = "Probability (%)") +
  theme_minimal() +
  theme(legend.position = "none")

# Expected loss calculation
# Expected loss from choosing design A
loss_A <- mean(pmax(0, B_samples - A_samples, C_samples - A_samples))

# Expected loss from choosing design B
loss_B <- mean(pmax(0, A_samples - B_samples, C_samples - B_samples))

# Expected loss from choosing design C
loss_C <- mean(pmax(0, A_samples - C_samples, B_samples - C_samples))

loss_results <- data.frame(
  Design = c("A", "B", "C"),
  Expected_Loss = c(loss_A, loss_B, loss_C) * 100
)

print(loss_results)

# Final recommendation based on all analyses
best_design <- prob_results$Design[which.max(prob_results$Probability_Best)]
cat("Recommended design:", best_design, "\n")

# Calculate expected lift from implementing the best design
baseline_conv <- mean(A_data$converted)
best_conv <- switch(best_design,
                   "A" = mean(A_data$converted),
                   "B" = mean(B_data$converted),
                   "C" = mean(C_data$converted))

expected_lift <- (best_conv - baseline_conv) / baseline_conv * 100
cat("Expected lift in conversion rate:", round(expected_lift, 2), "%\n")`,
  },

  // Principal Component Analysis
  pcaAnalysis: {
    r: `# Principal Component Analysis of Economic Indicators
# Load required libraries
library(tidyverse)
library(FactoMineR)
library(factoextra)
library(corrplot)
library(psych)
library(ggplot2)

# Load economic indicator data
economic_data <- read.csv("economic_indicators.csv")

# Explore the data
summary(economic_data)
str(economic_data)

# Check for missing values
colSums(is.na(economic_data))

# Handle missing values
# For PCA, we can either remove countries with missing data or impute values
# Here we'll use median imputation for simplicity
economic_data <- economic_data %>%
  mutate(across(where(is.numeric), ~ifelse(is.na(.), median(., na.rm = TRUE), .)))

# Extract country names and numeric indicators
countries <- economic_data$country
indicators <- economic_data %>% select(-country)

# Check correlation matrix
correlation_matrix <- cor(indicators)
corrplot(correlation_matrix, method = "circle", type = "upper", 
         tl.col = "black", tl.srt = 45, tl.cex = 0.7)

# KMO test to check sampling adequacy
kmo_result <- KMO(correlation_matrix)
print(kmo_result$MSA)

# Bartlett's test of sphericity
bartlett_test <- cortest.bartlett(correlation_matrix, n = nrow(indicators))
print(bartlett_test)

# Scale the data
scaled_data <- scale(indicators)

# Perform PCA
pca_result <- prcomp(scaled_data, center = TRUE, scale. = TRUE)
summary(pca_result)

# Scree plot to determine number of components to retain
fviz_eig(pca_result, addlabels = TRUE, ylim = c(0, 50),
         main = "Scree Plot: Variance Explained by Principal Components")

# Determine number of components to retain
# Methods: Kaiser criterion (eigenvalue > 1), scree plot elbow, or cumulative variance
eigenvalues <- pca_result$sdev^2
kaiser_components <- sum(eigenvalues > 1)
cat("Number of components with eigenvalue > 1:", kaiser_components, "\n")

# Cumulative variance explained
var_explained <- cumsum(eigenvalues / sum(eigenvalues) * 100)
var_threshold <- min(which(var_explained >= 75))
cat("Components needed to explain 75% variance:", var_threshold, "\n")

# Choose number of components to retain
n_components <- 4  # Based on analysis above

# Extract loadings
loadings <- pca_result$rotation[, 1:n_components]
loadings_df <- as.data.frame(loadings)
colnames(loadings_df) <- paste0("PC", 1:n_components)
loadings_df$Variable <- rownames(loadings_df)

# Visualize variable contributions to principal components
fviz_contrib(pca_result, choice = "var", axes = 1, top = 15)
fviz_contrib(pca_result, choice = "var", axes = 2, top = 15)
fviz_contrib(pca_result, choice = "var", axes = 3, top = 15)
fviz_contrib(pca_result, choice = "var", axes = 4, top = 15)

# Biplot of first two principal components
fviz_pca_biplot(pca_result,
               label = "var",
               col.var = "contrib",
               col.ind = "cos2",
               gradient.cols = c("#00AFBB", "#E7B800", "#FC4E07"),
               repel = TRUE,
               max.overlaps = 10)

# Interpret principal components
# Find top contributing variables for each PC
top_contributors <- function(loadings, pc, n = 5) {
  sorted_loadings <- sort(abs(loadings[, pc]), decreasing = TRUE)
  top_vars <- names(sorted_loadings)[1:n]
  top_values <- loadings[top_vars, pc]
  return(data.frame(Variable = top_vars, Loading = top_values))
}

pc1_top <- top_contributors(loadings, 1)
pc2_top <- top_contributors(loadings, 2)
pc3_top <- top_contributors(loadings, 3)
pc4_top <- top_contributors(loadings, 4)

print("PC1 top contributors (Economic Output):")
print(pc1_top)
print("PC2 top contributors (Social Welfare):")
print(pc2_top)
print("PC3 top contributors (Financial Stability):")
print(pc3_top)
print("PC4 top contributors (Trade Balance):")
print(pc4_top)

# Name the principal components based on loadings
pc_names <- c("Economic Output", "Social Welfare", "Financial Stability", "Trade Balance")

# Calculate PC scores for each country
pc_scores <- as.data.frame(pca_result$x[, 1:n_components])
pc_scores$country <- countries

# Create composite index
# Weighted sum of PC scores, weighted by variance explained
weights <- eigenvalues[1:n_components] / sum(eigenvalues[1:n_components])
pc_scores$composite_index <- as.matrix(pc_scores[, 1:n_components]) %*% weights

# Normalize composite index to 0-100 scale
min_index <- min(pc_scores$composite_index)
max_index <- max(pc_scores$composite_index)
pc_scores$normalized_index <- (pc_scores$composite_index - min_index) / (max_index - min_index) * 100

# Top and bottom countries by composite index
top_countries <- pc_scores %>%
  arrange(desc(normalized_index)) %>%
  select(country, normalized_index) %>%
  head(10)

bottom_countries <- pc_scores %>%
  arrange(normalized_index) %>%
  select(country, normalized_index) %>%
  head(10)

print("Top 10 countries by composite economic health index:")
print(top_countries)
print("Bottom 10 countries by composite economic health index:")
print(bottom_countries)

# Visualize countries by composite index
ggplot(pc_scores %>% arrange(desc(normalized_index)) %>% head(30), 
       aes(x = reorder(country, normalized_index), y = normalized_index)) +
  geom_bar(stat = "identity", fill = "steelblue") +
  coord_flip() +
  labs(title = "Top 30 Countries by Composite Economic Health Index",
       x = "", y = "Index Score (0-100)") +
  theme_minimal()

# Compare with traditional GDP-based measures
if ("gdp_per_capita" %in% colnames(economic_data)) {
  # Correlation between composite index and GDP per capita
  correlation <- cor(pc_scores$normalized_index, economic_data$gdp_per_capita)
  cat("Correlation between composite index and GDP per capita:", correlation, "\n")
  
  # Scatter plot
  ggplot(data.frame(
    country = countries,
    composite_index = pc_scores$normalized_index,
    gdp_per_capita = economic_data$gdp_per_capita
  ), aes(x = gdp_per_capita, y = composite_index, label = country)) +
    geom_point(alpha = 0.6) +
    geom_text_repel(data = . %>% filter(rank(-composite_index) <= 10 | 
                                       rank(-gdp_per_capita) <= 10),
                   size = 3, max.overlaps = 15) +
    geom_smooth(method = "lm", se = FALSE, color = "red", linetype = "dashed") +
    labs(title = "Composite Economic Health Index vs. GDP per Capita",
         x = "GDP per Capita", y = "Composite Index Score") +
    theme_minimal()
}`,
  },
}
