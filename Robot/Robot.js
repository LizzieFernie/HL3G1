/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Robot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("5x35n5", "./Robot/costumes/5x35n5.svg", { x: 80, y: 77 })
    ];

    this.sounds = [
      new Sound("robotBuzz", "./Robot/sounds/robotBuzz.wav"),
      new Sound("winSound", "./Robot/sounds/winSound.wav"),
      new Sound("Drum Bass3", "./Robot/sounds/Drum Bass3.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "moveUp" },
        this.whenIReceiveMoveup
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moveDown" },
        this.whenIReceiveMovedown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moveLeft" },
        this.whenIReceiveMoveleft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moveRight" },
        this.whenIReceiveMoveright
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "q1" }, this.whenIReceiveQ1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch1" },
        this.whenIReceiveSwitch1
      ),
      new Trigger(Trigger.BROADCAST, { name: "q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenIReceiveMoveup() {
    this.y += 43;
    if (this.touching(Color.rgb(0, 0, 0))) {
      this.y += -38.5;
    }
    if (this.touching(Color.rgb(143, 142, 128))) {
      yield* this.startSound("Drum Bass3");
      this.y += -43;
    }
    yield* this.startSound("robotBuzz");
    if (this.touching(this.sprites["Redflag"].andClones())) {
      yield* this.sayAndWait("Game Over!", 2);
      this.broadcast("win");
    }
  }

  *whenIReceiveMovedown() {
    this.y += -43;
    if (this.touching(Color.rgb(0, 0, 0))) {
      this.y += 37;
    }
    if (this.touching(Color.rgb(143, 142, 128))) {
      yield* this.startSound("Drum Bass3");
      this.y += 43;
    }
    yield* this.startSound("robotBuzz");
    if (this.touching(this.sprites["Redflag"].andClones())) {
      yield* this.sayAndWait("Game Over!", 2);
      this.broadcast("win");
    }
  }

  *whenIReceiveMoveleft() {
    this.x += -43;
    if (this.touching(Color.rgb(0, 0, 0))) {
      this.x += 43;
    }
    if (this.touching(Color.rgb(143, 142, 128))) {
      yield* this.startSound("Drum Bass3");
      this.x += 43;
    }
    yield* this.startSound("robotBuzz");
    if (this.touching(this.sprites["Redflag"].andClones())) {
      yield* this.startSound("winSound");
      this.goto(-10, 23);
      yield* this.sayAndWait("Game Over!", 2);
      this.broadcast("win");
    }
  }

  *whenIReceiveMoveright() {
    this.x += 43;
    if (this.touching(Color.rgb(0, 0, 0))) {
      this.x += -43;
    }
    if (this.touching(Color.rgb(143, 142, 128))) {
      yield* this.startSound("Drum Bass3");
      this.x += -43;
    }
  }

  *whenIReceiveStartgame() {
    this.visible = true;
    this.goto(151, -150);
  }

  *whenGreenFlagClicked() {
    while (!this.touching(Color.rgb(255, 242, 0))) {
      yield;
    }
    this.broadcast("q1");
    yield* this.askAndWait("");
    if (this.answer == 58) {
      this.stage.vars.score += 1;
      this.think("Hmm...");
      this.broadcast("switch1");
    } else {
      this.think("Hmm...");
      this.broadcast("switch1");
    }
  }

  *whenGreenFlagClicked2() {
    while (!this.touching(Color.rgb(118, 255, 255))) {
      yield;
    }
    this.broadcast("q2");
    yield* this.askAndWait("");
    if (this.answer == 90) {
      this.broadcast("switch1");
      this.think("Hmm...");
      this.stage.vars.score += 1;
    } else {
      this.think("Hmm...");
      this.broadcast("switch1");
    }
  }

  *whenGreenFlagClicked3() {
    while (!this.touching(Color.rgb(255, 111, 0))) {
      yield;
    }
    this.broadcast("q3");
    yield* this.askAndWait("");
    if (this.answer == 48) {
      this.think("Hmm...");
      this.stage.vars.score += 1;
      this.broadcast("switch1");
    } else {
      this.think("Hmm...");
      this.broadcast("switch1");
    }
  }

  *whenIReceiveQ1() {
    this.visible = false;
  }

  *whenIReceiveSwitch1() {
    this.visible = true;
  }

  *whenIReceiveQ2() {
    this.visible = false;
  }

  *whenIReceiveQ3() {
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    while (!this.touching(this.sprites["Redflag"].andClones())) {
      yield;
    }
    yield* this.startSound("robotBuzz");
    this.visible = false;
    this.goto(-10, 23);
    yield* this.sayAndWait("You Win", 2);
    this.broadcast("win");
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.a1 = 0;
    this.stage.vars.moves = 0;
    this.stage.vars.score = 0;
    this.visible = false;
  }
}
