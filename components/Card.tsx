import type { NextPage } from "next";
import styles from "./Card.module.css";
import { Color } from "../utils/colors";

interface CardProps {
    color: Color;
}

const Card: NextPage<CardProps> = ({ color }) => {
    return (
        <div className={styles.cardContainer}>
            <div
                className={styles.cardColor}
                style={{ backgroundColor: color.hex }}
            ></div>
            <div className={styles.cardInfo}>
                <p className={styles.cardInfoTitle}>{color.name}</p>
                <p>{color.hex}</p>
            </div>
        </div>
    );
};

export default Card;
