function sum(a,b){ //параметры
  console.log(a + b); //вывод
}
sum(3,6); //вызов функции

function rectangleArea(a,b){ 
  console.log ("rectangleArea is " + (a * b))
}
rectangleArea(23,51);



  function number(a) { 
      if (a % 2 === 0) {
        console.log ("this number is even")
      }
      else if (a % 2 !== 0) {
        console.log ("this number is not even")
      }
    }
    number(22);

    let num = 100;
    while (num >=10 ){
      console.log(num);
      num--;
    }
  
    let num1 = -10;
    while (num1 <= 10 ){
      console.log(num1);
      num1++;
    }

    function  countdown (a,b){
      for ( let i= a;i <= b; i++){
        console.log(i);
      }
      }
    countdown(10,5);

    function count(a,b){
      if (a < b){
        countup(a,b);
      }
      else {
        countdown(a,b);
      }
    }

    let name = ["Aida","Bakyt","Joldosh"];
    let res = "";
    for ( let i = 0; i < name.length; i++){
      res = res + name[i] + " "
    }
    console.log(res);
    let res2 = []
    let dlina = name.length -1;
    
      while (dlina >= 0 ){
        res2.push(name[dlina]);
        dlina --
      }
      console.log(res2)
      
      let name3 = ["Aida","Bakyt","Joldosh"];
      let result = 0;
      for (let i = 0; i<  name3.length;i ++) {
        result = result + name3[i].length;
      }
      console.log(result);
    