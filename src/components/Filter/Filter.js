import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <div>
    <h2 className={styles.title}>Contacts</h2>
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
