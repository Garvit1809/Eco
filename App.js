import './App.css'

import React, { useState } from "react";

function App() {
  const list = [
    "Oral Hygeine",
    "Toothpaste",
    "Shampoo",
    "Soap",
    "Household Items",
    "Cleaning products",
    "Clothing",
    "Feminine products",
    "Other"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <h1>Product Substitution</h1>
      <p1>Find eco-friendly products instead of commercial ones.</p1>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
    
    
  );
}

export default App;
