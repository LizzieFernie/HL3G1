/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button", "./Up/costumes/button.png", { x: 360, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "board" }, this.whenIReceiveBoard),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBoard() {
    this.goto(208, 117);
    this.visible = true;
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("moveUp");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
