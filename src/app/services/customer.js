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
                                    type: "Card",
                                    width: 1400,
                                    // bgColor: "bg-gradient-to-r from-blue-100 via-teal-100 to-blue-100",
                                    label: "Profile Details",
                                    values: [
                                        {
                                            type: "KeyValue",
                                            columns: 6,
                                            values: [
                                                { label: "Customer ID", value: "31082185" },
                                                { label: "Customer Name", value: "Deepthi Dhulipalla" },
                                                { label: "Creation Date", value: "12-Feb-2019" },
                                                { label: "Family ID", value: "-" },
                                                { label: "Customer Score", value: "100" },
                                                { label: "RE-KYC Status", value: "Completed" },
                                                { label: "Date Of Birth", value: "25-Apr-1998" },
                                                { label: "Current RV", value: "2000" },
                                                { label: "Customer Tag", value: "-" },
                                                { label: "Customer LOB", value: "-" },
                                                { label: "Occupation", value: "-" },
                                                { label: "Customer Segment", value: "-" },
                                            ]
                                        }
                                    ]
                                    }
                            ]
                        },
                        {
                            type: "Accordion",
                            columns: 2,
                            values: [    
                                {
                                    type: "Card",
                                    width: 650,
                                    label: "Relationship Details",
                                    values: [
                                        {
                                        type: "KeyValue",
                                        columns: 4,
                                        values: [
                                            { label: "CRN LOB", value: "51" },
                                            { label: "RM", value: "NAV" },
                                            { label: "Branch", value: "2847" },
                                            { label: "Category", value: "A" }
                                        ]
                                        }
                                    ]
                                },
                                {
                                    type: "Card",
                                    width: 650,
                                    label: "Channel Details",
                                    values: [
                                        {
                                            type: "KeyValue",
                                            columns: 4,
                                            values: [
                                                { label: "DNC/DND Status", value: "-" },
                                                { label: "NDNC Status", value: "-" },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "Accordion",
                            columns: 1,
                            values: [
                                {
                                    type: "CardWithTabs",
                                    label: "Product Holdings",
                                    width: 1400,
                                    values: [
                                        {
                                            label: "Retail Liability",
                                            values: [     
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
                                    width: 1400,
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
                        },
                        {
                            type: "Accordion",
                            columns: 2,
                            values: [
                                {
                                    type: "CardWithTabs",
                                    label: "Service Tickets",
                                    width: 650,
                                    values: [
                                        {
                                            type: "Card",
                                            width: 650,
                                            label: "Open Requests",
                                            values: [
                                                {
                                                    type: "Table",
                                                    width: 500,
                                                    columnNames: [
                                                        "id",
                                                        "status", 
                                                        "method", 
                                                        "amount"
                                                    ],
                                                    rows: [
                                                    {
                                                        "id": "RNV001",
                                                        "status": "In Progress",
                                                        "method": "Credit Card",
                                                        "amount": "250.00"
                                                    },
                                                    {
                                                        "id": "RNV002",
                                                        "status": "Pending",
                                                        "method": "Credit Card",
                                                        "amount": "250.00"
                                                    } 
                                                 ]
                                                }
                                            ]
                                        },
                                        {
                                            type: "Card",
                                            width: 650,
                                            label: "Complains",
                                            values: [
                                                {
                                                    type: "Table",
                                                    width: 500,
                                                    columnNames: [
                                                        "invoice",
                                                        "status", 
                                                        "method", 
                                                        "amount"
                                                    ],
                                                    rows: [
                                                    {
                                                        "invoice": "INV001",
                                                        "status": "Pending",
                                                        "method": "Credit Card",
                                                        "amount": "250.00"
                                                    },
                                                    {
                                                        "invoice": "INV001",
                                                        "status": "Pending",
                                                        "method": "Credit Card",
                                                        "amount": "250.00"
                                                    } 
                                                 ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "Card",
                                    width: 650,
                                    label: "Transactions",
                                    values: [
                                        {
                                            type: "Table",
                                            width: 500,
                                            columnNames: [
                                                "invoice",
                                                "status", 
                                                "method", 
                                                "amount"
                                            ],
                                            rows: [
                                            {
                                                "invoice": "INV001",
                                                "status": "Pending",
                                                "method": "Credit Card",
                                                "amount": "250.00"
                                            },
                                            {
                                                "invoice": "INV001",
                                                "status": "Pending",
                                                "method": "Credit Card",
                                                "amount": "250.00"
                                            } 
                                         ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "Accordion",
                            columns: 4,
                            values: [    
                                {
                                    type: "BarChart",
                                    width: 400,
                                    xKey: "Days",
                                    yKey: "balance",
                                    values: [
                                        {
                                            type: "header",
                                            label: "EOP Balance",
                                        },
                                        {
                                            type: "chart",
                                            values: [
                                                { xKey: "D1", value: 100 },
                                                { xKey: "D2", value: 200 },
                                                { xKey: "D3", value: 300 },
                                                { xKey: "D4", value: 400 },
                                                { xKey: "D5", value: 200 },
                                                { xKey: "D6", value: 300 },
                                                { xKey: "D7", value: 600 },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "LineChart",
                                    width: 400,
                                    xKey: "Days",
                                    yKey: "balance",
                                    values: [
                                        {
                                            type: "header",
                                            label: "AMB movment",
                                        },
                                        {
                                            type: "chart",
                                            values: [
                                                { xKey: "Jan-March", value: 1000 },
                                                { xKey: "April-June", value: 200 },
                                                { xKey: "July-Sept", value: 300 }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "LineChart",
                                    width: 400,
                                    xKey: "Days",
                                    yKey: "balance",
                                    values: [
                                        {
                                            type: "header",
                                            label: "RV movment",
                                        },
                                        {
                                            type: "chart",
                                            values: [
                                                { xKey: "Jan-March", value: 500 },
                                                { xKey: "April-June", value: 200 },
                                                { xKey: "July-Sept", value: 300 },
                                                { xKey: "Oct-Dec", value: 300 }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "LineChart",
                                    width: 400,
                                    xKey: "Days",
                                    yKey: "balance",
                                    values: [
                                        {
                                            type: "header",
                                            label: "AQB movment",
                                        },
                                        {
                                            type: "chart",
                                            values: [
                                                { xKey: "Jan-March", value: 1000 },
                                                { xKey: "April-June", value: 200 },
                                                { xKey: "July-Sept", value: 300 },
                                                { xKey: "Oct-Dec", value: 300 }
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