import Phaser from "phaser";
import constants from "../assets/configs/constants";
import { alignGrid } from "../assets/configs/alignGrid";
import { assetsDPR } from "../index";
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('titleScene');
  }
    init() {}
  preload() {
    alignGrid.create({ scene: this, rows: 10, columns: 10 });
  }
  create() {
    const container = this.rexUI.add.sizer({
      orientation: "y",
      space: { item: 50 },
    });

    const title = this.add.text(0, 0, "Harvest the Demons", {
      fontSize: `${36 * assetsDPR}px`,
      fontFamily: constants.styles.text.fontFamily
    });

    const playButton = this.add
      .text(0, 0, "Play", {
        fontSize: `${12 * assetsDPR}px`,
        fontFamily: constants.styles.text.fontFamily
      })
      .setInteractive()
      .on("pointerover", function () {
        this.setColor("red");
      })
      .on("pointerout", function () {
        this.setColor("white");
      })
      .on(
        "pointerup",
        function () {
          this.scene.start("playGame");
        },
        this
      );

    container.add(title).add(playButton).layout();

    alignGrid.center(container);
  }
}