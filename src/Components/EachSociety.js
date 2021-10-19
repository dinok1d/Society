import React from "react";

function EachSociety({ society }) {
  return (
    <div>
      <img src={society.image} />
      <p>{society.title}</p>
      <p>{society.startDate}</p>
      <p>{society.endDate}</p>
      <p>{society.amount}</p>
      <p>{society.author.username}</p>
    </div>
  );
}

export default EachSociety;
