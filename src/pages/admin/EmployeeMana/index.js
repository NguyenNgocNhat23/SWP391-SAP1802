
import React, { useState } from 'react';
import './EmployeeMana.css';

const StaffManagement = () => {
    const [pageNumber, setPageNumber] = useState(1);

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
                <h2 className="mb-3">Staff management</h2>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Staff ID</th>
                            <th>User ID</th>
                            <th>Staff name</th>
                            <th>Staff email</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        {/* Rows will be populated here by backend */}
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

export default StaffManagement;
