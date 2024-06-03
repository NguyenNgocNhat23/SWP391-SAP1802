import React, { useState, useEffect } from 'react';
import './ItemMana.css';

const ItemsManagement = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        // Fetch items data from backend (replace with your actual API endpoint)
        fetch(`https://api.example.com/items?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => setItemsData(data))
            .catch(error => console.error('Error fetching items data:', error));
    }, [pageNumber]);

    const previousPage = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    const nextPage = () => {
        // Assuming you have a maximum page number limit
        setPageNumber(pageNumber + 1);
    };

    const goToPage = (page) => {
        setPageNumber(Number(page));
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Request list</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Item list</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Auctions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Manager tab</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report problems</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container my-4">
                <h2 className="mb-3">Items Management</h2>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Auction ID (AUC)</th>
                            <th>Final Evaluation Session ID (FES)</th>
                            <th>Auction Duration*</th>
                            <th>Remaining Items for Bidding</th>
                            <th>Bid Increment Ratio (USD)**</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        {itemsData.map(item => (
                            <tr key={item.auctionId}>
                                <td>{item.auctionId}</td>
                                <td>{item.fesId}</td>
                                <td>{item.auctionDuration}</td>
                                <td>{item.remainingItems}</td>
                                <td>{item.bidIncrementRatio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination-controls">
                    <button className="btn btn-outline-secondary btn-sm" onClick={previousPage}>Previous page</button>
                    <input
                        type="number"
                        className="page-number"
                        value={pageNumber}
                        min="1"
                        onChange={(e) => goToPage(e.target.value)}
                    />
                    <button className="btn btn-outline-secondary btn-sm" onClick={nextPage}>Next page</button>
                </div>
            </div>
        </>
    );
};

export default ItemsManagement;
