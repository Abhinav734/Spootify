import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <Auth0Provider domain='dev-58b2uma9.eu.auth0.com' clientId='WsyUV3SV99ZwWgKvmgLfOXagRB6aBeaB' redirectUri={window.location.origin}>
<Routes />
      </Auth0Provider>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
