import './App.css';

import React from 'react';

import ClassFormComponent from './classForm/classFormComponent';
import HookForm from './hookForm/hookForm';
import RecomposeFormContainer from './recomposeForm/recomposeForm.container';

function App() {
  return (
    <div className="App">
      <ClassFormComponent />

      <RecomposeFormContainer />

      <HookForm />
    </div>
  );
}

export default App;
