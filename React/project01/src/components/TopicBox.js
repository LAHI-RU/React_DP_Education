import React from "react";
import "./topicbox.css";

export default function TopicBox() {
  const topic = "My favourite food is Kottu";
  const item = " and rice";
  return (
    <div>
      <div className="topicBox">
        <span className="text">
          {" "}
          {topic} {item}{" "}
        </span>
      </div>
    </div>
  );
}
