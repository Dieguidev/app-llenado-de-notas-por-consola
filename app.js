const { saveDB } = require('./helpers/SaveFile');
const { inquirerMenu, readInput, pause } = require('./helpers/inquirer');
const Notas = require('./models/notas');

const main = async () => {
  let opt = '';

  const notas = new Notas();

  if (opt !== '0') await pause();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await readInput('Curso y nota: ');
        notas.crearNota(desc);
        break;
      case '2':
        break;
    }

    if (opt !== '0') await pause();

    // saveDB(notas.listadoArr);
  } while (opt != 0);
};

main();
