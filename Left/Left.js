/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Left extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button", "./Left/costumes/button.png", { x: 360, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.BROADCAST, { name: "board" }, this.whenIReceiveBoard),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenIReceiveBoard() {
    this.goto(209, -94);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("moveLeft");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
