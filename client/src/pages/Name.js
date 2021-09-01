import React from "react";
// import Names from "./Names";

const Name = ({ data, filter, gender }) => {
  console.log(filter, gender);
  return (
    <div className="wrapper">
      {data
        .filter((f) => f.name.includes(filter) || filter === "")
        .filter((f) => f.sex.includes(gender))
        // .filter((f) => f.sex.includes("f"))
        .map((data) => (
          <div>
            {data.sex === "f" && <button className="girl">{data.name}</button>}
            {data.sex === "m" && <button className="boy">{data.name}</button>}
          </div>
        ))}
    </div>
  );
};

export default Name;
