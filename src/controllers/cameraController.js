import { observable, action, decorate } from 'mobx';
import { RNCamera } from 'react-native-camera';

const back = RNCamera.Constants.Type.back;
const front = RNCamera.Constants.Type.front;

const auto = RNCamera.Constants.FlashMode.auto;
const on = RNCamera.Constants.FlashMode.on;
const off = RNCamera.Constants.FlashMode.off;

class cameraController {
    

    cameraOptions = {
       type: back,
       flashMode: auto,
    }
    setType(){
     
           this.cameraOptions.type= front
       
    }
    setFlashMode(){
        if(this.cameraOptions.flashMode === auto) this.cameraOptions.flashMode = on
        else if(this.cameraOptions.flashMode === on) this.cameraOptions.flashMode = off
        else if(this.cameraOptions.flashMode === off) this.cameraOptions.flashMode = auto
    }
    
    
}

decorate(
    cameraController,
    {
        cameraOptions: observable,
        type:observable,
        setType: action,
        setFlashMode:action,

    }
);

export default new cameraController();
