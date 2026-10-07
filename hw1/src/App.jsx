import React from "react";
import { Age } from "./components/Age";
import { Address } from "./components/Address";

export function App() {
  var users = [
    {
      ime: "Valentin",
      prezime: "Cvetanovski",
      adresa: "Skopje",
      godini: 25,
    },
    {
      ime: "Marko",
      prezime: "Markoski",
      adresa: "Bitola",
      godini: 17,
    },
    {
      ime: "Ana",
      prezime: "Stojanovska",
      adresa: "Skopje",
      godini: 22,
    },
    {
      ime: "Stefan",
      prezime: "Stefanovski",
      adresa: "Ohrid",
      godini: 16,
    },
  ];

  return (
    <div id="app">
      <Age users={users} />

      <hr />

      <Address users={users} />
    </div>
  );
}
