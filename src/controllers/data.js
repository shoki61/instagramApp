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
            profilImg: 'https://www.wannart.com/wp-content/uploads/2019/11/cerentambiribne.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 2,
            userName:'Ironman',
            profilImg: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F05%2Firon-man-original-movie-suit-stolen-1.jpg?q=75&w=800&cbr=1&fit=max' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 3,
            userName:'Superman',
            profilImg: 'https://i0.wp.com/www.saklikumanda.com/wp-content/uploads/2018/12/Superman-Copy.png?fit=750%2C500&ssl=1' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 4,
            userName:'Black Panther',
            profilImg: 'https://www.wannart.com/wp-content/uploads/2018/12/wp1869876_900x600-900x580.jpg' ,
            image: '../images/profilFoto.jpg'
        },
        {
            id: 5,
            userName:'Thor',
            profilImg: 'https://img-s2.onedio.com/id-5dbb18993a893481105a6233/rev-0/w-635/listing/f-jpg-webp/s-c546bcde7a93bd86f6e819fb93c12242d9f0affb.webp' ,
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
