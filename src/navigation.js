import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import AddPhoto from './views/addPhoto';
import Home from './views/home';
import ProfileHome from './views/profileHome';
import ProfileActions from './views/profileActions';
import Search from './views/search';
import Camera from './views/cameraSection'

const settings = {
    header:null
};

const pages = createStackNavigator({
    home : {screen: Home,navigationOptions:settings},
    profileHome : {screen: ProfileHome,navigationOptions:settings},
    profileActions : {screen: ProfileActions,navigationOptions:settings},
    addPhoto : {screen: AddPhoto,navigationOptions:settings},
    search : {screen: Search,navigationOptions:settings},
    camera : {screen: Camera, navigationOptions:settings}
    
}
);


export default createAppContainer(pages);
