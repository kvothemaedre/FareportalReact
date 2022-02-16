var Singleton = (function Employee(name, age, salary, jobdesc, level) {
var username= name;
  var userage = age;
  var usersalary = salary;
  var id = Date.now();
  var userjobdesc = jobdesc;
  var userlevel = level;
  var managerName = "Shivam";
  const calculateIncrement = function(amount) {
    usersalary = usersalary + amount;
    return usersalary ;
  }
 

  const getAge = function() {
    return userage;
  }

  const getId = function() {
      return id;
  }
  const getName = function() {
    return username;
  } 

  const getDesignation = function() {
    return userjobdesc+userlevel;
  }

  const changeLevel = function(newLevel) {
    userlevel = newLevel;
  }

  const changeJobDesc = function(newDesc) {
    userjobdesc = newDesc;
  }

  const setManagerName = function(manager) {
    managerName = manager;   
  }

  const getManagerName = function() {
      return managerName;
  }
  return {
    calculateIncrement: calculateIncrement,
    getId : getId,
    getName : getName,
    getAge: getAge,
    getDesignation : getDesignation,
    getManagerName:getManagerName,
    changeLevel : changeLevel,
    changeJobDesc : changeJobDesc,
    setManagerName : setManagerName
  }
})("Darshan", 21,10000,"SDE",1 );


console.log(Singleton.getName());
console.log(Singleton.getAge());
console.log(Singleton.getDesignation());
console.log(Singleton.getManagerName());
console.log(Singleton.getId());
console.log(Singleton.calculateIncrement(1000));
