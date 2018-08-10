import React, { Component } from 'react'
// import { Button, Dropdown, Menu } from 'semantic-ui-react'
import CardToDisplay from './layout/Card/Card'
import NavBar from './layout/NavBar'
import Logo from './layout/Header/Header';
import SearchSomething from './layout/Search';
import Sidebar from './layout/sidebar'
// import './App.css'

class App extends Component{
render(){
  return(
    <div className="">
    <Logo/>
    <NavBar/>
    <Sidebar/>
      <div>
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    <CardToDisplay />
    </div>
  <SearchSomething/>
  </div>
  )
}
  
}
export default App; 
