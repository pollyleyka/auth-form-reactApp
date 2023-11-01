import { createRoot } from 'react-dom/client';
import React from 'react';

import Component from './components/App.jsx';

const app = () => {
  const container = document.getElementById('container');
  const root = createRoot(container);
  console.log(root);
  root.render(<Component />);
};

app();
