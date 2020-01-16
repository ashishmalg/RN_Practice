import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Sidemenu from './Sidemenu/Sidemenu';

export default createAppContainer(
  createDrawerNavigator(
    {
      Page1: {
        screen: Page1,
      },
      Page2: {
        screen: Page2,
      },
      Page3: {
        screen: Page3,
      },
    },
    {
      contentComponent: Sidemenu,
      drawerWidth: 1000,
      drawerBackgroundColor: 'yellow',
      drawerPosition: 'left',
    },
  ),
);
