/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Birds extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "birdforwin-removebg-preview",
        "./Birds/costumes/birdforwin-removebg-preview.png",
        { x: 270, y: 231 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "flow" }, this.whenIReceiveFlow),
      new Trigger(Trigger.BROADCAST, { name: "seq" }, this.whenIReceiveSeq),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result2" },
        this.whenIReceiveResult2
      ),
      new Trigger(Trigger.BROADCAST, { name: "algo" }, this.whenIReceiveAlgo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFlow() {
    this.visible = false;
  }

  *whenIReceiveSeq() {
    this.visible = false;
  }

  *whenIReceiveResult2() {
    this.goto(-68, 42);
    this.visible = true;
  }

  *whenIReceiveAlgo() {
    this.visible = false;
  }

  *whenIReceiveResult() {
    this.goto(-113, -8);
    this.visible = true;
    yield* this.sayAndWait(
      "" + "You scored " + ("" + this.stage.vars.score + " out of 3 "),
      2
    );
  }
}
