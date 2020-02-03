import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../styles/footerStyle';
import helper from '../controllers/helper';
 



class Footer extends React.Component{
    render(){
        return(
            <View style={styles.footerContainer} >
     
                <TouchableOpacity onPress={()=>helper.navigasyon.navigate('home')}>
                  <SImage height={30} width={30} source={require('../images/homeIcon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>helper.navigasyon.navigate('search')}>
                  <SImage height={30} width={30} source={require('../images/searchIcon.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>helper.navigasyon.navigate('addPhoto')}>
                  <SImage height={30} width={30} source={require('../images/plusIcon.png')}/>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>helper.navigasyon.navigate('profileActions')}>
                  <SImage height={30} width={30} source={require('../images/heartIcon.png')}/>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>helper.navigasyon.navigate('profileHome')}>
                  <SImage height={30} width={30} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
               </TouchableOpacity>
                
            </View>
        );
    }
}

export default observer(Footer);
