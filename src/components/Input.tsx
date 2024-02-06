type Props = {
    label: string;
    handleChange: (label:string, value: string | number) => void;
    placeholder: string;
    mr?: boolean;
    value?: number | string;
}

export const Input = ( { label,placeholder, handleChange, mr, value } : Props )  => {
    return (
        <>
            <input
                type="text"
                className={`block border-b border-gray-300 py-3 mb-3 w-full outline-none ${mr?'mr-5':''}`}
                placeholder={placeholder}
                onChange={ (e) => handleChange(label, e.target.value) }
                value={value && +value > 0 ? value: ''}
            />        
        </>
    );
}