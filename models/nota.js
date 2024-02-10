const { v4: uuidv4 } = require('uuid');

class Nota {
  id = '';
  desc = '';
  CargadoEl = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.CargadoEl = new Date();
  }
}

module.exports = Nota;
