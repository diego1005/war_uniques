import React, { useEffect, useState } from "react";
import "./UsersTable.css";

function UsersTable(props) {
  const [users, setUsers] = useState([]);

  const urlApiImgUser = "http://localhost:3001/images/user-image/";
  
  useEffect(() => {
    console.log("%cSe monto el componente", "color: green");
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => {setUsers(data)})
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bigdady">
      <div className="contador">
        <p>CANTIDAD DE USUARIOS: {users.length}</p>
      </div>
      {users.length === 0 && <p>Cargando...</p>}
      {users.map((user, i) => {
        return (
          <div key={i} className = "usuarios">
            <div><p className="campo">NOMBRE: </p><p className="content">{user.name} {user.lastname}</p></div>
            <div><p className="campo">ID: </p><p className="content">{user.id}</p></div>
            <div><p className="campo">EMAIL:</p><p className="content">{user.email}</p></div>
            <div className="avatar"><img src={urlApiImgUser + user.imageURL} alt="avatar"/></div>
          </div>
        );
      })}
    </div>
  );
}

export default UsersTable;
