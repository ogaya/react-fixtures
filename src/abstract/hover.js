import Immutable from 'immutable';

let HoverObject ={
    getInitialState: function () {
        return { hoverd: false };
    },
    onHover(){
        this.setState({hoverd: true});
    },
    onUnhover(){
        this.setState({hoverd: false});
    }
};

module.exports = HoverObject;
