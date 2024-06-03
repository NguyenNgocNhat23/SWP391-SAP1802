import React, { useState } from 'react';
import './ManageAuction.css';

const AuctionDetails = () => {
    const [auctionDetails, setAuctionDetails] = useState({
        auctionCode: 'AUC-XXXXXXX',
        fesCode: 'FES-XXXXXXX',
        auctionName: 'High-quality jewelry',
        itemLots: 0,
        curatorName: 'Nguyen Ngoc Nhat',
        bidderSlots: 0,
        fesStartTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        fesEndTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        auctionLiveStartTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        auctionLiveEndTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        auctionDescription: 'Empty'
    });

    const [customerView, setCustomerView] = useState({
        auctionCode: 'AUC-XXXXXXX',
        bidderSlots: 0,
        itemLots: 0,
        auctionDescription: 'Updating!',
        fesStartTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        fesEndTime: 'DD/MM/YYYY at HH:MM:SS AM/PM',
        auctionLiveStartTime: 'DD/MM/YYYY at HH:MM:SS AM/PM'
    });

    const [items, setItems] = useState([{
        id: 'IID-1808372/001',
        type: 'Jewelry',
        name: 'Bracelet',
        value: 870
    }]);

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
                <div className="row">
                    <div className="col-md-6 vertical-divider">
                        <h4>Auction Details</h4>
                        <p>New auction code number: <span id="auction-code">{auctionDetails.auctionCode}</span></p>
                        <p>Final evaluation session code number: <span id="fes-code">{auctionDetails.fesCode}</span></p>
                        <p>Auction name: <span id="auction-name">{auctionDetails.auctionName}</span> <button className="btn btn-secondary btn-sm">Change name</button></p>
                        <p>Item lots (Max 200 items/auction): <span id="item-lots">{auctionDetails.itemLots}</span> <button className="btn btn-secondary btn-sm">Change max lot</button></p>
                        <p>Curator: <span id="curator-name">{auctionDetails.curatorName}</span> <button className="btn btn-secondary btn-sm">Set another curator</button></p>
                        <p>Bidder slots (Max 1000 persons): <span id="bidder-slots">{auctionDetails.bidderSlots}</span> <button className="btn btn-secondary btn-sm">Change max slot</button></p>
                        <p>FES (final evaluation session) duration:</p>
                        <p>From <span id="fes-start-time">{auctionDetails.fesStartTime}</span></p>
                        <p>To <span id="fes-end-time">{auctionDetails.fesEndTime}</span></p>
                        <p>*The auction will start (not live yet) at the beginning of FES time.</p>
                        <p>Auction live duration:</p>
                        <p>From <span id="auction-live-start-time">{auctionDetails.auctionLiveStartTime}</span> <button className="btn btn-secondary btn-sm">Change live auction time</button></p>
                        <p>To <span id="auction-live-end-time">{auctionDetails.auctionLiveEndTime}</span></p>
                        <p>*You cannot change the duration of FES but only the auction’s duration.</p>
                        <p>Auction description (Max 1000 words): <span id="auction-description">{auctionDetails.auctionDescription}</span></p>
                    </div>
                    <div className="col-md-6">
                        <h4>Customer View</h4>
                        <p>This is what the customers see once you post the auction on the system:</p>
                        <p>Auction No: <span id="customer-auction-code">{customerView.auctionCode}</span></p>
                        <p>Buyer slots: <span id="customer-bidder-slots">{customerView.bidderSlots}</span></p>
                        <p>Item lots: <span id="customer-item-lots">{customerView.itemLots}</span></p>
                        <p><strong>Upcoming live soon! Bidders now can evaluate the items</strong></p>
                        <p>Auction description: <span id="customer-auction-description">{customerView.auctionDescription}</span></p>
                        <p>Viewing period:</p>
                        <p>Before the auction goes live, bidders now can participate to evaluate all items in this auction from <span id="customer-fes-start-time">{customerView.fesStartTime}</span> to <span id="customer-fes-end-time">{customerView.fesEndTime}</span>. Auction starts live at <span id="customer-auction-live-start-time">{customerView.auctionLiveStartTime}</span>.</p>
                        <p>For more detail information, contact us via our email (<span id="contact-email">AuctionGalaxy@gmail.com</span>), or call us to our phone number (<span id="contact-phone-1">+84 679 00679</span> / <span id="contact-phone-2">+84 342 59900</span>).</p>
                        <p><strong>Buyer’s notice:</strong></p>
                        <p>Item’s taxes are applied depending on your living region. After successfully bidding on the item, an invoice will be sent to the buyer’s personal email. The buyer has a duty to fulfill his/her responsibility of payment within 30 days. If the buyer didn’t pay for the item within a predetermined period, the buyer wouldn’t receive the bidden item and the winner of the item will be transferred to the second-highest bidder.</p>
                        <button className="btn btn-primary mt-2">Switch to customer side to view the auction</button>
                    </div>
                </div>

                <hr className="horizontal-divider" />

                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="itemType">Choose item types of this auction:</label>
                                <select className="form-control" id="itemType">
                                    <option>Pure material</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemId">Choose an item ID:</label>
                                <input type="text" className="form-control" id="itemId" />
                                <button className="btn btn-success mt-2">Auto fill the code</button>
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemName">Or an item's name:</label>
                                <input type="text" className="form-control" id="itemName" />
                                <button className="btn btn-success mt-2">Show list of items based on item type</button>
                            </div>
                            <div className="form-group">
                                <label>Item's FES time:</label>
                                <p>From <span id="item-fes-start-time">DD/MM/YYYY HH:MM:SS AM/PM</span> to <span id="item-fes-end-time">DD/MM/YYYY HH:MM:SS AM/PM</span></p>
                                <button className="btn btn-secondary">Set item FES and bidding time manually</button>
                            </div>
                            <div className="form-group">
                                <label>Item's bidding time:</label>
                                <p>From <span id="item-bidding-start-time">DD/MM/YYYY HH:MM:SS AM/PM</span> to <span id="item-bidding-end-time">DD/MM/YYYY HH:MM:SS AM/PM</span></p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bidIncrementMin">Bid increment minimum:</label>
                                <input type="text" className="form-control" id="bidIncrementMin" placeholder="USD" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bidIncrementMax">Bid increment maximum:</label>
                                <input type="text" className="form-control" id="bidIncrementMax" placeholder="USD" />
                            </div>
                            <button className="btn btn-success">Use auction's bid increment</button>
                            <button className="btn btn-danger mt-2">Add this item into this auction/FES</button>
                            <button className="btn btn-danger mt-2">Post as upcoming auction</button>
                        </div>
                        <div className="col-md-6">
                            <h5>Item list in this auction:</h5>
                            <table className="table table-bordered item-list-table">
                                <thead>
                                    <tr>
                                        <th>Item ID/On lot</th>
                                        <th>Item type</th>
                                        <th>Item name</th>
                                        <th>Item value (USD)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="item-list">
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.type}</td>
                                            <td>{item.name}</td>
                                            <td>{item.value}</td>
                                            <td><button className="btn btn-primary btn-sm">Remove</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="note">
                                <p>*An auction must have at least 2 items to be posted on the system</p>
                                <p>*Only items which are qualified final evaluation will be shown in item’s list for you to choose</p>
                                <p>**Different items can have different bidding times and can end earlier than the auction’s bidding time</p>
                                <p>***Once you click Post as upcoming auction, the auction will start at FES immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center py-3 bg-dark text-white mt-4">Footer Content Here</footer>
        </>
    );
};

export default AuctionDetails;
