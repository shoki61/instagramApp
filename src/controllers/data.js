import { observable, action, decorate } from 'mobx';


class data {

    datas = [
        {
            id: 0,
            userName:'Spiderman',
            profilImg: '../images/profilFoto.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 1,
            userName:'Batman',
            profilImg: '../images/profilFoto.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 2,
            userName:'Ironman',
            profilImg: '../images/profilFoto.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 3,
            userName:'Superman',
            profilImg: '../images/profilFoto.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 4,
            userName:'Black Panther',
            profilImg: '../images/profilFoto.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 5,
            userName:'Thor',
            profilImg: '../images/profilFoto.jpg' ,
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
