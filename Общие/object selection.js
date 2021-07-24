const workers = [
  {name:"Sergey", salary:9800},
  {name:"Alexa", salary:800},
  {name:"Ann", salary:1500},
  {name:"Drake", salary:8800},
  {name:"Mio", salary:300},
]

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];
  workersArr.forEach(currentWorker => {
    if (currentWorker.salary>1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })
  return worthyWorkers;
}
console.log(getWorthyWorkers(workers));