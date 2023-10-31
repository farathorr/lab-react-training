import Greetings from './components/Greetings'
import IdCard from './components/IdCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="IdCard">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      </div>
      <div className="IdCard">
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div>
      <div>
        <Greetings lang="de" name="Ludwig"></Greetings>
        <Greetings lang="en" name="Johns"></Greetings>
        <Greetings lang="es" name="Riddick"></Greetings>
      </div>
    </div>
  );
}

export default App;
