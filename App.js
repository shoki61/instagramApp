import React from 'react';
import {View,Alert} from 'react-native';
import Footer from './src/views/footer';
import Navigation from './src/navigation';


class App extends React.Component{
    render(){
        return(
                <View style={{flex:1}}>
                  <Navigation
                    onDidFocus={() => Alert.alert('Refreshed')}
                  />
                  <Footer/>
                </View> 
        );
    }
}

export default App;
