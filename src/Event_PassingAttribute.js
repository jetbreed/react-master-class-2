import React from "react";

function Football1() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>
        Take the shot!
    </button>
  );
}

export default Football1;
