import React from "react";
import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <li key={id} className={styles.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
