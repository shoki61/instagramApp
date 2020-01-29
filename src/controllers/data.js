import { observable, action, decorate } from 'mobx';


class data {

    datas = [
        {
            id: 0,
            userName:'Spiderman',
            profilImg: 'https://i.sozcu.com.tr/wp-content/uploads/2019/09/08/iecrop/spiderman-2_1_1_1567947586-400x400.jpg',
            image: '../images/profilFoto.jpg'
        },
        {
            id: 1,
            userName:'Batman',
            profilImg: 'https://www.thelegendarytrend.com/wp-content/uploads/2016/03/BenAffleck15-400x400.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 2,
            userName:'Ironman',
            profilImg: 'https://i.sozcu.com.tr/wp-content/uploads/2019/09/10/iecrop/ironman_1_1_1568131302-400x400.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 3,
            userName:'Superman',
            profilImg: 'https://headlineplanet.com/home/wp-content/uploads/2016/04/Batman-V-Superman-Poster-400x400.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 4,
            userName:'Black Panther',
            profilImg: 'https://avatarfiles.alphacoders.com/935/93592.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 5,
            userName:'Thor',
            profilImg: 'https://i.pinimg.com/originals/06/26/d5/0626d5f6f0b5022a13217c1b6dd765e4.png' ,
            image: '../images/profilFoto.jpg'
        },
        
    ];
}

decorate(
    data,
    {
        
        datas: observable,
    }
);

export default new data();
