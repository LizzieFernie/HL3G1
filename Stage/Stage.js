/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("intro", "./Stage/costumes/intro.svg", {
        x: 240.36251831054688,
        y: 181.69999999999993
      }),
      new Costume("flowchart", "./Stage/costumes/flowchart.svg", {
        x: 240,
        y: 181.8000030517578
      }),
      new Costume("sequence", "./Stage/costumes/sequence.svg", {
        x: 242.54163395799011,
        y: 181.67874678435805
      }),
      new Costume("algorithm", "./Stage/costumes/algorithm.svg", {
        x: 242.54163395799011,
        y: 180.68675646142145
      }),
      new Costume("result", "./Stage/costumes/result.svg", {
        x: 240.00000000000028,
        y: 180
      }),
      new Costume("result2", "./Stage/costumes/result2.svg", {
        x: 238.99999999999994,
        y: 180
      }),
      new Costume("board", "./Stage/costumes/board.png", { x: 360, y: 360 }),
      new Costume("q1robot", "./Stage/costumes/q1robot.png", {
        x: 360.5,
        y: 360
      }),
      new Costume("q2robot", "./Stage/costumes/q2robot.jpg", {
        x: 360.5,
        y: 360
      }),
      new Costume("q3robot", "./Stage/costumes/q3robot.jpg", {
        x: 360.5,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch1" },
        this.whenIReceiveSwitch1
      )
    ];

    this.vars.myVariable = 0;
    this.vars.moves = 0;
    this.vars.a1 = 0;
    this.vars.score = 3;
  }

  *whenGreenFlagClicked() {
    this.costume = "intro";
    this.broadcast("intro");
  }

  *whenIReceiveWin() {
    this.costume = "result";
    this.broadcast("result");
  }

  *whenIReceiveQ1() {
    this.costume = "q1robot";
  }

  *whenIReceiveQ3() {
    this.costume = "q3robot";
  }

  *whenIReceiveQ2() {
    this.costume = "q2robot";
  }

  *whenIReceiveSwitch1() {
    this.costume = "board";
    this.broadcast("board");
  }
}
