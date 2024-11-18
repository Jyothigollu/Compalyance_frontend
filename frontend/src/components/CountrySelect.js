import React, { useState, useEffect } from "react";
import axios from "axios";

function CountrySelect({ onCountryChange }) {
  const [country, setCountry] = useState(
    localStorage.getItem("country") || "India"
  );

  useEffect(() => {
    localStorage.setItem("country", country);
    onCountryChange(country);

    // Make an API call to update the country in the backend
    axios
      .patch("http://127.0.0.1:8000/api/update-country/", { country })
      .then(() => console.log("Country updated successfully!"))
      .catch((err) => console.error("Error updating country:", err));
  }, [country, onCountryChange]); // Add 'onCountryChange' to dependencies

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <label>Select Country: </label>
      <select value={country} onChange={handleChange}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        {/* Add more countries as needed */}
      </select>
    </div>
  );
}

export default CountrySelect;
