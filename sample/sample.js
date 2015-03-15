var React = require('react');
var DatePicker = require('../src/datepicker');

var Main = React.createClass({
    render: function() {
        return (
            <DatePicker />
        );
    }
});


React.render(
    <Main />,
    document.getElementById('main')
);
