import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps27063Navigator from '../features/Maps27063/navigator';
import Tutorial27062Navigator from '../features/Tutorial27062/navigator';
import Messaging27061Navigator from '../features/Messaging27061/navigator';
import ArticleList27060Navigator from '../features/ArticleList27060/navigator';
import Achievements27059Navigator from '../features/Achievements27059/navigator';
import Add-Item27056Navigator from '../features/Add-Item27056/navigator';
import BlankScreen27050Navigator from '../features/BlankScreen27050/navigator';
import Contacts27033Navigator from '../features/Contacts27033/navigator';
import ArticleList27007Navigator from '../features/ArticleList27007/navigator';
import ArticleList27006Navigator from '../features/ArticleList27006/navigator';
import ArticleList27005Navigator from '../features/ArticleList27005/navigator';
import ArticleList26966Navigator from '../features/ArticleList26966/navigator';
import ArticleList26965Navigator from '../features/ArticleList26965/navigator';
import ArticleList26964Navigator from '../features/ArticleList26964/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps27063: { screen: Maps27063Navigator },
Tutorial27062: { screen: Tutorial27062Navigator },
Messaging27061: { screen: Messaging27061Navigator },
ArticleList27060: { screen: ArticleList27060Navigator },
Achievements27059: { screen: Achievements27059Navigator },
Add-Item27056: { screen: Add-Item27056Navigator },
BlankScreen27050: { screen: BlankScreen27050Navigator },
Contacts27033: { screen: Contacts27033Navigator },
ArticleList27007: { screen: ArticleList27007Navigator },
ArticleList27006: { screen: ArticleList27006Navigator },
ArticleList27005: { screen: ArticleList27005Navigator },
ArticleList26966: { screen: ArticleList26966Navigator },
ArticleList26965: { screen: ArticleList26965Navigator },
ArticleList26964: { screen: ArticleList26964Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
