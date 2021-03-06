// absolute imports
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// relative imports
import Routes from './routes/';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import client from './config/apolloclient';
import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import { FireBaseAuth } from './config/firebase';
import { updateAuthState } from './redux/modules/auth';

// IF USER JUST SIGNED IN GRAB USER FROM DB AND AUTHENTICATE, ELSE LOG OUT USER.
FireBaseAuth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch(updateAuthState(user.uid));
    } else {
        store.dispatch(updateAuthState(false));
    }
});

injectTapEventPlugin();

export const history = createHistory();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Routes />
                </Layout>
            </ConnectedRouter>
        </ApolloProvider>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
