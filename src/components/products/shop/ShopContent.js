import React from 'react';
import ShopList from './ShopList';

export default function ShopContent({ value }) {
    const { sortShop, currentPage, todosPerPage, handleClick } = value;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = sortShop.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortShop.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li key={number} id={number} onClick={(e) => handleClick(e)} >
                {number}
            </li>
        );
    });

    return (
        <div className="col-lg-9">
            <div className="product_top_bar">
                <div className="left_dorp">
                    <select name="price" className="sorting">
                        <option value="all">ALL</option>
                        <option value="max">Lowest Price</option>
                        <option value="min">Highest Price</option>
                    </select>
                </div>
                <ul className="page-numbers">
                    {renderPageNumbers}
                </ul>

            </div>
            <ShopList value={value} data={currentTodos} />
        </div>
    )
}
