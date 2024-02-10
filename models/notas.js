const Nota = require('./nota');

class Notas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearNota(desc = '') {
    const nota = new Nota(desc);
    this._listado[nota.id] = nota;
  }
}

module.exports = Notas;
