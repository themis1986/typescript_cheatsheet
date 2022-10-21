class Employee {
  constructor(public age: number) {}
  //   public startShift(): void {
  //     console.log("Employee start to shift");
  //   }
  protected endShift(): void {
    console.log("Shift has been ended");
  }
}

class Mechanic extends Employee {
  constructor(public name: string, age: number) {
    super(age);
  }
  private startShift(): void {
    console.log("Mechanic start to shift");
  }

  goToWork(): void {
    this.startShift();
    this.endShift();
  }
}

const employee = new Employee(29);
console.log(employee.age);
// employee.startShift();
// employee.endShift();

const mechanic = new Mechanic(29);
// mechanic.startShift();
// mechanic.endShift();
mechanic.goToWork();
