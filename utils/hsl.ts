// import Rgba from "./rgba";
// import Rgb from "./rgb";
// import Hex from "./hex";

class Hsl {
    value: string;
    constructor(public h: number, public s: number, public l: number) {
        this.value = `${this.h}, ${this.s}%, ${this.l}%`;
    }

    private hue2rgb(p: number, q: number, t: number): number {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }

    // public toRgb(): Rgb {
    public toRgb(): number[] {
        let r: number, g: number, b: number;
        const h = this.h / 360;
        const s = this.s / 100;
        const l = this.l / 100;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = this.hue2rgb(p, q, h + 1 / 3);
            g = this.hue2rgb(p, q, h);
            b = this.hue2rgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
        // return new Rgb(r * 255, g * 255, b * 255);
    }

    public toString() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }
}
const hsl = new Hsl(348, 29, 86);
console.log(hsl.toRgb());
export default Hsl;
