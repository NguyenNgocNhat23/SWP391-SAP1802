import { memo } from "react";
import "./RegisterSell.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterSell = () => {
    return (
        <div className="container mt-5">
            <h1>Register to evaluate/sell the item:</h1>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Personal Information:</h2>
                        <label htmlFor="fullName" className="form-label">Your full name*</label>
                        <input type="text" className="form-control mb-3" id="fullName" required />
                        
                        <label htmlFor="personalID" className="form-label">Personal ID*</label>
                        <input type="text" className="form-control mb-3" id="personalID" required />
                        
                        <label htmlFor="address" className="form-label">Address where you receive selling money</label>
                        <input type="text" className="form-control mb-3" id="address" />
                        
                        <label htmlFor="country" className="form-label">Country*</label>
                        <input type="text" className="form-control mb-3" id="country" value="Vietnam" disabled />
                        
                        <label htmlFor="state" className="form-label">State (optional)</label>
                        <input type="text" className="form-control mb-3" id="state" />
                        
                        <label htmlFor="cityProvince" className="form-label">City/Province*</label>
                        <input type="text" className="form-control mb-3" id="cityProvince" required />
                        
                        <label htmlFor="districtCounty" className="form-label">District/County*</label>
                        <input type="text" className="form-control mb-3" id="districtCounty" required />
                    </div>
                    <div className="col-md-6">
                        <h2>Item Information:</h2>
                        <label htmlFor="itemName" className="form-label">Name of your item*</label>
                        <input type="text" className="form-control mb-3" id="itemName" required />
                        
                        <label htmlFor="itemType" className="form-label">Item type*</label>
                        <select className="form-control mb-3" id="itemType" required>
                            <option value="">Select type</option>
                            <option value="diamond">Diamond</option>
                            <option value="watch">Watch</option>
                            <option value="ring">Ring</option>
                            <option value="necklace">Necklace</option>
                        </select>
                        
                        <label htmlFor="itemPriceBought" className="form-label">Price you bought this item (USD, optional)</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" id="itemPriceBought" placeholder="0.00" min="0" step="1000" />
                        </div>
                        
                        <label htmlFor="itemDescription" className="form-label">Item description (optional)</label>
                        <textarea className="form-control mb-3" id="itemDescription" rows="3"></textarea>
                        
                        <label htmlFor="itemPicture" className="form-label">Item picture*</label>
                        <input type="file" className="form-control mb-3" id="itemPicture" required />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Send request</button>
                </div>
            </form>
        </div>
    );
};

export default memo(RegisterSell);
