let input = process.argv;
let modifiedinput = input.slice(2);

for (let element of modifiedinput) {
  if (element !== '' && Number(element) > 0 && element != NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep at time : ${element}`); //cannot hear the beep sound so putting console instead
    }, element * 1000);
  }
}