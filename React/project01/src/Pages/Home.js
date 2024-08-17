import React from "react";
import TopicBox from "../components/TopicBox";
import Content from "../components/Content";

export default function Home() {
  return (
    <div>
      <h1> Homepage </h1>
      <TopicBox food="kottu" />
      <TopicBox food="rice" />
      <TopicBox food="hoppers" />
    </div>
  );
}
