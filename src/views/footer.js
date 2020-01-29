import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/footerStyle';

class Footer extends React.Component{
   
    render(){
        return(
            <View style={styles.footerContainer} >
                <SImage height={30} width={30} source={require('../images/homeIcon.png')}/>
                <SImage height={30} width={30} source={require('../images/searchIcon.png')}/>
                <SImage height={30} width={30} source={require('../images/plusIcon.png')}/>
                <SImage height={30} width={30} source={require('../images/heartIcon.png')}/>
                <SImage height={35} width={35} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                
            </View>
        );
    }
}

/*<TouchableOpacity
onPress={()=>this.props.navigation.navigate('profileHome')}

 style={{position:'absolute'}} >
      <Text style={{color:'red'}}>sssss</Text>
</TouchableOpacity>*/


export default Footer;
