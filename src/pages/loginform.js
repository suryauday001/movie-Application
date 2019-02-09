import React, { Component } from 'react'
import { userlogin } from '../function/postData';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      request_token: "",
      redirect: false
    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=d69d7ea6f792347ca3760283324b6600')
      .then(resData => {
        console.log(resData.data.request_token);
        //const userproducts = resData.data;
        this.setState({
          request_token: resData.data.request_token
          //isLoading: false
        });

      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })

  }


  login() {
    userlogin('login', this.state).then((result) => {
      let responseJson = result;
      console.log(responseJson);
      let errors = responseJson.status_message;
      let status = responseJson.success;
      let errorcontainer = document.querySelector(".error");
      console.log(status);
      if (status) {
        console.log("false status");
        this.setState({ redirect: true })
        localStorage.setItem('userdata', JSON.stringify(responseJson))
      }
      else {
        console.log("true status");
        errorcontainer.style.display = 'block';
        errorcontainer.innerHTML = errors;
        this.setState({ username: "", password: "" });
      }
    });


  }

  render() {
    if (this.state.redirect || localStorage.getItem('userdata')) {
      return (

        <Redirect path={'/movies'} to={'/movies'} />

      )
    }
    console.log(this.state);
    return (
      <div className="loginForm">
        <div>
          <form >
            <ul>
              <li>
                <input name="username" value={this.state.username} type="text" onChange={this.onChange} placeholder="username" />
              </li>
              <li>
                <input name="password" value={this.state.password} type="password" onChange={this.onChange} placeholder="password" />
                <input name="request_token" type="hidden" value="7f2f8f965eec6d8aa6ec7b914bfd992708e7bc3f" />
              </li>
              <li>
                <button type="button" onClick={this.login}>Login</button>
              </li>
            </ul>
            <div className="error"></div>
          </form>
        </div>
        <p className="note">
          Please use below credentials for login :<br/>
  Username:suryauday001 / Password: test@1234
        </p>
      </div>
    )
  }
}

export default Loginform