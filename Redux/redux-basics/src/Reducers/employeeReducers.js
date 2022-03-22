export default function employeeReducer(store = [], action) {
  switch (action.type) {
    case "ALL_EMPLOYEES":
      debugger;
      return action.payload;
    case "DELETE_EMPLOYEE":
      return store.filter((employee) => {
        return employee.id !== action.payload;
      });
    default:
      return [];
  }
}
