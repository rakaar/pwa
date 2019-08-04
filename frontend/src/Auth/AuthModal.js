import React from 'react';
import SignModal from './SignModal'

import '../Styles/AuthModal.scss';

class ExampleApp extends React.Component {

  constructor() {
    super()
    this.state = {
      showmodals: false
    }
  }

  handleSignModal = () => {
    this.setState({
      showmodals: true
    })
  }

  render() {
    return (
      <div>
        <h5 onClick={this.handleSignModal}>Log In</h5>
        <SignModal />
        {
          this.state.showmodals ? <SignModal/> : <></>
        }

      </div>
    );
  }
}

export default ExampleApp;
