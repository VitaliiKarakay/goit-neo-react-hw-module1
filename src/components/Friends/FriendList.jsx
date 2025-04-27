import FriendListItem from './FriendListItem.jsx';
import styles from '../css/FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};
export default FriendList;