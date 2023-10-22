// src/UserTable.js
import React, { useState, useEffect } from 'react';

function UserTable() {
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then(json=>setData(json.users))
   }, []);

  return (
    <div>
      <h1>Dummy data</h1>
      <table width="100%">
        <thead>
          <tr>
          <th>Sno</th>
          <th>Profile pic</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><img src={item.image} width="80px"/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;