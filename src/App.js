import "./App.css";
import Profile from "./components/Profile/Profile"; //импорт компонента профиля соц сети
import Statistics from "./components/Statistics/Statistics"; // импорт компонента статистики
import userProfile from "./db/user.json"; // импорт данных о пользователе компонента Profile
import statisticData from "./db/statistical-data.json"; // импорт данных ститистики

const { name, tag, location, avatar, stats } = userProfile; //деструктуризация объекта данных
// const { label, percentage } = statisticData;
console.log(statisticData);

function App() {
  return (
    <div className="App">
      <h3>Профиль социальной сети</h3>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <h3>Секция статистики</h3>
      <Statistics title="" stats={statisticData} />
      <h3>Список друзей</h3>
    </div>
  );
}

export default App;
