import Layer from './layer';

const Menu = ({list}) => (
    <div id="menu">
        {list.map((layer) => {
            const id = layer.layerId;
            return <Layer 
                key={id}
                layerInfo={layer}
            />
        })}
    </div>
)

export default Menu;