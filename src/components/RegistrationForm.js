import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as inputActions from '../store/reducers/inputReducer';
import * as selectors from '../store/selectors';
import { addNewUser, cancel } from '../store/thunks';
import { debounce } from '../misc/helpers';

const RegisterForm = ({
  setSurname,
  setName,
  setPhoneNumber,
  setIsActive,
  isActive,
  name,
  surname,
  phoneNumber,
  addNewUser,
  cancel,
}) => {

  const debouncedSetName = debounce(setName, 300);
  const debouncedSetSurname = debounce(setSurname, 300);
  const debouncedSetPhoneNumber = debounce(setPhoneNumber, 300);

  return (
    <div className="popup">
      <div className="registration-form form">
        <h1 className ="registration-form__tilte title">
          <span>Введите данные для нового пользователя</span>
        </h1>
        <div className="registration-form__inputs inputs">
          <label className="label">
            <span>Имя:</span>
            <input
              type="text"
              className="inputs__input"
              placeholder="имя пользователя"
              onChange={e => debouncedSetName(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Фамилия:</span>
            <input
              type="text"
              className="inputs__input"
              placeholder="фамилия пользователя"
              onChange={e => debouncedSetSurname(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Моб. телефон:</span>
            <input
              type="telephone"
              className="inputs__input"
              placeholder="моб. номер пользователя"
              onChange={e => debouncedSetPhoneNumber(e.target.value)}
            />
          </label>
          <label className="label">
            <span>Is active:</span>
            <select
              className="inputs__input"
              value={isActive}
              onChange={e => setIsActive(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>

          <button
            className=" submit-button button"
            type="button"
            onClick={()=> addNewUser({
              name,
              surname,
              phoneNumber,
              isActive,
            },Date.now())}
          >
            Подтвердить
          </button>
          <button
            className=" close-button button"
            type="button"
            onClick={() => cancel()}
          >
            Отмена
          </button>
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
  addNewUser: (value, id) => dispatch(addNewUser(value, id)),
  cancel: () => dispatch(cancel()),
});

RegisterForm.propTypes={
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  setIsActive: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setSurname: PropTypes.func.isRequired,
  addNewUser:PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
