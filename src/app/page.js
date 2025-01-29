"use client";

import React, { useState } from "react";
import {fetchCustomer360Details } from "./services/customer";
import StickyHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import TableCustom from "./components/TableCustom";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState('')
  const [response, setResponse] = useState({})
  
  const handleSubmit = (input) => {
    setInputValue(input);
    const response = fetchCustomer360Details(input);
    setResponse(response)
  }

  return (
    <div className="flex flex-col h-screen">
      <StickyHeader onSubmitInput={handleSubmit} />
      <div className="flex flex-1">
        {response?.values && response?.values.map((element, index) => {
              const elementKey = `${element?.type}-${index}`;
              if (element?.type === 'Sidebar') {
                return (
                    <Sidebar menuItems={element?.values} key={elementKey} />
                );
              }
              if (element?.type === 'MainContent') {
                return (
                    <MainContent response={element?.values} key={elementKey}/>
                );
              }
              return null;
            })}
        
      </div>
    </div>
  );
}
