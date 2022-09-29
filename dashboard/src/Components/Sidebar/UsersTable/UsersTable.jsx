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
      {users.length === 0 && <p>Cargando...</p>}
      {users.map((user, i) => {
        return (
          <div key={i} className = "usuarios">
            <div><h4>NOMBRE: </h4><p>{user.name} {user.lastname}</p></div>
            <div><h4>ID: </h4><p>{user.id}</p></div>
            <div><h4>EMAIL:</h4><p>{user.email}</p></div>
            <div className="avatar"><img src={urlApiImgUser + user.imageURL} alt="avatar"/></div>
          </div>
        );
      })}
    </div>
  );
}

export default UsersTable;
