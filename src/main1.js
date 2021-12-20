let gameConfig = {
    type: Phaser.AUTO,
    width: 2200,
    height: 1400,
    backgroundColor: '#FFFFFF',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 250 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
