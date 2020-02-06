import { observable, action, decorate } from 'mobx';


class cameraController {
    
    
    cameraOptions = {
       type : 'back',
       flashMode: 'auto',
    }
    setType=async()=>{
     
          this.cameraOptions.type = (this.cameraOptions.type === 'back') ? 'front' : 'back'
          
       
    }
    setFlashMode(){
        if(this.cameraOptions.flashMode === 'auto') this.cameraOptions.flashMode = 'on'
        else if(this.cameraOptions.flashMode === 'on') this.cameraOptions.flashMode = 'off'
        else if(this.cameraOptions.flashMode === 'off') this.cameraOptions.flashMode ='auto'
    }
    
    
}

decorate(
    cameraController,
    {
        cameraOptions: observable,
        type:observable,
        setType: action,
        setFlashMode:action,
        back:observable,
        front:observable

    }
);

export default new cameraController();
