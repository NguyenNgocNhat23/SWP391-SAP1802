import { memo } from "react";
import "./BidderEvaluate.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const BidderEvaluate = () => {
    return (
        <div class="container">
            <h2 class="mt-4">ITEM EVALUATION INFORMATION</h2>
            <div class="row">
                <div class="col-md-8">
                    <div class="item-info">
                        <div class="row">
                            <div class="col-sm-6">
                                <p><strong>Item ID:</strong> <span id="itemID"></span></p>
                            </div>
                            <div class="col-sm-6">
                                <p><strong>Item type:</strong> <span id="itemType"></span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <p><strong>Item name:</strong> <span id="itemName"></span></p>
                            </div>
                            <div class="col-sm-6">
                                <p><strong>Item lot:</strong> <span id="itemLot"></span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <p><strong>On auction section no:</strong> <span id="auctionSectionNo"></span></p>
                            </div>
                            <div class="col-sm-4">
                                <p><strong>FES no:</strong> <span id="fesNo"></span></p>
                            </div>
                            <div class="col-sm-4">
                                <p><strong>Item starting price at:</strong> <span id="startingPrice"></span></p>
                            </div>
                        </div>
                        <p><strong>Bidding status:</strong> <span id="biddingStatus"></span></p>
                        <p><strong>Company evaluated price:</strong> <span id="companyEvaluatedPrice"></span></p>
                        <p><strong>Bid attempts from all registered bidders:</strong> <span id="bidAttempts"></span></p>
                        <p><strong>Highest bidding increment recorded:</strong> <span id="highestBiddingIncrement"></span></p>
                        <p><strong>Current live-bidding price:</strong> <span id="currentLiveBiddingPrice"></span></p>
                        <button class="btn btn-primary btn-view-list">View item’s evaluation list</button>
                        <hr class="hr-divider" />
                        <div class="bidding-info">
                            <div class="row">
                                <div class="col-sm-4">
                                    <p><strong>Max bid increment:</strong> <span id="maxBidIncrement"></span> USD</p>
                                </div>
                                <div class="col-sm-4">
                                    <p><strong>Min bid increment:</strong> <span id="minBidIncrement"></span> USD</p>
                                </div>
                                <div class="col-sm-4">
                                    <p><strong>Place bid:</strong> <span id="placeBid"></span> USD</p>
                                </div>
                            </div>
                            <p>Bidder slot 083/100 - Your previous bids attempts (currency unit: USD):</p>
                            <table class="table">
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
                            <button class="btn btn-success">Confirm bid</button>
                        </div>
                    </div>
                    <div class="note">
                        <p> *Send us what you think is best price of this value</p>
                        <p> *Item evaluation does not require a deposit from bidder</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="item-image">
                        <img src="https://www.fortunaauction.com/wp-content/uploads/2018/05/Belperron-Cambodian-Blue-Chalcedony-Cuff.jpg" alt="Jewelry" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )

};

export default memo(BidderEvaluate);