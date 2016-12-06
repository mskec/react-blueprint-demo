/* @flow */

import React, { Component } from 'react';
import { Switch } from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';
import './form.css';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form pt-elevation-1" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="pt-label">
          First Name
          <Field name="firstName" component="input" type="text" className="pt-input" />
        </label>
        <label htmlFor="lastName" className="pt-label">
          Last Name
          <Field name="lastName" component="input" type="text" className="pt-input" />
        </label>
        <label htmlFor="email" className="pt-label">
          Email
          <Field name="email" component="input" type="email" className="pt-input" />
        </label>

        <Field name="subscribe" component={SwitchConnected} />

        <button className="pt-button pt-intent-primary" type="submit">Submit</button>
      </form>
    );
  }
}

const SwitchConnected = ({ input }) => <Switch {...input} checked={input.value} label="Subscribe" />;

export default reduxForm({
  form: 'contact'
})(Form);
