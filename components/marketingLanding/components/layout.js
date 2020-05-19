import React, { Component } from 'react';
import { initGA, logPageView } from './googleAnalyticsMarketing';

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
