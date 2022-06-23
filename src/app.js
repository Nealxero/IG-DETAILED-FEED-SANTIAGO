/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#Excusa").innerHTML = ExcGen();
  });
  console.log("Hello Rigo from the console!");
};
let ExcGen = () => {
  let pron = ["The ", "A "];
  let suj = [
    "president ",
    "hunter ",
    "horse ",
    "robot ",
    "goldFish ",
    "dog ",
    "turtle "
  ];
  let acci = [
    "choke the ",
    "threw my ",
    "sued a ",
    "drowned a ",
    "stole my ",
    "shoot a "
  ];
  let elQue = [
    "sheet ",
    "lawyer ",
    "toy ",
    "baby ",
    "wallet ",
    "shoe ",
    "pet "
  ];
  let Dond = [
    "in the park ",
    "at home ",
    "in the office ",
    "in the congress ",
    "in the pool ",
    "at the airport "
  ];

  let pronIndx = Math.floor(Math.random() * pron.length);
  let sujIndx = Math.floor(Math.random() * suj.length);
  let acciIndx = Math.floor(Math.random() * acci.length);
  let elQueIndx = Math.floor(Math.random() * elQue.length);
  let DondIndx = Math.floor(Math.random() * Dond.length);

  return (
    pron[pronIndx] +
    "" +
    suj[sujIndx] +
    "" +
    acci[acciIndx] +
    "" +
    elQue[elQueIndx] +
    "" +
    Dond[DondIndx]
  );
};
