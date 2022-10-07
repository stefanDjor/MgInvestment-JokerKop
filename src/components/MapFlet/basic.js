import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer,M  } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 43.582147, lng: 21.327327 });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
  const position = [43.582147, 21.327327];
  const position1 = [43.598147, 21.327327];
  const iconLocation = new L.Icon({
    iconUrl: require("../../assets/images/location.png"),
    iconRetinaUrl: require("../../assets/images/location.png"),
    iconSize: new L.Point(60, 60),
  });
  
  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={iconLocation}>
        <Popup>Nasa lokacija</Popup>
      </Marker>
      <Marker position={position1} icon={iconLocation}>
        <Popup>Nasa lokacija</Popup>
      </Marker>
    </MapContainer>
  );
};
