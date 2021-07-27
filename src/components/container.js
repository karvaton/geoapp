import { Component } from "react";
import LAYERS_DATA from "../data/data";
import Menu from "./menu/menu";
import Map from "./maps/map";

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layerList: [],
            visibleList: []
        };
        this.setVisibility = this.setVisibility.bind(this);
    }

    setVisibility(id, status) {
        const {visibleList} = this.state;

        if (status) {
            visibleList.push(id);
        } else {
            const index = visibleList.indexOf(id);
            visibleList.splice(index, 1);
        }

        this.setState({ visibleList });
    }

    componentDidMount() {
        const layerList = JSON.parse(LAYERS_DATA);
        this.setState({ layerList });
    }

    render() {
        const list = this.state.layerList;
        const visibleLayers = list.filter(({layerId}) => this.state.visibleList.includes(layerId));
        console.log(visibleLayers);

        return (
            <div id="container">
                <Menu list={list} visibilityHandler={this.setVisibility} />
                <div id="map">
                    <Map layerList={visibleLayers} />
                </div>
            </div>
        );
    }
}

export default Container;