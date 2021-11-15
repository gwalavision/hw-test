import Phaser from "phaser";

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super("introScene");
    }

    preload() {
        this.load.image("room", "../src/assets/images/room.png");
        this.load.image("bungalow", "../src/assets/images/bungalow.png");
        this.load.image("hotel", "../src/assets/images/hotel.png");
        this.load.image("manIntroPic", "../src/assets/sprites/man/man-intro.png");
        this.load.image("manFinalPic", "../src/assets/sprites/man/man-final.png");
        this.load.image("manIntroPhrase", "../src/assets/sprites/man/man-intro-phrase.png");
        this.load.image("manFinalPhrase", "../src/assets/sprites/man/man-final-phrase.png");
        this.load.image("womanDefault", "../src/assets/sprites/woman/woman-intro.png");
        this.load.image("womanChoice1", "../src/assets/sprites/woman/woman-choice-1.png");
        this.load.image("womanCloth1", "../src/assets/sprites/woman/cloth-1.png");
        this.load.image("womanCloth2", "../src/assets/sprites/woman/cloth-2.png");
        this.load.image("womanCloth1Bag1", "../src/assets/sprites/woman/cloth-1-bag-1.png");
        this.load.image("womanCloth1Bag2", "../src/assets/sprites/woman/cloth-1-bag-2.png");
        this.load.image("womanCloth2Bag1", "../src/assets/sprites/woman/cloth-2-bag-1.png");
        this.load.image("womanCloth2Bag2", "../src/assets/sprites/woman/cloth-2-bag-2.png");
        this.load.image("womanCloth1Bag1Acc1", "../src/assets/sprites/woman/cloth-1-bag-1-acc-1.png");
        this.load.image("womanCloth1Bag1Acc2", "../src/assets/sprites/woman/cloth-1-bag-1-acc-2.png");
        this.load.image("womanCloth1Bag2Acc1", "../src/assets/sprites/woman/cloth-1-bag-2-acc-1.png");
        this.load.image("womanCloth1Bag2Acc2", "../src/assets/sprites/woman/cloth-1-bag-2-acc-2.png");
        this.load.image("womanCloth2Bag1Acc1", "../src/assets/sprites/woman/cloth-2-bag-1-acc-1.png");
        this.load.image("womanCloth2Bag1Acc2", "../src/assets/sprites/woman/cloth-2-bag-1-acc-2.png");
        this.load.image("womanCloth2Bag2Acc1", "../src/assets/sprites/woman/cloth-2-bag-2-acc-1.png");
        this.load.image("womanCloth2Bag2Acc2", "../src/assets/sprites/woman/cloth-2-bag-2-acc-2.png");
        this.load.image("womanIntroPhrase", "../src/assets/sprites/woman/woman-intro-phrase.png");
        this.load.image("cloth1", "../src/assets/sprites/clothes-icons/cloth-1.png");
        this.load.image("cloth2", "../src/assets/sprites/clothes-icons/cloth-2.png");
        this.load.image("bag1", "../src/assets/sprites/clothes-icons/bag-1.png");
        this.load.image("bag2", "../src/assets/sprites/clothes-icons/bag-2.png");
        this.load.image("acc1", "../src/assets/sprites/clothes-icons/acc-1.png");
        this.load.image("acc2", "../src/assets/sprites/clothes-icons/acc-2.png");
        this.load.image("bungalowIcon", "../src/assets/sprites/other/bungalow-icon.png");
        this.load.image("hotelIcon", "../src/assets/sprites/other/hotel-icon.png");
        this.load.image("hand", "../src/assets/sprites/other/hand.png");
        this.load.image("playNowButton", "../src/assets/sprites/other/play-now-button.png");
        this.load.image("chooseDressPhrase", "../src/assets/sprites/other/choose-dress-phrase.png");
        this.load.image("chooseBagPhrase", "../src/assets/sprites/other/choose-bag-phrase.png");
        this.load.image("chooseAccPhrase", "../src/assets/sprites/other/choose-acc-phrase.png");
        this.load.image("choosePlacePhrase", "../src/assets/sprites/other/choose-place-phrase.png");
        this.load.image("progressBar0", "../src/assets/sprites/other/progress-bar-0.png");
        this.load.image("progressBar1", "../src/assets/sprites/other/progress-bar-1.png");
        this.load.image("progressBar2", "../src/assets/sprites/other/progress-bar-2.png");
        this.load.image("progressBar3", "../src/assets/sprites/other/progress-bar-3.png");
    }

    create() {
        const room = this.add.image(100, 450, "room");
        const bungalow = this.add.image(100, 450, "bungalow");
        const hotel = this.add.image(100, 450, "hotel");

        room.setTint(Phaser.Display.Color.GetColor(46, 46, 46));

        const manFinalPic = this.add.image(1100, 550, "manFinalPic");

        const womanChoice1 = this.add.image(309, 500, "womanChoice1");
        const womanCloth1 = this.add.image(309, 500, "womanCloth1");
        const womanCloth2 = this.add.image(309, 500, "womanCloth2");
        const womanCloth1Bag1 = this.add.image(309, 500, "womanCloth1Bag1");
        const womanCloth1Bag2 = this.add.image(309, 500, "womanCloth1Bag2");
        const womanCloth2Bag1 = this.add.image(309, 500, "womanCloth2Bag1");
        const womanCloth2Bag2 = this.add.image(309, 500, "womanCloth2Bag2");

        const womanCloth1Bag1Acc1 = this.add.image(309, 500, "womanCloth1Bag1Acc1");
        const womanCloth1Bag1Acc2 = this.add.image(309, 500, "womanCloth1Bag1Acc2");
        const womanCloth1Bag2Acc1 = this.add.image(309, 500, "womanCloth1Bag2Acc1");
        const womanCloth1Bag2Acc2 = this.add.image(309, 500, "womanCloth1Bag2Acc2");
        const womanCloth2Bag1Acc1 = this.add.image(309, 500, "womanCloth2Bag1Acc1");
        const womanCloth2Bag1Acc2 = this.add.image(309, 500, "womanCloth2Bag1Acc2");
        const womanCloth2Bag2Acc1 = this.add.image(309, 500, "womanCloth2Bag2Acc1");
        const womanCloth2Bag2Acc2 = this.add.image(309, 500, "womanCloth2Bag2Acc2");

        const manFinalPhrase = this.add.image(250, 500, "manFinalPhrase");

        const cloth1 = this.add.image(150, 700, "cloth1");
        const cloth2 = this.add.image(450, 700, "cloth2");

        const bag1 = this.add.image(150, 700, "bag1");
        const bag2 = this.add.image(450, 700, "bag2");

        const acc1 = this.add.image(150, 700, "acc1");
        const acc2 = this.add.image(450, 700, "acc2");

        const bungalowIcon = this.add.image(150, 700, "bungalowIcon");
        const hotelIcon = this.add.image(450, 700, "hotelIcon");

        const hand = this.add.image(190, 1000, "hand");
        const playNowButton = this.add.image(300, 750, "playNowButton");

        const chooseDressPhrase = this.add.image(300, -200, "chooseDressPhrase");
        const chooseBagPhrase = this.add.image(300, -200, "chooseBagPhrase");
        const chooseAccPhrase = this.add.image(300, -200, "chooseAccPhrase");
        const choosePlacePhrase = this.add.image(300, -200, "choosePlacePhrase");

        const progressBar0 = this.add.image(300, 50, "progressBar0");
        const progressBar1 = this.add.image(300, -200, "progressBar1");
        const progressBar2 = this.add.image(300, -200, "progressBar2");
        const progressBar3 = this.add.image(300, -200, "progressBar3");

        bungalow.setAlpha(0);
        hotel.setAlpha(0);

        manFinalPic.setScale(1);

        womanChoice1.setScale(1.2);
        womanChoice1.setVisible(false);
        womanCloth1.setVisible(false);
        womanCloth2.setVisible(false);
        womanCloth1Bag1.setVisible(false);
        womanCloth1Bag2.setVisible(false);
        womanCloth2Bag1.setVisible(false);
        womanCloth2Bag2.setVisible(false);

        womanCloth1Bag1Acc2.setVisible(false);
        womanCloth1Bag1Acc1.setVisible(false);
        womanCloth1Bag2Acc1.setVisible(false);
        womanCloth1Bag2Acc2.setVisible(false);

        womanCloth2Bag1Acc1.setVisible(false);
        womanCloth2Bag1Acc2.setVisible(false);
        womanCloth2Bag2Acc1.setVisible(false);
        womanCloth2Bag2Acc2.setVisible(false);

        const finalOptions = [
            womanCloth1Bag1Acc2,
            womanCloth1Bag1Acc1,
            womanCloth1Bag2Acc1,
            womanCloth1Bag2Acc2,
            womanCloth2Bag2Acc2,
            womanCloth2Bag1Acc1,
            womanCloth2Bag1Acc2,
            womanCloth2Bag2Acc1,
        ];

        manFinalPhrase.setScale(0);

        cloth1.setScale(0);
        cloth2.setScale(0);

        bag1.setScale(0);
        bag2.setScale(0);

        acc1.setScale(0);
        acc2.setScale(0);

        bungalowIcon.setScale(0);
        hotelIcon.setScale(0);

        hand.setScale(0.8);
        playNowButton.setScale(0);

        progressBar0.setVisible(false);
        progressBar1.setVisible(false);
        progressBar2.setVisible(false);
        progressBar3.setVisible(false);

        let finalWoman;

        const clothChangingClick = () => {
            progressBar0.setVisible(false);
            progressBar1.setY(50);
            progressBar1.setVisible(true);
            iconsHide([cloth1, cloth2]);
            iconsShow([bag1, bag2]);
            popAndHideChooseBagPhrase.play();
            cloth1.removeInteractive();
            cloth2.removeInteractive();
        };

        cloth1.on("pointerup", () => {
            womanChoice1.setVisible(false);
            womanCloth1.setVisible(true);
            clothChangingClick();
        });

        cloth2.on("pointerup", () => {
            womanChoice1.setVisible(false);
            womanCloth2.setVisible(true);
            clothChangingClick();
        });

        const bagChangingClick = () => {
            iconsHide([bag1, bag2]);
            iconsShow([acc1, acc2]);
            popAndHideChooseAccPhrase.play();
            bag1.removeInteractive();
            bag2.removeInteractive();

            if (handMoveHint.hasStarted) {
                handMoveHint.stop();
            } else if (!handMoveHint.hasStarted) {
                handPopHint.stop();
            }

            if (!popAndHideChooseBagPhrase.hasStarted) {
                popAndHideChooseBagPhrase.stop();
                progressBar1.setVisible(false);
                progressBar2.setY(50);
                progressBar2.setVisible(true);
            }

            if (popAndHideChooseBagPhrase.hasStarted) {
                progressBar2.setVisible(true);
                progressBar2Show.play();
                popAndHideChooseBagPhrase.resume();
            }
        };

        bag1.setInteractive().on("pointerup", () => {
            if (womanCloth1.visible) {
                womanCloth1.setVisible(false);
                womanCloth1Bag1.setVisible(true);
            } else if (womanCloth2.visible) {
                womanCloth2.setVisible(false);
                womanCloth2Bag1.setVisible(true);
            }

            bagChangingClick();
        });

        bag2.setInteractive().on("pointerup", () => {
            if (womanCloth1.visible) {
                womanCloth1.setVisible(false);
                womanCloth1Bag2.setVisible(true);
            } else if (womanCloth2.visible) {
                womanCloth2.setVisible(false);
                womanCloth2Bag2.setVisible(true);
            }

            bagChangingClick();
        });

        const accChangingClick = () => {
            iconsHide([acc1, acc2]);
            iconsShow([bungalowIcon, hotelIcon]);
            popAndHideChoosePlacePhrase.play();
            acc1.removeInteractive();
            acc2.removeInteractive();

            if (handMoveHint.hasStarted) {
                handMoveHint.stop();
            } else if (!handMoveHint.hasStarted) {
                handPopHint.stop();
            }

            if (!popAndHideChooseAccPhrase.hasStarted) {
                popAndHideChooseAccPhrase.stop();
                progressBar2.setVisible(false);
                progressBar3.setY(50);
                progressBar3.setVisible(true);
            }

            if (popAndHideChooseAccPhrase.hasStarted) {
                progressBar3.setVisible(true);
                progressBar33Show.play();
                popAndHideChooseAccPhrase.resume();
            }
        };

        acc1.setInteractive().on("pointerup", () => {
            if (womanCloth1Bag1.visible) {
                womanCloth1Bag1.setVisible(false);
                womanCloth1Bag1Acc1.setVisible(true);
                finalWoman = womanCloth1Bag1Acc1;
            } else if (womanCloth1Bag2.visible) {
                womanCloth1Bag2.setVisible(false);
                womanCloth1Bag2Acc1.setVisible(true);
                finalWoman = womanCloth1Bag2Acc1;
            } else if (womanCloth2Bag1.visible) {
                womanCloth2Bag1.setVisible(false);
                womanCloth2Bag1Acc1.setVisible(true);
                finalWoman = womanCloth2Bag1Acc1;
            } else if (womanCloth2Bag2.visible) {
                womanCloth2Bag2.setVisible(false);
                womanCloth2Bag2Acc1.setVisible(true);
                finalWoman = womanCloth2Bag2Acc1;
            }

            accChangingClick();
        });

        acc2.setInteractive().on("pointerup", () => {
            if (womanCloth1Bag1.visible) {
                womanCloth1Bag1.setVisible(false);
                womanCloth1Bag1Acc2.setVisible(true);
                finalWoman = womanCloth1Bag1Acc2;
            } else if (womanCloth1Bag2.visible) {
                womanCloth1Bag2.setVisible(false);
                womanCloth1Bag2Acc2.setVisible(true);
                finalWoman = womanCloth1Bag2Acc2;
            } else if (womanCloth2Bag1.visible) {
                womanCloth2Bag1.setVisible(false);
                womanCloth2Bag1Acc2.setVisible(true);
                finalWoman = womanCloth2Bag1Acc2;
            } else if (womanCloth2Bag2.visible) {
                womanCloth2Bag2.setVisible(false);
                womanCloth2Bag2Acc2.setVisible(true);
                finalWoman = womanCloth2Bag2;
            }

            accChangingClick();
        });

        const placeChangingClick = () => {
            iconsHide([bungalowIcon, hotelIcon]);
            bungalowIcon.removeInteractive();
            hotelIcon.removeInteractive();

            if (handMoveHint.hasStarted) {
                handMoveHint.stop();
            } else if (!handMoveHint.hasStarted) {
                handPopHint.stop();
            }

            if (!popAndHideChoosePlacePhrase.hasStarted) {
                popAndHideChoosePlacePhrase.stop();
                progressBar3Hide.play();
            } else if (popAndHideChoosePlacePhrase.hasStarted) {
                popAndHideChoosePlacePhrase.resume();
            }
        };

        bungalowIcon.setInteractive().on("pointerup", () => {
            placeChangingClick();
            finalSceneFade(room, bungalow);
        });

        hotelIcon.setInteractive().on("pointerup", () => {
            placeChangingClick();
            finalSceneFade(room, hotel);
        });

        playNowButton.setInteractive().on(
            "pointerup",
            () => {
                window.open("https://apps.apple.com/us/app/id1491717191", "_blank");
            },
            this
        );

        // TUTORIAL PHASE //

        const womanScaleDown = this.tweens.add({
            onStart: () => {
                handPopTutorial.play();
            },
            targets: womanChoice1,
            scale: 1,
            paused: true,
            duration: 1000,
            onComplete: () => {
                iconsShow([cloth1, cloth2, 0]);
            },
        });

        const handPopTutorial = this.tweens.add({
            onStart: () => {
                popAndHideChooseDressPhrase.play();
            },
            targets: hand,
            y: 800,
            delay: 800,
            paused: true,
            duration: 500,
            onComplete: () => {
                handMoveTutorial.play();
            },
        });

        const handMoveTutorial = this.tweens.add({
            targets: hand,
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
            targets: hand,
            y: 1000,
            paused: true,
            duration: 500,
            onUpdate: () => {
                popAndHideChooseDressPhrase.resume();
                progressBar0Change.play();
            },
            onComplete: () => {
                popAndHideChooseDressPhrase.stop();
                cloth1.setInteractive();
                cloth2.setInteractive();
            },
        });

        const clothIconTappedTutorial = this.tweens.add({
            targets: cloth1,
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
            targets: room,
            from: 46,
            to: 255,
            paused: true,
            duration: 500,
            onUpdate: (tween) => {
                const value = tween.getValue();
                room.setTint(Phaser.Display.Color.GetColor(value, value, value));
            },
        });

        // *** MAIN GAME *** //

        // ICONS INTERACTION //

        const iconsShow = (targets, delay = 500) => {
            this.tweens.add({
                targets,
                scale: 0.4,
                delay,
                duration: 500,
            });
        };

        const iconsHide = (targets) => {
            this.tweens.add({
                targets,
                scale: 0,
                duration: 500,
            });
        };

        // SHOW HINT //

        const handPopHint = this.tweens.add({
            onStart: () => {
                hand.setX(510);
            },
            targets: hand,
            y: 800,
            paused: true,
            duration: 300,
            hold: 300,
            onComplete: () => {
                handMoveHint.play();
            },
        });

        const handHideHint = this.tweens.add({
            targets: hand,
            y: 1000,
            paused: true,
            duration: 300,
            hold: 300,
            onComplete: () => hand.setX(510),
        });

        const handMoveHint = this.tweens.add({
            targets: hand,
            x: 190,
            paused: true,
            duration: 500,
            yoyo: true,
            hold: 300,
            loop: -1,
            onStop: () => {
                handHideHint.play();
            },
        });

        // TOGGLE PHRASES //

        const popAndHideChooseDressPhrase = this.tweens.add({
            targets: chooseDressPhrase,
            y: 50,
            paused: true,
            duration: 500,
            yoyo: true,
            loop: 1,
            onYoyo: (tween) => tween.pause(),
        });

        const popAndHideChooseBagPhrase = this.tweens.add({
            onStart: () => {
                progressBar1Change.play();
                handPopHint.play();
            },
            targets: chooseBagPhrase,
            y: 50,
            paused: true,
            delay: 2500,
            duration: 500,
            yoyo: true,
            onYoyo: (tween) => tween.pause(),
        });

        const popAndHideChooseAccPhrase = this.tweens.add({
            onStart: () => {
                progressBar2Hide.play();
                handPopHint.play();
            },
            targets: chooseAccPhrase,
            y: 50,
            paused: true,
            delay: 2500,
            duration: 500,
            yoyo: true,
            onYoyo: (tween) => tween.pause(),
        });

        const popAndHideChoosePlacePhrase = this.tweens.add({
            onStart: () => {
                progressBar3Hide.play();
                handPopHint.play();
            },
            targets: choosePlacePhrase,
            y: 50,
            paused: true,
            delay: 2500,
            duration: 500,
            yoyo: true,
            onYoyo: (tween) => tween.pause(),
        });

        // PROGRESS BAR //

        const progressBar0Change = this.tweens.add({
            onStart: () => {
                progressBar0.setY(-200);
                progressBar0.setVisible(true);
            },
            targets: progressBar0,
            y: 50,
            paused: true,
            duration: 500,
        });

        const progressBar1Change = this.tweens.add({
            onStart: () => {
                progressBar1.setY(50);
            },
            targets: progressBar1,
            y: -200,
            paused: true,
            duration: 500,
        });

        const progressBar2Show = this.tweens.add({
            targets: progressBar2,
            y: 50,
            paused: true,
            duration: 500,
        });

        const progressBar2Hide = this.tweens.add({
            targets: progressBar2,
            y: -200,
            paused: true,
            duration: 500,
        });

        const progressBar33Show = this.tweens.add({
            targets: progressBar3,
            y: 50,
            paused: true,
            duration: 500,
        });

        const progressBar3Hide = this.tweens.add({
            targets: progressBar3,
            y: -200,
            paused: true,
            duration: 500,
        });

        // FINAL //

        const finalSceneFade = (prevBg, curPic) => {
            this.tweens.addCounter({
                from: 1,
                to: 0,
                duration: 500,
                onUpdate: (tween) => {
                    const value = tween.getValue();
                    prevBg.setAlpha(value);
                    curPic.setAlpha(1 - value);
                },
            });

            finalSceneStandoutMan.play();
            finalSceneStandoutWoman(finalWoman);
        };

        const finalSceneStandoutMan = this.tweens.add({
            targets: manFinalPic,
            x: 420,
            duration: 500,
            paused: true,
            onComplete: () => {
                finalPhraseMan.play();
            },
        });

        const finalSceneStandoutWoman = (woman) => {
            this.tweens.add({
                onStart: () => {
                    woman.setX(-450);
                    woman.setY(550);
                },
                targets: woman,
                x: 200,
                duration: 500,
            });
        };

        const finalPhraseMan = this.tweens.add({
            targets: manFinalPhrase,
            scale: 0.9,
            duration: 200,
            delay: 300,
            hold: 1400,
            paused: true,
            yoyo: true,
            onComplete: () => {
                popPlayNow.play();
            },
        });

        const popPlayNow = this.tweens.add({
            targets: playNowButton,
            scale: 1,
            duration: 200,
            delay: 300,
            hold: 1400,
            paused: true,
        });

        this.playIntro();
    }

    playIntro() {
        const manIntroPic = this.add.image(300, 450, "manIntroPic");
        const womanDefault = this.add.image(900, 450, "womanDefault");
        const manIntroPhrase = this.add.image(300, 450, "manIntroPhrase");
        const womanIntroPhrase = this.add.image(300, 450, "womanIntroPhrase");

        manIntroPhrase.setScale(0);
        womanIntroPhrase.setScale(0);

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
                womanChoice1.setVisible(true);
                womanScaleDown.play();
            },
        });
    }
    // tutorial() {}
}
