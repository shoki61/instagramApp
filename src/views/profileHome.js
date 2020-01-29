import React from 'react';
import {View,Text} from 'react-native';
import SImage from 'react-native-scalable-image';

import Footer from './footer'
import styles from '../styles/profileHomeStyle';

class ccc extends React.Component{
    render(){
        return(
               <View style={{flex:1}}>
                   <View style={styles.profileHomeContainer}>
                   <View style={styles.userHeader}>
                       <Text style={styles.userName}>mrtrabzon</Text>
                       <SImage style={styles.menuIcon} height={25} source={require('../images/menuIcon.png')}/>
                   </View>

                   <View style={styles.userInfo}>
                       <View>
                           <SImage height={115} width={115} borderRadius={100} source={require('../images/profilFoto.jpg')} />
                           <SImage height={28} style={styles.bluePlusStyle} source={require('../images/bluePlusIcon.png')} />
                       </View>
                       <View style={styles.profileDatasContainer}>
                           <View style={styles.profileDataContainer}>
                               <Text style={styles.dataItemNumber}>27</Text>
                               <Text style={[styles.dataItemText,{fontSize:14}]}>Gönderiler</Text>
                           </View>
                           <View style={styles.profileDataContainer}>
                               <Text style={styles.dataItemNumber}>182</Text>
                               <Text style={styles.dataItemText}>Takipçi</Text>
                           </View>
                           <View style={styles.profileDataContainer}>
                               <Text style={styles.dataItemNumber}>254</Text>
                               <Text style={styles.dataItemText}>Takip</Text>
                           </View>
                       </View>
                   </View>
                   
                   <Text style={styles.userDescription}>Myrat</Text>

                   <Text style={styles.profileSettings}>Profili Düzenle</Text>

                   <View style={styles.storysContainer}>
                       <View style={styles.storyContainer}>
                          <View style={styles.addButton} ><SImage height={25}source={require('../images/plus.png')} /></View>
                          <Text style={styles.addText} >Yeni</Text>
                       </View>
                   </View>
                
                   <View>
                       <View style={styles.header} >
                           <View style={styles.tabIconContainer} ><SImage height={30} source={require('../images/gridIcon.png')} /></View>
                           <View  style={styles.tabIconContainer}><SImage height={35} source={require('../images/profileIcon.png')}/></View>
                       </View>
                       <View style={styles.profilePosts} >
                           <SImage height={150} source={require('../images/profilFoto.jpg')} />
                           <SImage height={150} source={require('../images/profilFoto.jpg')} />
                           <SImage height={150} source={require('../images/profilFoto.jpg')} />
                       </View>
                   </View>
               </View>
                   <Footer navigation={this.props.navigation}/>
               </View>
        );
    }
}
export default ccc;