const KeyValue = ({data}) => {
    const dataColumn = 2;
    const gridCols = `grid grid-cols-${dataColumn} gap-4`;

    return (
        <div className="p-3">
            <div className={gridCols}>
                {data?.values && data.values.map((item, index) => (
                    <div className="flex flex-col" key={index}>
                        <span className="font-semibold text-gray-800">{item.label}</span>
                        <span className="text-gray-700">
                            {typeof item.value === "object" && item.value !== null && 'value' in item.value
                                ? item.value.value
                                : item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyValue;
