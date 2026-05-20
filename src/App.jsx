import './App.css';

const name = 'Space Dashboard';

function ISSCard(){
  return(
    <div className="card">
      <h2>ISS Position</h2>
      <p>Latitude: 42.36</p>
      <p>Longitude: 71.05</p>
    </div>
  );
}

function StrayKids(){
  return(
    <div className="skz">
      <h2>Stray Kids</h2>
      <p>Members: 8</p>
      <p>Debut: 2017</p>
    </div>
  );
}
// this is my HTML
export default function App() {
  return (
    <div className="Dashboard">
      <h1>My Space Dashboard</h1>
      <p>20.05.2026</p>
     {name}
   <ISSCard />
    <StrayKids />
    </div>
  );
}