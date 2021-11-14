import { FC } from "react";
import styles from "./Card.module.css";
import { Color } from "../../utils/colors";

interface CardProps {
    color: Color;
}

const Card: FC<CardProps> = ({ color }) => {
    return (
        <div
            className={styles.cardContainer}
            style={{ backgroundColor: color.hex }}
        >
            <div className={styles.cardColor}></div>
            <p
                className={styles.cardName}
                style={{ color: color.contrastText }}
            >
                {color.name}
            </p>
        </div>
    );
};

export default Card;
