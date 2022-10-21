class Employee {
  startShift(): void {
    console.log("Employee start to shift");
  }
  endShift(): void {
    console.log("Shift has been ended");
  }
}

const employee = new Employee();
employee.startShift();
employee.endShift();
