import React from 'react';
import { connect } from 'react-redux';

// import other components needed
// import actions needed

export class PlayerSection extends React.Component {
  render() {
    return (
      <div>
        <h2>PlayerSection</h2> 
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(PlayerSection);