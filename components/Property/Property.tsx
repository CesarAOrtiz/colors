import { useState } from "react";
import Tooltip from "../ToolTip";
import CopyIcon from "../CopyIcon";
import styles from "./Property.module.css";

const Property = ({
    name,
    value,
    fill,
}: {
    name: string;
    value: string;
    fill: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.propertyContainer}>
            <p className={styles.propertyText}>
                {name}: <span>{value}</span>
            </p>
            <Tooltip text="Copied" open={open} onClose={() => setOpen(false)}>
                <CopyIcon
                    width={20}
                    height={20}
                    fill={fill}
                    onClick={async () => {
                        await navigator.clipboard.writeText(value);
                        setOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                />
            </Tooltip>
        </div>
    );
};

export default Property;
