import React from 'react';

const Input = props => {
    const errors = props.errors[props.name];
    const inputStyle = { borderColor: errors ? '#d32f2f': '#bdbdbd', color: errors ? '#d32f2f' : '#424242' }; //
    return (
        <div> 
            <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} required style={inputStyle}/>
            <small id={`${props.name}Help`} className="form-text">{errors}</small>
        </div>
    );
};

export default Input;