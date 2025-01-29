import BarChartCustom from "./BarChartCustom";
import CardDetails from "./CardDetails";
import CardWithTabs from "./CardWithTabs";
import LineChartCustom from "./LineChartCustom";
import PieChartCustom from "./PieChartCustom";

const Accordian = ({ data, keyElement }) => {
  const gridCols = `grid-cols-${data?.columns || 1}`; 
  return (
    <div className={`grid ${gridCols} gap-8`} key={keyElement}>
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
          if (element?.type === 'LineChart') {
            return (
              <LineChartCustom
                data = {element?.values}
                xKey="xKey"
                yKey="value"
                key={uniqueKey}
              />
            );
          }
          if (element?.type === 'PieChart') {
            return (
              <PieChartCustom
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
