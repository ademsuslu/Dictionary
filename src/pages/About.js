import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="About">
        <div className="AboutDesc">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            fugit in quaerat eum, ratione at laborum iure quo odio numquam
            magnam pariatur, deleniti quos ad reiciendis tempora libero,
            excepturi amet.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            fugit in quaerat eum, ratione at laborum iure quo odio numquam
            magnam pariatur, deleniti quos ad reiciendis tempora libero,
            excepturi amet.
          </p>
        </div>
      </div>
    </>
  );
}
