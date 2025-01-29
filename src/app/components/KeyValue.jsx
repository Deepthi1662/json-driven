const KeyValue = ({data}) => {
    const gridCols = `grid-cols-${data?.columns || 1}`; 
    return (
        <div className="p-3">
          <div className={`grid ${gridCols} gap-4`}>
            {data?.values && data?.values.map((item, index) => (
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
    );
}

export default KeyValue;