import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const updatedUser = { name, email };

    fetch("http://localhost:5000/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
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
      <h2>Updating user: {user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="Name" id="" required />
        <input type="email" name="email" placeholder="Email" required id="" />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
