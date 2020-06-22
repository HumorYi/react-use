import React, { Component } from 'react'
import ContextType from './ContextType'
import Provider from './Provider'
import Consumer from './Consumer'

import { ThemeProvider, UserProvider } from '../Context'

export default class Context extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'bamboo'
      }
    }
  }

  render() {
    const { theme, user } = this.state
    return (
      <div>
        <h3 className={theme.themeColor}>Context</h3>
        <ThemeProvider value={theme}>
          <ContextType />

          <UserProvider value={user}>
            <Provider />
            <Consumer />
          </UserProvider>
        </ThemeProvider>
      </div>
    )
  }
}
