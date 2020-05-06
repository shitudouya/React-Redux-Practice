import React, { Component } from "react";

export default class InputText extends Component {
  handleChange = (e) => {
    this.props.hanleText(e.target.value);
  };
  render() {
    const { text } = this.props;
    return (
      <>
        <h3>Redux 基本示例</h3>
        <div className="row">
          <div className="col-xs-12">
            <input type="text" value={text} onChange={this.handleChange} className="form-control" placeholder="想输入点什么..." />
          </div>
        </div>
      </>
    );
  }
}
