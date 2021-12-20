class scene extends Phaser.Scene{

    preload(){
        this.load.image('huh','https://st.depositphotos.com/1187791/4046/i/950/depositphotos_40463137-stock-photo-piano-keys-background.jpg')
    }
    create(){
        this.add.image(0,0,'huh')
    }
}