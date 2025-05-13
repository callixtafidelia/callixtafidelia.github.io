"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Copy, Check } from "lucide-react"

interface CodeDisplayProps {
  code: {
    r?: string
    python?: string
  }
  fileName?: string
}

export default function CodeDisplay({ code, fileName }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"r" | "python">(code.r ? "r" : "python")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const hasMultipleLanguages = code.r && code.python
  const activeCode = code[activeTab] || ""

  // Function to add line numbers to code
  const formatCodeWithLineNumbers = (codeString: string) => {
    const lines = codeString.split("\n")
    return lines.map((line, index) => (
      <div key={index} className="table-row">
        <span className="table-cell text-right pr-4 text-gray-500 select-none">{index + 1}</span>
        <span className="table-cell">{line || " "}</span>
      </div>
    ))
  }

  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-300">{fileName || "code.R"}</span>
        </div>
        {!hasMultipleLanguages && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={() => copyToClipboard(activeCode)}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Copy code</span>
              </>
            )}
          </Button>
        )}
      </div>

      {hasMultipleLanguages ? (
        <Tabs defaultValue="r" className="w-full" onValueChange={(value) => setActiveTab(value as "r" | "python")}>
          <div className="flex items-center justify-between px-4 py-1 bg-gray-800">
            <TabsList className="h-8 bg-gray-700">
              <TabsTrigger value="r" className="text-xs">
                R
              </TabsTrigger>
              <TabsTrigger value="python" className="text-xs">
                Python
              </TabsTrigger>
            </TabsList>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1 text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => copyToClipboard(code[activeTab] || "")}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Copy code</span>
                </>
              )}
            </Button>
          </div>
          <TabsContent value="r" className="mt-0">
            <div className="max-h-[400px] overflow-auto p-4 bg-[#1a1a1a]">
              <div className="font-mono text-sm text-gray-300 whitespace-pre table">
                {formatCodeWithLineNumbers(code.r || "")}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="python" className="mt-0">
            <div className="max-h-[400px] overflow-auto p-4 bg-[#1a1a1a]">
              <div className="font-mono text-sm text-gray-300 whitespace-pre table">
                {formatCodeWithLineNumbers(code.python || "")}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="max-h-[400px] overflow-auto p-4 bg-[#1a1a1a]">
          <div className="font-mono text-sm text-gray-300 whitespace-pre table">
            {formatCodeWithLineNumbers(activeCode)}
          </div>
        </div>
      )}
    </Card>
  )
}
