function oneThroughTwenty() {
  let meuRetorno = []
  for(let i=1;i <= 20; i++){
    console.log(i)
  }
  return meuRetorno
}
oneThroughTwenty()


function evensToTwenty() {
  let meuRetorno = []
    for(let x= 2;x <= 20; x+=2){
      console.log(x)
    
    }
    return meuRetorno
}
evensToTwenty()

//call function evensToTwenty

function oddsToTwenty() {
  let meuRetorno = []
  for(let i = 1;i < 20 ; i+=2){
  console.log(i)    
  }
  return meuRetorno
}

oddsToTwenty()

function multiplesOfFive() {
  let meuRetorno = []
    
  for(let x = 5; x <= 100; x+= 5){
    console.log(x)
  }
  return meuRetorno
}

multiplesOfFive()

function squareNumbers() {
  let meuRetorno = []
    for(let n = 1;n <= 10; n++){
      let multiplica = n **2
      console.log(multiplica)
    
  }
  return meuRetorno
}

squareNumbers()

function countingBackwards() {
  let meuRetorno = []

  for(let i = 20; i >= 1; i--){
  console.log(i)
  }
  return meuRetorno
}

countingBackwards()

function evenNumbersBackwards() {
  let meuRetorno = []
    for(let i = 20; i >= 1; i = i - 2){
    console.log(i)
  }
  return meuRetorno
}

evenNumbersBackwards ()

function oddNumbersBackwards() {
  let meuRetorno = []
    for(let i = 20; i >= 1; i -= 3){
    console.log(i)
    }
    return meuRetorno
}

oddNumbersBackwards ()

function multiplesOfFiveBackwards() {
  let meuRetorno = []
    for(let i = 100; i >= 1; i -= 5){
    console.log(i)
    }
    return meuRetorno
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let meuRetorno = []
    for(let i = 100; i >= 1; i--){
      let cal = i**2
      console.log(cal[i])
    }
    return meuRetorno
}

squareNumbersBackwards()
