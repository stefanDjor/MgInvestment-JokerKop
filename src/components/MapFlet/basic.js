import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 43.582147, lng: 21.327327 });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
  const position = [43.582147, 21.327327];
  const position1 = [43.5775481, 21.3294733];
  const iconLocation = new L.Icon({
    iconUrl: require("../../assets/images/location.png"),
    iconRetinaUrl: require("../../assets/images/location.png"),
    iconSize: new L.Point(60, 60),
  });
  
  return (
    <Map center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={iconLocation}>
        <Popup>Mg Investment</Popup>
      </Marker>
      <Marker position={position1} icon={iconLocation}>
        <Popup>Joker Kop</Popup>
      </Marker>
    </Map>
  );
};
