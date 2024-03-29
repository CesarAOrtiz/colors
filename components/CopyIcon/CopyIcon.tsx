import styles from "./CopyIcon.module.css";

const CopyIcon = (props: any) => (
    <svg
        height="30"
        viewBox="0 0 30 30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.copyIcon}
        {...props}
    >
        <path d="M25.5 6c-.66 0-.648 1 0 1h3c.286 0 .5.214.5.5v21c0 .286-.214.5-.5.5h-21c-.286 0-.5-.214-.5-.5v-3c0-.66-1-.664-1 0v3c0 .822.678 1.5 1.5 1.5h21c.822 0 1.5-.678 1.5-1.5v-21c0-.822-.678-1.5-1.5-1.5zm-24-6C.678 0 0 .678 0 1.5v21c0 .822.678 1.5 1.5 1.5h21c.822 0 1.5-.678 1.5-1.5v-21c0-.822-.678-1.5-1.5-1.5zm0 1h21c.286 0 .5.214.5.5v21c0 .286-.214.5-.5.5h-21c-.286 0-.5-.214-.5-.5v-21c0-.286.214-.5.5-.5z" />
    </svg>
);

export default CopyIcon;
