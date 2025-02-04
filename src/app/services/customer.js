export const fetchCustomer360Details = (query) => {
    const response = {
            "type": "Container",
            "values": [
                {
                    type: "Sidebar",
                    "values": [
                        {
                          "label": "Dashboard",
                          "action": "/dashboard"
                        },
                        {
                            "label": "Reports",
                            "action": "/dashboard"
                        },
                        {
                            "label": "Downloads",
                            "action": "/dashboard"
                        }
                    ]
                },
                {
                    type: "MainContent",
                    values: [
                        {
                            type: "Accordion",
                            columns: 1,
                            values: [
                                {
                                    type: "CardWithTabs",
                                    label: "Product Holdings",
                                    width: 650,
                                    values: [
                                        {
                                            label: "Retail Liability",
                                            values: [
                                                {
                                                   type: "Widgets",
                                                   values: [ 
                                                        {
                                                            type: "SimpleWidget",
                                                            width: "100",
                                                            values: [
                                                                {
                                                                    "value": "Text"
                                                                },
                                                                {
                                                                    "value": "$10000"
                                                                },
                                                                {
                                                                    "value": "Text"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            type: "SimpleWidget",
                                                            width: "100",
                                                            values: [
                                                                {
                                                                    "value": "Text"
                                                                },
                                                                {
                                                                    "value": "$10000"
                                                                },
                                                                {
                                                                    "value": "Text"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            type: "SimpleWidget",
                                                            width: "100",
                                                            values: [
                                                                {
                                                                    "value": "Text"
                                                                },
                                                                {
                                                                    "value": "$10000"
                                                                },
                                                                {
                                                                    "value": "Text"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            type: "SimpleWidget",
                                                            width: "100",
                                                            values: [
                                                                {
                                                                    "value": "Text"
                                                                },
                                                                {
                                                                    "value": "$10000"
                                                                },
                                                                {
                                                                    "value": "Text"
                                                                }
                                                            ]
                                                        } 
                                                    ]
                                                }   
                                            ]
                                        },
                                        {
                                            label: "Retail Assests",
                                            values: [
                                                
                                            ]
                                        },
                                        {
                                            label: "Investments",
                                            values: [
                                            ]
                                        }

                                    ]
                                },
                                {
                                    type: "CardWithTabs",
                                    label: "Services Activation",
                                    width: 650,
                                    values: [
                                        {
                                            label: "Phone Banking",
                                            values: [
                                                {
                                                    type: "KeyValue",
                                                    columns: 4,
                                                    values: [
                                                        { label: "Active", value: "Yes" },
                                                        { label: "Status", value: "30 days" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "MB Registration",
                                            values: [
                                                {
                                                    type: "KeyValue",
                                                    columns: 4,
                                                    values: [
                                                        { label: "Active", value: "Yes" },
                                                        { label: "Status", value: "30 days" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "NB Registrations",
                                            values: [
                                                {
                                                    type: "KeyValue",
                                                    columns: 4,
                                                    values: [
                                                        { label: "Active", value: "No" },
                                                        { label: "Status", value: "NA" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "POS Registrations",
                                            values: [
                                                {
                                                    type: "KeyValue",
                                                    columns: 4,
                                                    values: [
                                                        { label: "Active", value: "Yes" },
                                                        { label: "Status", value: "NA" }
                                                    ]
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                }
          ]
        };
      
        return response;
    
    // try {
    //   const response = await fetch(`http://localhost:8080/api/search?query=${query}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
  
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch search results");
    //   }
  
    //   const data = await response.json();  
    //   return data;
    // } catch (error) {
    //   console.error("Error fetching customer 360 data", error);
    //   throw error;
    // }
  }