import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Navigator from './screens/Navigator';
import store from './redux/store/index';

class App extends Component{

  render() {
      
    return (
      <Provider store = {store}>
          <Navigator/>
      </Provider>
    );

  }

}

export default App;