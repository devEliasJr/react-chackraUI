import React from "react";
import { Link } from "react-router-dom";


export function Contact() {


  return (
    <div>
      Contact
      <p>
        <Link to="/contact/1">Contato1</Link>
      </p>
      <p>
        <Link to="/contact/2">Contato2</Link>
      </p>
      <p>
        <Link to="/contact/3">Contato3</Link>
      </p>
    </div>
  );
}
