import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

export class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.propTypes = {
      setValue: PropTypes.func,
      label: PropTypes.string,
      icon: PropTypes.string,
      type: PropTypes.string
    };
    this.state = {
      fieldValue: '',
      error: false
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  checkValue(value) {
    if (value && value.length > 0) {
      return true;
    }
    return false;
  }
  onChange(event) {
    if (this.checkValue(event.target.value)) {
      this.setState({
        fieldValue: event.target.value,
        error: false
      });
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
      this.props.setValue(event);
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
