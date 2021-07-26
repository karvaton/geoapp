import { Component } from "react";
import LAYERS_DATA from "../data/data";
import Menu from "./menu/menu";
import Map from "./maps/map";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layerList: [],
        };
    }

    componentDidMount() {
        const layerList = JSON.parse(LAYERS_DATA);
        this.setState({ layerList });
    }

    render() {
        const list = this.state.layerList;
        return (
            <div id="container">
                <Menu list={list} />
                <div id="map">
                    <Map layerList={list} />
                </div>
            </div>
        );
    }
}

export default Container;