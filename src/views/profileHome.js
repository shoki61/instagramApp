import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import SImage from 'react-native-scalable-image';
import { observer } from 'mobx-react';

import styles from '../styles/profileHomeStyle';
import helper from '../controllers/helper';
import data from '../controllers/data';
import { FlatList } from 'react-native-gesture-handler';

const h = Dimensions.get('window').height;

class profileHome extends React.Component{
    componentWillMount= async ()=>{
        await helper.setNavigasyon(this.props.navigation);
       
    }
    setProfileHosts(data){
        return(
           <View>
                <SImage height={150} source={{uri:data.profilImg}} />
           </View>        
        )
    }
    renderProfilePosts(){
        return(
            <View>
                <FlatList
                data={data.datas}
                 renderItem={data=>this.setProfileHosts(data.item)}/>
            </View>
        );
    }
    setProfileHome(data){
        return(
            <View style={styles.profileHomeContainer}>
                   <View style={styles.userHeader}>
                       <Text style={styles.userName}>{data.userName}</Text>
                       <SImage style={styles.menuIcon} height={25} source={require('../images/menuIcon.png')}/>
                   </View>

                   <View style={styles.userInfo}>
                       <View>
                           <SImage height={115} width={115} borderRadius={100} source={{uri:data.profilImg}} />
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
                           {this.renderProfilePosts()}   
                       </View>
                   </View>
               </View>

        )
       
    }
    renderProfileHome(){
        return(
            <FlatList
            data={data.datas}
            renderItem={data=>this.setProfileHome(data.item)}
    
          />
        )
    }
    render(){
        return( 
               <View style={{flex:1,paddingBottom:h/11.5}}>
                   {this.renderProfileHome()}
               </View>
        );
    }
}
export default observer(profileHome);
