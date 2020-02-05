import { observable, action, decorate } from 'mobx';




class helper {

    navigasyon = ''
    x = ''
    setNavigasyon(value){
        this.navigasyon = value
        this.x = JSON.stringify(value.state.routeName)
    }
    
}

decorate(
    helper,
    {
        
        navigasyon: observable,
        setNavigasyon:action,
        x:observable
    }
);

export default new helper();
