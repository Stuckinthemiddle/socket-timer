import React, {Component} from 'react';

class InputForm extends Component {
    state ={interval: ''};
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    placeholder="interval in milliseconds" 
                    value={this.state.interva}
                    onChange={(event) => this.setState({interval: event.target.value}) }/>
                <button type="submit">Subscribe</button>
            </form>
        );
    }
}

export default InputForm;