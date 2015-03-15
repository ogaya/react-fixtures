
import React from 'react';
import Hover form '../abstract/hover';

let Button = React.createClass({
    mixins:[Hover],
    getInitialState: function () {
        return { 
            shownDate: now
        };
    },
    render: function() {
        return (
            <div>
                {this.state.shownDate.toLocaleDateString("ja-JP")}
            </div>
        );
    }
});


module.exports = Button;

