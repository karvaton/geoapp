import { MapContainer, TileLayer, WMSTileLayer/* , Marker, Popup */ } from "react-leaflet";
import React, { Component } from "react";
import '../../styles/Map.css';
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class Map extends Component {
    render() {
        const layerList = this.props.layerList.reverse();
        const options = {
            version: "1.3.0",
            transparent: true,
            tiled: true,
            format: "image/png",
            srs: "EPSG%3A900913",
        };
        // console.log(layerList);
        return (
            <MapContainer center={[52.32107, 33.73112]} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {layerList.map(({ layerId, workspace, layerName }, index) => {
                    const layers = workspace + ":" + layerName;
                    const wmsParams = {...options, layers};
                    
                    return (
                        <WMSTileLayer
                            key={layerId}
                            url="http://31.131.28.7:8080/geoserver/wms?"
                            params={wmsParams}
                            zIndex={500 + index}
                        />
                    );
                })}
            </MapContainer>
        );
    }
}

export default Map;