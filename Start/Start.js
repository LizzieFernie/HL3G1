/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("start", "./Start/costumes/start.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("startGame");
    this.visible = false;
    this.stage.costume = "board";
    this.broadcast("board");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.visible = true;
  }
}
