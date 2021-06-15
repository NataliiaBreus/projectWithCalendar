import PropTypes from 'prop-types';

function UserCard (props) {
  const {
    user: { id, firstname, lastname, isSelected },
    toggleUserSelection,
  } = props;
  const style = {
    border: isSelected ? '5px solid black' : undefined,
    color: isSelected ? 'green' : 'gray',
  };
  return (
    <article
      onClick={() => toggleUserSelection(id)}
      style={style}
      className={`userCard ${isSelected ? 'selected' : ''}`}
    >
      <p>ID: {id}</p>
      <h1>
        User Name: {firstname} {lastname}
      </h1>
    </article>
  );
}

UserCard.defaultProps = {
  toggleUserSelection: () => {},
  user: {
    id: null,
    firstname: 'Anon',
    lastname: 'Anon',
  },
};

export const userPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
}).isRequired;

UserCard.propTypes = {
  user: userPropType,
  toggleUserSelection: PropTypes.func,
};

export default UserCard;
