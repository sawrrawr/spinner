const cursorPositions = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

const cursorRotation = (cursor) => {
  let time = 100;
  for (const position of cursor) {
    setTimeout(() => {
      process.stdout.write('\r  ' + position)}, time)
    time += 200;
  }
  setTimeout(() => {process.stdout.write('\n')}, 2000)
};

cursorRotation(cursorPositions);
