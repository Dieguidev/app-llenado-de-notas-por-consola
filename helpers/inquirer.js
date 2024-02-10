require('colors');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Que deseas hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear nota`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar notas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar notas aprobadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar notas desaprobadas`,
      },
      {
        value: '5',
        name: `${'5.'.green} Listar notas por curso`,
      },
      {
        value: '6',
        name: `${'6.'.green} Listar notas por alumno`,
      },
      {
        value: '7',
        name: `${'7.'.green} Eliminar nota`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log('=========================='.green);
  console.log('  Seleccione una opción'.white);
  console.log('==========================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};
const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
