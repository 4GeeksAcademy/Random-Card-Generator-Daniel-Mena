/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let palos = [
    "<div class='fs-1 text-danger border-0'>♦</div>",
    "<div class='fs-1 text-danger border-0'>♥</div>",
    "<div class='fs-1 border-0'>♠</div>",
    "<div class='fs-1 border-0'>♣</div>"
  ];
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumero = Math.floor(Math.random() * numeros.length);
  let elementPalos = document.getElementsByClassName("palo");
  elementPalos[0].innerHTML = palos[randomPalos];
  elementPalos[1].innerHTML = palos[randomPalos];
  document.querySelector(".numero").innerHTML = numeros[randomNumero];
};
