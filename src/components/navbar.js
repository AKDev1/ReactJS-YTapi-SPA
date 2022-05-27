import React, { Component }  from 'react';
import logo from '../assets/logo.png';

class Navbar extends React.Component{
  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.query);
  };
  
  render(){
    return(
      <div className='navbar-content'>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/128px-YouTube_Logo_%282013-2017%29.svg.png" height="30px"/></a>
            <form onSubmit={this.handleSubmit} class="form-inline">
              <input onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;