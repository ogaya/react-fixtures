
import React      from 'react';
import Hover      from '../abstract/hover';
import Path       from './path';
import Immutable  from 'immutable';

let pathStyle = Immutable.Map({
  fillRule:"nonzero",
  stroke:"none",
  strokeLinejoin:"miter",
  strokeLinecap: "round",
  strokeMiterlimit: "4",
  fill:"#333"
});

let pathHoverStyle= Immutable.Map({
  fill:"#773"
});

let buttonStyle = Immutable.Map({
  display: "inline-block",
  width: "30px",
  height: "30px"
});

let Button = React.createClass({
  mixins:[Hover],
  propTypes: {
    onClick: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      path: Path.LeftArrow.Rect,
      style: {}
    };
  },
  _getPathStyle(){
    if(!this.state.hoverd) return pathStyle.toJS();
    return pathStyle.merge(pathHoverStyle).toJS();
  },
  render: function() {
    let bStyle = buttonStyle.merge(this.props.style).toJS();
    let pStyle = this._getPathStyle();
    return (
      <div onClick={this.props.onClick} style={bStyle}
        onMouseEnter={this.onHover} onMouseLeave={this.onUnhover}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 100 100">
          <path style={pStyle} d={this.props.path}/>
        </svg>
      </div>
    );
  }
});

module.exports = Button;

