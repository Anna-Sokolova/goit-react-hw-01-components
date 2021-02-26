import "./App.css";
import Profile from "./components/Profile/Profile"; //импорт компонента профиля соц сети
import userProfile from "./db/user.json"; // импорт данных о пользователе
const { name, tag, location, avatar, stats } = userProfile; //деструктуризация объекта данных

function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
    </div>
  );
}

export default App;
