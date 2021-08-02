/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("name").innerHTML = dominio();
  });
};

let pronoun = ["the", "this", "that"];
let adj = ["magnificent", "little", "amazing"];
let noun = ["cat", "dog", "frog"];
let extension = [".com", ".es", ".org"];

function dominio() {
  let url = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          url += pronoun[i] + adj[j] + noun[k] + extension[l] + "<br>";
        }
      }
    }
  }
  return url;
}
