import React, {Component} from 'react';

class InputForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="interval in milliseconds" />
                <button type="submit">Subscribe</button>
            </form>
        );
    }
}

export default InputForm;