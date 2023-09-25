// const createChart = (data, chartClass) => {
     
//     const div = document.createElement("div");
//     div.className = `chart-container ${chartClass || ''}`;  

    
//     document.getElementById('bar-chart').appendChild(div);

    
//     const chartType = data.type || 'scatter';

     
//     const chartData = [
//         {
//             type: chartType,
//             mode: data.mode || (chartType === 'scatter' ? 'markers' : 'lines'),
//             x: data.x || [],
//             y: data.y || [],
//             labels: data.labels || [],  
//             values: data.values || [],  
//             z: data.z || [],  
//             marker: data.marker || {},  
//         }
//     ];

   
//     const layout = {
//         title: data.title || '',
//         xaxis: {
//             title: data.labelx || '',
//             showticklabels: data.showticklabelsx || false
//         },
//         yaxis: {
//             title: data.labely || '',
//             showticklabels: data.showticklabelsy || false
//         },
//         ...data.other  
//     };

  
//     Plotly.newPlot(div, chartData, layout);

//     return div;
// };

 
// const lineChartData = {
//     title: 'Line Chart',
//     type: 'lines',
//     x: [1, 2, 3, 4, 5],
//     y: [2, 4, 1, 6, 3],
//     labelx: 'X-axis Label',
//     labely: 'Y-axis Label',
//     showticklabelsx: true,
//     showticklabelsy: true,
// };

// const pieChartData = {
//     title: 'Pie Chart',
//     type: 'pie',
//     labels: ['Category 1', 'Category 2', 'Category 3'],
//     values: [30, 40, 30],
// };

// const heatmapData = {
//     title: 'Heatmap',
//     type: 'heatmap',
//     z: [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ],
//     x: ['X1', 'X2', 'X3'],
//     y: ['Y1', 'Y2', 'Y3'],
//     labelx: 'X-axis Label',
//     labely: 'Y-axis Label',
//     showticklabelsx: true,
//     showticklabelsy: true,
// };

// const scatterPlotData = {
//     title: 'Scatter Plot',
//     type: 'scatter',
//     x: [1, 2, 3, 4, 5],
//     y: [2, 4, 1, 6, 3],
//     labelx: 'X-axis Label',
//     labely: 'Y-axis Label',
//     mode: 'markers',
// };

// const barChartData = {
//     title: 'Bar Chart',
//     type: 'bar',
//     x: ['A', 'B', 'C', 'D', 'E'],
//     y: [10, 20, 15, 30, 25],
//     labelx: 'X-axis Label',
//     labely: 'Y-axis Label',
// };

 
// const chart1 = createChart(lineChartData, 'line-chart');
// const chart2 = createChart(lineChartData, 'line-chart');
// const chart3 = createChart(lineChartData, 'line-chart');
// const chart4 = createChart(lineChartData, 'line-chart');
// const chart5 = createChart(lineChartData, 'line-chart');
// const chart6 = createChart(lineChartData, 'line-chart');
 
// document.getElementById('bar-chart').appendChild(chart1);
// document.getElementById('bar-chart').appendChild(chart2);
// document.getElementById('bar-chart').appendChild(chart3);
// document.getElementById('bar-chart').appendChild(chart4);
// document.getElementById('bar-chart').appendChild(chart5);
// document.getElementById('bar-chart').appendChild(chart5);


// SIDEBAR TOGGLE

 
 

 



// AREA CHART
// var positiveEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var positiveC = new ApexCharts(
//     document.querySelector('#positive-chart'),
//     positiveEmotion
//   );
  
//   positiveC.render();
  
  
  
//   // negative   chart -----------------------------------------------------------------
  
  
  
  
  
  
//   // AREA CHART
//   var negativeEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var negativeC = new ApexCharts(
//     document.querySelector('#negative-chart'),
//     negativeEmotion
//   );
  
//   negativeC.render();
  
  
  
  
//   // political chart-------------------------------------------------
  
//   var politicalEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var politicalC = new ApexCharts(
//     document.querySelector('#political-chart'),
//     politicalEmotion
//   );
  
//   politicalC.render();
  
  
  
//   // sad chart ----------------------------------------------------
  
  
  
//   var sadEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var sadC = new ApexCharts(
//     document.querySelector('#sad-chart'),
//     sadEmotion
//   );
  
//   sadC.render();
  
  
  
//   // Angry chart ---------------------------------------------
  
  
  
//   var angryEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var angryC = new ApexCharts(
//     document.querySelector('#angry-chart'),
//     angryEmotion
//   );
  
//   angryC.render();
  
  
  
//   // fearful chart -------------------------------------------------
  
  
  
//   var fearEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var fearC = new ApexCharts(
//     document.querySelector('#fear-chart'),
//     fearEmotion
//   );
  
//   fearC.render();
  
//   // surprise chart ------------------------------------------------------------
  
  
  
  
//   var surpriseEmotion= {
//     series: [
//       {
//          data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//     chart: {
//       type: 'area',
//       background: 'transparent',
//       height: 250,
//       width:500,
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#654ce5'],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       gradient: {
//         opacityFrom: 0.4,
//         opacityTo: 0.1,
//         shadeIntensity: 1,
//         stops: [0, 100],
//         type: 'vertical',
//       },
//       type: 'gradient',
//     },
//     grid: {
//       borderColor: '#55596e',
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       labels: {
//         title:"hello",
//         colors: 'green',
//       },
//       show: true,
//       position: 'top',
//     },
//     markers: {
//       size: 6,
//       strokeColors: '#1b2635',
//       strokeWidth: 3,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       axisBorder: {
//         color: '#55596e',
//         show: true,
//       },
//       axisTicks: {
//         color: '#55596e',
//         show: true,
//       },
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: '#f5f7ff',
//         },
//       },
//     },
//     yaxis: [
//       {
//         title: {
//           text: '',
//           style: {
//             color: '#f5f7ff',
//           },
//         },
//         labels: {
//           style: {
//             colors: ['#f5f7ff'],
//           },
//         },
//       },
//       // {
//       //   opposite: true,
//       //   title: {
//       //     text: 'Sales Orders',
//       //     style: {
//       //       color: '#f5f7ff',
//       //     },
//       //   },
//       //   labels: {
//       //     style: {
//       //       colors: ['#f5f7ff'],
//       //     },
//       //   },
//       // },
//     ],
//     tooltip: {
//       shared: true,
//       intersect: false,
//       theme: 'dark',
//     },
//   };
  
//   var surpriseC = new ApexCharts(
//     document.querySelector('#surprise-chart'),
//     surpriseEmotion
//   );
  
//   surpriseC.render();
  
  
//   const hoverPositive = document.getElementById("positive-chart");
   
//   hoverPositive.addEventListener("click", ()=>{
//      hoverPositive.classList.add("clickable-div")
      
//   })
  
//   const hoverNegative = document.getElementById("negative-chart");
   
//   hoverNegative.addEventListener("click", ()=>{
//      hoverNegative.classList.add("clickable-div")
      
//   })
  
//   const hoverPolitical = document.getElementById("political-chart");
   
//   hoverPolitical.addEventListener("click", ()=>{
//      hoverPolitical.classList.add("clickable-div")
      
//   })
  
//   const hoverSad = document.getElementById("sad-chart");
   
//   hoverSad.addEventListener("click", ()=>{
//      hoverSad.classList.add("clickable-div")
      
//   })
  
//   const hoverAngry = document.getElementById("angry-chart");
   
//   hoverAngry.addEventListener("click", ()=>{
//      hoverAngry.classList.add("clickable-div")
      
//   })
  
//   const hoverSurprise = document.getElementById("surprise-chart");
   
//   hoverSurprise.addEventListener("click", ()=>{
//      hoverSurprise.classList.add("clickable-div")
      
//   })

// Define an array of chart IDs
// Define an array of chart IDs
// Define an array of chart IDs
// Define an array of chart IDs


function createEmotionChart(chartId, chartConfig) {
  const emotionChart = new ApexCharts(document.querySelector(chartId), chartConfig);
  emotionChart.render();
}

const commonEmotionConfig = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 250,
    width: 500,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#654ce5'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: false,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      title: "hello",
      colors: 'green',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: '',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

createEmotionChart('#positive-chart', commonEmotionConfig);
createEmotionChart('#negative-chart', commonEmotionConfig);
createEmotionChart('#political-chart', commonEmotionConfig);
createEmotionChart('#sad-chart', commonEmotionConfig);
createEmotionChart('#angry-chart', commonEmotionConfig);
createEmotionChart('#fear-chart', commonEmotionConfig);
createEmotionChart('#surprise-chart', commonEmotionConfig);

createEmotionChart('#disgust-chart', commonEmotionConfig);
createEmotionChart('#joy-chart', commonEmotionConfig);
createEmotionChart('#hate-chart', commonEmotionConfig);
createEmotionChart('#abc-chart', commonEmotionConfig);
createEmotionChart('#def-chart', commonEmotionConfig);
createEmotionChart('#ghi-chart', commonEmotionConfig);
// createEmotionChart('#surprise-chart', commonEmotionConfig);


const chartIds = ["positive-chart", "negative-chart", "political-chart", "sad-chart", "angry-chart", "surprise-chart"];

// Define a function to handle the click event
function handleChartClick(event) {
  const chart = event.currentTarget;
  const isEnlarged = chart.classList.contains("enlarged");
  
  if (isEnlarged) {
    // If the chart is already enlarged, remove the "enlarged" class to return it to its original position
    chart.classList.remove("enlarged");
  } else {
    // If the chart is not enlarged, add the "enlarged" class to enlarge it
    chart.classList.add("enlarged");
  }
}

// Add click event listeners to each chart
chartIds.forEach((chartId) => {
  const chart = document.getElementById(chartId);
  chart.addEventListener("click", handleChartClick);
});



