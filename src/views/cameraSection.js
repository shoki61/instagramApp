import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

import styles from '../styles/cameraStyle';
import cameraController from '../controllers/cameraController';


class Camera extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <RNCamera
                  style={styles.cameraContainer}
                  ref={ref => {this.camera = ref}}
                  type={cameraController.cameraOptions.type}
                  flashMode={RNCamera.Constants.FlashMode.on}
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
                 <TouchableOpacity onPress={()=>cameraController.setType}><Text >{cameraController.cameraOptions.type}</Text></TouchableOpacity>
                </RNCamera>
            </View>
        );
    }
}
export default Camera;
