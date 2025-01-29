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

const CardDetails = ({ data }) => {
  return (
    <Card style={{ width: `${data?.width}px`}}>
      <CardHeader>
        <CardTitle>{data?.label}</CardTitle>
      </CardHeader>
      <CardContent>
        {
          data?.values && data?.values.map((element, index) => {
            const elementKey = `${element?.type}-${index}`;
            if(element?.type == 'KeyValue') {
              return (
                <KeyValue
                  key={elementKey}
                  details={element?.values}
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
