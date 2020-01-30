import { observable, action, decorate } from 'mobx';
import axios from 'axios';



class data {

    datas = [];

    setDatas(){
        axios.get('https://intagram-app.firebaseio.com/datas.json')
        .then(response=>{
            this.datas = response.data;
        })
    }
    
}

decorate(
    data,
    {
        
        datas: observable,
        setDatas:action
    }
);

export default new data();
