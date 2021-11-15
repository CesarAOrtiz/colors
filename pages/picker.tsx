import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Property from "../components/Property";
import { defaultColor } from "../components/ColorPicker";

const ChromePicker = dynamic(
    () => import("../components/ColorPicker/ColorPicker"),
    {
        ssr: false,
    }
);

const parseRgb = ({ r, g, b }: { r: number; g: number; b: number }) => {
    return `rgb(${r}, ${g}, ${b})`;
};

const parseHsl = ({ h, s, l }: { h: number; s: number; l: number }) => {
    return `hsl(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(
        0
    )}%)`;
};

const PickerPage: NextPage = () => {
    const [color, setColor] = useState(defaultColor);
    const contrastBackground = color.hsl.l >= 0.5 ? "#000" : "#fff";
    const contrastText = contrastBackground === "#000" ? "#fff" : "#000";

    return (
        <>
            <Head>
                <title>Color Picker</title>
                <meta name="description" content={`Web Color Picker`} />
            </Head>

            <main
                className="cardSection"
                style={{ backgroundColor: color.hex }}
            >
                <section className="cardBox">
                    <ChromePicker color={color.hex} onChange={setColor} />
                    <div className="colorProperty" style={{ color: "#FFFFFF" }}>
                        <Property
                            name="HEX"
                            value={color.hex.toUpperCase()}
                            fill="#FFFFFF"
                        />
                        <Property
                            name="RGB"
                            value={parseRgb(color.rgb)}
                            fill="#FFFFFF"
                        />
                        <Property
                            name="HSL"
                            value={parseHsl(color.hsl)}
                            fill="#FFFFFF"
                        />
                        <div className="backContainer">
                            <Link href="/">
                                <a className="backLink">Back to List</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PickerPage;
