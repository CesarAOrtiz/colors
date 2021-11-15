import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps {
    color: string;
    onChange?: (e: ColorResult) => void;
    onChangeComplete?: (e: ColorResult) => void;
}

const ColorPicker = ({
    color,
    onChange,
    onChangeComplete,
}: ColorPickerProps) => {
    return (
        <SketchPicker
            disableAlpha={true}
            color={color}
            onChange={(e) => {
                onChange && onChange(e);
            }}
            onChangeComplete={(e) => {
                onChangeComplete && onChangeComplete(e);
            }}
        />
    );
};
export default ColorPicker;
