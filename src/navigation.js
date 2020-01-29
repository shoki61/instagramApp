import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import AddPhoto from './views/addPhoto';
import Home from './views/home';
import ProfileHome from './views/profileHome';
import ProfileActions from './views/profileActions';
import Search from './views/search';

const settings = {
    header:null
};

const pages = createStackNavigator({

    profileHome : {screen: ProfileHome,navigationOptions:settings},
    home : {screen: Home,navigationOptions:settings},
    profileActions : {screen: ProfileActions,navigationOptions:settings},
    addPhoto : {screen: AddPhoto,navigationOptions:settings},
    search : {screen: Search,navigationOptions:settings},
    
},
   {initialRouteName:'home'}
);


export default createAppContainer(pages);
