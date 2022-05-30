import React from 'react';

const Selector = ({options, defVal, value, onChange}) => {
    return (
        <select
        value={value}
        onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defVal}</option>
            {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option> )}
        </select>
    );
};

export default Selector;