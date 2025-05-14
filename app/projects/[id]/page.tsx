"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GitBranch, FileText, Code, BarChart, ArrowLeft, FileTextIcon as FileText2 } from "lucide-react"
import { Chart } from "chart.js/auto"
import CodeDisplay from "@/components/code-display"
import { codeExamples } from "@/data/code-examples"

interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  image: string
  tools: string[]
  link: string
  chartType: "bar" | "line" | "pie" | "scatter"
  chartData: {
    labels: string[]
    datasets: {
      label: string
      data: number[] | { x: number; y: number; r: number }[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
      fill?: boolean
      tension?: number
      borderDash?: number[]
    }[]
  }
  variables?: string[]
  report?: string
  codeKey?: keyof typeof codeExamples
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "COVID-19 Time Series Analysis",
    description:
      "Applied ARIMA and Prophet models to analyze COVID-19 case trends across different regions, identifying seasonal patterns and predicting future outbreaks with 87% accuracy.",
    category: "Time Series Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Prophet", "ARIMA", "ggplot2"],
    link: "#",
    chartType: "line",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Actual Cases",
          data: [1200, 1900, 3000, 5000, 4100, 3600, 2800, 4200],
          fill: false,
          borderColor: "rgb(59, 130, 246)",
          tension: 0.1,
        },
        {
          label: "Predicted Cases",
          data: [1300, 2100, 3200, 4800, 4000, 3400, 3000, 4500],
          fill: false,
          borderColor: "rgb(239, 68, 68)",
          tension: 0.1,
          borderDash: [5, 5],
        },
      ],
    },
    variables: ["Actual Cases", "Predicted Cases", "Moving Average", "Seasonal Trend"],
    report: `# COVID-19 Time Series Analysis

## Executive Summary
This project analyzed COVID-19 case trends across different regions using ARIMA and Prophet models. The analysis identified seasonal patterns and successfully predicted future outbreaks with 87% accuracy.

## Methodology
The analysis followed these key steps:
1. Data collection from multiple health agencies and preprocessing to handle missing values
2. Exploratory time series analysis to identify trends, seasonality, and anomalies
3. ARIMA model fitting with parameter optimization using AIC/BIC criteria
4. Prophet model implementation with changepoint detection
5. Model validation using cross-validation and MAPE/RMSE metrics

## Key Findings
- Strong weekly seasonality with peaks typically occurring midweek
- Regional variations in transmission patterns correlated with population density
- Weather variables showed moderate correlation with case numbers
- Prophet model outperformed ARIMA for long-term forecasting
- Ensemble approach combining both models yielded best results

## Implications
The findings from this analysis can help public health officials better prepare for future outbreaks by:
- Allocating resources more efficiently based on predicted case loads
- Implementing targeted interventions during predicted surge periods
- Developing region-specific response strategies

## Future Work
Future iterations of this project could incorporate:
- Additional variables such as vaccination rates and mobility data
- More sophisticated ensemble methods
- Real-time updating capabilities for continuous forecasting`,
    codeKey: "timeSeriesAnalysis",
  },
  {
    id: 2,
    title: "Customer Segmentation for E-commerce",
    description:
      "Implemented K-means and hierarchical clustering to segment 50,000+ customers based on purchasing behavior, RFM analysis, and demographic data, resulting in 5 distinct customer personas that increased marketing ROI by 23%.",
    category: "Cluster Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Python", "scikit-learn", "K-means", "Hierarchical Clustering"],
    link: "#",
    chartType: "scatter",
    chartData: {
      labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
      datasets: [
        {
          label: "Customer Segments",
          data: [
            { x: 2.3, y: 4.5, r: 15 },
            { x: 3.7, y: 1.2, r: 10 },
            { x: 5.2, y: 3.8, r: 8 },
            { x: 1.5, y: 2.1, r: 12 },
            { x: 4.1, y: 5.0, r: 7 },
          ],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(16, 185, 129, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(139, 92, 246, 0.7)",
          ],
        },
      ],
    },
    variables: ["Recency", "Frequency", "Monetary Value", "Age", "Purchase Category", "Time on Site"],
    report: `# Customer Segmentation for E-commerce

## Executive Summary
This project implemented K-means and hierarchical clustering to segment over 50,000 customers based on purchasing behavior, RFM analysis, and demographic data. The analysis identified 5 distinct customer personas that, when targeted with personalized marketing strategies, increased marketing ROI by 23%.

## Methodology
The analysis followed these key steps:
1. Feature engineering using RFM (Recency, Frequency, Monetary) analysis
2. Data standardization and dimensionality reduction with PCA
3. Optimal cluster determination using elbow method and silhouette scores
4. K-means and hierarchical clustering implementation
5. Cluster profiling and persona development for marketing strategies

## Key Findings
Five distinct customer segments were identified:

1. **High-Value Loyalists (18% of customers)**
   - High spending, frequent purchases, recent activity
   - Typically older, higher income demographic
   - Respond well to loyalty rewards and premium offerings

2. **Potential High-Value (24% of customers)**
   - Moderate spending but increasing frequency
   - Typically younger professionals
   - Respond well to upselling and cross-selling

3. **Regular Mainstream (32% of customers)**
   - Average spending and frequency
   - Broad demographic profile
   - Price-sensitive but consistent

4. **At-Risk Customers (15% of customers)**
   - Decreasing frequency, formerly regular customers
   - Various demographics
   - Respond well to re-engagement campaigns

5. **One-Time Shoppers (11% of customers)**
   - Single purchase, low value
   - Typically younger, lower income
   - Difficult to convert but respond to significant discounts

## Implementation Results
Personalized marketing strategies based on these segments resulted in:
- 23% increase in overall marketing ROI
- 34% improvement in email campaign engagement
- 18% reduction in customer acquisition costs
- 27% increase in repeat purchase rate for At-Risk segment

## Future Work
Future iterations of this project could incorporate:
- Real-time segmentation updates based on behavioral changes
- Integration with recommendation systems
- Predictive modeling for segment transitions`,
    codeKey: "customerSegmentation",
  },
  {
    id: 3,
    title: "Multivariate Regression Analysis of Housing Prices",
    description:
      "Developed a multivariate regression model to predict housing prices using 15 variables including location, square footage, and neighborhood demographics. Achieved R² of 0.83 and RMSE of $23,450, outperforming the county assessor's model by 12%.",
    category: "Regression Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Multiple Regression", "Residual Analysis", "Cross-validation"],
    link: "#",
    chartType: "bar",
    chartData: {
      labels: ["Location", "Square Footage", "Age", "Bedrooms", "Bathrooms", "School Rating"],
      datasets: [
        {
          label: "Variable Importance (Standardized Coefficients)",
          data: [0.65, 0.58, -0.32, 0.21, 0.28, 0.41],
          backgroundColor: "rgba(59, 130, 246, 0.7)",
          borderColor: "rgb(59, 130, 246)",
          borderWidth: 1,
        },
      ],
    },
    variables: [
      "Location",
      "Square Footage",
      "Age",
      "Bedrooms",
      "Bathrooms",
      "School Rating",
      "Crime Rate",
      "Distance to CBD",
      "Lot Size",
      "Garage Size",
    ],
    report: `# Multivariate Regression Analysis of Housing Prices

## Executive Summary
This project developed a multivariate regression model to predict housing prices using 15 variables including location, square footage, and neighborhood demographics. The model achieved an R² of 0.83 and RMSE of $23,450, outperforming the county assessor's model by 12%.

## Methodology
The analysis followed these key steps:
1. Data collection from multiple real estate sources and feature engineering
2. Multicollinearity analysis using VIF (Variance Inflation Factor)
3. Stepwise regression for variable selection
4. Residual analysis and heteroscedasticity testing
5. Cross-validation and performance comparison with existing models

## Key Findings
The most influential variables in predicting housing prices were:

1. **Location (Neighborhood)** - Standardized coefficient: 0.65
   - Premium neighborhoods added up to 45% to base home value
   - Waterfront properties commanded an additional 28% premium

2. **Square Footage** - Standardized coefficient: 0.58
   - Each additional 100 sq ft added approximately $15,200 to home value
   - Diminishing returns observed above 3,500 sq ft

3. **School Rating** - Standardized coefficient: 0.41
   - Each point increase in school rating (1-10 scale) added approximately 4.2% to home value
   - High schools had more impact than elementary schools

4. **Property Age** - Standardized coefficient: -0.32
   - Each decade of age reduced value by approximately 3.8%
   - Exception: historic homes (>80 years) commanded a premium

5. **Bathrooms** - Standardized coefficient: 0.28
   - Each additional bathroom added approximately $18,500 to home value
   - Half-bathrooms added approximately $9,200

6. **Bedrooms** - Standardized coefficient: 0.21
   - Optimal bedroom count was 4; homes with 5+ bedrooms showed diminishing returns
   - Bedroom/bathroom ratio was significant; optimal ratio was 2:1

## Model Performance
- R² = 0.83 (county assessor model: 0.74)
- RMSE = $23,450 (county assessor model: $26,780)
- MAE = $18,320 (county assessor model: $21,450)
- 10-fold cross-validation error: 8.7%

## Applications
The model has been implemented as:
- A pricing tool for real estate agents
- A valuation system for property tax assessment
- A decision support tool for property developers

## Future Work
Future iterations of this project could incorporate:
- Geospatial analysis using GIS data
- Time-series components to capture market trends
- Machine learning approaches like gradient boosting or random forests`,
    codeKey: "regressionAnalysis",
  },
  {
    id: 4,
    title: "Survival Analysis of Cancer Treatment Outcomes",
    description:
      "Conducted Kaplan-Meier survival analysis and Cox proportional hazards modeling on a dataset of 1,200 cancer patients to evaluate the efficacy of three treatment protocols, controlling for age, stage, and comorbidities.",
    category: "Survival Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "Survival", "Kaplan-Meier", "Cox Proportional Hazards"],
    link: "#",
    chartType: "line",
    chartData: {
      labels: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
      datasets: [
        {
          label: "Treatment A",
          data: [1.0, 0.92, 0.85, 0.78, 0.72, 0.68, 0.65, 0.62, 0.6, 0.58, 0.57],
          borderColor: "rgba(16, 185, 129, 0.7)",
          fill: false,
        },
        {
          label: "Treatment B",
          data: [1.0, 0.88, 0.79, 0.71, 0.64, 0.58, 0.53, 0.49, 0.46, 0.44, 0.42],
          borderColor: "rgba(245, 158, 11, 0.7)",
          fill: false,
        },
        {
          label: "Treatment C",
          data: [1.0, 0.85, 0.73, 0.62, 0.54, 0.47, 0.42, 0.38, 0.35, 0.33, 0.31],
          borderColor: "rgba(239, 68, 68, 0.7)",
          fill: false,
        },
      ],
    },
    variables: ["Treatment A", "Treatment B", "Treatment C", "Age Group", "Cancer Stage", "Comorbidity Level"],
    report: `# Survival Analysis of Cancer Treatment Outcomes

## Executive Summary
This project conducted Kaplan-Meier survival analysis and Cox proportional hazards modeling on a dataset of 1,200 cancer patients to evaluate the efficacy of three treatment protocols, controlling for age, stage, and comorbidities.

## Methodology
The analysis followed these key steps:
1. Patient data collection with appropriate censoring for incomplete follow-ups
2. Kaplan-Meier survival curve estimation for different treatment groups
3. Log-rank test for comparing survival distributions
4. Cox proportional hazards modeling with covariate adjustment
5. Hazard ratio calculation and interpretation for clinical significance

## Key Findings

### Overall Survival Rates
- 5-year survival rate for Treatment A: 57%
- 5-year survival rate for Treatment B: 42%
- 5-year survival rate for Treatment C: 31%

### Treatment Effectiveness by Subgroup
1. **Age Groups**
   - Treatment A showed superior outcomes across all age groups
   - Treatment B showed comparable results to Treatment A in patients <50 years
   - Treatment C showed significantly worse outcomes in patients >65 years

2. **Cancer Stage**
   - For early-stage cancer (Stage I-II), all treatments showed comparable results
   - For advanced cancer (Stage III-IV), Treatment A was significantly superior
   - Hazard ratio for Treatment A vs. C in Stage IV: 0.62 (95% CI: 0.48-0.79)

3. **Comorbidity Impact**
   - Patients with multiple comorbidities showed reduced benefit from all treatments
   - Treatment A maintained efficacy better than others in high-comorbidity patients
   - Each additional comorbidity increased mortality hazard by approximately 14%

### Cox Proportional Hazards Results
- Treatment (ref: Treatment A)
  - Treatment B: HR = 1.42 (95% CI: 1.18-1.71)
  - Treatment C: HR = 1.89 (95% CI: 1.56-2.28)
- Age (per 10 years): HR = 1.31 (95% CI: 1.22-1.41)
- Stage (ref: Stage I)
  - Stage II: HR = 1.58 (95% CI: 1.21-2.06)
  - Stage III: HR = 2.45 (95% CI: 1.89-3.17)
  - Stage IV: HR = 4.12 (95% CI: 3.18-5.33)
- Comorbidity score (per point): HR = 1.14 (95% CI: 1.08-1.21)

## Clinical Implications
- Treatment A should be considered first-line therapy, especially for advanced disease
- For younger patients with early-stage disease, Treatment B offers comparable outcomes with potentially fewer side effects
- Patients with multiple comorbidities require special consideration and may benefit from modified protocols

## Future Work
Future iterations of this project could incorporate:
- Quality of life metrics alongside survival outcomes
- Genetic and biomarker data for personalized treatment selection
- Competing risks analysis for cause-specific mortality
- Cost-effectiveness analysis of treatment options`,
    codeKey: "survivalAnalysis",
  },
  {
    id: 5,
    title: "A/B Testing for E-commerce Conversion Optimization",
    description:
      "Designed and analyzed A/B tests for an e-commerce platform comparing 3 checkout page designs across 200,000 user sessions. Implemented power analysis, hypothesis testing, and confidence intervals to identify the optimal design that increased conversion rates by 18%.",
    category: "Hypothesis Testing",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Python", "Bayesian A/B Testing", "Hypothesis Testing", "Pandas"],
    link: "#",
    chartType: "bar",
    chartData: {
      labels: ["Design A", "Design B", "Design C"],
      datasets: [
        {
          label: "Conversion Rate (%)",
          data: [3.2, 3.8, 4.5],
          backgroundColor: ["rgba(59, 130, 246, 0.7)", "rgba(16, 185, 129, 0.7)", "rgba(239, 68, 68, 0.7)"],
          borderColor: ["rgb(59, 130, 246)", "rgb(16, 185, 129)", "rgb(239, 68, 68)"],
          borderWidth: 1,
        },
        {
          label: "95% Confidence Interval",
          data: [0.4, 0.3, 0.35],
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      ],
    },
    variables: [
      "Design A",
      "Design B",
      "Design C",
      "Mobile Users",
      "Desktop Users",
      "New Visitors",
      "Returning Visitors",
    ],
    report: `# A/B Testing for E-commerce Conversion Optimization

## Executive Summary
This project designed and analyzed A/B tests for an e-commerce platform comparing 3 checkout page designs across 200,000 user sessions. By implementing power analysis, hypothesis testing, and confidence intervals, we identified the optimal design that increased conversion rates by 18%.

## Methodology
The analysis followed these key steps:
1. Experimental design with power analysis to determine sample size
2. Random assignment of users to test groups with cookie-based tracking
3. Bayesian A/B testing framework implementation
4. Sequential analysis with early stopping rules
5. Confidence interval estimation and statistical significance testing

## Key Findings

### Overall Conversion Rates
- Design A (Control): 3.2% (95% CI: 3.0-3.4%)
- Design B: 3.8% (95% CI: 3.6-4.0%)
- Design C: 4.5% (95% CI: 4.3-4.7%)

### Statistical Significance
- Design B vs. A: p < 0.001, 18.8% relative improvement
- Design C vs. A: p < 0.001, 40.6% relative improvement
- Design C vs. B: p < 0.001, 18.4% relative improvement

### Segment Analysis

1. **Device Type**
   - Mobile users showed the largest improvement with Design C (52% increase over control)
   - Desktop users showed moderate improvement with Design C (28% increase over control)
   - Tablet users showed similar results to desktop

2. **User Type**
   - New visitors: Design C outperformed others (45% increase over control)
   - Returning visitors: Design B and C performed similarly (22% and 26% increases)

3. **Traffic Source**
   - Organic search: Design C optimal (38% increase)
   - Paid search: Design C optimal (42% increase)
   - Social media: Design B optimal (31% increase)
   - Direct: Designs B and C performed similarly

### Bayesian Analysis
- Probability of Design C being best: 94.2%
- Probability of Design B being best: 5.7%
- Probability of Design A being best: 0.1%
- Expected loss from choosing Design C: 0.03%

## Implementation Results
After implementing Design C site-wide:
- Overall conversion rate increased from 3.2% to 4.5% (40.6% relative increase)
- Mobile conversion rate increased from 2.1% to 3.2% (52.4% relative increase)
- Revenue per visitor increased by 37.8%
- Estimated annual revenue impact: $2.4 million

## Key Design Elements
The most effective elements of Design C included:
- Single-page checkout (vs. multi-step in A and B)
- Progress indicator showing all steps
- Prominent security badges and guarantees
- Simplified form with fewer required fields
- Guest checkout option prominently displayed
- Mobile-optimized button placement

## Future Work
Future iterations of this project could incorporate:
- Multivariate testing to isolate individual element effects
- Personalized checkout experiences based on user segments
- Cart abandonment recovery optimization
- International checkout optimization for global markets`,
    codeKey: "abTesting",
  },
  {
    id: 6,
    title: "Principal Component Analysis of Economic Indicators",
    description:
      "Applied PCA to reduce dimensionality of 25 economic indicators across 180 countries, identifying 4 principal components that explain 78% of variance. Created a composite economic health index that outperformed traditional GDP-based measures.",
    category: "Multivariate Analysis",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["R", "PCA", "Factor Analysis", "ggplot2"],
    link: "#",
    chartType: "pie",
    chartData: {
      labels: [
        "PC1: Economic Output",
        "PC2: Social Welfare",
        "PC3: Financial Stability",
        "PC4: Trade Balance",
        "Other Components",
      ],
      datasets: [
        {
          label: "Variance Explained (%)",
          data: [42, 18, 11, 7, 22],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(16, 185, 129, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(139, 92, 246, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
    variables: ["Economic Output", "Social Welfare", "Financial Stability", "Trade Balance", "Other Components"],
    report: `# Principal Component Analysis of Economic Indicators

## Executive Summary
This project applied Principal Component Analysis (PCA) to reduce the dimensionality of 25 economic indicators across 180 countries, identifying 4 principal components that explain 78% of variance. The analysis created a composite economic health index that outperformed traditional GDP-based measures in predicting economic resilience and growth potential.

## Methodology
The analysis followed these key steps:
1. Data collection of economic indicators from World Bank and IMF
2. Data normalization and handling of missing values
3. Correlation analysis and Kaiser-Meyer-Olkin (KMO) test
4. Principal Component Analysis with varimax rotation
5. Component interpretation and composite index creation

## Key Findings

### Principal Components
Four principal components explained 78% of the total variance:

1. **PC1: Economic Output (42% of variance)**
   - Key indicators: GDP per capita, industrial production, energy consumption
   - Represents the overall economic production capacity
   - Highly correlated with traditional development measures

2. **PC2: Social Welfare (18% of variance)**
   - Key indicators: healthcare spending, education levels, income equality
   - Represents social development and quality of life
   - Less correlated with traditional economic measures

3. **PC3: Financial Stability (11% of variance)**
   - Key indicators: inflation rate, government debt, banking system health
   - Represents economic sustainability and risk factors
   - Important predictor of economic crisis resilience

4. **PC4: Trade Balance (7% of variance)**
   - Key indicators: export/import ratio, current account balance
   - Represents international trade position
   - Important for currency stability prediction

### Composite Economic Health Index
The composite index created from these components showed:
- Stronger correlation with 5-year growth sustainability (r=0.72) than GDP alone (r=0.48)
- Better prediction of economic crisis resilience
- More nuanced differentiation between similarly wealthy countries

### Country Rankings
Top 10 countries by composite index:
1. Norway
2. Switzerland
3. Singapore
4. Denmark
5. Netherlands
6. Sweden
7. Australia
8. Germany
9. Canada
10. Finland

Notable differences from GDP-only rankings:
- Several high-GDP countries ranked lower due to poor social welfare or financial stability scores
- Several moderate-GDP countries ranked higher due to excellent financial stability and social welfare

## Applications
The composite index has been used for:
- Investment risk assessment for emerging markets
- Policy development guidance for developing economies
- Comparative economic health assessment beyond GDP
- Predictive modeling of economic resilience

## Future Work
Future iterations of this project could incorporate:
- Environmental sustainability indicators
- Technology adoption and innovation metrics
- Dynamic time-series analysis of index changes
- Machine learning approaches to improve predictive power`,
    codeKey: "pcaAnalysis",
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"visualization" | "code" | "report">("visualization")
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [project, setProject] = useState<ProjectData | undefined>(undefined)
  const [selectedVariables, setSelectedVariables] = useState<string[]>([])
  const [xAxis, setXAxis] = useState<string>("")
  const [yAxis, setYAxis] = useState<string>("")

  const projectId = Number(params.id)

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === projectId)
    setProject(foundProject)

    // Initialize selected variables
    if (foundProject?.variables && foundProject.variables.length > 0) {
      if (foundProject.chartType === "scatter") {
        setXAxis(foundProject.variables[0])
        setYAxis(foundProject.variables[1] || foundProject.variables[0])
      } else {
        setSelectedVariables([foundProject.variables[0]])
      }
    }
  }, [projectId])

  const getFilteredChartData = useCallback(() => {
    if (!project) return null

    if (project.chartType === "scatter") {
      // For scatter plots, we need to handle x and y axes
      return {
        ...project.chartData,
        datasets: project.chartData.datasets.map((dataset) => ({
          ...dataset,
          label: `${xAxis} vs ${yAxis}`,
        })),
      }
    } else if (project.chartType === "pie") {
      // For pie charts, filter the labels and data
      const selectedIndices = selectedVariables.map((v) => project.chartData.labels.indexOf(v))
      return {
        labels: selectedVariables,
        datasets: project.chartData.datasets.map((dataset) => ({
          ...dataset,
          data: selectedIndices.map((i) => (i >= 0 ? (dataset.data as number[])[i] : 0)),
          backgroundColor: selectedIndices.map((i) =>
            i >= 0 && Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[i] : "rgba(59, 130, 246, 0.7)",
          ),
        })),
      }
    } else {
      // For bar and line charts, filter datasets based on selected variables
      const filteredDatasets = project.chartData.datasets.filter((dataset, index) =>
        selectedVariables.includes(dataset.label),
      )

      return {
        ...project.chartData,
        datasets: filteredDatasets.length > 0 ? filteredDatasets : project.chartData.datasets.slice(0, 1),
      }
    }
  }, [project, selectedVariables, xAxis, yAxis])

  const initializeChart = useCallback(() => {
    if (chartRef.current && activeTab === "visualization" && project) {
      try {
        // Destroy previous chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        const ctx = chartRef.current.getContext("2d")
        if (ctx) {
          const chartData = getFilteredChartData()
          if (!chartData) return

          chartInstance.current = new Chart(ctx, {
            type: project.chartType,
            data: chartData,
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
                x: {
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  ticks: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                },
              },
            },
          })
        }
      } catch (error) {
        console.error("Error initializing chart:", error)
      }
    }
  }, [activeTab, project, getFilteredChartData])

  useEffect(() => {
    initializeChart()

    return () => {
      if (chartInstance.current) {
        try {
          chartInstance.current.destroy()
        } catch (error) {
          console.error("Error destroying chart:", error)
        }
        chartInstance.current = null
      }
    }
  }, [initializeChart])

  const handleVariableToggle = (variable: string) => {
    setSelectedVariables((prev) => {
      if (prev.includes(variable)) {
        // Don't remove if it's the last one
        if (prev.length === 1) return prev
        return prev.filter((v) => v !== variable)
      } else {
        return [...prev, variable]
      }
    })
  }

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Button onClick={() => router.push("/#projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Solid background overlay to block particles */}
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container py-20 relative z-10">
        <Button
          variant="outline"
          onClick={() => router.push("/#projects")}
          className="mb-6 border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-400 mb-6">{project.category}</p>

          <div className="aspect-video bg-gray-800 rounded-md mb-8 overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <Tabs
            defaultValue="visualization"
            className="w-full mb-8"
            onValueChange={(value) => setActiveTab(value as "visualization" | "code" | "report")}
          >
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 rounded p-1">
              <TabsTrigger value="visualization" className="rounded flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                Visualization
              </TabsTrigger>
              <TabsTrigger value="code" className="rounded flex items-center gap-2">
                <Code className="h-4 w-4" />
                Code
              </TabsTrigger>
              <TabsTrigger value="report" className="rounded flex items-center gap-2">
                <FileText2 className="h-4 w-4" />
                Report
              </TabsTrigger>
            </TabsList>

            <TabsContent value="visualization" className="mt-4">
              {/* Variable selection controls */}
              <div className="mb-4 p-4 bg-gray-800 rounded-md">
                <h3 className="text-sm font-medium mb-3">Customize Visualization</h3>

                {project.chartType === "scatter" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">X Axis</label>
                      <Select value={xAxis} onValueChange={setXAxis}>
                        <SelectTrigger className="bg-gray-700 border-gray-600">
                          <SelectValue placeholder="Select X variable" />
                        </SelectTrigger>
                        <SelectContent>
                          {project.variables?.map((variable) => (
                            <SelectItem key={variable} value={variable}>
                              {variable}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Y Axis</label>
                      <Select value={yAxis} onValueChange={setYAxis}>
                        <SelectTrigger className="bg-gray-700 border-gray-600">
                          <SelectValue placeholder="Select Y variable" />
                        </SelectTrigger>
                        <SelectContent>
                          {project.variables?.map((variable) => (
                            <SelectItem key={variable} value={variable}>
                              {variable}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Select Variables</label>
                    <div className="flex flex-wrap gap-2">
                      {project.variables?.map((variable) => (
                        <Button
                          key={variable}
                          variant={selectedVariables.includes(variable) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleVariableToggle(variable)}
                          className={
                            selectedVariables.includes(variable)
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "border-gray-600 hover:border-blue-500 hover:bg-blue-500/10"
                          }
                        >
                          {variable}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="aspect-video bg-gray-800 rounded-md overflow-hidden p-4">
                <canvas ref={chartRef} />
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-4">
              {project.codeKey && (
                <CodeDisplay
                  code={codeExamples[project.codeKey]}
                  fileName={`${project.title.toLowerCase().replace(/\s+/g, "_")}.R`}
                />
              )}
            </TabsContent>

            <TabsContent value="report" className="mt-4">
              <div className="bg-gray-800 rounded-md p-6 prose prose-invert max-w-none">
                {project.report ? (
                  <div className="markdown-content">
                    {project.report.split("\n\n").map((paragraph, index) => {
                      if (paragraph.startsWith("# ")) {
                        return (
                          <h1 key={index} className="text-2xl font-bold mt-0 mb-4">
                            {paragraph.substring(2)}
                          </h1>
                        )
                      } else if (paragraph.startsWith("## ")) {
                        return (
                          <h2 key={index} className="text-xl font-bold mt-6 mb-3">
                            {paragraph.substring(3)}
                          </h2>
                        )
                      } else if (paragraph.startsWith("### ")) {
                        return (
                          <h3 key={index} className="text-lg font-bold mt-5 mb-2">
                            {paragraph.substring(4)}
                          </h3>
                        )
                      } else if (paragraph.startsWith("- ")) {
                        return (
                          <ul key={index} className="list-disc pl-5 mb-4">
                            {paragraph.split("\n").map((item, i) => (
                              <li key={i} className="mb-1">
                                {item.substring(2)}
                              </li>
                            ))}
                          </ul>
                        )
                      } else if (paragraph.startsWith("1. ")) {
                        return (
                          <ol key={index} className="list-decimal pl-5 mb-4">
                            {paragraph.split("\n").map((item, i) => {
                              const match = item.match(/^\d+\.\s(.*)/)
                              return match ? (
                                <li key={i} className="mb-1">
                                  {match[1]}
                                </li>
                              ) : null
                            })}
                          </ol>
                        )
                      } else {
                        return (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      }
                    })}
                  </div>
                ) : (
                  <p>No report available for this project.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" asChild className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                Repository
              </a>
            </Button>
            <Button variant="outline" asChild className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10">
              <a
                href={`${project.link}/report`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Full Report
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
