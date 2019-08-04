import React from 'react';
import { connect } from 'react-redux';

// import other components needed
// import actions needed

export class CommunitySection extends React.Component {
  render() {
    return (
      <div>
        <h2>CommunitySection</h2> 
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CommunitySection);