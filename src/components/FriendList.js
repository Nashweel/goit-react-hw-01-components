import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
