import React from 'react';


export default function WidgetInner({ items, title, value, type }) {

    const { handleChangeFilter, products } = value;

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item.fields[value]))];
    }
    let types = getUnique(products, type);

    return (
        <div className="widgets_inner">
            {title ? <h4>{title}</h4> : ''}
            <ul className="list">
                {types.map((item, index) => <li key={index} ><a href onClick={(event) => handleChangeFilter(event, item, type)}>{type} {item}</a></li>)}
            </ul>
        </div >
    )
}
