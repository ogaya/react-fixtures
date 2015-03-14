import React from 'react';

let WeekLine = React.createClass({


});

let DatePicker = React.createClass({

    getInitialState: function () {
        return { date: new Date() };
    },
    render: function() {
        return (
            <div>
                test
            </div>
        );
    }
});

module.exports = DatePicker;
