import React from "react";
import './search-box.styles.css';

export const SearchBox = (props) => {
    // console.log(props);
    return (
        <div>
            <input className='search' type="search"
                   placeholder={props.placeHolder}
                // onChange={(event)=>props.onSearch(event.target.value)}
                   onChange={props.onSearch}
            />
        </div>
    );
}