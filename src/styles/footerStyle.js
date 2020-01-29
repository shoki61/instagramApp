import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    footerContainer:{
        height:h/11.5,
        width:w,
        bottom:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'black',
        paddingLeft:30,
        paddingRight:30
    }
});

export default styles;
