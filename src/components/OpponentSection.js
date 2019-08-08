import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import './section.css';

// import actions needed

export class OpponentSection extends React.Component {
  render() {
    return (
      <div className="section">
        <h2>Opponent Section</h2>
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

export default connect(mapStateToProps)(OpponentSection);