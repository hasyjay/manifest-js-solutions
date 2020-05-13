



let Employee = {
    salary: X
  };
  
  let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 25000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
  };
  
  function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
  }
  
  function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
  }
  
  function calculateBonus() {
    return .02 * Employee.salary;
  }
  
  function getCadre() {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  }
  
  
  
  
  
//   What is the pay grade of the employee with a Salary of X = 75000? = midlevel
//   How much in tax will an employee with a Salary of X = 25000 pay? = 1,250
//   What is the bonus paid for an employee with a Salary of X = 45000? = 900
//   What are the benefits for employees with a Salary between X = 60000 and 70000 = [health, housing]
//   What cadre does an employee with a Salary of X = 10000 belong? = senior level


1.  'pay grade of the employee with a salary of 75000 is midLevel' = payGrades.midLevel

2. 'total tax for an employee with 25000 = 1,250'

3. 'bonus for an employee with a salary of 45000 = 900'

4. 'benefits of employees with salary between 60000 and 70000 = [health, housing]'

5. 'cadre with a salary of 10000 is a seniorLevel according to the return statement of the cadre function'
  