import React from 'react';
import {View,Image,TouchableOpacity, PermissionsAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';

import styles from '../styles/cameraStyle';
import cameraController from '../controllers/cameraController';
import { observer } from 'mobx-react';


class Camera extends React.Component{
 

permissionControll = async () => { 

  try {
    const sonuc1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Dosya Okuma İzni',
        message: 'Uygulama bu izne ihtiyaç duyuyor.',
        buttonNeutral: 'Daha Sonra Sor',
        buttonNegative: 'İptal',
        buttonPositive: 'İzin Ver',
      },
    );


    const sonuc2 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Dosya Yazma İzni',
        message: 'Uygulama bu izne ihtiyaç duyuyor.',
        buttonNeutral: 'Daha Sonra Sor',
        buttonNegative: 'İptal',
        buttonPositive: 'İzin Ver',
      },
    );


    if ((sonuc1 === PermissionsAndroid.RESULTS.GRANTED) && (sonuc2 === PermissionsAndroid.RESULTS.GRANTED)) console.log('İZİN VERİLDİ');
    else console.log('İZİN VERİLMEDİ');
  }
  catch (err) { console.warn(err); }
}
  
takePicture = async () => {
	await this.permissionControll();

	if (this.camera){
		const options = { quality: 1, base64: true, doNotSave: false, };
		const data = await this.camera.takePictureAsync(options);
		CameraRoll.saveToCameraRoll(data.uri, 'photo')
	}
};

   
  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log('response', JSON.stringify(response));
       
      }
     
    });

  }
  
    render(){
        return(
            <View style={styles.container}>
                <RNCamera
                  style={styles.cameraContainer}
                  ref={ref => {this.camera = ref}}
                  type={cameraController.cameraOptions.type}
                  flashMode={cameraController.cameraOptions.flashMode}
                  androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
                  androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
                  
                >
                 <View style={styles.cameraTopSection}>
                    <TouchableOpacity><Image style={styles.cameraTopImages} source={require('../images/settingIcon.png')}/></TouchableOpacity>    
                    <TouchableOpacity onPress={()=>cameraController.setFlashMode()}>
                      {cameraController.cameraOptions.flashMode==='auto' &&  <Image style={styles.cameraTopImages} source={require('../images/flashAutoIcon.png')}/>}
                      {cameraController.cameraOptions.flashMode==='on' &&  <Image style={styles.cameraTopImages} source={require('../images/flashOnIcon.png')}/>}
                      {cameraController.cameraOptions.flashMode==='off' &&  <Image style={styles.cameraTopImages} source={require('../images/flashOffIcon.png')}/>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('home')}><Image style={styles.CloseIconStyle} source={require('../images/closeIcon.png')}/></TouchableOpacity>
                 </View>

                
                 <View style={styles.bottomContainer}>
                    <View style={styles.cameraButtonContainer}>
                      <TouchableOpacity onPress={() => this.takePicture()}><Image style={styles.cameraButton} source={require('../images/cameraButtonIcon.png')}/></TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainerSection}>
                      <TouchableOpacity onPress={()=>this.launchImageLibrary()}><Image style={styles.bottomIcons} source={require('../images/galleryIcon.png')}/></TouchableOpacity>
                      <TouchableOpacity onPress={()=>cameraController.setType()} ><Image style={styles.bottomIcons} source={require('../images/rotateCameraIcon.png')}/></TouchableOpacity>
                    </View>
                 </View>


                </RNCamera>
            </View>
        );
    }
}
export default observer(Camera);
