import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import s from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div>
    <div className={s.profile}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
      <Stats {...stats} />
    </div>
  </div>
);

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
