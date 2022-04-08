export function closeModal(
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) {
    return (e: React.SyntheticEvent) => {
        e.preventDefault();
        setModal(false);
    };
}

export function blockDOMEvent() {
    return (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };
}