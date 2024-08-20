import React, { useState } from "react";
import registerService from "../../services/registerService";
import { useNavigate } from 'react-router-dom';
import Modal from "../modal";
import "../login/style.css"
import "./style.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeUser, setTypeUser] = useState(1);
  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [accept, setAccept] = useState(false);
  const [typeUserError, setTypeUserError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = {
        name,
        lastname,
        username,
        password,
        rol_id: parseInt(typeUser),
      };


      name === '' ? setNameError(true) : setNameError(false)
      lastname === '' ? setLastnameError(true) : setLastnameError(false)
      username === '' ? setUsernameError(true) : setUsernameError(false)
      password === '' ? setPasswordError(true) : setPasswordError(false)
      typeUser === '' ? setTypeUserError(true) : setTypeUserError(false)


      if(name !== "" && lastname !== "" && username !== "" && password !==""){
         let res =  await registerService(data);
         console.log(res)
         setIsModalOpen(true)

      }

    } catch (e) {
      console.log(e);
    }
  };

  console.log(accept)

  return (
    <div className="register-container">
      <div className="register-content">
      <Modal isAccept={true} isOpen={isModalOpen} onClose={() => Navigate('/login')} children={<p>Usuario creado correctamente</p>}/>
      <h2>Registrarse</h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="input-group-register">
          <div className="label-container">
            {nameError && <label htmlFor="">El nombre es requerido</label>}
          </div>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value) }

          />
        </div>
        <div className="input-group-register">
          <div className="label-container">
            {lastnameError && <label htmlFor="">El apellido es requerido</label>}
          </div>
          <input
            type="text"
            id="lastname"
            placeholder="Apellido"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              if(lastname !== '' ) setLastnameError(false)
              setLastname(e.target.value)
            }}

          />
        </div>
        <div className="input-group-register">
          <div className="label-container">
          {usernameError && <label htmlFor="">El usuario es requerido</label>}
          </div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group-register">
          <div className="label-container">
          {passwordError && <label htmlFor="">La contraseña es requerida</label>}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group-register">
          <div className="label-container">
            {typeUserError && <label htmlFor="">El tipo de usuario es requerido</label>}
          </div>
          <select
            className="custom-select"
            name="type-user"
            value={typeUser}
            onChange={(e) => setTypeUser(e.target.value)}
            id="type-user"
          >
            <option value="1">Administrador</option>
            <option value="2">Empleado</option>
          </select>
        </div>
        <button type="submit" className="login-button">
          Registrar usuario
        </button>
      </form>
      </div>
    </div>
  );
};

export default Register;
