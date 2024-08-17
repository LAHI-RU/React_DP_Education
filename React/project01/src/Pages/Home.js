import React from "react";
import TopicBox from "../components/TopicBox";
import Content from "../components/Content";

export default function Home() {
  return (
    <div>
      <h1> Homepage </h1>
      <TopicBox food="kottu" price="Rs.250">
        <span> This is the description </span>
      </TopicBox>
      <TopicBox food="rice" price="Rs.350">
        <button> This is a button </button>
      </TopicBox>
      <TopicBox food="hoppers" price="Rs.150">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam itaque
          cumque molestias assumenda quibusdam esse!{" "}
        </p>
      </TopicBox>
    </div>
  );
}
