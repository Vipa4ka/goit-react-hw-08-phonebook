import { Switch } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import Container from './components/Container';
import AppBar from './components/AppBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView"*/),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
// const UploadView = lazy(() =>
//   import('./views/UpoloadView' /* webpackChunkName: "UpoloadView" */),
// );

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Container>
          <AppBar />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" redirecTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirecTo="/login">
                <ContactsView />
              </PrivateRoute>

              {/* <PrivateRoute path="/upload" redirecTo="/login">
              <UploadView />
            </PrivateRoute> */}
            </Suspense>
          </Switch>
        </Container>
      </>
    )
  );
}

export default App;
