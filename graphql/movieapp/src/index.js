import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { ApolloProvider } from '@apollo/react-hooks';
import  client from './apollo'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

ReactDOM.render(
  <ApolloProvider client ={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

