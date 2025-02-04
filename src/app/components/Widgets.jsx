import React from 'react';
import SimpleWidget from './SimpleWidget';

const Widgets = (data) => {
  console.log("data...", data?.data?.values)  
  return (
    <div className="flex flex-wrap justify-between gap-4 p-6">
      {console.log(data?.values)}  
      {data?.data?.values && data?.data?.values.map((data, index) => (
         <SimpleWidget key={index} data={data} />
      ))}
    </div>
  );
};

export default Widgets;
