/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(`#excuse`).innerHTML = RandomExcuse();
  console.log("JM was here!");
};

let RandomExcuse = () => {
  let who = [
    `The dog`,
    `My grandma`,
    "Jesus",
    `The cat`,
    `A cow`,
    `My neighbor`,
    `My cousin`
  ];
  let action = [`ate`, `peed`, `crushed`, `broke`, `lost`, `sold`, `took`];
  let what = [
    `my homework`,
    `the keys`,
    `the car`,
    `my house`,
    `my partner`,
    `the smartphone`,
    `my wallet`
  ];
  let when = [
    `before the class`,
    `while I was working`,
    `when I finish using it`,
    `during my lunch`,
    `while I was praying`,
    `last weekend`,
    `this morning`
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
