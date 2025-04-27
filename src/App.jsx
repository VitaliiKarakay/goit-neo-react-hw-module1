import Profile from "./components/Profile/Profile.jsx";
import userData from "./data/userData.json";
import FriendList from "./components/Friends/FriendList.jsx";
import friends from "./data/friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory.jsx";
import transactions from "./data/transactions.json";

function App() {

    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;