const { inquirerMenu, readInput, pause } = require('./helpers/inquirer');

const main = async () => {
  let opt = '';

  do {
    opt = await inquirerMenu();

    // switch (opt) {
    //   case '1':
    //     const desc = await readInput('Curso y nota: ');
    //     break;

    //   default:
    //     break;
    // }
    if (opt !== '0') await pause();
  } while (opt !== 0);
};

main();
