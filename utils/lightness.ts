function lightness(R: number, G: number, B: number): number {
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
export default lightness;
