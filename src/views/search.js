import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import helper from '../controllers/helper'

class Search extends React.Component{
    componentWillMount= async ()=>{
        await helper.setNavigasyon(this.props.navigation);
    }
    render(){
        return(
            <TouchableOpacity style={{ position:'absolute'}}>
               <Text style={{color:'red'}}>{JSON.stringify(helper.navigasyon)}</Text>
            </TouchableOpacity>
                
        );
    }
}
export default Search;
