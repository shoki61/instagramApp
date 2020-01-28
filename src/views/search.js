import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

class Search extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{ position:'absolute'}} onPress={() => this.props.navigation.navigate('s2')}>
                <Text style={{color:'red'}}>Salam</Text>
            </TouchableOpacity>
                
        );
    }
}
export default Search;
