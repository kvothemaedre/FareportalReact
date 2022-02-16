function EmployeeDetails() {
  var name= "Darshan";
  var age = 21;
  var salary = 10000;
  var id = Date.now();
  var jobdesc = "SDE";
  var level = "1";
  var managerName = "Shivam";
  const calculateIncrement = function(amount) {
    salary = salary + amount;
      return salary;
  }

  const getAge = function() {
    return age;
  }

  const getId = function() {
      return id;
  }
  const getName = function() {
    return name;
  } 

  const getDesignation = function() {
    return jobdesc+level;
  }

  const changeLevel = function(newLevel) {
    level = newLevel;
  }

  const changeJobDesc = function(newDesc) {
    jobdesc = newDesc;
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
}

var newEmployee = EmployeeDetails()

console.log(newEmployee.getName());
console.log(newEmployee.getAge());
console.log(newEmployee.getDesignation());
console.log(newEmployee.getManagerName());
console.log(newEmployee.getId());
console.log(newEmployee.calculateIncrement(1000));


