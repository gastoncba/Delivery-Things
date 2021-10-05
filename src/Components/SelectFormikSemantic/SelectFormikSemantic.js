import React from 'react'
import Select from 'react-select';

function SelectFormikSemantic({value, options, onChange}) {
    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value):''
    }

    return (
        <Select
        placeholder={'Cuidad...'}
        value={defaultValue(options, value)}
        onChange={value => onChange(value)}
        options={options}/>
    )
}

export default SelectFormikSemantic
