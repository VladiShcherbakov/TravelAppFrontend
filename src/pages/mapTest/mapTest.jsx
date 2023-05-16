import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "./map.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(65.5368582);
  const [lat] = useState(57.1528169);
  const [zoom] = useState(14);
  const [API_KEY] = useState(process.env.REACT_APP_MAP_API_KEY);

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.once("load", () => {
      map.current.addSource("openTripMap", {
        type: "vector",
        tiles: [
          `https://api.opentripmap.com/0.1/ru/tiles/pois/{z}/{x}/{y}.pbf?apikey=${process.env.REACT_APP_API_KEY}`,
        ],
        minzoom: 8,
        maxzoom: 14,
      });
      console.log("TEst");

      map.current.addLayer({
        id: "openTripMap",
        type: "circle",
        source: "openTripMap",
        layout: {
          // Make the layer visible by default.
          visibility: "visible",
        },
        paint: {
          "circle-radius": 8,
          "circle-color": "rgba(55,148,179,1)",
        },
        "source-layer": "pois",
      });
    });

    /*`https://api.opentripmap.com/0.1/ru/tiles/{layer}/{z}/{x}/{y}.pbf?apikey=${process.env.REACT_APP_API_KEY}`*/

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
