import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

 
// ability to cross out rows(use while drafting)
// include ppr and non ppr??