// const min = 15;
// const max = 16;
// const EbNo = [];
// const EbNo2 = [];
// const EbNo3 = [];
// const EbNo4 = [];
// const EbNo5 = [];
// const dates = [];



// function Rand(min, max) {
//   return Math.random() * (max -min) + min;
// }

// for(let i=0; i <=2000 ; i++ ){
//   EbNo[i]= Rand(min, max)
//   EbNo2[i] =Rand(12,14)
//   EbNo3[i] =Rand(10,11)
//   EbNo4[i] =Rand(8,9)
//   EbNo5[i] =Rand(0,0.5)
  

// }

// for(let j=0;j<=2000;j++){
//   dates[j] = "April 15 2024 20:25";
// } 



// const ctx = document.getElementById("myChart")
// const ctx2 = document.getElementById("myChart2")
// const ctx3 = document.getElementById("myChart3")
// const ctx4 = document.getElementById("myChart4")
// const ctx5 = document.getElementById("myChart5")
// const ctx6 = document.getElementById("myChart6")


// const xlabel = ['Sx dBm', 'C°', 'EbNo (dBM)','tx(dBm)', 'BER'];
// const titulo = ['Sx strength', 'Temeratura', 'EbNo', 'Tx', 'BER'];



// function graficar(ctX, dates_, EbNo, EbNo2, EbNo3, EbNo4, EbNo5, xlabel_, titulo_) {

//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: dates_,
//       datasets: [
//         {
//         label: xlabel_[0],
//         data: EbNo,
//         borderWidth: 1
//         },
//         {
//         label: xlabel_[1],
//         data: EbNo2,
//         borderWidth: 2
//         },
//         {
//           label: xlabel_[2],
//           data: EbNo3,
//           borderWidth: 1
//         },
//         {
//           label: xlabel[3],
//           data: EbNo4,
//           borderWidth: 1
//         },
//         {
//           label: xlabel_[4],
//           data: EbNo5,
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       // responsive: false,
//       maintainAspectRatio: true,
//       // aspectRatio: 2,
//       plugins: {
//         title: {
//             display: true,
//             text: 'Estación'
//         },
//         zoom: {
//           zoom: {
//             wheel: {
//               enabled: true
//             },
//             pinch: {
//               enabled: true
//             },
//             mode: 'xy',
//           }
//         }
//     },
//       pointStyle: false,
//       scales: {
//         y: {
//           beginAtZero: true,
//           },
//         x: {
//          ticks: {
//             maxTicksLimit:6
//          }
//         }
//        },
//       }
//     });
// }
// graficar(ctx,dates,EbNo2,xlabel[0],titulo[0]);
// graficar(ctx2,dates,EbNo3,xlabel[1],titulo[1]);
// graficar(ctx3,dates,EbNo4,xlabel[2],titulo[2]);



const min = 15;
const max = 16;
const EbNo = [];
const EbNo2 = [];
const EbNo3 = [];
const EbNo4 = [];
const EbNo5 = [];
const dates = [];

function Rand(min, max) {
  return Math.random() * (max -min) + min;
}

for(let i=0; i <=2000 ; i++ ){
  EbNo[i]= Rand(min, max)
  EbNo2[i] =Rand(12,14)
  EbNo3[i] =Rand(10,11)
  EbNo4[i] =Rand(8,9)
  EbNo5[i] =Rand(0,0.5)
  

}

for(let j=0;j<=2000;j++){
  dates[j] = "April 15 2024 20:25";
}


// GRAFICAS SATELITALES

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'line',
data: {
  labels: dates,
  datasets: [
    {
    label: 'Sx (dBm)',
    data: EbNo,
    borderWidth: 1
    },
    {
    label: 'Temp (C)',
    data: EbNo2,
    borderWidth: 2
    },
    {
      label: 'Eb/No (dB)',
      data: EbNo3,
      borderWidth: 1
    },
    {
      label: 'Tx (dbm)',
      data: EbNo4,
      borderWidth: 1
    },
    {
      label: 'BERs',
      data: EbNo5,
      borderWidth: 1
    }
  ]
},
options: {
  // responsive: false,
  maintainAspectRatio: true,
  // aspectRatio: 2,
  plugins: {
    title: {
        display: true,
        text: 'Estación'
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true
        },
        pinch: {
          enabled: true
        },
        mode: 'xy',
      }
    }
},
  pointStyle: false,
  scales: {
    y: {
      beginAtZero: true,
      },
    x: {
     ticks: {
        maxTicksLimit:6
     }
    }
   },
  }
});


const ctx2 = document.getElementById("myChart2").getContext("2d");

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
      label: 'Sx (dBm)',
      data: EbNo,
      borderWidth: 1
      },
      {
      label: 'Temp (C)',
      data: EbNo2,
      borderWidth: 2
      },
      {
        label: 'Eb/No (dB)',
        data: EbNo3,
        borderWidth: 1
      },
      {
        label: 'BERs',
        data: EbNo5,
        borderWidth: 1
      }
      
    ]
  },
  options: {
    aspectRatio:2,
    plugins: {
      title: {
          display: true,
          text: 'Local'
      },zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:6
       }
      }
     },
    }
  });

const ctx3 = document.getElementById("myChart3")
new Chart(ctx3, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
      label: 'Estación ',
      data: EbNo,
      borderWidth: 1
      },
      {
      label: 'Digital ',
      data: EbNo2,
      borderWidth: 2
      },
      {
        label: 'Local ',
        data: EbNo5,
        borderWidth: 1
      }
      
    ]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: 'RTT (ms)'
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:6
       }
      }
     },
    }
  });

const ctx4 = document.getElementById("myChart4")
new Chart(ctx4, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
      label: 'Estación',
      data: EbNo,
      borderWidth: 1
      },
      {
      label: 'Local',
      data: EbNo2,
      borderWidth: 2
      }
      
    ]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: 'df'
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:6
       }
      }
     },
    }
  });



const ctx5 = document.getElementById("myChart5")
new Chart(ctx5, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
      label: 'BUC',
      data: EbNo,
      borderWidth: 1
      },
      {
      label: 'LNB',
      data: EbNo2,
      borderWidth: 2
      }
      
    ]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: 'Voltaje'
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:6
       }
      }
     },
    }
  });

const ctx6 = document.getElementById("myChart6")
new Chart(ctx6, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
      label: 'BUC',
      data: EbNo,
      borderWidth: 1
      },
      {
      label: 'LNB',
      data: EbNo2,
      borderWidth: 2
      }
      
    ]
  },
  options: {
    plugins: {
      title: {
          display: true,
          text: 'Corriente'
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:6
       }
      }
     },
    }
  });

  

 