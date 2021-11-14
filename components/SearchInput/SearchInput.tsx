import styles from "./SearchInput.module.css";

interface SearchInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    props?: any;
}

const SearchInput = ({ onChange, value, ...props }: SearchInputProps) => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search..."
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    );
};
export default SearchInput;
