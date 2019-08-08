import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './section.css';

// import actions needed

export class PlayerSection extends React.Component {
  render() {
    return (
      <div className="section">
        <h2>Player Section</h2>
        <div className="twoCards">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(PlayerSection);