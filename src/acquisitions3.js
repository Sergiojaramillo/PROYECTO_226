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

const ctx11 = document.getElementById("myChart11")
  new Chart(ctx11, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
        label: 'Sx dBm',
        data: EbNo,
        borderWidth: 1
        }
        
      ]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Sx strength (dBm)'
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

const ctx12 = document.getElementById("myChart12")
  new Chart(ctx12, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
        label: '-',
        data: EbNo,
        borderWidth: 1
        }
        
      ]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'VSWR'
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

    const ctx13 = document.getElementById("myChart13")
  new Chart(ctx13, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
        label: 'C°',
        data: EbNo,
        borderWidth: 1
        }
        
      ]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Temperatura C°'
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

    const ctx14 = document.getElementById("myChart14")
    new Chart(ctx14, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
          label: 'S',
          data: EbNo,
          borderWidth: 1
          }
          
        ]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Latency'
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