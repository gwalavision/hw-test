import Phaser from "phaser";

//оставил этот лишний код из-за того, что не смог сделать деплой для gh-pages/netlify с относительными путями в this.load.image
import room from "../assets/images/room.png";
import bungalow from "../assets/images/bungalow.png";
import hotel from "../assets/images/hotel.png";
import manIntroPic from "../assets/sprites/man/man-intro.png";
import manFinalPic from "../assets/sprites/man/man-final.png";
import manIntroPhrase from "../assets/sprites/man/man-intro-phrase.png";
import manFinalPhrase from "../assets/sprites/man/man-final-phrase.png";
import womanIntroPhrase from "../assets/sprites/woman/woman-intro-phrase.png";
import womanIntroPic from "../assets/sprites/woman/woman-intro.png";
import womanChoice1 from "../assets/sprites/woman/woman-choice-1.png";
import womanCloth1 from "../assets/sprites/woman/cloth-1-woman.png";
import womanCloth2 from "../assets/sprites/woman/cloth-2-woman.png";
import womanCloth1Bag1 from "../assets/sprites/woman/cloth-1-bag-1.png";
import womanCloth1Bag2 from "../assets/sprites/woman/cloth-1-bag-2.png";
import womanCloth2Bag1 from "../assets/sprites/woman/cloth-2-bag-1.png";
import womanCloth2Bag2 from "../assets/sprites/woman/cloth-2-bag-2.png";
import womanCloth1Bag1Acc1 from "../assets/sprites/woman/cloth-1-bag-1-acc-1.png";
import womanCloth1Bag1Acc2 from "../assets/sprites/woman/cloth-1-bag-1-acc-2.png";
import womanCloth1Bag2Acc1 from "../assets/sprites/woman/cloth-1-bag-2-acc-1.png";
import womanCloth1Bag2Acc2 from "../assets/sprites/woman/cloth-1-bag-2-acc-2.png";
import womanCloth2Bag1Acc1 from "../assets/sprites/woman/cloth-2-bag-1-acc-1.png";
import womanCloth2Bag1Acc2 from "../assets/sprites/woman/cloth-2-bag-1-acc-2.png";
import womanCloth2Bag2Acc1 from "../assets/sprites/woman/cloth-2-bag-2-acc-1.png";
import womanCloth2Bag2Acc2 from "../assets/sprites/woman/cloth-2-bag-2-acc-2.png";
import hand from "../assets/sprites/other/hand.png";
import playNowButton from "../assets/sprites/other/play-now-button.png";
import cloth1 from "../assets/sprites/clothes-icons/cloth-1.png";
import cloth2 from "../assets/sprites/clothes-icons/cloth-2.png";
import bag1 from "../assets/sprites/clothes-icons/bag-1.png";
import bag2 from "../assets/sprites/clothes-icons/bag-2.png";
import acc1 from "../assets/sprites/clothes-icons/acc-1.png";
import acc2 from "../assets/sprites/clothes-icons/acc-2.png";
import bungalowIcon from "../assets/sprites/other/bungalow-icon.png";
import hotelIcon from "../assets/sprites/other/hotel-icon.png";
import chooseDressPhrase from "../assets/sprites/other/choose-dress-phrase.png";
import chooseBagPhrase from "../assets/sprites/other/choose-bag-phrase.png";
import chooseAccPhrase from "../assets/sprites/other/choose-acc-phrase.png";
import choosePlacePhrase from "../assets/sprites/other/choose-place-phrase.png";
import progressBar0 from "../assets/sprites/other/progress-bar-0.png";
import progressBar1 from "../assets/sprites/other/progress-bar-1.png";
import progressBar2 from "../assets/sprites/other/progress-bar-2.png";
import progressBar3 from "../assets/sprites/other/progress-bar-3.png";

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super("introScene");
    }

    preload() {
        this.load.image("room", room);
        this.load.image("bungalow", bungalow);
        this.load.image("hotel", hotel);
        this.load.image("manIntroPic", manIntroPic);
        this.load.image("manFinalPic", manFinalPic);
        this.load.image("manIntroPhrase", manIntroPhrase);
        this.load.image("manFinalPhrase", manFinalPhrase);
        this.load.image("womanDefault", womanIntroPic);
        this.load.image("womanChoice1", womanChoice1);
        this.load.image("womanCloth1", womanCloth1);
        this.load.image("womanCloth2", womanCloth2);
        this.load.image("womanCloth1Bag1", womanCloth1Bag1);
        this.load.image("womanCloth1Bag2", womanCloth1Bag2);
        this.load.image("womanCloth2Bag1", womanCloth2Bag1);
        this.load.image("womanCloth2Bag2", womanCloth2Bag2);
        this.load.image("womanCloth1Bag1Acc1", womanCloth1Bag1Acc1);
        this.load.image("womanCloth1Bag1Acc2", womanCloth1Bag1Acc2);
        this.load.image("womanCloth1Bag2Acc1", womanCloth1Bag2Acc1);
        this.load.image("womanCloth1Bag2Acc2", womanCloth1Bag2Acc2);
        this.load.image("womanCloth2Bag1Acc1", womanCloth2Bag1Acc1);
        this.load.image("womanCloth2Bag1Acc2", womanCloth2Bag1Acc2);
        this.load.image("womanCloth2Bag2Acc1", womanCloth2Bag2Acc1);
        this.load.image("womanCloth2Bag2Acc2", womanCloth2Bag2Acc2);
        this.load.image("womanIntroPhrase", womanIntroPhrase);
        this.load.image("cloth1", cloth1);
        this.load.image("cloth2", cloth2);
        this.load.image("bag1", bag1);
        this.load.image("bag2", bag2);
        this.load.image("acc1", acc1);
        this.load.image("acc2", acc2);
        this.load.image("bungalowIcon", bungalowIcon);
        this.load.image("hotelIcon", hotelIcon);
        this.load.image("hand", hand);
        this.load.image("playNowButton", playNowButton);
        this.load.image("chooseDressPhrase", chooseDressPhrase);
        this.load.image("chooseBagPhrase", chooseBagPhrase);
        this.load.image("chooseAccPhrase", chooseAccPhrase);
        this.load.image("choosePlacePhrase", choosePlacePhrase);
        this.load.image("progressBar0", progressBar0);
        this.load.image("progressBar1", progressBar1);
        this.load.image("progressBar2", progressBar2);
        this.load.image("progressBar3", progressBar3);
    }

    create() {
        this.room = this.add.image(100, 450, "room");
        this.bungalow = this.add.image(100, 450, "bungalow");
        this.hotel = this.add.image(100, 450, "hotel");
        this.manFinalPic = this.add.image(1100, 550, "manFinalPic");
        this.manIntroPic = this.add.image(300, 450, "manIntroPic");
        this.womanDefault = this.add.image(900, 450, "womanDefault");
        this.manIntroPhrase = this.add.image(300, 450, "manIntroPhrase");
        this.womanIntroPhrase = this.add.image(300, 450, "womanIntroPhrase");
        this.womanChoice1 = this.add.image(309, 500, "womanChoice1");
        this.womanCloth1 = this.add.image(309, 500, "womanCloth1");
        this.womanCloth2 = this.add.image(309, 500, "womanCloth2");
        this.womanCloth1Bag1 = this.add.image(309, 500, "womanCloth1Bag1");
        this.womanCloth1Bag2 = this.add.image(309, 500, "womanCloth1Bag2");
        this.womanCloth2Bag1 = this.add.image(309, 500, "womanCloth2Bag1");
        this.womanCloth2Bag2 = this.add.image(309, 500, "womanCloth2Bag2");
        this.womanCloth1Bag1Acc1 = this.add.image(309, 500, "womanCloth1Bag1Acc1");
        this.womanCloth1Bag1Acc2 = this.add.image(309, 500, "womanCloth1Bag1Acc2");
        this.womanCloth1Bag2Acc1 = this.add.image(309, 500, "womanCloth1Bag2Acc1");
        this.womanCloth1Bag2Acc2 = this.add.image(309, 500, "womanCloth1Bag2Acc2");
        this.womanCloth2Bag1Acc1 = this.add.image(309, 500, "womanCloth2Bag1Acc1");
        this.womanCloth2Bag1Acc2 = this.add.image(309, 500, "womanCloth2Bag1Acc2");
        this.womanCloth2Bag2Acc1 = this.add.image(309, 500, "womanCloth2Bag2Acc1");
        this.womanCloth2Bag2Acc2 = this.add.image(309, 500, "womanCloth2Bag2Acc2");
        this.manFinalPhrase = this.add.image(250, 500, "manFinalPhrase");
        this.cloth1 = this.add.image(150, 700, "cloth1");
        this.cloth2 = this.add.image(450, 700, "cloth2");
        this.bag1 = this.add.image(150, 700, "bag1");
        this.bag2 = this.add.image(450, 700, "bag2");
        this.acc1 = this.add.image(150, 700, "acc1");
        this.acc2 = this.add.image(450, 700, "acc2");
        this.bungalowIcon = this.add.image(150, 700, "bungalowIcon");
        this.hotelIcon = this.add.image(450, 700, "hotelIcon");
        this.playNowButton = this.add.image(300, 750, "playNowButton");
        this.chooseDressPhrase = this.add.image(300, -200, "chooseDressPhrase");
        this.chooseBagPhrase = this.add.image(300, -200, "chooseBagPhrase");
        this.chooseAccPhrase = this.add.image(300, -200, "chooseAccPhrase");
        this.choosePlacePhrase = this.add.image(300, -200, "choosePlacePhrase");
        this.progressBar0 = this.add.image(300, -200, "progressBar0");
        this.progressBar1 = this.add.image(300, -200, "progressBar1");
        this.progressBar2 = this.add.image(300, -200, "progressBar2");
        this.progressBar3 = this.add.image(300, -200, "progressBar3");
        this.hand = this.add.image(190, 1000, "hand");

        this.hand.setScale(0.8);
        this.manIntroPhrase.setScale(0);
        this.womanIntroPhrase.setScale(0);
        this.room.setTint(Phaser.Display.Color.GetColor(46, 46, 46));
        this.bungalow.setAlpha(0);
        this.hotel.setAlpha(0);
        this.hand.setScale(0.8);
        this.manFinalPic.setScale(1);
        this.manFinalPhrase.setScale(0);

        this.womanStates = [
            this.womanChoice1,
            this.womanCloth1,
            this.womanCloth2,
            this.womanCloth1Bag1,
            this.womanCloth1Bag2,
            this.womanCloth2Bag1,
            this.womanCloth2Bag2,
            this.womanCloth1Bag1Acc2,
            this.womanCloth1Bag1Acc1,
            this.womanCloth1Bag2Acc1,
            this.womanCloth1Bag2Acc2,
            this.womanCloth2Bag2Acc2,
            this.womanCloth2Bag1Acc1,
            this.womanCloth2Bag1Acc2,
            this.womanCloth2Bag2Acc1,
        ];
        this.womanStates.forEach((e) => e.setVisible(false));

        this.buttons = [this.cloth1, this.cloth2, this.bag1, this.bag2, this.acc1, this.acc2, this.bungalowIcon, this.hotelIcon, this.playNowButton];
        this.buttons.forEach((e) => {
            e.setScale(0);
        });

        this.progressBars = [this.progressBar0, this.progressBar1, this.progressBar2, this.progressBar3];

        this.finalWoman = null;
        this.hintHasStarted = false;

        return this.playIntro();
    }

    playIntro() {
        const manIntroPic = this.manIntroPic;
        const womanDefault = this.womanDefault;
        const manIntroPhrase = this.manIntroPhrase;
        const womanIntroPhrase = this.womanIntroPhrase;

        womanDefault.setVisible(true);

        this.tweens.add({
            targets: manIntroPic,
            x: -300,
            delay: 1900,
            duration: 200,
        });

        this.tweens.add({
            targets: womanDefault,
            x: 300,
            delay: 1900,
            duration: 200,
        });

        this.tweens.add({
            targets: manIntroPhrase,
            scale: 0.3,
            duration: 200,
            yoyo: true,
            hold: 1400,
        });

        this.tweens.add({
            targets: womanIntroPhrase,
            scale: 0.3,
            delay: 2000,
            duration: 200,
            hold: 1400,
            yoyo: true,
            onComplete: () => {
                womanDefault.setVisible(false);
                this.playTutorial();
            },
        });
    }

    playTutorial() {
        this.womanChoice1.setScale(1.2);
        this.womanChoice1.setVisible(true);

        const womanScaleDown = this.tweens.add({
            onStart: () => {
                handPopTutorial.play();
            },
            targets: this.womanChoice1,
            scale: 1,
            duration: 1000,
            onComplete: () => {
                this.showIcons([this.cloth1, this.cloth2], 0);
            },
        });

        const handPopTutorial = this.tweens.add({
            onStart: () => {
                this.showPhrase(this.chooseDressPhrase);
            },
            targets: this.hand,
            y: 800,
            delay: 800,
            paused: true,
            duration: 500,
            onComplete: () => {
                handMoveTutorial.play();
            },
        });

        const handMoveTutorial = this.tweens.add({
            targets: this.hand,
            x: 510,
            delay: 500,
            paused: true,
            duration: 300,
            yoyo: true,
            hold: 300,
            onComplete: () => {
                clothIconTappedTutorial.play();
            },
        });

        const handHideTutorial = this.tweens.add({
            onStart: () => {
                overlayHide.play();
            },
            targets: this.hand,
            y: 1000,
            paused: true,
            duration: 500,
            onComplete: () => {
                this.showProgressBar(this.progressBar0);
                this.hidePhrase(this.chooseDressPhrase);
            },
        });

        const clothIconTappedTutorial = this.tweens.add({
            targets: this.cloth1,
            scale: 0.3,
            paused: true,
            delay: 300,
            duration: 200,
            yoyo: true,
            hold: 200,
            onComplete: () => {
                handHideTutorial.play();
            },
        });

        const overlayHide = this.tweens.addCounter({
            targets: this.room,
            from: 46,
            to: 255,
            paused: true,
            duration: 500,
            onUpdate: (tween) => {
                const value = tween.getValue();
                this.room.setTint(Phaser.Display.Color.GetColor(value, value, value));
            },
            onComplete: () => {
                this.handleClothesClick();
            },
        });
    }

    handleClothesClick() {
        this.pauseBeforeHint = setTimeout(() => this.showHint(), 3000);

        [this.cloth1, this.cloth2].forEach((button, _, arr) => {
            const { key } = button.texture;
            button.setInteractive();
            button.on("pointerup", () => {
                clearTimeout(this.pauseBeforeHint);
                this.hideHint();
                this.hideIcons(arr);
                this.showIcons([this.bag1, this.bag2]);
                button.removeInteractive();
                this.womanChoice1.setVisible(false);
                this.replaceProgressBar(this.progressBar0, this.progressBar1);
                if (key === "cloth1") {
                    this.womanCloth1.setVisible(true);
                    return this.handleBagsClick();
                } else if (key === "cloth2") {
                    this.womanCloth2.setVisible(true);
                    return this.handleBagsClick();
                }
            });
        });
    }

    handleBagsClick() {
        this.pauseBeforeHint = setTimeout(() => {
            this.showHint();
            this.hideProgressBar(this.progressBar1);
            this.showPhrase(this.chooseBagPhrase);
            this.hintHasStarted = true;
        }, 3000);

        [this.bag1, this.bag2].forEach((button, _, arr) => {
            const { key } = button.texture;
            button.setInteractive();
            button.on("pointerup", () => {
                clearTimeout(this.pauseBeforeHint);
                if (!this.hintHasStarted) {
                    this.replaceProgressBar(this.progressBar1, this.progressBar2);
                } else if (this.hintHasStarted) {
                    this.hideHint();
                    this.hidePhrase(this.chooseBagPhrase);
                    this.showProgressBar(this.progressBar2);
                    this.hintHasStarted = false;
                }
                this.hideIcons(arr);
                this.showIcons([this.acc1, this.acc2]);
                button.removeInteractive();
                if (key === "bag1") {
                    if (this.womanCloth1.visible) {
                        this.womanCloth1.setVisible(false);
                        this.womanCloth1Bag1.setVisible(true);
                    } else if (this.womanCloth2.visible) {
                        this.womanCloth2.setVisible(false);
                        this.womanCloth2Bag1.setVisible(true);
                    }
                    return this.handleAccClick();
                } else if (key === "bag2") {
                    if (this.womanCloth1.visible) {
                        this.womanCloth1.setVisible(false);
                        this.womanCloth1Bag2.setVisible(true);
                    } else if (this.womanCloth2.visible) {
                        this.womanCloth2.setVisible(false);
                        this.womanCloth2Bag2.setVisible(true);
                    }
                    return this.handleAccClick();
                }
            });
        });
    }

    handleAccClick() {
        this.pauseBeforeHint = setTimeout(() => {
            this.showHint();
            this.hideProgressBar(this.progressBar2);
            this.showPhrase(this.chooseAccPhrase);
            this.hintHasStarted = true;
        }, 3000);

        [this.acc1, this.acc2].forEach((button, _, arr) => {
            const { key } = button.texture;
            button.setInteractive();
            button.on("pointerup", () => {
                clearTimeout(this.pauseBeforeHint);
                if (!this.hintHasStarted) {
                    this.replaceProgressBar(this.progressBar2, this.progressBar3);
                } else if (this.hintHasStarted) {
                    this.hideHint();
                    this.hidePhrase(this.chooseAccPhrase);
                    this.showProgressBar(this.progressBar3);
                    this.hintHasStarted = false;
                }
                this.hideIcons(arr);
                this.showIcons([this.bungalowIcon, this.hotelIcon]);
                button.removeInteractive();
                if (key === "acc1") {
                    if (this.womanCloth1Bag1.visible) {
                        this.womanCloth1Bag1.setVisible(false);
                        this.womanCloth1Bag1Acc1.setVisible(true);
                        this.finalWoman = this.womanCloth1Bag1Acc1;
                    } else if (this.womanCloth1Bag2.visible) {
                        this.womanCloth1Bag2.setVisible(false);
                        this.womanCloth1Bag2Acc1.setVisible(true);
                        this.finalWoman = this.womanCloth1Bag2Acc1;
                    } else if (this.womanCloth2Bag1.visible) {
                        this.womanCloth2Bag1.setVisible(false);
                        this.womanCloth2Bag1Acc1.setVisible(true);
                        this.finalWoman = this.womanCloth2Bag1Acc1;
                    } else if (this.womanCloth2Bag2.visible) {
                        this.womanCloth2Bag2.setVisible(false);
                        this.womanCloth2Bag2Acc1.setVisible(true);
                        this.finalWoman = this.womanCloth2Bag2Acc1;
                    }
                    return this.handlePlaceButton();
                } else if (key === "acc2") {
                    if (this.womanCloth1Bag1.visible) {
                        this.womanCloth1Bag1.setVisible(false);
                        this.womanCloth1Bag1Acc2.setVisible(true);
                        this.finalWoman = this.womanCloth1Bag1Acc2;
                    } else if (this.womanCloth1Bag2.visible) {
                        this.womanCloth1Bag2.setVisible(false);
                        this.womanCloth1Bag2Acc2.setVisible(true);
                        this.finalWoman = this.womanCloth1Bag2Acc2;
                    } else if (this.womanCloth2Bag1.visible) {
                        this.womanCloth2Bag1.setVisible(false);
                        this.womanCloth2Bag1Acc2.setVisible(true);
                        this.finalWoman = this.womanCloth2Bag1Acc2;
                    } else if (this.womanCloth2Bag2.visible) {
                        this.womanCloth2Bag2.setVisible(false);
                        this.womanCloth2Bag2Acc2.setVisible(true);
                        this.finalWoman = this.womanCloth2Bag2;
                    }
                    return this.handlePlaceButton();
                }
            });
        });
    }

    handlePlaceButton() {
        this.pauseBeforeHint = setTimeout(() => {
            this.showHint();
            this.hideProgressBar(this.progressBar3);
            this.showPhrase(this.choosePlacePhrase);
            this.hintHasStarted = true;
        }, 3000);
        [this.hotelIcon, this.bungalowIcon].forEach((button, _, arr) => {
            const { key } = button.texture;
            button.setInteractive();
            button.on("pointerup", () => {
                clearTimeout(this.pauseBeforeHint);
                if (this.hintHasStarted) {
                    this.hideHint();
                    this.hidePhrase(this.choosePlacePhrase);
                    this.hintHasStarted = false;
                }
                this.hideIcons(arr);
                this.hideProgressBar(this.progressBar3);
                button.removeInteractive();
                if (key === "hotelIcon") {
                    return this.finalSceneFade(this.hotel);
                } else if (key === "bungalowIcon") {
                    return this.finalSceneFade(this.bungalow);
                }
            });
        });
    }

    finalSceneFade(curPic) {
        this.tweens.add({
            targets: curPic,
            alpha: { value: 1, duration: 500 },
        });

        this.finalSceneStandoutMan();
        this.finalSceneStandoutWoman();
        this.popPlayNowButton();
    }

    finalSceneStandoutMan() {
        this.tweens.add({
            targets: this.manFinalPic,
            x: 420,
            duration: 500,
            onComplete: () => {
                finalPhraseMan.play();
            },
        });
        const finalPhraseMan = this.tweens.add({
            targets: this.manFinalPhrase,
            scale: 0.9,
            duration: 200,
            delay: 300,
            hold: 1400,
            paused: true,
            yoyo: true,
        });
    }

    finalSceneStandoutWoman() {
        this.tweens.add({
            onStart: () => {
                this.finalWoman.setX(-450);
                this.finalWoman.setY(550);
            },
            targets: this.finalWoman,
            x: 200,
            duration: 500,
        });
    }

    popPlayNowButton() {
        this.tweens.add({
            targets: this.playNowButton,
            scale: 1,
            duration: 200,
            delay: 2500,
        });

        this.playNowButton.setInteractive().on(
            "pointerup",
            () => {
                window.open("https://apps.apple.com/us/app/id1491717191", "_blank");
            },
            this
        );
    }

    showHint() {
        this.tweens.add({
            onStart: () => {
                this.hand.setX(510);
            },
            targets: this.hand,
            y: 800,
            duration: 300,
            hold: 300,
            onComplete: () => {
                this.handMoveHint.play();
            },
        });
        this.handMoveHint = this.tweens.add({
            targets: this.hand,
            x: 190,
            paused: true,
            duration: 500,
            yoyo: true,
            hold: 300,
            loop: -1,
        });
    }

    hideHint() {
        if (this.handMoveHint) {
            this.handMoveHint.remove();
        }
        const handHideHint = this.tweens.add({
            targets: this.hand,
            y: 1000,
            duration: 300,
            hold: 300,
        });
    }

    showIcons(targets, delay = 500) {
        this.tweens.add({
            targets,
            scale: 0.4,
            delay,
            duration: 500,
        });
    }

    hideIcons(targets) {
        this.tweens.add({
            targets,
            scale: 0,
            duration: 500,
        });
    }

    showPhrase(targets) {
        this.tweens.add({
            targets,
            y: 50,
            duration: 500,
        });
    }

    hidePhrase(targets) {
        this.tweens.add({
            targets,
            y: -200,
            duration: 500,
        });
    }

    showProgressBar(targets) {
        this.progressBars.forEach((e) => e.setY(-200));
        this.tweens.add({
            targets,
            y: 50,
            duration: 500,
        });
    }

    hideProgressBar(targets) {
        this.tweens.add({
            targets,
            y: -200,
            duration: 500,
        });
    }

    replaceProgressBar(prevBar, currBar) {
        prevBar.setVisible(false);
        currBar.setY(50);
        currBar.setVisible(true);
    }
}
