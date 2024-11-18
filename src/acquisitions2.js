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



const ctx7 = document.getElementById("myChart7")
const ctx8 = document.getElementById("myChart8")
const ctx9 = document.getElementById("myChart9")
const ctx10 = document.getElementById("myChart10")


const xlabel = ['Sx dBm','V', 'C°', 'S'];
const titulo = ['Sx strength','Voltaje', 'Temeratura', 'Latencia'];



function graficar(ctX, dates_, EbNo_,xlabel_,titulo_) {

  new Chart(ctX, {
    type: 'line',
    data: {
      labels: dates_,
      datasets: [
        {
        label: xlabel_,
        data: EbNo_,
        borderWidth: 1
        }
        
      ]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: titulo_
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
}
graficar(ctx7,dates,EbNo2,xlabel[0],titulo[0]);
graficar(ctx8,dates,EbNo3,xlabel[1],titulo[1]);
graficar(ctx9,dates,EbNo4,xlabel[2],titulo[2]);
graficar(ctx10,dates,EbNo4,xlabel[3],titulo[3]);


