import React from 'react';
import {View,Text} from 'react-native';
import Footer from './src/views/footer';
import Home from './src/views/home'
import Navigation from './src/navigation'

class App extends React.Component{
    render(){
        return(
                <View style={{flex:1}}>
                  <Navigation/>
                </View>
                
               
               
        );
    }
}

export default App;
