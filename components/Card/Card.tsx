import { FC } from "react";
import CardWhitoutInfo from "./CardWhitoutInfo";
import CardWhitInfo from "./CardWhitInfo";
import { Color } from "../../utils/colors";

interface CardProps {
    color: Color;
    info?: boolean;
}

const Card: FC<CardProps> = ({ color, info }) => {
    return info ? (
        <CardWhitInfo color={color} />
    ) : (
        <CardWhitoutInfo color={color} />
    );
};

export default Card;
