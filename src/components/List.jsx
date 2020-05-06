import React, { Component } from "react";
import { connect } from "react-redux";
import {delete_Action,delete_all_Action} from '../store/actions/index'

class List extends Component {
  componentDidMount() {
    console.log(this.props.list);
  }
  deleteOne = (id)=>{
    this.props.delete(id)
  }
  handleClearAll = () => {
    this.props.deleteAll()
  }
  render() {
    const { list } = this.props;
    let footer;
    if (list.length > 0) {
      footer = (
        <div className="row">
          <hr />
          <div className="col-xs-6">共有{this.props.list.length}个</div>
          <div className="col-xs-6">
            <button type="button" onClick={this.handleClearAll} className="btn btn-link pull-right delete">
              清空所有
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <ul className="list-group">
          {list.map((value) => {
            return (
              <li key={value.id} className="list-group-item">
                <span>{value.text}</span>
                <button type="button" onClick={this.deleteOne.bind(this,value.id)} className="btn btn-link pull-right delete">
                  删除
                </button>
              </li>
            );
          })}
        </ul>
        {footer}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      dispatch(delete_Action(id));
    },
    deleteAll:(id)=>{
      dispatch(delete_all_Action(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
