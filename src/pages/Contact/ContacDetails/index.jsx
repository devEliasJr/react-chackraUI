import React from "react";
import { useParams } from "react-router-dom";

export default function ContactDetails() {
  const { id } = useParams();
  return <div>ContactDetails do produto {id}</div>;
}
