// App.js
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Styles from "../GoogleMap/MapStyles.module.css";
const position = [19.0933, -70.7053]; // Coordenadas de Madrid

function Map() {
  return (
    <div className={Styles.DivMapContainer}>
      <h2>Encuéntranos</h2>
      <MapContainer center={position} zoom={13} style={{ height: '40vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={position}>
          
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map
