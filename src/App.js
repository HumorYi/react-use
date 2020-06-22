import React, { Component } from 'react'
import Context from './pages/Context'
import Hoc from './pages/Hoc'
import Dialog from './pages/Dialog'
import State from './pages/State'
import Lifecycle from './pages/Lifecycle'
import PureComponentPage from './pages/PureComponent'
import RefsPage from './pages/Refs'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Context />
        <Hoc />
        <Dialog />
        <State />
        <Lifecycle />
        <PureComponentPage /> */}

        <RefsPage />
      </div>
    )
  }
}
