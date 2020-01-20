import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { togglePopup } from '../store/reducers/popupReducer';
import { filterUsers } from '../store/reducers/usersReducer';
import * as selectors  from '../store/selectors';
import { showUsers } from '../store/thunks'
import RegisterForm from './RegistrationForm';
import User from './User';

const UsersTable = ({
  isPopupShown,
  togglePopup,
  users,
  filterUsers,
  filter,
  showUsers,
}) => {

  useEffect(
    () => {
      showUsers(filter)
    }, [showUsers, filter, isPopupShown]
  )

  const headers = [
    {
      title: 'имя', value: 'name',
    },
    {
      title: 'фамилия', value: 'surname',
    },
    {
      title: 'номер телефона', value: 'phoneNumber',
    },
    {
      title: 'состояние', value: 'isActive',
    },
    {
      title: 'свойства', value: null,
    },
  ];

  return (
    <>
      {isPopupShown && (
        <RegisterForm />
      )}
      <button
        type="button"
        className="button register-button"
        onClick={togglePopup}
      >
        Зарегистрировать пользователя
      </button>
      <div className='filter-buttons'>
      <button
        type="button"
        className="filter-buttons__button button"
        onClick={() => filterUsers('all')}
      >
        All
      </button>
      <button
        type="button"
        className="filter-buttons__button button"
        onClick={() => filterUsers('active')}
      >
        Active
      </button>
      <button
        type="button"
        className="filter-buttons__button button"
        onClick={() => filterUsers('inactive')}
      >
        Inactive
      </button>
      </div>
      <table className="users-list">
        <thead className="users-list__header">
          <tr>
            {headers.map(({ title, value }) => (
              <td
                key={value}
                role="presentation"
                className="users-list__table-column"
              >
                {title}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr 
              className="users-list__user" 
              key={user.id}
            >
              <User user={user} headers={headers} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({
  isPopupShown: selectors.getShowPopup(state),
  name: selectors.getName(state),
  surname: selectors.getSurname(state),
  phoneNumber: selectors.getPhoneNumber(state),
  isActive: selectors.getActionStatus(state),
  users: selectors.getUsers(state),
  filter: selectors.getIsFiltered(state),
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  filterUsers: value => dispatch(filterUsers(value)),
  showUsers: value => dispatch(showUsers(value)),
});

UsersTable.propTypes = {
  isPopupShown: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterUsers: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  showUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
