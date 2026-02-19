export function bindValueEventSetter(setValue)
{
    return (event) => {
        setValue(event.target.value);
    };
}