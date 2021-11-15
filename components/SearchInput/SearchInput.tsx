import styles from "./SearchInput.module.css";

interface SearchInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    props?: any;
}

const SearchInput = ({ onChange, value, ...props }: SearchInputProps) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
            value={value}
            className={styles.searchInput}
            {...props}
        />
    );
};
export default SearchInput;
