import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './section.css';

// import actions needed

export class PlayerSection extends React.Component {
  render() {
    return (
      <div className="section">
        <Card />
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(PlayerSection);