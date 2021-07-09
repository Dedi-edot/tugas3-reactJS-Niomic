import React from "react";

const TopEvents = () => {
  const handleFooter = (value) => {
    alert(value);
  };
  return (
    <div>
      <a href="#" onClick={() => handleFooter("Back To Home")}>
        Back to Home
      </a>
    </div>
  );
};

export default TopEvents;
