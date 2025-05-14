"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", tasks: 8, workingHours: 7.5 },
  { date: "2024-04-02", tasks: 6, workingHours: 8.0 },
  { date: "2024-04-03", tasks: 7, workingHours: 7.0 },
  { date: "2024-04-04", tasks: 9, workingHours: 8.5 },
  { date: "2024-04-05", tasks: 11, workingHours: 9.0 },
  { date: "2024-04-06", tasks: 4, workingHours: 4.5 },
  { date: "2024-04-07", tasks: 2, workingHours: 2.0 },
  { date: "2024-04-08", tasks: 12, workingHours: 8.0 },
  { date: "2024-04-09", tasks: 5, workingHours: 7.0 },
  { date: "2024-04-10", tasks: 9, workingHours: 8.0 },
  { date: "2024-04-11", tasks: 10, workingHours: 9.5 },
  { date: "2024-04-12", tasks: 8, workingHours: 8.0 },
  { date: "2024-04-13", tasks: 3, workingHours: 3.5 },
  { date: "2024-04-14", tasks: 0, workingHours: 0.0 },
  { date: "2024-04-15", tasks: 7, workingHours: 7.5 },
  { date: "2024-04-16", tasks: 6, workingHours: 8.0 },
  { date: "2024-04-17", tasks: 13, workingHours: 9.0 },
  { date: "2024-04-18", tasks: 11, workingHours: 9.5 },
  { date: "2024-04-19", tasks: 8, workingHours: 7.0 },
  { date: "2024-04-20", tasks: 4, workingHours: 4.5 },
  { date: "2024-04-21", tasks: 0, workingHours: 0.0 },
  { date: "2024-04-22", tasks: 10, workingHours: 8.0 },
  { date: "2024-04-23", tasks: 7, workingHours: 8.5 },
  { date: "2024-04-24", tasks: 12, workingHours: 8.0 },
  { date: "2024-04-25", tasks: 8, workingHours: 7.5 },
  { date: "2024-04-26", tasks: 5, workingHours: 6.0 },
  { date: "2024-04-27", tasks: 2, workingHours: 3.0 },
  { date: "2024-04-28", tasks: 0, workingHours: 0.0 },
  { date: "2024-04-29", tasks: 9, workingHours: 8.0 },
  { date: "2024-04-30", tasks: 14, workingHours: 9.5 },
  { date: "2024-05-01", tasks: 7, workingHours: 7.0 },
  { date: "2024-05-02", tasks: 8, workingHours: 8.5 },
  { date: "2024-05-03", tasks: 7, workingHours: 7.0 },
  { date: "2024-05-04", tasks: 3, workingHours: 4.0 },
  { date: "2024-05-05", tasks: 0, workingHours: 0.0 },
  { date: "2024-05-06", tasks: 15, workingHours: 10.0 },
  { date: "2024-05-07", tasks: 12, workingHours: 8.5 },
  { date: "2024-05-08", tasks: 7, workingHours: 8.0 },
  { date: "2024-05-09", tasks: 8, workingHours: 7.5 },
  { date: "2024-05-10", tasks: 9, workingHours: 8.5 },
  { date: "2024-05-11", tasks: 4, workingHours: 3.5 },
  { date: "2024-05-12", tasks: 0, workingHours: 0.0 },
  { date: "2024-05-13", tasks: 7, workingHours: 7.0 },
  { date: "2024-05-14", tasks: 13, workingHours: 9.5 },
  { date: "2024-05-15", tasks: 14, workingHours: 9.0 },
  { date: "2024-05-16", tasks: 10, workingHours: 9.0 },
  { date: "2024-05-17", tasks: 15, workingHours: 9.5 },
  { date: "2024-05-18", tasks: 3, workingHours: 3.5 },
  { date: "2024-05-19", tasks: 0, workingHours: 0.0 },
  { date: "2024-05-20", tasks: 7, workingHours: 8.0 },
  { date: "2024-05-21", tasks: 6, workingHours: 7.0 },
  { date: "2024-05-22", tasks: 5, workingHours: 7.5 },
  { date: "2024-05-23", tasks: 9, workingHours: 8.0 },
  { date: "2024-05-24", tasks: 8, workingHours: 7.5 },
  { date: "2024-05-25", tasks: 3, workingHours: 4.0 },
  { date: "2024-05-26", tasks: 0, workingHours: 0.0 },
  { date: "2024-05-27", tasks: 12, workingHours: 9.5 },
  { date: "2024-05-28", tasks: 8, workingHours: 7.5 },
  { date: "2024-05-29", tasks: 5, workingHours: 6.5 },
  { date: "2024-05-30", tasks: 10, workingHours: 8.0 },
  { date: "2024-05-31", tasks: 7, workingHours: 7.5 },
  { date: "2024-06-01", tasks: 2, workingHours: 3.0 },
  { date: "2024-06-02", tasks: 0, workingHours: 0.0 },
  { date: "2024-06-03", tasks: 6, workingHours: 7.0 },
  { date: "2024-06-04", tasks: 13, workingHours: 9.0 },
  { date: "2024-06-05", tasks: 5, workingHours: 6.5 },
  { date: "2024-06-06", tasks: 9, workingHours: 8.0 },
  { date: "2024-06-07", tasks: 10, workingHours: 8.5 },
  { date: "2024-06-08", tasks: 3, workingHours: 3.5 },
  { date: "2024-06-09", tasks: 0, workingHours: 0.0 },
  { date: "2024-06-10", tasks: 7, workingHours: 7.5 },
  { date: "2024-06-11", tasks: 6, workingHours: 7.0 },
  { date: "2024-06-12", tasks: 14, workingHours: 9.5 },
  { date: "2024-06-13", tasks: 5, workingHours: 6.5 },
  { date: "2024-06-14", tasks: 12, workingHours: 8.5 },
  { date: "2024-06-15", tasks: 4, workingHours: 4.0 },
  { date: "2024-06-16", tasks: 0, workingHours: 0.0 },
  { date: "2024-06-17", tasks: 14, workingHours: 10.0 },
  { date: "2024-06-18", tasks: 6, workingHours: 7.5 },
  { date: "2024-06-19", tasks: 11, workingHours: 8.0 },
  { date: "2024-06-20", tasks: 13, workingHours: 9.0 },
  { date: "2024-06-21", tasks: 7, workingHours: 7.5 },
  { date: "2024-06-22", tasks: 2, workingHours: 3.0 },
  { date: "2024-06-23", tasks: 0, workingHours: 0.0 },
  { date: "2024-06-24", tasks: 7, workingHours: 7.5 },
  { date: "2024-06-25", tasks: 6, workingHours: 8.0 },
  { date: "2024-06-26", tasks: 12, workingHours: 9.0 },
  { date: "2024-06-27", tasks: 13, workingHours: 9.5 },
  { date: "2024-06-28", tasks: 7, workingHours: 7.5 },
  { date: "2024-06-29", tasks: 3, workingHours: 3.5 },
  { date: "2024-06-30", tasks: 0, workingHours: 0.0 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Completed Task & Working Hours</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#00897B"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="#00897B"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#00897B"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#00897B"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="tasks"
              type="natural"
              fill="url(#fillMobile)"
              stroke="#00897B"
              stackId="a"
            />
            <Area
              dataKey="workingHours"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="#00897B"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
