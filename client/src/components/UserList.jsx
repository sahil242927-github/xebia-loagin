import React, { useState, useEffect } from "react";
import users from "../apis/users";

const UserList = () => {
  const [usersList, setUserList] = useState([]);

  const getUsers = async () => {
    const response = await users.get("/users");
    setUserList(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderUserList = () => {
    return usersList.map(user => (
      <tr>
        <th scope="row" key={user.id}>
          {user.id}
        </th>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    ));
  };
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>{renderUserList()}</tbody>
    </table>
  );
};

export default UserList;
