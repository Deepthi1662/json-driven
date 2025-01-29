import BarChartCustom from "./BarChartCustom";
import CardDetails from "./CardDetails";
import CardWithTabs from "./CardWithTabs";

const Accordian = ({ data, keyElement }) => {
  const gridCols = `grid-cols-${data?.columns || 1}`; 
  return (
    <div className={`grid ${gridCols}`} key={keyElement}>
      {data?.values &&
        data?.values.map((element, index) => {
         const uniqueKey = element?.label || element?.id || element?.type;  
          if (element?.type === 'Card') {
            return (
              <CardDetails
                key={uniqueKey + index}
                data={element}
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
