import { Switch, Route } from 'react-router-dom';

// import { lazy, Suspense } from "react";

import Container from './components/Container';
import AppBar from './components/AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
// import { contactsOperations } from './redux';
// import { connect } from 'react-redux';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

//   const HomeView = lazy(() =>
//   import('./views/HomeView'/* webpackChunkName: "HomeView"*/)
// );
// const RegisterView = lazy(() =>
//   import('./views/RegisterView' /* webpackChunkName: "RegisterView" */)
// );
// const LoginView = lazy(() =>
//   import('./views/LoginView' /* webpackChunkName: "LoginView" */)
// );
// const ContactsView = lazy(() =>
//   import('./views/ContactsView' /* webpackChunkName: "ContactsView" */)
// );

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />

        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/register">
            <RegisterView />
          </Route>

          <Route path="/login">
            <LoginView />
          </Route>

          <Route path="/contacts">
            <ContactsView />
          </Route>
        </Switch>
        {/* </Suspense> */}
      </Container>
    </>
  );
}

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });
// export default connect(null, mapDispatchToProps)(App);

export default App;
