import React from "react";

function Variable() {
  const fullName = "Nguyen Hoan Thuat";
  const age = 22;

  return (
    <div>
      <h1>
        Toi ten la: {fullName} va toi {age} tuoi!
      </h1>
    </div>
  );
}

export default Variable;
