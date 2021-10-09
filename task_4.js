// Задание 4

function counter(a,b){
    const intervalId = setInterval(function () {
      console.log(a);
      a++;
      if (a>b) {
        clearInterval(intervalId)
      }
    }, 1000, a); 
    
  }
  
  counter(5,15);