import './App.css';
import { useState, useEffect } from 'react';

const name = 'Space Dashboard';

function SolarSystemMap() {
  return (
    <div className="solar-system-wrapper">
      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit orbit-mercury"><div className="planet mercury" /></div>
        <div className="orbit orbit-venus"><div className="planet venus" /></div>
        <div className="orbit orbit-earth"><div className="planet earth" /></div>
        <div className="orbit orbit-mars"><div className="planet mars" /></div>
        <div className="orbit orbit-jupiter"><div className="planet jupiter" /></div>
        <div className="orbit orbit-saturn"><div className="planet saturn" /></div>
      </div>

      <div className="solar-legend">
        <span><span className="dot mercury" /> Mercury</span>
        <span><span className="dot venus" /> Venus</span>
        <span><span className="dot earth" /> Earth</span>
        <span><span className="dot mars" /> Mars</span>
        <span><span className="dot jupiter" /> Jupiter</span>
        <span><span className="dot saturn" /> Saturn</span>
      </div>
    </div>
  );
}



// это моя карта
function NasaSpaceMap() {
  return (
    <div className="nasa-map-container">
      <h2>Original NASA 3D Space Map</h2>
      <iframe
        className="nasa-iframe"
        title="NASA"
        src="https://eyes.nasa.gov/apps/solar-system/"
      // allowFullScreen
      />
      <p className="iframe-note">GALAXY</p>
    </div>
  );
}
// это позиция

function ISSCard(props) {
  return (
    <div className="card iss-card">
      <h2>ISS Position</h2>
      <p>Latitude:  {props.latitude}</p>
      <p>Longitude:  {props.longitude}</p>
    </div>
  );
}

function SpaceCard(props) {
  return (
    <div className="card">
      <h2>Space Station Value</h2>
      <p>Name: {props.name}</p>
      <p>status:  {props.status}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="Dashboard">
      <h1>My Space Dashboard</h1>
      <p>{new Date().toLocaleDateString("ru-RU")}</p>
      {name}

      <ISSCard latitude="42.36" longitude="72.05" />
      <SpaceCard name="Artemis II" status="Active" />
      <ISSTracker />
      <Counter />
      <SolarSystemMap />

      <div className="big-bottom-section">
        <div className="bottom-panel panel-left">
          <h2>Image of day</h2>
          <ImageOfTheDay />

        </div>
        <div className="bottom-panel panel-right">
          <PeopleInSpace />
        </div>
      </div>
      <NasaSpaceMap />

      {/* Near-Earth Objects moved to bottom of page */}
      <NearEarthObjects />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

function ISSTracker() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((r) => r.json())
      .then((data) => setLocation(data));
  }, []);

  if (!location) {
    return <div className="card"><p>Loading ISS Tracker...</p></div>;
  }

  return (
    <div className="card">
      <h2>ISS Live Tracker</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Altitude: {location.altitude} km</p>
    </div>
  );
}

function PeopleInSpace() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((r) => r.json())
      .then((data) => setPeople(data.people));
  }, []);

  return (
    <div className="card">
      <h2>People in Space</h2>
      {people.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person.name} on {person.craft}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


function ImageOfTheDay() {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_KEY}`)
      .then(r => r.json())
      .then(data => setPic(data));
  }, []);

  return (
    <div className="card">

      {pic ? (
        <div>

          {pic.media_type === 'image' ? (
            <img src={pic.url} alt={pic.title} style={{ width: '100%' }} />
          ) : (
            <a href={pic.url} target="_blank" rel="noreferrer">Watch video</a>
          )}
          <h3>{pic.title}</h3>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}


function NearEarthObjects() {
  const [objects, setObjects] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${import.meta.env.VITE_NASA_KEY}`)
      .then(r => r.json())
      .then(data => setObjects(data.near_earth_objects));
  }, []);

  return (
    <div className="card">
      <h2>Near-Earth Objects</h2>
      {objects === null ? (
        <p>Loading...</p>
      ) : objects.length === 0 ? (
        <p>No objects found.</p>
      ) : (
        <ul>
          {objects.slice(0, 10).map((obj) => (
            <li key={obj.id}>
              {obj.name} - {obj.is_potentially_hazardous_asteroid ? 'Hazardous' : 'Safe'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}