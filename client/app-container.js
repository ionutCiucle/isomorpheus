import React from 'react';
import MyInput from './my-input';

class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">
        <MyInput label="Perspirational quote here: "/>
      </div>
    );
  }
}

export default AppContainer;
