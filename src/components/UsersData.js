import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as selectors from '../store/selectors';

const UsersData = ({ user }) => (
  <div className="popup">
    <div className="display-form form">
      <h1 className="display-form__tilte title">
        <div>данные пользователя</div>
        <div className="display-form__username username">{user.name}</div>
      </h1>
      <div className="display-form__inputs inputs">
        <label className="label">
          <span>Имя:</span>
          <span>{user.name}</span>
        </label>
        <label className="label">
          <span>Фамилия:</span>
          <span>{user.surname}</span>
        </label>
        <label className="label">
          <span>Моб. телефон:</span>
          {user.phoneNumber}
        </label>
        <label className="label">
          <span>Статус:</span>
          {user.isActive}
        </label>
        <NavLink
          className="close-button button"
          to="/users"
        >
          Закрыть
        </NavLink>
      </div>
    </div>
  </div>
);
const mapStateToProps = state => ({
  isActive: selectors.getActionStatus(state),
  name: selectors.getName(state),
  surname: selectors.getSurname(state),
  phoneNumber: selectors.getPhoneNumber(state),
});

UsersData.propTypes={
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default connect(mapStateToProps)(UsersData);
