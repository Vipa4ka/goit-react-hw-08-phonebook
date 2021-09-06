import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
function ContactForm({ contacts, isLoading, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={uuidv4()}>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            id={uuidv4()}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            disabled={isLoading}
            required
          />
        </label>
        <label>
          Number
          <input
            id={uuidv4()}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            disabled={isLoading}
            required
          />
        </label>
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContacts(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
