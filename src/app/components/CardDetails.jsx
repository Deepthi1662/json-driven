import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardDetails = ({ title, details }) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-8">
          <div className="grid grid-cols-2 gap-4">
            {details.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <span className="font-semibold text-gray-1200">{item.label}</span>
                <span className="text-gray-1000">
                  {typeof item.value === "object" && item.value !== null
                    ? item.value.value
                    : item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
