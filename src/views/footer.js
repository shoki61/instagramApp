import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

class Footer extends React.Component{
    
    render(){
        return(
            <TouchableOpacity style={{position:'absolute'}} onPress={()=>this.props.navigation.navigate('profileHome')}>
                    <Text style={{color:'red'}}>sssss</Text>
            </TouchableOpacity>
                
        );
    }
}

export default Footer;
