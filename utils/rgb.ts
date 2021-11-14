import Hex from "./hex";
import Hsl from "./hsl";

class Rgb {
    value: string;
    constructor(public r: number, public g: number, public b: number) {
        this.value = `${this.r}, ${this.g}, ${this.b}`;
    }

    public toHex(): Hex {
        const str = (v: number) => v.toString(16).padStart(2, "0");
        const r = str(this.r);
        const g = str(this.g);
        const b = str(this.b);
        return new Hex(r + g + b);
    }

    public toHsl(): Hsl {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);

        let h = (max + min) / 2;
        let s = (max + min) / 2;
        let l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return new Hsl(
            parseInt((h * 360).toString(), 10),
            parseInt((s * 100).toString(), 10),
            parseInt((l * 100).toString(), 10)
        );
    }

    public toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

export default Rgb;
