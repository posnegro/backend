const { request, response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");

const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: "GET usuarios",
  });
};

const usuariosPost = async (req = request, res = response) => {



  const { nombre, email, password, rol } = req.body;

  const usuario = new Usuario({nombre, email, password, rol});

  //encriptar
  const salt = bcrypt.genSaltSync()
  //aplica la encriptacion
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save()

  res.json({
   msg : "Usuario creado" ,
   usuario 
  });
};
const usuariosPut = async (req = request, res = response) => {

  const id = req.params.id;
  const {_id,email,rol,password, ...rest} = req.body
  if(password){
    const salt = bcryptjs.genSaltSync()
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id,rest,{new:true});

  res.json({
    msg: "PUT usuarios",
    usuario,
  });
};
const usuariosDelete = async (req = request, res = response) => {
  const id = req.params.id

  //borrar
  //const usuario = await Usuario.findByIdAndDelete(id)
  const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});
    res.json({
    msg: "Delete usuarios",
    usuario,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
