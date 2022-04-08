export function closeMenuPopup(
    setMenuPopup: React.Dispatch<React.SetStateAction<boolean>>
) {
    return (e: React.SyntheticEvent) => {
        e.preventDefault();
        setMenuPopup(false);
    };
}