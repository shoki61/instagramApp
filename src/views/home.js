import React from 'react';
import {View,Text,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../styles/homeStyle';
import Footer from './footer';
import data from '../controllers/data';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class Home extends React.Component{
    componentWillMount(){
       
    }
    setHome(v) {
        return(                
                 <View style={styles.postsFlowSection}>
                     <View style={styles.userPostSection}>
                         <View style={styles.userInfoSection}>
 
                             <View style={{flexDirection:'row',alignItems:'center'}}>
                                <SImage height={45} width={45} borderRadius={100} source={{uri:v.profilImg}}/>
                               <Text style={styles.userName}>{v.userName}</Text>
                             </View>
                             <TouchableOpacity><SImage height={20} width={20} source={require('../images/threeDot.png')} /></TouchableOpacity>
 
                         </View>
                         <View>
                             <SImage width={w} source={{uri:v.profilImg}} />
                         </View>
                     </View>
                 </View>
        );
    }
    renderHome(){
        return(
            <View style={styles.container}>
                
                <View style={styles.header}>
                  <TouchableOpacity>
                     <SImage width={30} source={require('../images/cameraIcon.png')}/>
                  </TouchableOpacity>

                  <SImage width={143} source={require('../images/instagramText.png')}/>
            
                  <TouchableOpacity>
                    <SImage width={40} source={require('../images/messageIcon.png')}/>
                  </TouchableOpacity>
                </View>

                <View style={styles.storiesPart}>
                  <View style={styles.userContainer}>
                    <SImage height={80} width={80} borderRadius={100} source={require('../images/profilFoto.jpg')}/>
                   <Text style={styles.storyProfileName} >Bruce Wayne</Text>
                  </View>  
                </View>
                <FlatList
                  data={data.datas}
                  renderItem={v => this.setHome(v.item)}
                />
                <Footer navigation={this.props.navigation}/>
            </View>   
        );
    }
    render(){     
        data.setDatas();   
        return(
            <View style={{flex:1}}>
                {this.renderHome()}
                
            </View>
           
        )
    }
}





export default observer(Home);
