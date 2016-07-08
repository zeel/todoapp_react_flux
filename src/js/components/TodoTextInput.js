/**
 * Created by zeelshah on 08/07/16.
 */
import React,{Component, PropTypes} from 'react';
class TodoTextInput extends Component {
    static propTypes = {
        id : PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired,
        value: PropTypes.string,
        placeholder : PropTypes.string
    };

    static defaultProps = {
        value: '',
        id: '',
        placeholder : 'What all needs to be done?'
    };

    constructor(props) {
        super(props);
        this.state = {value: props.value}
    }

    render() {
        let props = this.props;
        return <input type="text" className="input-box"
                      autoFocus={true}
                      autoComplete="off"
                      id={props.id}
                      placeholder={props.placeholder}
                      value={this.state.value}
                      onChange={this._onChange}
                      onBlur={this._save}
                      onKeyDown={this._onKeyDown}/>;
    }

    _onChange = (event) => {
        this.setState({value: event.target.value});
    };

    _save = () => {
        let val = this.state.value;
        this.props.onSave(val);
        this.setState({value: ''});
    };

    _onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this._save();
        }
    }
}
export default TodoTextInput;