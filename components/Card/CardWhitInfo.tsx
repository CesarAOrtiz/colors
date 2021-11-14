import { FC } from "react";
import styles from "./Card.module.css";
import { Color } from "../../utils/colors";
import { useState } from "react";

interface CardProps {
    color: Color;
}

const Card: FC<CardProps> = ({ color }) => {
    const [hover, setHover] = useState(false);
    const hoverStyle = {
        backgroundColor: "transparent",
        color: color.contrastText,
    };
    return (
        <div
            className={styles.cardContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ backgroundColor: color.hex }}
        >
            <div className={styles.cardColor}></div>
            <div className={styles.cardInfo} style={hover ? hoverStyle : {}}>
                <p className={styles.cardInfoTitle}>{color.name}</p>
                <p>{color.hex}</p>
            </div>
        </div>
    );
};

export default Card;
