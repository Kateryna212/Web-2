let result = 0;

// Починаємо з i = 2, бо argv[0] та argv[1] нам не потрібні
for (let i = 2; i < process.argv.length; i++) {
  // Number() перетворює рядок "1" у число 1
  result += Number(process.argv[i]);
}

console.log(result);
