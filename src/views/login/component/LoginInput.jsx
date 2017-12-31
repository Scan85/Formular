import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: '',
      error: false
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  checkValue(value) {
    return !!(value && value.length > 0);
  }
  onChange(event) {
    if (this.checkValue(event.target.value)) {
      this.setState({
        fieldValue: event.target.value,
        error: false
      });
      this.props.setValue(this.props.id, event);
    } else {
      this.setState({
        error: true
      });
    }
  }
  onBlur(event) {
    if (this.checkValue(event.target.value)) {
      this.setState({
        error: false
      });
      this.props.setValue(this.props.id, event);
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <div className='field'>
        <Form.Input label={this.props.label}
          placeholder={this.props.label}
          onChange={this.onChange}
          onBlur={this.onBlur}
          error={this.state.error}
          icon={this.props.icon}
          type={this.props.type}
          fluid
        />
      </div>
    );
  }
}

LoginInput.propTypes = {
  id: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default LoginInput;
