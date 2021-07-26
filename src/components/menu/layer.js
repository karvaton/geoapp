import { Component } from 'react';

class Layer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.layerInfo,
            visible: false,
            editing: false,
        };
        this.changeVis = this.changeVis.bind(this);
        this.setChanges = this.setChanges.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.enableEditing = this.enableEditing.bind(this);
    }

    changeVis() {
        const visible = !this.state.visible;
        this.setState({ visible });
    }

    nameChange(title) {
        this.setState({ title });
    }

    setChanges(e) {
        e.preventDefault();
        this.setState({ editing: false });
    }
    
    enableEditing(e) {
        e.preventDefault();
        this.setState({ editing: true });
    }

    render() {
        const { layerId, title, layerName, visible, editing } = this.state;
        if (!editing)
            return (
                <li id={layerId}>
                    <span onDoubleClick={event => this.enableEditing(event)}>
                        {title || layerName}
                    </span>
                    <input
                        type="checkbox"
                        checked={visible}
                        onChange={() => this.changeVis()}
                    />
                </li>
            );
        else
            return (
                <li id={layerId}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => this.nameChange(e.target.value)}
                    />
                    <button onClick={event => this.setChanges(event)}>OK</button>
                </li>
            );
    }
}

export default Layer;