import React from 'react';
import {View,Text} from 'react-native';
import helper from '../controllers/helper'

class bbb extends React.Component{
    componentWillMount= async ()=>{
        await helper.setNavigasyon(this.props.navigation);
    }
    render(){
        return(
                <Text style={{color:'red', position:'absolute',}}>{JSON.stringify(helper.navigasyon)}</Text>
        );
    }
}

export default bbb;