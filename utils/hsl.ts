import Hex from "./hex";
import Rgb from "./rgb";

class Hsl {
    value: string;
    constructor(public h: number, public s: number, public l: number) {
        this.value = `${this.h}, ${this.s}%, ${this.l}%`;
    }

    public toRgb(): Rgb {
        let r: number, g: number, b: number;
        const h = this.h / 360;
        const s = this.s / 100;
        const l = this.l / 100;

        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        if (s === 0) {
            r = g = b = l;
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return new Rgb(r * 255, g * 255, b * 255);
    }

    public toHex(): Hex {
        return this.toRgb().toHex();
    }

    public toString() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }
}

export default Hsl;

export function lightness(R: number, G: number, B: number): number {
    let Max = 0.0;
    let Min = 0.0;

    let fR = R / 255.0;
    let fG = G / 255.0;
    let fB = B / 255.0;

    if (fR >= fG && fR >= fB) Max = fR;
    else if (fG >= fB && fG >= fR) Max = fG;
    else if (fB >= fG && fB >= fR) Max = fB;

    if (fR <= fG && fR <= fB) {
        Min = fR;
    } else if (fG <= fB && fG <= fR) {
        Min = fG;
    } else if (fB <= fG && fB <= fR) {
        Min = fB;
    }

    let Lightness = (Min + Max) / 2.0;

    return Lightness;
}
