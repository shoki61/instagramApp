import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container:{
        width:w,
        height:h
    },
    cameraContainer:{
       flex:1,
    },
    cameraTopSection:{
        position:'absolute',
        top:10,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:w,
        paddingLeft:15,
        paddingRight:15
    },
    cameraTopImages:{
        width:35,
        height:35,
    },
    CloseIconStyle:{
        width:25,
        height:25,
    },
    bottomContainer:{
        position:'absolute',
        bottom:85,
        width:w
    },
    cameraButtonContainer:{
        width:w,
        alignItems:'center',
    },
    bottomContainerSection:{
        width:w,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15
    },
    cameraButton:{
        width:100,
        height:100
    },
    bottomIcons:{
        width:40,
        height:40
    }
});

export default styles;
