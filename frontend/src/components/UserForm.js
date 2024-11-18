import React, { useState } from "react";
import axios from "axios";

function UserForm({ selectedCountry, onUserCreated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users/", {
        username,
        password,
        country: selectedCountry,
      });
      alert("User created successfully!");
      onUserCreated(response.data); // Notify parent
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User</h3>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
