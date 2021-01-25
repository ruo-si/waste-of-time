import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import { Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";
import "./pages.css"

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: "",
    name: ""
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI.signup({
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          if (res.status === 200) {
            this.props.authenticate();
            return <Redirect to="/Login" />
          }
        })
        .catch(err => console.log(err.response.data));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="6">

            <form>
              <input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username"
              />
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name"
              />
              <input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email "
              />
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                type="Confirm Password"
              />
              <input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="Confirm Password"
                type="password"
              />

              <button
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                className="cta"
              >
                Signup
              </button>
              <Link to="/login">
                <button className="cta"> Login </button>
              </Link>
            </form>
          </Col>

        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/Dashboard' /> : <div></div>}


      </Container>
    );
  }
}

export default Signup;