import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Robot from "./Robot/Robot.js";
import Redflag from "./Redflag/Redflag.js";
import Up from "./Up/Up.js";
import Down from "./Down/Down.js";
import Left from "./Left/Left.js";
import Right from "./Right/Right.js";
import Algo from "./Algo/Algo.js";
import Seq from "./Seq/Seq.js";
import Flowchart from "./Flowchart/Flowchart.js";
import Back from "./Back/Back.js";
import Start from "./Start/Start.js";
import Birds from "./Birds/Birds.js";
import Next from "./Next/Next.js";

const stage = new Stage({ costumeNumber: 7 });

const sprites = {
  Robot: new Robot({
    x: -21,
    y: 151,
    direction: 90,
    costumeNumber: 1,
    size: 31,
    visible: true,
    layerOrder: 10
  }),
  Redflag: new Redflag({
    x: -150,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 11,
    visible: true,
    layerOrder: 2
  }),
  Up: new Up({
    x: 208,
    y: 117,
    direction: 0,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 9
  }),
  Down: new Down({
    x: 209,
    y: 52,
    direction: 180,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 3
  }),
  Left: new Left({
    x: 209,
    y: -94,
    direction: -90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 11
  }),
  Right: new Right({
    x: 209,
    y: -19,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 8
  }),
  Algo: new Algo({
    x: -4,
    y: -26,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 5
  }),
  Seq: new Seq({
    x: -4,
    y: -66.53194583402257,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 7
  }),
  Flowchart: new Flowchart({
    x: -3.555319677483702,
    y: -108.76117764457251,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 6
  }),
  Back: new Back({
    x: 170,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 1
  }),
  Start: new Start({
    x: 140.39430872249287,
    y: -143.74047306456814,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 4
  }),
  Birds: new Birds({
    x: -68,
    y: 42,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 12
  }),
  Next: new Next({
    x: 170,
    y: 142,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 13
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
