import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import UsersData from './UsersData';
import EditForm from './EditForm';
import { getName } from '../store/selectors';

const User = ({ 
  user,
  headers
}) => (
  <>
    {headers.map(({ title, value }) => (
      <React.Fragment key={title}>
        {title !== 'свойства'
          ? (
            <td>
              {user[value]}
            </td>
          ) : (
            <td>
              <NavLink
                className="link"
                to={`/users/${user.id}`}
                key={user[value]}
              >
                <span 
                  className="tool-icon" 
                  role="img"
                  aria-label="eye"
                >
                    👁️‍🗨️
                </span>
              </NavLink>
              {user.name && (
                <Route
                  path={`/users/${user.id}`}
                  render={() => (
                    <UsersData user={user} />
                  )}
                />
              )}
              <NavLink
                className="link"
                to={`/users/${user.id}/edit`}
                key={user[value]}
              >
                <span 
                  className="tool-icon" 
                  role="img"
                  aria-label="edit-file"
                >
                  &#128221;
                </span>
              </NavLink>
              <Route
                path={`/users/${user.id}/edit`}
                render={() => (
                  <EditForm header={title} user={user} />
                )}
              />
            </td>
          )
        }
      </React.Fragment>
    ))}
  </>
);



const mapStateToProps = state => ({
  name: getName(state),
});

User.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default connect(mapStateToProps)(User);
