import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container:{
        width:w,
        height:h
    },
    cameraContainer:{
        flex:1
    }
});

export default styles;
