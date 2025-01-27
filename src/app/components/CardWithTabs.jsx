import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BarChartCustom from "./BarChartCustom";
import PieChartCustom from "./PieChartCustom";
import LineChartCustom from "./LineChartCustom";

const CardWithTabs = ({ data }) => {
  return (
    <div className="rounded-lg border border-gray-800 w-full bg-white shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{data?.label}</h3>
      
      <Tabs defaultValue={data?.values?.[0]?.label}>
        <TabsList className="flex border-b border-gray-200 mb-4">
          {data?.values?.map((tab, index) => (
            <TabsTrigger
              key={tab?.label || tab?.type}
              value={tab?.label}
              className="px-4 py-2 text-sm font-medium text-gray-800 rounded-t-lg hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-blue-500"
            >
              {tab?.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-4">
          {data?.values?.map((tab, index) => (
            <TabsContent key={index} value={tab?.label}>
              {tab?.values?.map((chartData, chartIndex) => {
                const uniqueKey = chartData?.label || chartData?.type
                if (chartData.type === "BarChart") {
                  return (
                    <div key={chartIndex} className="mb-6">
                      <BarChartCustom
                        data={chartData?.values}
                        xKey="xKey"
                        yKey="value"
                        key={uniqueKey}
                      />
                    </div>
                  );
                }
                if (chartData.type === "LineChart") {
                    return (
                      <div key={chartIndex} className="mb-6">
                        <LineChartCustom
                          data={chartData?.values}
                          xKey="xKey"
                          yKey="value"
                          key={uniqueKey}
                        />
                      </div>
                    );
                  }
                  if (chartData.type === "PieChart") {
                    return (
                        <PieChartCustom key={uniqueKey || index} 
                            data={chartData?.values} 
                            xKey="xKey"
                            yKey="value"
                        />
                    );
                  }
                return null;
              })}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CardWithTabs;
