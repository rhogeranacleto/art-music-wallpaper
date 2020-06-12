import './App.scss';
import React from 'react';
import { Template1 } from './pages/Template-1/Template-1';

function App() {

  console.log(process.env)

  const template = new URLSearchParams(window.location.search).get('template');
  const user = new URLSearchParams(window.location.search).get('user') || 'rhogeranacleto';

  switch (template) {
    case 'template-1':
    default: return <Template1 user={user} />;
  }
}

export default App;
