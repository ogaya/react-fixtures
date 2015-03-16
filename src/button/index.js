
import React from 'react';
import Hover from '../abstract/hover';

let style= {
    fillRule:"nonzero",
    stroke:"red",
    strokeLinejoin:"miter",
    strokeLinecap: "round",
    strokeMiterlimit: "4",
    fill:"green",
}

let leftArrowPath = 
    "M 0 0 L 0 100 L 100 100 L 100 0 L 0 0 z" +
    "M 10 10 L 50 10 L 50 50 L 10 50 L 10 10 z";

let Button = React.createClass({
    mixins:[Hover],
    propTypes: {
        onClick: React.PropTypes.func
    },
    render: function() {
        return (
            <div onClick={this.props.onClick}>
                <svg width="200" height="200">

                    <path style={style} 
                    d={leftArrowPath}/>
                </svg>
            </div>
        );
    }
});


module.exports = Button;

