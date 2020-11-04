import React from "react";

function Build_In() {
  //Khai bao bien
  const notification = "Ban co chat minh da du tuoi!";

  setTimeout(function () {
    alert(notification);
  }, 5000);

  return <div></div>;
}

export default Build_In;
