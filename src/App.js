import "./App.css";
import Profile from "./components/Profile/Profile"; //импорт компонента профиля соц сети
import Statistics from "./components/Statistics/Statistics"; // импорт компонента статистики
import FriendList from "./components/FriendList/FriendList"; //// импорт компонента списка друзей
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"; //импорт компонента транзакций

import userProfile from "./db/user.json"; // импорт данных о пользователе компонента Profile
import statisticData from "./db/statistical-data.json"; // импорт данных ститистики
import friendsData from "./db/friends.json"; // импорт данных друзей
import transactions from "./db/transactions.json"; //импорт данных транзакций

const { name, tag, location, avatar, stats } = userProfile; //деструктуризация объекта данных

function App() {
  return (
    <div className="App">
      <h3>Профиль социальной сети</h3>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <h3>Секция статистики</h3>
      <Statistics title="" stats={statisticData} />
      <h3>Список друзей</h3>
      <FriendList friends={friendsData}/>
      <h3>История транзакций</h3>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
