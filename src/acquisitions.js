const min = 15;
const max = 16;
const EbNo = [];
const dates = [];

function Rand(min, max) {
  return Math.random() * (max -min) + min;
}

for(let i=0; i <=2000 ; i++ ){
  EbNo[i]= Rand(min, max)
}

for(let j=0;j<=2000;j++){
  dates[j] = "April 15 2024 20:25";
}


// GRAFICAS SATELITALES
const ctx = document.getElementById('myChart');



new Chart(ctx, {
type: 'line',
data: {
  labels: ['04-Abr', '05-Abr', '06-Abr', '07-Abr', '08-Abr', '09-Abr', '10-Abr', '11-Abr', '12-Abr','04-Abr', '05-Abr', '06-Abr', '07-Abr', '08-Abr', '09-Abr', '10-Abr', '11-Abr', '12-Abr'],
  datasets: [
    {
    label: 'dBm',
    data: [50.2, 50.3, 51, 53, 55, 52,50.2, 50.3, 51, 53, 55, 52,50.2, 50.3, 51, 53, 55, 52,50.2, 50.3, 51, 53, 55, 52],
    borderWidth: 1
    },
    {
      label: 'dBm',
      data: [16.1, 16.2, 16.4, 16.5, 18, 14,16.1, 16.2, 16.4, 16.5, 18, 14],
      borderWidth: 2
      },
  ]
},
options: {
  pointStyle: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});


const Grafica1 = document.getElementById("myChart2").getContext("2d");


  // Creando datos para la grafica ["Abr 10", "Abr 10","Abr 10","Abr 10","Abr 10","Abr 10" ]
const datos = {
  labels: dates,
  datasets:[{
    label: "temperatura",
      data: EbNo,
  }]
};



//CreaDO  opciones de grafica

const ChartOpt = { 
  
  scales: {
    y: {
      beginAtZero: true
    },
    x: {
     
    }
  },
  fill: false,
  borderWidth: 1,
  pointStyle: false,
  tension: 0,
  showScale: false
  
  
}

new Chart(Grafica1,{
  type: "line",
  data: datos,
  options: ChartOpt
});

// Creando funcion para la grafica 
  

