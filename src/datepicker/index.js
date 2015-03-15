import React from 'react';
import Immutable from 'immutable';
import Hover from '../abstract/hover';
import Constants from '../constants';
 
let style= {
    base: Immutable.Map({
        fontFamily: Constants.fontFamily
    }),
    table: Immutable.Map({
        borderCollapse:"separate",
        borderSpacing: "0px",
        border: "1px solid #ccc"
    }),
    td: Immutable.Map({
        borderCollapse:"collapse",
        height:"30px",
        width:"30px",
        textAlign:"center",
        verticalAlign:"middle",
        cursor: "pointer",
        borderRadius: "5px",
        border: "1px solid #FFF"
    }),
    hoverTd: Immutable.Map({
        border: "1px solid #ccc",
        backgroundColor:"#FCC"
    }),
    selectTd: Immutable.Map({
        border: "1px solid #ccc",
        backgroundColor:"#CFF"
    })
};

let now = new Date();

// 指定月の日数を数える
let countDates = function(date){
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

// 指定月、指定週の指定番目が何日か計算する
let getDate = function(date, week, column){
    let year = date.getFullYear();
    let month = date.getMonth();
    let firstDay = new Date(year, month , 1).getDay();
    let date = week*7 + column - firstDay + 1 ;

    return new Date(year, month , date);
};

let equalDate = function(x , y){
    if(x.getDate() != y.getDate()) return false;
    if(x.getMonth() != y.getMonth()) return false;
    if(x.getFullYear() != y.getFullYear()) return false;
    return true;
};


let DayPanel = React.createClass({
    mixins: [Hover],
    getDefaultProps() {
        return {
            week: 0,
            column: 0,
            date: now,
            selectDate: now,
            onSelectDate: function(val){},
        };
    },
    _onClick(){
        let date = getDate(this.props.date, this.props.week, this.props.column);
        this.props.onSelectDate(date);
    },
    _getTdStyle(){
        let date = getDate(this.props.date, this.props.week, this.props.column);
        let hoverStyle = style.td.merge(this.state.hoverd ? style.hoverTd : {});
        let tdStyle = hoverStyle.merge(
            equalDate(this.props.selectDate, date) ? style.selectTd : {});
        return tdStyle;
    },
    render: function() {
        let date = getDate(this.props.date, this.props.week, this.props.column);
        return (
            <td style={this._getTdStyle().toJS()} onClick={this._onClick} 
                onMouseEnter={this.onHover} onMouseLeave={this.onUnhover}>
                {date.getDate()}
            </td>
        );
    }
});

let WeekLine = React.createClass({
    getDefaultProps() {
        return {
            week: 0,
            date: now,
            selectDate: now,
            onSelectDate: function(val){}
        };
    },
    render: function() {
        let dayPanels = Immutable.Range(0, 6).map(column =>
            <DayPanel key={column} week={this.props.week} column={column}
            date={this.props.date} selectDate={this.props.selectDate} onSelectDate={this.props.onSelectDate}/>);
        return (
            <tr>
                {dayPanels} 
            </tr>
        );
    }
});

let TitleArea = React.createClass({
    getInitialState: function () {
        return { 
            date: now
        };
    },
    render: function() {
        return (
            <div>
                {this.state.date.toLocaleDateString("ja-JP")}
            </div>
        );
    }
});

let DatePicker = React.createClass({
    getInitialState: function () {
        return { 
            date: now,
            selectDate: now
        };
    },
    _onSelectDate(val){
        this.setState({selectDate: val});
    },
    render: function() {
        let weekLines = Immutable.Range(0, 6).map(week =>
            <WeekLine key={week} week={week} date={this.state.date} 
            selectDate={this.state.selectDate} onSelectDate={this._onSelectDate}/>);
        return (
            <div style={style.base}>
                <TitleArea />
                <table style={style.table.toJS()}>
                    {weekLines} 
                </table>
            </div>
        );
    }
});

module.exports = DatePicker;
