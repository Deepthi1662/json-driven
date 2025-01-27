import BarChartCustom from "./BarChartCustom";
import CardDetails from "./CardDetails";
import CardWithTabs from "./CardWithTabs";

const Accordian = ({ data, keyElement }) => {
  return (
    <div className="grid grid-cols-3 gap-4" key={keyElement}>
      {data &&
        data.map((element, index) => {
         const uniqueKey = element?.label || element?.id || element?.type;  
          if (element?.type === 'Card') {
            return (
              <CardDetails
                key={uniqueKey + index}
                title={element.values?.[0]?.label}
                details={element.values?.[1]?.values}
              />
            );
          }
          if (element?.type === 'CardWithTabs') {
            return (
              <CardWithTabs
                key={uniqueKey}
                data={element}
              />
            );
          }
          if (element?.type === 'BarChart') {
            return (
              <BarChartCustom
                data = {element?.values}
                xKey="xKey"
                yKey="value"
                key={uniqueKey}
              />
            );
          }
          return null;
        })}
    </div>
  );
};

export default Accordian;
