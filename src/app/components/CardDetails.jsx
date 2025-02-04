import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KeyValue from "./KeyValue";
import TableCustom from "./TableCustom";
import SimpleWidget from "./SimpleWidget";

const CardDetails = ({ data }) => {
  const width = data?.width ? `${data.width}px` : 'auto';
  const bgColor = data?.bgColor ? data.bgColor : 'transparent';

  return (
    <Card className={`${bgColor}`} style={{ width }}>
      <CardHeader>
        <CardTitle className="text-xl">{data?.label}</CardTitle>
      </CardHeader>
      <CardContent>
        {
          data?.values && data?.values.map((element, index) => {
            const elementKey = `${element?.type}-${index}`;
            if(element?.type == 'KeyValue') {
              return (
                <KeyValue
                  key={elementKey}
                  data={element}
                /> 
              )
            }
            if(element?.type == 'Table') {
              return (
                <TableCustom
                  response={element}
                  key={elementKey}
                />
              )
            }
          })
        }
                
      </CardContent>
    </Card>
  );
};

export default CardDetails;
