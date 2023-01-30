function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((a, b) => a + b);
  }
  let registers = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let minTime = Math.min(...registers);
    let minIndex = registers.indexOf(minTime);
    registers[minIndex] += customers[i];
  }
  return Math.max(...registers);
}

  const customer1 = [5, 3, 4];
	const customer2 = [10, 2, 3, 3];
	const customer3 = [];
	const customer4 = [26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14];
	const customer5 = [34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47];
	const customer6 = [19, 1, 27, 35, 16, 4, 45, 49, 41, 25];

	const n1 = 1;
	const n2 = 2;
	const n4 = 4;
	const n5 = 5;


  console.log(queueTime(customer1, n1));
  console.log(queueTime(customer2, n2));
  console.log(queueTime(customer3, n1));
  console.log(queueTime(customer4, n1));
  console.log(queueTime(customer5, n4));
  console.log(queueTime(customer6, n5));
