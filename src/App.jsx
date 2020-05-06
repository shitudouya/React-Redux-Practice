import React, { Component } from "react";
import InputText from "./components/InputText";
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid';
import './style.css'
import { connect } from "react-redux";
import {add_Action,async_add_Action} from './store/actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
  }
  hanleText = (value) => {
    this.setState({
      text:value
    })
  }
  handleAdd = () => {
    if(this.state.text.trim()=== "") {
      return
    }
    this.props.add({
      id:uuidv4(),
      text:this.state.text
    })
  }
  handleAsyncAdd = () => {
    if(this.state.text.trim()=== "") {
      return
    }
    this.props.add_async({
      id:uuidv4(),
      text:this.state.text
    })
  }
  render() {
    return (
      <div className="box">
        <InputText hanleText={this.hanleText} text={this.state.text}></InputText>
         <div className="row">
          <div className="col-xs-12 add_btn">
            <button type="button" onClick={this.handleAdd} className="btn btn-success">添加
            </button>
            <button type="button" onClick={this.handleAsyncAdd} className="btn btn-success">1s后添加</button>
          </div>
        </div>
        <List></List>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => {
      dispatch(add_Action(value));
    },
    add_async:(value) => {
      dispatch(async_add_Action(value))
    }
  };
};

export default connect(null, mapDispatchToProps)(App);