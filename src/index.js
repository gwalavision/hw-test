import FullScene from "../scenes/full";

const config = {
  type: Phaser.AUTO,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scene: FullScene,
};

const game = new Phaser.Game(config);
