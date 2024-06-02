import { memo } from "react";
import "./footer.css";

const Footer = () => {
    return <footer className="footer">
       <div className="logo">
                Auction Galaxy
                <p className="tagline">Your best price from our best services</p>
            <div className="contact-info">
                <p>Address: Thu Duc City, Ho Chi Minh City, Vietnam, 715000</p>
                <p>Tel: +84 679 00679 / +84 342 59900</p>
                <p>Email: AuctionGalaxy@gmail.com</p>
                <p>@Auction Galaxy LLC, 2024</p>
            </div>
            </div>
            <div class="footer-menu">
        <div class="menu-section">
            <h3>Auctions</h3>
            <ul>
                <li><a href="#">On-going auctions</a></li>
                <li><a href="#">Upcoming auctions</a></li>
                <li><a href="#">Past auctions</a></li>
                <li><a href="#">Request item evaluation</a></li>
                <li><a href="#">Available products</a></li>
                <li><a href="#">Request to sell product</a></li>
            </ul>
        </div>
        <div class="menu-section">
            <h3>Customer Support</h3>
            <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Bidding guild</a></li>
                <li><a href="#">Sell an item guild</a></li>
                <li><a href="#">Notification setup</a></li>
            </ul>
        </div>
        <div class="menu-section">
            <h3>Auction Galaxy</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Your account</a></li>
                <li><a href="#">Manage your payment</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </div>
        </div>    
    </footer>
};

export default memo(Footer);