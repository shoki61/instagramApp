import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


export default StyleSheet.create({
    container:{
        width:w,
        minHeight:h,
    },
    header:{
        height:h/11,
        backgroundColor:'#1c1c1c',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15
    },
    storiesPart:{
        height:h/5.5,
        maxHeight:h/5.5,
        flexDirection:'row',
        backgroundColor:'black',
        paddingLeft:15,
        alignItems:'center',
        borderBottomColor:'white',
        borderBottomWidth:0.5
    },
    userContainer:{
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:10,
        paddingRight:10,
        margin:5,
    },
    storyProfileName:{
        fontSize:17,
        color:'white',
    },
    userInfoSection:{
        backgroundColor:'black',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:15,
        height:h/9.5,
        width:'100%',            
    },
    userName:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:14
    }




});
