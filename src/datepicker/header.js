
import React from 'react';
import Button from '../button';
import Path from '../button/path';
let style = {
  line: {
    display: "inline",
    padding: "0px"
  },
  month: {
    fontFamily: "'游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3'," + 
      "'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo, sans-serif'",
    textAlign:"center",
    verticalAlign:"bottom",
    display: "inline-block",
    height: "30px",
    width: "145px"
  }
};

let Header = React.createClass({
  propTypes: {
    shownDate: React.PropTypes.instanceOf(Date).isRequired,
    onShownDateChange: React.PropTypes.func
  },
  _onClickLeftArrow(){
    let date = this.props.shownDate;
    let nextDate = new Date(
      date.getFullYear(), date.getMonth() - 1, 1);
    this.props.onShownDateChange(nextDate);
  },
  render: function() {
    let year = this.props.shownDate.getFullYear();
    let month = this.props.shownDate.getMonth()+1;
    return (
      <div style={style.line}>
        <Button />
        <div style={style.month}> {year}/{month}</div>
        <Button path={Path.RightArrow.Rect}/>
      </div>
    );
  }
});


module.exports = Header;
