import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


export default StyleSheet.create({
    container:{
        width:w,
        minHeight:h,
        backgroundColor:'black'
    },
    header:{
        height:h/9,
        backgroundColor:'#1c1c1c',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15
    },


});
