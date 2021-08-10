function oneThroughTwenty() {
  let meuRetorno = []
  for(let i=1;i <= 20; i++){
      meuRetorno.push(i)    
  }
  return meuRetorno
}
oneThroughTwenty()
console.log(oneThroughTwenty())

function evensToTwenty() {
  let meuRetorno = []
    for(let x= 2;x <= 20; x+=2){
      meuRetorno.push(x)
    }
    return meuRetorno
}
evensToTwenty()
console.log(evensToTwenty())

function oddsToTwenty() {
  let meuRetorno = []
  for(let i = 1;i < 20 ; i+=2){
  meuRetorno.push(i)  
  }
  return meuRetorno
}

oddsToTwenty()
console.log(oddsToTwenty())

function multiplesOfFive() {
  let meuRetorno = []
    
  for(let x = 5; x <= 100; x+= 5){
    meuRetorno.push(x)
  }
  return meuRetorno
}

multiplesOfFive()
console.log(multiplesOfFive())

function squareNumbers() {
  let meuRetorno = []
    for(let n = 1;n <= 10; n++){
      let multiplica = n **2
      meuRetorno.push(multiplica)
    
  }
  return meuRetorno
}

squareNumbers()
console.log(squareNumbers())

function countingBackwards() {
  let meuRetorno = []

  for(let i = 20; i >= 1; i--){
  meuRetorno.push(i)
  }
  return meuRetorno
}

countingBackwards()
console.log(countingBackwards())

function evenNumbersBackwards() {
  let meuRetorno = []
    for(let i = 20; i >= 1; i = i - 2){
    meuRetorno.push(i)
  }
  return meuRetorno
}

evenNumbersBackwards ()
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let meuRetorno = []
  let calculo = 0
    for(let i = 20; i >= 1; i--){
      if(i % 2 === 1){
        calculo = i 
        meuRetorno.push(calculo)
      }
    }
    return meuRetorno
}
//AQUI TA O ERRO 
oddNumbersBackwards ()
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let meuRetorno = []
    for(let i = 100; i >= 1; i -= 5){
      meuRetorno.push(i)
    }
    return meuRetorno
}

multiplesOfFiveBackwards()
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let meuRetorno = []
  let calculo
    for(let i = 10; i >= 1; i--){
      calculo = i**2
      meuRetorno.push(calculo)
    }
    return meuRetorno
}

squareNumbersBackwards()
console.log(squareNumbersBackwards())
