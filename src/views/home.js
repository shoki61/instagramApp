import React from 'react';
import {View,Text,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import SImage from 'react-native-scalable-image';
import {observer} from 'mobx-react';

import styles from '../styles/homeStyle';
import data from '../controllers/data';
import helper from '../controllers/helper';




const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class Home extends React.Component{

    componentWillMount= async ()=>{
        await helper.setNavigasyon(this.props.navigation);
        await data.setDatas(); 
          
    }

  setStories(data){
        return(
                <View style={styles.storiesPart}>
                       <View style={styles.userContainer}>
                         <SImage height={80} width={80} borderRadius={100} source={{uri:data.profilImg}}/>
                         <Text style={styles.storyProfileName} > {data.userName} </Text>
                       </View>  
             </View>
        );
    }
    setHome(data) {
        return(                
                 <View style={styles.postsFlowSection}>
                     <View style={styles.userPostSection}>
                         <View style={styles.userInfoSection}>
 
                             <View style={{flexDirection:'row',alignItems:'center'}}>
                                <SImage height={45} width={45} borderRadius={100} source={{uri:data.profilImg}}/>
                                <Text style={styles.userName}>{data.userName}</Text>
                             </View>
                             <TouchableOpacity><SImage height={20} width={20} source={require('../images/threeDot.png')} /></TouchableOpacity>
 
                         </View>
                         <View>
                             <SImage width={w} source={{uri:data.profilImg}} />
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
                <View >
                  <FlatList
                    horizontal={true}
                    data={data.datas}
                    renderItem={data => this.setStories(data.item)}
                    showsHorizontalScrollIndicator={false}
                  />
               </View>
               <View style={{flex:1}}>
                  <FlatList
                    data={data.datas}
                    renderItem={data => this.setHome(data.item)}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
            </View>   
        );
    }
    render(){ 
       
        return(
            <View style={{flex:1}}>
             
              {this.renderHome()} 
                     
            </View>
           
        )
    }
}





export default observer(Home);
