let delay = 200;
const spinner = ["|", "/", "-", "\\"];
const end = delay * spinner.length;

const loop = setInterval(() => {
  for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinner[i]}    `);
    }, delay * i);
  }
}, end);

setTimeout(() => {
  clearInterval(loop);
  process.stdout.write("\n");
}, 4000);