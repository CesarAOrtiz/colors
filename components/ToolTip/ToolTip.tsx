import { useEffect } from "react";
import styles from "./ToolTip.module.css";

interface ToolTipProps {
    text: string;
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    props?: any;
}

const Tooltip = ({ children, text, open, onClose, ...props }: ToolTipProps) => {
    useEffect(() => {
        open && setTimeout(onClose, 500);
    }, [open, onClose]);
    return (
        <div className={styles.tooltipContainer}>
            <div
                className={
                    open
                        ? `${styles.tooltipBox} ${styles.tooltipVisible}`
                        : styles.tooltipBox
                }
            >
                {text}
                <span className={styles.tooltipArrow} />
            </div>
            <div {...props}>{children}</div>
        </div>
    );
};
export default Tooltip;
