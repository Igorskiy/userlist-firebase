import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as inputActions from '../store/reducers/inputReducer';
import * as selectors from '../store/selectors';
import { editUser } from '../store/thunks';

const EditForm = ({
  setSurname,
  setName,
  setPhoneNumber,
  setIsActive,
  isActive,
  name,
  surname,
  phoneNumber,
  user,
  editUser,
  inputsReset,
}) => {
  useEffect(
    () => {
      setIsActive(user.isActive)
    }, [setIsActive, user.isActive]
  );

    return (
    <div className="popup">
      <div className="edit-form form">
        <h1 className="edit-form__tilte title">
          <div>Редактировать данные пользователя </div>
          <div className="edit-form__username username">{user.name}</div>
        </h1>
        <div className="edit-form__inputs inputs">
          <label className="label">
            <span>Имя:</span>
            <input
              type="text"
              defaultValue={user.name}
              className="inputs__input"
              placeholder="имя пользователя"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Фамилия:</span>
            <input
              type="text"
              defaultValue={user.surname}
              className="inputs__input"
              placeholder="фамилия пользователя"
              onChange={e => setSurname(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Моб. телефон:</span>
            <input
              type="telephone"
              defaultValue={user.phoneNumber}
              className="inputs__input"
              placeholder="моб. номер пользователя"
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Is active:</span>
            <select
              className="inputs__input"
              defaultValue={user.isActive}
              onChange={e => setIsActive(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>

            </select>
          </label>
          <NavLink
            className="submit-button button"
            to="/users"
            onClick={() => editUser({ 
              name: name || user.name,
              surname: surname || user.surname,
              phoneNumber: phoneNumber || user.phoneNumber,
              isActive: isActive,
            }, user.id)}
          >
            Редактировать
          </NavLink>
          <NavLink
            className="close-button button"
            to="/users"
            onClick={() => inputsReset()}
          >
            Отмена
          </NavLink>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isActive: selectors.getActionStatus(state),
  name: selectors.getName(state),
  surname: selectors.getSurname(state),
  phoneNumber: selectors.getPhoneNumber(state),
});
const mapDispatchToProps = dispatch => ({
  setPhoneNumber: value => dispatch(inputActions.setPhoneNumber(value)),
  setName: value => dispatch(inputActions.setName(value)),
  setSurname: value => dispatch(inputActions.setSurname(value)),
  setIsActive: value => dispatch(inputActions.setIsActive(value)),
  editUser: (value, id) => dispatch(editUser(value, id)),
  inputsReset: () => dispatch(inputActions.inputsReset()),
});

EditForm.propTypes={
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  setIsActive: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setSurname: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  inputsReset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
