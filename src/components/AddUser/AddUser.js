import React from "react";
import { json } from "react-router-dom";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Succes", data);
        alert("user added successfuly");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2>Add a user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" id="" required />
        <input type="email" name="email" placeholder="Email" required id="" />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
