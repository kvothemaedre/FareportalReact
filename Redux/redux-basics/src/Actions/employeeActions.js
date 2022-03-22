export function setEmployeeList(employeeList) {
  debugger;
  return {
    type: "ALL_EMPLOYEES",
    payload: employeeList,
  };
}

export function deleteEmployee(employeeID) {
  debugger;
  return {
    type: "DELETE_EMPLOYEE",
    payload: employeeID,
  };
}
