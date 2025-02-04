import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BarChartCustom from "./BarChartCustom";
import PieChartCustom from "./PieChartCustom";
import LineChartCustom from "./LineChartCustom";
import KeyValue from "./KeyValue";
import CardDetails from "./CardDetails";
import TableCustom from "./TableCustom";
import SimpleWidget from "./SimpleWidget";
import Widgets from "./Widgets";

const CardWithTabs = ({ data }) => {
  return (
    <div className="rounded-lg border bg-white shadow-lg" style={{ width: `${data?.width}px`}}>
      <h2 className="font-bold flex flex-col text-xl space-y-2 p-6">{data?.label}</h2>
      
      <Tabs defaultValue={data?.values?.[0]?.label}>
        <TabsList className="flex mb-4">
          {data?.values?.map((tab, index) => (
            <TabsTrigger
              key={tab?.label || tab?.type}
              value={tab?.label}
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-blue-500"
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
                  if (chartData.type === "KeyValue") {
                    return (
                      <div key={chartIndex} className="mb-6">
                        <KeyValue
                          key={chartIndex}
                          data={chartData}
                        /> 
                      </div>
                    );
                  }
                  if(chartData?.type == 'Table') {
                    return (
                      <TableCustom
                        response={chartData}
                        key={uniqueKey}
                      />
                    )
                  }
                  if(chartData?.type == 'Widgets') {
                    return (
                      <Widgets 
                      key={uniqueKey} 
                      data={chartData}/>
                    )
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
