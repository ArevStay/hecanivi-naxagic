import './App.css';

const name = 'Space Dashboard';

function GoogleMap() {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36505916.40326209!2d70.80861629077812!3d35.75397494919688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2073c5f866a9d%3A0xfc469f3d9301b70c!2sN.A.S.A!5e1!3m2!1sen!2sam!4v1779373007286!5m2!1sen!2sam';

  return (
    <div style={{ width: '100%', marginTop: '20px' }}>
      <iframe
        title="NASA Map"
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function ISSCard(props){
  return(
    <div className="card iss-card">
      <h2>ISS Position</h2>
      <p>Latitude:  {props.latitude}</p>
      <p>Longitude:  {props.longitude}</p>
    </div>
  );
}

function SpaceCard(props){
  return(
    <div className="card">
      <h2>Space Station Value</h2>
      <p>Name: {props.name}</p>
      <p>status:  {props.status}</p>
    </div>
  );
}
// function StrayKids(){
//   return(
//     <div className="skz">
//       <h2>Stray Kids</h2>
//       <p>Members: 8</p>
//       <p>Debut: 2017</p>
//     </div>
//   );
// }




// this is my HTML
export default function App() {
  return (
    <div className="Dashboard">
      <h1>My Space Dashboard</h1>
      <p>20.05.2026</p>
     {name}
     
   <ISSCard latitude="42.36" longitude="72.05" />
   <SpaceCard name="Artemis II" status="Active" />
   <GoogleMap />
   <div className="split-section">
     <div className="split-half"></div>
     
     <div className="split-half"></div>
   </div>
    {/* <StrayKids /> */}
    
    </div>
  );
}

/////////////



