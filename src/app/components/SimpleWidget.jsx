import React from 'react';

const SimpleWidget = ({ data }) => {
  console.log("Simple widget", data);  

  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-xl border border-gray-200 w-full sm:w-1/3 lg:w-1/4">
      <div className="space-y-4">
        {data?.values && data?.values.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Conditionally styling first item to stand out */}
            <div className={index === 0 ? 'text-2xl font-semibold text-gray-900 w-full' : 'text-sm text-gray-500 w-full'}>
              {item?.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleWidget;
