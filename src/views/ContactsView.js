import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Container from '../components/Container';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import styles from './views.module.css';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );

  const isError = useSelector(state => contactsSelectors.getError(state));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={styles.viewContainer}>
      <Container>
        <ContactForm />
        <div>
          <Filter />
          <ContactList />
          {isLoadingContacts && <h1>Loading...</h1>}
          {isError && <Alert severity="error">{isError}</Alert>}
        </div>
      </Container>
    </div>
  );
}
