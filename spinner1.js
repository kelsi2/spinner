let count = 100;

for (let i = 0; i < 100; i++) {

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, count + (i * 1000));

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, count * 2 + (i * 1000));

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, count * 3 + (i * 1000));

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, count * 4 + (i * 1000));

  // ... fill in the rest yourself ...

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r|   ');
  }, count * 5 + (i * 1000));
};