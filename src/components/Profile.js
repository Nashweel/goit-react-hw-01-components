import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
  <div>
    <div>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>

      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>

      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
