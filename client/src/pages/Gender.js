import React, { useState } from "react";
import Search from "./Search";

function Gender() {
const [gender, setGender] = useState("");
function toggleMale() {
  setGender("m");
}
function toggleFemale() {
  setGender("f");
}
function toggleNeutral() {
  setGender("");
}

    return (
      <div>
        <button
          onClick={toggleMale}
          style={{ backgroundColor: "lightskyblue" }}
        >
          Male
        </button>
        <button onClick={toggleFemale} style={{ backgroundColor: "pink" }}>
          Female
        </button>
        <button onClick={toggleNeutral} style={{ backgroundColor: "yellow" }}>
          Neutral
        </button>
        <Search gender={gender} />
      </div>
    );
}

export default Gender;