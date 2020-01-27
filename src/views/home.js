import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/homeStyle'

class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <SImage width={43} source={require('../images/cameraIcon.png')}/>
                    </TouchableOpacity>

                    <SImage width={180} source={require('../images/instagramText.png')}/>
                    
                    <TouchableOpacity>
                        <SImage width={43} source={require('../images/messageIcon.png')}/>
                    </TouchableOpacity>
                </View>




            </View>
        )
    }
}





export default Home;
