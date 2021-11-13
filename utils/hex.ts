import Rgb from "./rgb";
import Rgba from "./rgba";

class Hex {
    constructor(public value: string) {
        const input = value.replace(/#/g, "");
        if (input.length === 3) {
            this.value = input.replace(/[0-9A-F]/g, (match) => match.repeat(2));
        } else if (input.length === 6) {
            this.value = input;
        } else {
            throw "Only six and three digit valueadecimal colors are allowed.";
        }
    }

    public toRgb(): Rgb {
        const r = parseInt(this.value.substring(0, 2), 16);
        const g = parseInt(this.value.substring(2, 4), 16);
        const b = parseInt(this.value.substring(4, 6), 16);
        return new Rgb(r, g, b);
    }

    public toRgba(a: number): Rgba {
        const rgb = this.toRgb();
        return new Rgba(rgb.r, rgb.g, rgb.b, a);
    }

    public toString(): string {
        return `#${this.value}`;
    }
}

export default Hex;
