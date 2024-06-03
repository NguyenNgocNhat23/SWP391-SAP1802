import { memo } from "react";
import "./ItemBidding.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../theme/Footer";
import Header from "../theme/Header";

const ItemBidding = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h2 className="mt-4">ITEM LIVE BIDDING INFORMATION - ITEM HAS SOLD</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="item-info">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p><strong>Item ID:</strong> <span id="itemID"></span></p>
                                </div>
                                <div className="col-sm-6">
                                    <p><strong>Item type:</strong> <span id="itemType"></span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p><strong>Item name:</strong> <span id="itemName"></span></p>
                                </div>
                                <div className="col-sm-6">
                                    <p><strong>Item lot:</strong> <span id="itemLot"></span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p><strong>On auction section no:</strong> <span id="auctionSectionNo"></span></p>
                                </div>
                                <div className="col-sm-4">
                                    <p><strong>FES no:</strong> <span id="fesNo"></span></p>
                                </div>
                                <div className="col-sm-4">
                                    <p><strong>Item starting price at:</strong> <span id="startingPrice"></span></p>
                                </div>
                            </div>
                            <p><strong>Bidding status:</strong> <span id="biddingStatus"></span></p>
                            <p><strong>Company evaluated price:</strong> <span id="companyEvaluatedPrice"></span></p>
                            <p><strong>Bid attempts:</strong> <span id="bidAttempts"></span></p>
                            <p><strong>Highest bidding increment:</strong> <span id="highestBiddingIncrement"></span></p>
                            <p><strong>Current live-bidding price:</strong> <span id="currentLiveBiddingPrice"></span></p>
                            <button className="btn btn-primary btn-view-list">View item’s evaluation list</button>
                            <hr className="hr-divider" />
                            <div className="bidding-info">
                                <div className="row">
                                    <div className="col-sm-12 auction-time">
                                        <p><strong>Auction time left:</strong> <span id="auctionTimeLeft"></span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p><strong>Max bid increment:</strong> <span id="maxBidIncrement"></span> USD</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p><strong>Min bid increment:</strong> <span id="minBidIncrement"></span> USD</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p><strong>Place bid:</strong> <span id="placeBid"></span> USD</p>
                                    </div>
                                </div>
                                <p>Bidder slot 083/100 - Your previous bids attempts (currency unit: USD):</p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Attempt</th>
                                            <th>Previous price</th>
                                            <th>Your bid</th>
                                            <th>Price after your bid</th>
                                        </tr>
                                    </thead>
                                    <tbody id="bidAttemptsTable">
                                    </tbody>
                                </table>
                                <button className="btn btn-success">Confirm bid</button>
                            </div>
                        </div>
                        <div className="note">
                            <p> A 0.5% deposit (company evaluated price) will be charged only once for each item you bid on immediately. Once the auction closed, we will return the deposit to the bank account you registered before, no matter you win the item or not.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-image">
                            <img src="https://www.fortunaauction.com/wp-content/uploads/2018/05/Belperron-Cambodian-Blue-Chalcedony-Cuff.jpg" alt="Jewelry" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default memo(ItemBidding);
