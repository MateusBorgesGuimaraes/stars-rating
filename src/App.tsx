import StarsRating from './StarRating';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="img-prod"></div>
      <div className="infos">
        <div>
          <StarsRating percent="72" size="24" color="#EAB308" type="pointed" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button>comprar</button>
      </div>
    </div>
  );
}

export default App;
