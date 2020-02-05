import { observable, action, decorate } from 'mobx';


class cameraController {
    
   cameraOptions = {
       type: 'back',
       flashMode: 'auto',
   }
   setType(value){
       this.cameraOptions.type = (this.cameraOptions.type === 'back') ? value : 'back'
   }
    
    
}

decorate(
    cameraController,
    {
        cameraOptions: observable,
        type:observable,
        setType: action
    }
);

export default new cameraController();
