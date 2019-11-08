import React, { Component, lazy, Suspense } from 'react';
import { Router, RouteComponentProps, Redirect } from '@reach/router';
import { AppContextProvider } from 'AppContext';
import { AppollonProvider } from 'Common/services/apollo';

import {
  NotAllowedPage,
  ServerErrorPage,
  NotFoundPage
} from 'Common/components/ErrorPage';
import { AuthCallback } from './components/AuthCallback';

import 'Common/styles/normalize.css';
import 'Common/styles/elements.css';

const Home = lazy(() => import('./pages/Home/'));
const Repos = lazy(() => import('./pages/Repos/'));
const RepoDetail = lazy(() => import('./pages/RepoDetail/'));

const RedirectToNotFound: React.FC<RouteComponentProps> = () => (
  <Redirect noThrow to="/not-found" />
);

export class App extends Component {
  componentDidCatch() {
    console.log('This is really bad bro!!!');
  }

  render() {
    return (
      <>
        <AppollonProvider>
          <AppContextProvider>
            <Suspense fallback={null}>
              <Router>
                <Home path="/" />
                <Repos path="/repos" />
                <RepoDetail path="/repos/:owner/:repo" />
                <AuthCallback path="/callback" />
                <NotAllowedPage path="/not-allowed" />
                <ServerErrorPage path="/server-error" />
                <NotFoundPage path="/not-found" />
                <RedirectToNotFound default />
              </Router>
            </Suspense>
          </AppContextProvider>
        </AppollonProvider>
      </>
    );
  }
}
