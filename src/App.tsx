import React from 'react';
import './App.css';
import ServiceForm from './components/serviceForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Import Service Form</h1>
      <ServiceForm />
    </div>
  );
};

export default App;
