import { observable, action, decorate } from 'mobx';



class helper {

    navigasyon = ''
    setNavigasyon(value){
        this.navigasyon = value;
    }
    
}

decorate(
    helper,
    {
        
        navigasyon: observable,
        setNavigasyon:action
    }
);

export default new helper();
