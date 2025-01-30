export function InputField ({ type, placeholder, name, id, labelText, action }) {
    const onInputChange = (event) => {
        action(event.target.value);
    }

    return (
        <>
        {labelText && <label htmlFor={name}>{labelText}</label>}
        <input
        className={StylePropertyMap.input}
        name={name}
        onChange={(event) => onInputChange(event)}
        id={id}
        type={type}
        placeholder={placeholder}
        />
        </>
    )
}