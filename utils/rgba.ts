import Hex from "./hex";
import Rgb from "./rgb";

class Rgba {
    value: string;

    constructor(
        public r: number = 0,
        public g: number = 0,
        public b: number = 0,
        public a: number = 0
    ) {
        this.value = `${this.r}, ${this.g}, ${this.b}, ${this.a}`;
    }

    public toRgb(): Rgb {
        return new Rgb(this.r, this.g, this.b);
    }

    public toHex(): Hex {
        return new Rgb(this.r, this.g, this.b).toHex();
    }

    public toString(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}

export default Rgba;
