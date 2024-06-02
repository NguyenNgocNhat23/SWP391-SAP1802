import { memo } from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                Auction Galaxy
                <p className="tagline">Your best price from our best services</p>
            </div>
            <div className="nav-links">
                <a href="#link1">Home</a>
                <div className="auction-wrapper">
                    <a href="#link2">Auction</a>
                    <div className="auction-menu">
                        <a href="#sublink1">On-going auctions</a>
                        <a href="#sublink3">Upcoming auctions</a>
                        <a href="#sublink4">Past auctions</a>
                        <a href="#sublink5">Request item evaluation</a>
                        <a href="#sublink6">Available products</a>
                        <a href="#sublink7">Request to sell product</a>
                        {/* Thêm các liên kết khác trong menu nhỏ của "Auction" ở đây */}
                    </div>
                </div>
                <a href="#link3">Selling</a>
                <a href="#link4">Buying</a>
                <a href="#link5">Sign up/ Login</a>
            </div>
        </div>
    );
};

export default memo(Header);

