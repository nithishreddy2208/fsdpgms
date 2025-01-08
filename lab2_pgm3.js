function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
  }
  
  const employee = { name: 'abc',
     role: 'SD',
      age: 23, location: 'INDIA' 
    };
  console.log(updateEmployeeDetails(employee, 'Senior Developer'));
  