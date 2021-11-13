import Hex from "./hex";
import Rgba from "./rgba";

class Rgb {
    value: string;

    constructor(
        public r: number = 0,
        public g: number = 0,
        public b: number = 0
    ) {
        this.value = `${this.r}, ${this.g}, ${this.b}`;
    }

    public toHex(): Hex {
        const str = (v: number) => v.toString(16).padStart(2, "0");
        const r = str(this.r);
        const g = str(this.g);
        const b = str(this.b);
        return new Hex(r + g + b);
    }

    public toRgba(a: number): Rgba {
        return new Rgba(this.r, this.g, this.b, a);
    }

    public toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

export default Rgb;
