import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      redirect:false
    }
    this.logout=this.logout.bind(this);
  }
  logout(){
    localStorage.clear();
    this.setState({redirect:true})
  }
  render() {
    if(this.state.redirect){
      return(
        <Redirect path={'/'} to={'/'} />
      )
    }
    return (
      <header className="wrapper header">
        <div className="container">
            <div className="logo"></div>
            <div className="search-box">
                <input type="text" placeholder="Search" />
            </div>
            <div className="signin" onClick={this.logout}><button>Logout</button></div>
        </div>
      </header>
    )
  }
}

export default Header
