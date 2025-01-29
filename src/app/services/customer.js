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
                            columns: 2,
                            values: [
                                {
                                type: "Card",
                                width: 650,
                                label: "Profile Details",
                                values: [
                                    {
                                        type: "KeyValue",
                                        values: [
                                            { label: "Customer ID", value: "31082185" },
                                            { label: "Customer Name", value: "Deepthi Dhulipalla" },
                                            { label: "creationDate", value: "12-Feb-2019" },
                                            { label: "Date Of Birth", value: "11-Dec-1994" }
                                        ]
                                    }
                                ]
                                },
                                {
                                type: "Card",
                                width: 650,
                                label: "Relationship Details",
                                values: [
                                    {
                                    type: "KeyValue",
                                    values: [
                                        { label: "CRN LOB", value: "51" },
                                        { label: "RM", value: "NAV" },
                                        { label: "Branch", value: "2847" },
                                        { label: "Category", value: "A" }
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
                                    label: "Financial Overview",
                                    width: 650,
                                    values: [
                                        {
                                            label: "BarChart",
                                            values: [
                                                {
                                                    type: "BarChart",
                                                    width: 500,
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
                                                                { xKey: "Day1", value: 100 },
                                                                { xKey: "Day2", value: 200 },
                                                                { xKey: "Day3", value: 300 },
                                                                { xKey: "Day4", value: 400 },
                                                                { xKey: "Day5", value: 200 },
                                                                { xKey: "Day6", value: 300 },
                                                                { xKey: "Day7", value: 600 },
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "LineChart",
                                            values: [
                                                {
                                                    type: "LineChart",
                                                    width: 500,
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
                                                                { xKey: "Day1", value: 100 },
                                                                { xKey: "Day2", value: 200 },
                                                                { xKey: "Day3", value: 300 },
                                                                { xKey: "Day4", value: 400 },
                                                                { xKey: "Day5", value: 200 },
                                                                { xKey: "Day6", value: 300 },
                                                                { xKey: "Day7", value: 600 },
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: "Pie Chart",
                                            values: [
                                                {
                                                    type: "PieChart",
                                                    width: 500,
                                                    xKey: "Days",
                                                    yKey: "balance",
                                                    values: [
                                                        {
                                                            type: "header",
                                                            label: "Retail",
                                                        },
                                                        {
                                                            type: "chart",
                                                            values: [
                                                                { xKey: "Day1", value: 100, fill: "hsl(200, 70%, 50%)" },
                                                                { xKey: "Day2", value: 200, fill: "hsl(40, 70%, 50%)" },
                                                                { xKey: "Day3", value: 300, fill: "hsl(330, 60%, 50%)" }
                                                            ],
                                                            config: {
                                                                Day1 : {
                                                                    color: "hsl(var(--chart-1))",  
                                                                },
                                                                Day2 : {
                                                                    color: "hsl(var(--chart-2))",  
                                                               },
                                                               Day3 : {
                                                                    color: "hsl(var(--chart-3))",  
                                                               }
                                                            }
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