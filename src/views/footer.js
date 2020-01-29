import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/footerStyle';

class Footer extends React.Component{
   
    render(){
        return(
            <View style={styles.footerContainer} >

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('home')}>
                   <SImage height={30} width={30} source={require('../images/homeIcon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('search')}>
                  <SImage height={30} width={30} source={require('../images/searchIcon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('addPhoto')}>
                  <SImage height={30} width={30} source={require('../images/plusIcon.png')}/>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.props.navigation.navigate('profileActions')}>
                  <SImage height={30} width={30} source={require('../images/heartIcon.png')}/>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.props.navigation.navigate('profileHome')}>
                  <SImage height={30} width={30} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
               </TouchableOpacity>
                
            </View>
        );
    }
}

/*<TouchableOpacity


 style={{position:'absolute'}} >
      <Text style={{color:'red'}}>sssss</Text>
</TouchableOpacity>*/


export default Footer;
