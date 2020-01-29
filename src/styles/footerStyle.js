import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    footerContainer:{
        height:h/13,
        width:w,
        position:'absolute',
        bottom:21,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'black',
        padding:20
    }
});

export default styles;
