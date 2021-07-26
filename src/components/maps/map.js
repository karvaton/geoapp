import { MapContainer, TileLayer, WMSTileLayer/* , Marker, Popup */ } from "react-leaflet";
import React, { Component } from "react";
import '../../styles/Map.css';
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class Map extends Component {
    constructor(props) {
        super(props);

        const {layerList} = props;
        this.state = {
            layerList,
        }
    }

    render() {
        const {layerList} = this.state;
        const wmsParams = {
            version: "1.3.0",
            transparent: true,
            tiled: true,
            format: "image/png",
            srs: "EPSG%3A900913",
        };
        return (
            <MapContainer center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {layerList.map(({ id, workspace, layerName }) => {
                    wmsParams.layers = workspace + ':' + layerName;
                    console.log(wmsParams)
                    return (
                        <WMSTileLayer
                            key={id}
                            url="http://31.131.28.7:8080/geoserver/wms?"
                            params={wmsParams}
                        />
                    );
                })}
            </MapContainer>
        );
    }
}

export default Map;