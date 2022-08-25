import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired, // será atualizado em momento oportuno
};
export default Title;
