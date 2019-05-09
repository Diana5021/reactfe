import React, { PureComponent } from 'react'

import { Provider } from 'react-redux'

import store from 'store/'
import APPUI from 'pages/'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <APPUI></APPUI>
      </Provider>
    )
  }
}
