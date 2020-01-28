import React from 'react';
import {View,Text,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import SImage from 'react-native-scalable-image';

import styles from '../styles/homeStyle';
import Footer from './footer';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class Home extends React.Component{


    render(){
        return(
            <View style={styles.container}>
                 
                <View style={styles.header}>
                    <TouchableOpacity>
                        <SImage width={30} source={require('../images/cameraIcon.png')}/>
                    </TouchableOpacity>

                    <SImage width={143} source={require('../images/instagramText.png')}/>
                    
                    <TouchableOpacity>
                        <SImage width={30} source={require('../images/messageIcon.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.storiesPart}>
                  <View style={styles.userContainer}>
                    <SImage height={80} width={80} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                    <Text style={styles.storyProfileName} >Bruce Wayne</Text>
                  </View>
                  <View style={styles.userContainer}>
                    <SImage height={80} width={80} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                    <Text style={styles.storyProfileName} >Bruce Wayne</Text>
                  </View> 
                  <View style={styles.userContainer}>
                    <SImage height={80} width={80} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                    <Text style={styles.storyProfileName} >Bruce Wayne</Text>
                  </View>       
                </View>

                <View style={styles.postsFlowSection}>
                    <View style={styles.userPostSection}>
                        <View style={styles.userInfoSection}>

                            <View style={{flexDirection:'row',alignItems:'center'}}>
                               <SImage height={45} width={45} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                               <Text style={styles.userName}>Spiderman</Text>
                            </View>
                            <SImage height={20} width={20} source={require('../images/threeDot.png')} />

                        </View>
                        <View>
                            <SImage width={w} source={require('../images/profilFoto.jpg')} />
                        </View>
                    </View>
                </View>
                <Footer navigation={this.props.navigation} /> 
            </View>
        )
    }
}





export default Home;
