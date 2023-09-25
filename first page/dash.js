// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
var donutChartOptions = {
  series: [10, 8, 6, 4, 2],  // Use data as an array of values
  chart: {
    type: 'donut',  // Set chart type to 'donut'
    background: 'transparent',
    height: 350,
  },
  labels: ['Positive', 'Negative', 'Political', 'Angry', 'Sad'],  // Use labels for donut segments
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',  // Set the inner radius to create a donut chart
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

var donutChart = new ApexCharts(
  document.querySelector('#donut-chart'),
  donutChartOptions
);
donutChart.render();


// AREA CHART
var areaChartOptions = {
  series: [
    {
      name: 'Positive sentiment',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Negative sentiment',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
        show: true,
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
      colors: '#f5f7ff',
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
        // text: 'Purchase Orders',
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
    {
      opposite: true,
      title: {
        // text: 'Sales Orders',
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

var areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();





// function createEmotionChart(chartId, chartConfig) {
//   const emotionChart = new ApexCharts(document.querySelector(chartId), chartConfig);
//   emotionChart.render();
// }

// const commonEmotionConfig = {
//   series: [
//     {
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//   ],
//   chart: {
//     type: 'area',
//     background: 'transparent',
//     height: 250,
//     width: 500,
//     stacked: false,
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ['#654ce5'],
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     gradient: {
//       opacityFrom: 0.4,
//       opacityTo: 0.1,
//       shadeIntensity: 1,
//       stops: [0, 100],
//       type: 'vertical',
//     },
//     type: 'gradient',
//   },
//   grid: {
//     borderColor: '#55596e',
//     yaxis: {
//       lines: {
//         show: false,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   legend: {
//     labels: {
//       title: "hello",
//       colors: 'green',
//     },
//     show: true,
//     position: 'top',
//   },
//   markers: {
//     size: 6,
//     strokeColors: '#1b2635',
//     strokeWidth: 3,
//   },
//   stroke: {
//     curve: 'smooth',
//   },
//   xaxis: {
//     axisBorder: {
//       color: '#55596e',
//       show: true,
//     },
//     axisTicks: {
//       color: '#55596e',
//       show: true,
//     },
//     labels: {
//       offsetY: 5,
//       style: {
//         colors: '#f5f7ff',
//       },
//     },
//   },
//   yaxis: [
//     {
//       title: {
//         text: '',
//         style: {
//           color: '#f5f7ff',
//         },
//       },
//       labels: {
//         style: {
//           colors: ['#f5f7ff'],
//         },
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: 'dark',
//   },
// };

// createEmotionChart('#positive-chart', commonEmotionConfig);
// createEmotionChart('#negative-chart', commonEmotionConfig);
// createEmotionChart('#political-chart', commonEmotionConfig);
// createEmotionChart('#sad-chart', commonEmotionConfig);
// createEmotionChart('#angry-chart', commonEmotionConfig);
// createEmotionChart('#fear-chart', commonEmotionConfig);
// createEmotionChart('#surprise-chart', commonEmotionConfig);

// createEmotionChart('#disgust-chart', commonEmotionConfig);
// createEmotionChart('#joy-chart', commonEmotionConfig);
// createEmotionChart('#hate-chart', commonEmotionConfig);
// createEmotionChart('#abc-chart', commonEmotionConfig);
// createEmotionChart('#def-chart', commonEmotionConfig);
// createEmotionChart('#ghi-chart', commonEmotionConfig);
// // createEmotionChart('#surprise-chart', commonEmotionConfig);


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









 
var positiveEmotion= {
    series: [
      {
         data: [31, 40, 58, 61, 72, 109, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var positiveC = new ApexCharts(
    document.querySelector('#positive-chart'),
    positiveEmotion
  );
  
  positiveC.render();
  
  
  
  // negative   chart -----------------------------------------------------------------
  
  
  
  
  
  
  // AREA CHART
  var negativeEmotion= {
    series: [
      {
         data: [3, 10, 18, 21, 12, 109, 10],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var negativeC = new ApexCharts(
    document.querySelector('#negative-chart'),
    negativeEmotion
  );
  
  negativeC.render();
  
  
  
  
  // political chart-------------------------------------------------
  
  var politicalEmotion= {
    series: [
      {
         data: [61, 40, 78, 81, 82, 90, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var politicalC = new ApexCharts(
    document.querySelector('#political-chart'),
    politicalEmotion
  );
  
  politicalC.render();
  
  
  
  // sad chart ----------------------------------------------------
  
  
  
  var sadEmotion= {
    series: [
      {
         data: [1, 10, 18, 11, 12, 9, 50],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var sadC = new ApexCharts(
    document.querySelector('#sad-chart'),
    sadEmotion
  );
  
  sadC.render();
  
  
  
  // Angry chart ---------------------------------------------
  
  
  
  var angryEmotion= {
    series: [
      {
         data: [71, 40, 68, 41, 62, 70, 80],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var angryC = new ApexCharts(
    document.querySelector('#angry-chart'),
    angryEmotion
  );
  
  angryC.render();
  
  
  
  // fearful chart -------------------------------------------------
  
  
  
  var fearEmotion= {
    series: [
      {
         data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var fearC = new ApexCharts(
    document.querySelector('#fear-chart'),
    fearEmotion
  );
  
  fearC.render();
  
  // surprise chart ------------------------------------------------------------
  
  
  
  
  var surpriseEmotion= {
    series: [
      {
         data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var surpriseC = new ApexCharts(
    document.querySelector('#surprise-chart'),
    surpriseEmotion
  );
  
  surpriseC.render();
  
  
  // const hoverPositive = document.getElementById("positive-chart");
   
  // hoverPositive.addEventListener("click", ()=>{
  //    hoverPositive.classList.add("clickable-div")
      
  // })
  
  // const hoverNegative = document.getElementById("negative-chart");
   
  // hoverNegative.addEventListener("click", ()=>{
  //    hoverNegative.classList.add("clickable-div")
      
  // })
  
  // const hoverPolitical = document.getElementById("political-chart");
   
  // hoverPolitical.addEventListener("click", ()=>{
  //    hoverPolitical.classList.add("clickable-div")
      
  // })
  
  // const hoverSad = document.getElementById("sad-chart");
   
  // hoverSad.addEventListener("click", ()=>{
  //    hoverSad.classList.add("clickable-div")
      
  // })
  
  // const hoverAngry = document.getElementById("angry-chart");
   
  // hoverAngry.addEventListener("click", ()=>{
  //    hoverAngry.classList.add("clickable-div")
      
  // })
  
  // const hoverSurprise = document.getElementById("surprise-chart");
   
  // hoverSurprise.addEventListener("click", ()=>{
  //    hoverSurprise.classList.add("clickable-div")
      
  // })

 
  var disgustEmotion= {
    series: [
      {
         data: [1, 10, 18, 1, 2, 10, 130],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var disgustC = new ApexCharts(
    document.querySelector('#disgust-chart'),
    disgustEmotion
  );
  
  disgustC.render();


  var joyEmotion= {
    series: [
      {
         data: [81, 60, 68, 61, 52, 80, 70],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var joyC = new ApexCharts(
    document.querySelector('#joy-chart'),
    joyEmotion
  );
  
  joyC.render();



  var hateEmotion= {
    series: [
      {
         data: [41, 45, 42, 51, 42, 89, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var hateC = new ApexCharts(
    document.querySelector('#hate-chart'),
    hateEmotion
  );
  
  hateC.render();


  var greatefulEmotion= {
    series: [
      {
         data: [68, 55, 58, 59, 62, 90, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var gratefulC = new ApexCharts(
    document.querySelector('#grateful-chart'),
    greatefulEmotion
  );
  
  gratefulC.render();





  var empowerEmotion= {
    series: [
      {
         data: [71, 50, 58, 61, 52, 109, 100],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var empowerC = new ApexCharts(
    document.querySelector('#empower-chart'),
    empowerEmotion
  );
  
  empowerC.render();

  

  var fearfulEmotion= {
    series: [
      {
         data: [70, 4, 2, 5, 4, 10, 90],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 250,
      width:500,
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
        title:"hello",
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
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Sales Orders',
      //     style: {
      //       color: '#f5f7ff',
      //     },
      //   },
      //   labels: {
      //     style: {
      //       colors: ['#f5f7ff'],
      //     },
      //   },
      // },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var fearfulC = new ApexCharts(
    document.querySelector('#fearful-chart'),
     fearEmotion
  );
  
  fearfulC.render();
