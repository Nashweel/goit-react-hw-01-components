import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={statusClassName}></span>
      <img src={avatar} alt={name} width="48" className={s.avatar} />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
