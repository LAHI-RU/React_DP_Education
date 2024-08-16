import React from "react";
import "./topicbox.css";

export default function TopicBox() {
  //   const topic = "My favourite food is Kottu";
  //   const item = " and hoppers";

  //   const a = 10;
  //   const b = 20;
  //   const c = a + b;

  const foodprices = { kottu: "250", rice: "350" };

  return (
    <div>
      <div className="topicBox">
        <span className="text">{foodprices}</span>
      </div>
    </div>
  );
}
