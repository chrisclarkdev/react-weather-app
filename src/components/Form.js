import React from 'react';

const Form = props =>(
    <form onSubmit={props.getWeather}>
        <input type="text" name="weatherPlace" placeholder='City, County Code eg: "GB"' />
        <button>Search</button>
    </form>
);

export default Form;