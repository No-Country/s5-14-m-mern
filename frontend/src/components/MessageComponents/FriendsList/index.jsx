import PropTypes from "prop-types";

export default function FriendsList({ friendsList }) {
  return (
    <div>
      {friendsList.forEach(({ url, name }) => {
        <div key={url}>
          <img src={url} alt="friends" />
          <p>{name}</p>
        </div>;
      })}
    </div>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array
};
