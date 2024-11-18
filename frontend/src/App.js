import React, { useState } from "react";
import CountrySelect from "./components/CountrySelect";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleUserCreated = () => {
    alert("User list will refresh automatically!");
  };

  return (
    <div>
      <h1>User Management System</h1>
      <CountrySelect onCountryChange={handleCountryChange} />
      <UserForm
        selectedCountry={selectedCountry}
        onUserCreated={handleUserCreated}
      />
      <UserList selectedCountry={selectedCountry} />
    </div>
  );
}

export default App;
