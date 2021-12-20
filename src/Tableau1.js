class Tableau1 extends Phaser.Scene{

    preload(){

        //chargement du fond
        this.load.image('fond','assets/décor/ferme.png')
        this.load.image('fondc','assets/décor/fermec.png')
        this.load.image('fondcnuit','assets/décor/fermecnuit.png')
        this.load.image('pont','assets/décor/pont.png')
        this.load.image('pontc','assets/décor/pontc.png')
        this.load.image('pillier','assets/décor/pilier.png')
        this.load.image('pillierc','assets/décor/pilierc.png')

        //chargement animaux en noir et blanc
        this.load.image('ane','assets/animaux/animaux/âne.png')
        this.load.image('cheval','assets/animaux/animaux/cheval.png')
        this.load.image('chien','assets/animaux/animaux/chien.png')
        this.load.image('chevre','assets/animaux/animaux/chèvre.png')
        this.load.image('cochon','assets/animaux/animaux/cochon.png')
        this.load.image('coq','assets/animaux/animaux/coq.png')
        this.load.image('lapin','assets/animaux/animaux/lapin.png')
        this.load.image('mouton','assets/animaux/animaux/mouton.png')
        this.load.image('oie','assets/animaux/animaux/oie.png')
        this.load.image('vache','assets/animaux/animaux/vache.png')

        //chargement des animaux en couleurs
        this.load.image('anec','assets/animaux/animaux couleur/âne.png')
        this.load.image('chevalc','assets/animaux/animaux couleur/cheval.png')
        this.load.image('chienc','assets/animaux/animaux couleur/chien.png')
        this.load.image('chevrec','assets/animaux/animaux couleur/chèvre.png')
        this.load.image('cochonc','assets/animaux/animaux couleur/cochon.png')
        this.load.image('coqc','assets/animaux/animaux couleur/coq.png')
        this.load.image('lapinc','assets/animaux/animaux couleur/lapin.png')
        this.load.image('moutonc','assets/animaux/animaux couleur/mouton.png')
        this.load.image('oiec','assets/animaux/animaux couleur/oie.png')
        this.load.image('vachec','assets/animaux/animaux couleur/vache.png')

        //chargement de l'eau
        for(let i = 0; i<=13; i++)
        {
            this.load.image('eau'+i,'assets/eau/eau/'+i+'.png')
        }
        for(let i = 0; i<=13; i++)
        {
            this.load.image('eauc'+i,'assets/eau/eauc/'+i+'.png')
        }

        //chargement de la cloche
        for(let i = 0; i<=8; i++)
        {
            this.load.image('clochec'+i,'assets/cloche/clochec/clochec_0'+i+'.png')
        }
        for(let i = 0; i<=8; i++)
        {
            this.load.image('cloche'+i,'assets/cloche/cloche/clochec_0'+i+'.png')
        }

    }

    create(){

        this.fond = this.add.image(0,0,'fond').setOrigin(0,0)
        this.pillier = this.add.image(871,502,'pillier').setOrigin(0,0)
        this.pillier.setScale(0.72)

        //animation de la rivière
        this.riviere = this.add.sprite(1603,1333,'eau')
        this.anims.create({
            key: 'eau',
            frames: this.frames('eau','13'),
            frameRate: 14,
            repeat: -1
        });
        this.riviere.play('eau')
        this.riviere.stop('eau')
        //animation de la rivière coloré
        this.rivierec = this.add.sprite(1603,1333,'eauc')
        this.anims.create({
            key: 'eauc',
            frames: this.frames('eauc','13'),
            frameRate: 14,
            repeat: -1
        });
        this.rivierec.play('eauc')
        this.rivierec.stop('eauc')
        this.rivierec.visible = false

        //animation de la cloche
        this.gling = this.add.sprite(1058,567,'cloche')
        this.anims.create({
            key: 'cloche',
            frames: this.frames('cloche','8'),
            frameRate: 9,
            repeat: -1
        });
        this.gling.play('cloche')
        this.gling.stop('cloche')
        //animation de la cloche avec la couleur
        this.glingc = this.add.sprite(1058,567,'clochec')
        this.anims.create({
            key: 'clochec',
            frames: this.frames('clochec','8'),
            frameRate: 9,
            repeat: -1
        });
        this.glingc.play('clochec')
        this.glingc.stop('clochec')
        this.glingc.visible = false

        //création puis disparition des animaux
        this.ane = this.add.image(Phaser.Math.Between(100,2060),1130,'ane')
        this.ane.setScale(0.3)
        this.ane.visible=false
        this.cheval = this.add.image(Phaser.Math.Between(100,2060),1100,'cheval')
        this.cheval.setScale(0.3)
        this.cheval.visible=false
        this.chien = this.add.image(Phaser.Math.Between(100,2060),1155,'chien')
        this.chien.setScale(0.15)
        this.chien.visible=false
        this.chevre = this.add.image(Phaser.Math.Between(100,2060),1146,'chevre')
        this.chevre.setScale(0.15)
        this.chevre.visible=false
        this.cochon = this.add.image(Phaser.Math.Between(100,2060),1170,'cochon')
        this.cochon.setScale(0.23)
        this.cochon.visible=false
        this.coq = this.add.image(Phaser.Math.Between(100,2060),1159,'coq')
        this.coq.setScale(0.18)
        this.coq.visible=false
        this.lapin = this.add.image(Phaser.Math.Between(100,2060),1216,'lapin')
        this.lapin.setScale(0.11)
        this.lapin.visible=false
        this.mouton = this.add.image(Phaser.Math.Between(100,2060),1146,'mouton')
        this.mouton.setScale(0.22)
        this.mouton.visible=false
        this.oie = this.add.image(Phaser.Math.Between(100,2060),1154,'oie')
        this.oie.setScale(0.18)
        this.oie.visible=false
        this.vache = this.add.image(Phaser.Math.Between(100,2060),1127,'vache')
        this.vache.setScale(0.46)
        this.vache.visible=false

        //pont devant
        this.pont = this.add.image(1603,1114,'pont')

        //appel de la fonction pour les touches
        this.initKeyboard()

        //appel de la fonction pour trouver les postions et la taille
        this.objectPS()
    }

    //position objet
    objectPS()
    {
        let me=this;

        //touches enfoncées
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.getpos('right',objet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.getpos('left',objet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.getpos('up',objet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.getpos('down',objet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.getpos('right',objet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_SUBTRACT:
                    objet.setScale(objet.scale-0.01)
                    console.log(objet.scale)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_ADD:
                    objet.setScale(objet.scale+0.01)
                    console.log(objet.scale)
                    break;
            }
        });
    }

    //fonction touches
    initKeyboard(){

        let me=this;

        //touches enfoncées
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.riviere.anims.play('eau',true)
                    me.rivierec.anims.play('eauc',true)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.gling.anims.play('cloche',true)
                    me.glingc.anims.play('clochec',true)
                    break;
            }
        });

        //touches relachées
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                //L'affichage des animaux de A à P
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.affichage(me.ane)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.affichage(me.cheval)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.affichage(me.chien)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.affichage(me.chevre)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.affichage(me.cochon)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.affichage(me.coq)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.affichage(me.lapin)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.affichage(me.mouton)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.affichage(me.oie)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.affichage(me.vache)
                    break;
                //Les couleurs des animaux de Q à M
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.couleur(me.ane,'ane')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.couleur(me.cheval,'cheval')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.couleur(me.chien,'chien')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.couleur(me.chevre,'chevre')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.couleur(me.cochon,'cochon')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.couleur(me.coq,'coq')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.couleur(me.lapin,'lapin')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.couleur(me.mouton,'mouton')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.couleur(me.oie,'oie')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.couleur(me.vache,'vache')
                    break;
                //Autre de W à N
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.rivierec.anims.stop('eauc')
                    me.riviere.anims.stop('eau')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    if(me.riviere.visible == true)
                    {
                        me.riviere.visible = false
                        me.rivierec.visible = true
                    }
                    else
                    {
                        me.riviere.visible = true
                        me.rivierec.visible = false
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.gling.anims.stop('cloche')
                    me.glingc.anims.stop('clochec')
                    me.gling.setTexture('cloche0')
                    me.glingc.setTexture('clochec0')
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    if(me.gling.visible == true)
                    {
                        me.gling.visible = false
                        me.glingc.visible = true
                        me.pillier.setTexture('pillierc')
                    }
                    else
                    {
                        me.gling.visible = true
                        me.glingc.visible = false
                        me.pillier.setTexture('pillier')
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.B:
                    if(me.fond.texture.key == 'fond')
                    {
                        me.fond.setTexture('fondcnuit')
                        me.pont.setTexture('pontc')
                    }
                    else
                    {
                        me.fond.setTexture('fond')
                        me.pont.setTexture('pont')
                    }
                case Phaser.Input.Keyboard.KeyCodes.N:
                    if(me.fond.texture.key == 'fondc')
                    {
                        me.fond.setTexture('fondcnuit')
                    }
                    else
                    {
                        if (me.fond.texture.key == 'fondcnuit')
                        {
                            me.fond.setTexture('fondc')
                        }
                    }
                    break;
            }
        });
    }

    //affichage des animaux
    affichage(animal)
    {
        this.postPosY=animal.y
        if(animal.visible===false)
        {
            animal.visible=true

            var boup = this.tweens.createTimeline();
            boup.add
                ({
                targets: animal,
                duration: 250,
                y:950,
                x:Phaser.Math.Between(animal.x-80,animal.x+80),
                ease: 'Power0',
                })
            boup.add
                ({
                targets: animal,
                duration: 2000,
                y:this.postPosY,
                ease: 'bounce',
                });
            boup.play();
        }
        else
        {
            animal.visible=false
            animal.setPosition(Phaser.Math.Between(100,2060),this.postPosY,)
        }
    }

    //changement de texture des animaux
    couleur(animal,animalt)
    {
        if (animal.visible===true)
            {
                if (animal.texture.key == animalt+'c')
                    {
                        animal.setTexture(animalt)
                    }
                else
                    {
                        animal.setTexture(animalt+'c')
                    }
            }
    }

    //frames pour des animations dans une liste
    frames(prefix,length){
        let frames=[];
        for (let i=0;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }

    getpos(direction,objet)
    {
        if(direction == 'right')
        {
            objet.setPosition(objet.x+1,objet.y)
            console.log('x:',objet.x,'     y:',objet.y)
        }
        if(direction == 'left')
        {
            objet.setPosition(objet.x-1,objet.y)
            console.log('x:',objet.x,'     y:',objet.y)
        }
        if(direction == 'up')
        {
            objet.setPosition(objet.x,objet.y-1)
            console.log('x:',objet.x,'     y:',objet.y)
        }
        if(direction == 'down')
        {
            objet.setPosition(objet.x,objet.y+1)
            console.log('x:',objet.x,'     y:',objet.y)
        }
    }

    update()
    {

    }
}