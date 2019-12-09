import React, { Component, Fragment } from "react";
import axios from "axios";
import { Offline, Online, Detector } from "react-detect-offline";

let isOnline = false;

export default class Create extends Component {
  constructor(props) {
    super(props);
    //binds the specific input on change
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCollege = this.onChangeCollege.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      city: "",
      collegeName: ""
    };
  }

  sendData() {
    this.sendSavedData();
    isOnline = true;
  }
  saveData() {
    isOnline = false;
  }

  //onchange stores the specific data into state
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  onChangeCollege(e) {
    this.setState({
      collegeName: e.target.value
    });
  }

  //executes when internet is offline and sends the locally stored data into the end point when stores it in DB and once stored it removes it from local storage
  sendSavedData() {
    if (localStorage.getItem("data")) {
      console.log("calling");

      axios
        //stores the data into DB
        .post(
          "https://syncserverapp.herokuapp.com/students",
          JSON.parse(localStorage.getItem("data"))
        )
        .then(res => console.log("Success"));
      localStorage.removeItem("data");
    } else return;
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      age: this.state.age,
      city: this.state.city,
      collegeName: this.state.collegeName
    };

    //if internet is On
    if (isOnline) {
      axios
        //stores the data into DB
        .post("https://syncserverapp.herokuapp.com/students", obj)
        .then(res => console.log("Success"));
      //if internet is off
    } else {
      localStorage.setItem("data", JSON.stringify(obj));
    }

    this.setState({
      firstname: "",
      lastname: "",
      age: "",
      collegeName: "",
      city: ""
    });
  }

  render() {
    return (
      <Fragment>
        <Detector
          render={({ online }) => (
            <div className={online ? "bg-success" : "bg-warning"}>
              You are currently {online ? "online" : "offline"}
              {online ? this.sendData() : this.saveData()}
            </div>
          )}
        />
        <div style={{ marginTop: 10 }}>
          <h3>Add New Student</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>First Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_name}
                onChange={this.onChangeFirstname}
              />
            </div>
            <div className="form-group">
              <label>Last Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.business_name}
                onChange={this.onChangeLastName}
              />
            </div>
            <div className="form-group">
              <label>Age: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
              />
            </div>
            <div className="form-group">
              <label>City: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
              />
            </div>
            <div className="form-group">
              <label>College: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.collegeName}
                onChange={this.onChangeCollege}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
