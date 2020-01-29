import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    profileHomeContainer:{
        backgroundColor:'black',
        height:h,
        width:w
   },
   userHeader:{
       height:h/11,
       alignItems:'center',
       flexDirection:'row',
       justifyContent:'center'
   },
   userName:{
       fontSize:23,
       color:'white',
       fontWeight:'bold'
   },
   menuIcon:{
       position:'absolute',
       right:25
   },
   userInfo:{
       width:w,
       flexDirection:'row',
       alignItems:'center',
       padding:15
   },
   bluePlusStyle:{
       position:'absolute',
       bottom:0,
       right:0,
       borderRadius:100,
       borderWidth:2,
       borderColor:'black'
   },
   profileDatasContainer:{
       flexDirection:'row',
       height:'100%',
       width:275,
       alignItems:'center',
       justifyContent:'center',
       paddingLeft:20,
   },
   profileDataContainer:{
       width:70,
       alignItems:'center',
       justifyContent:'center'
   },
   dataItemNumber:{
       color:'white',
       fontSize:22,
       fontWeight:'bold',
   },
   dataItemText:{
       color:'white',
       fontSize:16,
       fontWeight:'bold'
   },
   userDescription:{
       color:'whitesmoke',
       marginLeft:20,
       fontSize:18,
   },
   profileSettings:{
       color:'white',
       fontSize:17,
       fontWeight:'bold',
       textAlign:'center',
       padding:8,
       marginTop:10,
       marginLeft:30,
       marginRight:30,
       borderRadius:5,
       borderColor:'#2f3133',
       borderWidth:1.5

   },
   storysContainer:{
       height:h/5,
       padding:28,
       flexDirection:'row'
   },
   storyContainer:{
       alignItems:'center',
       marginRight:15     
   },
   addButton:{
       backgroundColor:'black',
       height:'auto',
       width:80,
       height:80,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:100,
       borderWidth:2,
       borderColor:'#2a2b2b',
       marginBottom:3
    },
    addText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    header:{
        flexDirection:'row',
        height:h/12,
        justifyContent:'space-between',
        alignItems:'center',
        borderTopColor:'grey',
        borderTopWidth:0.2
    },
    tabIconContainer:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        width:205
    },
    profilePosts:{
        flexWrap:'wrap'
    }
   


});

export default styles;
