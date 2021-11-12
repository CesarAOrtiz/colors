import { FC, useState } from "react";

const ColorPicker: FC = () => {
    const [color, setColor] = useState("#000000");
    return (
        <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    );
};

export default ColorPicker;
