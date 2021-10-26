import FullScene from "../scenes/full";
// import TutorialScene from "../scenes/tutorial";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scene: FullScene,
};

const game = new Phaser.Game(config);
