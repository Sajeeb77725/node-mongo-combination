import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
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
