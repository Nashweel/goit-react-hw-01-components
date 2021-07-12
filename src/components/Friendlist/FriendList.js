import React from "react";
import FriendListItem from "./FriendListItem";
import s from "../Friendlist/FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;

  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
