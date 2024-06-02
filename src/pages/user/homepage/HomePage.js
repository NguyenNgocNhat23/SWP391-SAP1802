import { memo } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
    return (
        <div className="container">
            {/* First Section */}
            <div className="row mb-4">
                <div className="col-md-6 info-section text-center">
                    <h3>About Us, the Auction Galaxy</h3>
                    <p>Welcome to Auction Galaxy, your ultimate online destination for premier jewelry and gold auctions. At Auction Galaxy, we believe that everyone deserves a touch of luxury, which is why we offer a vast array of dazzling items to suit every taste and occasion. Our platform features an extensive collection of meticulously curated pieces, including stunning diamond rings, elegant gold necklaces, vintage watches, and unique gemstones. Whether you’re a seasoned collector or a first-time bidder, you’ll find an unparalleled selection of treasures that are sure to captivate and inspire. What sets Auction Galaxy apart is our commitment to quality and authenticity. Each item in our collection is thoroughly vetted by our team of expert appraisers, ensuring that you receive only the finest pieces.</p>
                    
                </div>
                <div className="col-md-6 text-center">
                    <img src="your-image-url.jpg" alt="Image description" className="img-fluid" />
                </div>
            </div>
            {/* Second Section */}
            <div className="row mb-4">
                <div className="col-md-6 text-center">
                    <img src="your-second-image-url.jpg" alt="Second Image description" className="img-fluid" />
                </div>
                <div className="col-md-6 info-section text-center">
                    <h3>Explore Our Exclusive Collections</h3>
                    <p>At Auction Galaxy, we offer more than just auctions. Our exclusive collections feature rare and unique pieces that you won't find anywhere else. From vintage jewelry to contemporary designs, our collections are curated to provide something for every taste. Our expert appraisers ensure that each piece is authentic and of the highest quality, giving you the confidence to bid and buy with ease. Discover the world of Auction Galaxy and find the perfect piece to add to your collection today.</p>
                    
                </div>
            </div>
            {/* Horizontal Line */}
            <hr className="section-divider" />
            {/* New Section with Three Images */}
            <div className="row mb-4">
                <div className="col-md-4 text-center">
                    <img src="your-third-image-url.jpg" alt="Third Image description" className="img-fluid" />
                    <p>Third Image Description: This is a brief description for the third image, detailing the features and highlights of this piece.</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="your-fourth-image-url.jpg" alt="Fourth Image description" className="img-fluid" />
                    <p>Fourth Image Description: This is a brief description for the fourth image, detailing the features and highlights of this piece.</p>
                </div>
                <div className="col-md-4 text-center">
                    <img src="your-fifth-image-url.jpg" alt="Fifth Image description" className="img-fluid" />
                    <p>Fifth Image Description: This is a brief description for the fifth image, detailing the features and highlights of this piece.</p>
                </div>
            </div>          
        </div>
    );
};

export default memo(HomePage);
