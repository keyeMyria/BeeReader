import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Routers from '@/routers'

import '@/shared/layout.sass'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Routers history={history}/>
    </MuiThemeProvider>
  </Provider>
)
export default Root
