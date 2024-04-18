
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
  plugins: {
    title: {
        display: true,
        text: 'Estación'
    }
},
  pointStyle: false,
  scales: {
    y: {
      beginAtZero: true,
      },
    x: {
     ticks: {
        maxTicksLimit:8
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
    plugins: {
      title: {
          display: true,
          text: 'Local'
      }
  },
    pointStyle: false,
    scales: {
      y: {
        beginAtZero: true,
        },
      x: {
       ticks: {
          maxTicksLimit:8
       }
      }
     },
    }
  });

const ctx3 = document.getElementById("myChart3")
const config = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      x:{
        ticks: {
          maxTicksLimit:8
        }
      }
    }
  }
};
const Grafica3 = new Chart(ctx3, config)