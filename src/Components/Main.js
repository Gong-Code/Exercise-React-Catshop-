import React from 'react'
import { Home } from './Home'
import { Products } from './Products'

export const Main = (props) => {
  return (
    <main>
        { props.activePage == "Home" && <Home /> }
        { props.activePage == "Products" && <Products />}
    </main>
  )
}
