function calculateTotal(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
console.log(calculateTotal(10, 20, 30, 40));
  