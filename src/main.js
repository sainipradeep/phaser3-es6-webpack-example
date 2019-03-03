import 'phaser';
import HomeScene from './scenes/HomeScene';

const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1000,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [
        HomeScene
    ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
