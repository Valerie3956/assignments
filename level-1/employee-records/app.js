function Employee (name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status
    this.printEmployeeForms = function(){
        return "Name: " + this.name + ", Job Totle: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status
    }
}

const Valerie = new Employee( "Valerie", "Mom", "$0/hour")
const Rick = new Employee( "Rick", "Software Developer", "$100/hour", "Part Time")
const Roy = new Employee("Roy", "Destructor of Things", "Hugs and Kisses", "Contract")
const Claire = new Employee("Claire", "Repeater of Things", "Hugs and Kisses", "Contract")


console.log(Valerie.printEmployeeForms())
console.log(Rick.printEmployeeForms())
console.log(Roy.printEmployeeForms())
console.log(Claire.printEmployeeForms())