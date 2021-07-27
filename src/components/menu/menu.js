import Layer from './layer';

const Menu = ({ list, visibilityHandler }) => (
    <div id="menu">
        {list.map((layer) => {
            const id = layer.layerId;
            return (
                <Layer
                    key={id}
                    layerInfo={layer}
                    changeVisibility={visibilityHandler}
                />
            );
        })}
    </div>
);

export default Menu;