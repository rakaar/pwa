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

  closeModalF = () => {
    this.setState({
      showmodals: false 
    })
  }

  render() {
    return (
      <div>
        <h5 className="log-in-btn" onClick={this.handleSignModal}>Log In</h5>
        
        {
          this.state.showmodals ? <SignModal/> : <></>
        }

      </div>
    );
  }
}

export default ExampleApp;
