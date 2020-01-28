import React from 'react';
import {View,Text} from 'react-native';
import Footer from './footer'

class ccc extends React.Component{
    render(){
        return(
               <View>
                   <Text onPress={() => this.props.navigation.navigate('home')} style={{color:'red', }}>Murti</Text>
               </View>
        );
    }
}
export default ccc;