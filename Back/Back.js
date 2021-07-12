/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("back", "./Back/costumes/back.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveSwitch() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "result2";
    this.broadcast("result2");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
