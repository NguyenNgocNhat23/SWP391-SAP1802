import React, { useState } from 'react';
import './RequestList.css';

const RequestHandling = () => {
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    // Sample request details (example data)
    const sampleRequestDetails = {
        requestFrom: 'John Doe',
        sellerEmail: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        requestType: 'Evaluation',
        requestTime: '01/06/2024',
        itemName: 'Gold Ring',
        itemID: 'GR-123456',
        itemPicture: 'path/to/image.jpg',
        timeLeft: '3 days',
        previousEvaluation: '500',
        managerMessage: 'Please reassess the value.',
        suggestedValue: ''
    };

    const handleRequestSelection = (request) => {
        setSelectedRequest(sampleRequestDetails);
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
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="request-container">
                            <label htmlFor="searchRequest">SEARCH REQUEST:</label>
                            <select className="form-control" id="searchRequest">
                                <option>All request</option>
                                <option>From buyer</option>
                                <option>From seller</option>
                                <option>From your manager</option>
                                <option>Not handled yet</option>
                                <option>Latest request</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="request-container">
                            <label htmlFor="chooseRequest">CHOOSE A REQUEST:</label>
                            <select className="form-control" id="chooseRequest" onChange={e => handleRequestSelection(e.target.value)}>
                                {requests.map((req, index) => (
                                    <option key={index} value={index}>{`Request ${index + 1}`}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label>REQUEST DETAILS:</label>
                        <div className="handling-request p-3 border">
                            {selectedRequest ? (
                                <>
                                    <p>From: <span className="request-detail">{selectedRequest.requestFrom}</span></p>
                                    <p>Seller's email: <span className="request-detail">{selectedRequest.sellerEmail}</span></p>
                                    <p>Phone number: <span className="request-detail">{selectedRequest.phoneNumber}</span></p>
                                    <p>Type of request: <span className="request-detail">{selectedRequest.requestType}</span></p>
                                    <p>Request recorded at: <span className="request-detail">{selectedRequest.requestTime}</span></p>
                                    <p>Item name/type: <span className="request-detail">{selectedRequest.itemName}</span></p>
                                    <p>Item ID: <span className="request-detail">{selectedRequest.itemID}</span></p>
                                    <p>Item picture: </p>
                                    <img id="itemPicture" src={selectedRequest.itemPicture} alt="Item Picture" style={{ width: '100px', height: 'auto' }} />
                                    <p>Time left for seller to send the item: <span className="request-detail">{selectedRequest.timeLeft}</span></p>
                                    <p>Your previous evaluation on this item: USD {selectedRequest.previousEvaluation}</p>
                                    <p>Your manager disapproved this evaluation!</p>
                                    <p>Your new suggested value for this item: <input type="text" className="form-control d-inline-block" id="newSuggestedValue" style={{ width: 'auto' }} placeholder="USD" value={selectedRequest.suggestedValue} onChange={e => setSelectedRequest({ ...selectedRequest, suggestedValue: e.target.value })} /></p>
                                    <p>Message from your manager: {selectedRequest.managerMessage}</p>
                                    <p>Message to your manager (max 2000 words): </p>
                                    <textarea id="messageToManager" className="form-control" rows="3" placeholder="Enter your message here"></textarea>
                                    <button className="btn btn-danger mt-2">Send this temporary value to seller</button>
                                    <button className="btn btn-danger mt-2">Cancel the temporary</button>
                                </>
                            ) : (
                                <p>Please select a request to view details.</p>
                            )}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <table className="table table-bordered" id="requestTable">
                            <thead className="thead-light">
                                <tr>
                                    <th>Request no.</th>
                                    <th>Request type</th>
                                    <th>Request description</th>
                                    <th>Handle Status</th>
                                    <th>Time of request sent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{request.type}</td>
                                        <td>{request.description}</td>
                                        <td>{request.status}</td>
                                        <td>{request.timeSent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <footer className="text-center py-3 bg-dark text-white mt-4">
                © Auction Galaxy LLC, 2024
            </footer>
        </>
    );
};

export default RequestHandling;
