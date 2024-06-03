import { memo } from "react";
import "./RegisterBid.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../theme/Footer";
import Header from "../theme/Header";

const RegisterBid = () => {
    return (
        <>
            <Header />
        <div className="container mt-5">
            <h1>Bid registration</h1>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Your full name*:</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nationality" className="form-label">Nationality*:</label>
                        <input type="text" className="form-control" id="nationality" name="nationality" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="dateOfBirth" className="form-label">Date of Birth*:</label>
                        <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="gender" className="form-label">Gender:</label>
                        <select className="form-control" id="gender" name="gender">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address(es):</label>
                    <input type="text" className="form-control" id="address" name="address" />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone number(s):</label>
                    <input type="text" className="form-control" id="phone" name="phone" />
                </div>

                <h2 className="mt-4">Payment information (debit/credit card only)</h2>
                <div className="mb-3">
                    <label htmlFor="account" className="form-label">Account:</label>
                    <input type="text" className="form-control" id="account" name="account" />
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="bankName" className="form-label">Bank/credit organization name*:</label>
                        <input type="text" className="form-control" id="bankName" name="bankName" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="accountNumber" className="form-label">Account number*:</label>
                        <input type="text" className="form-control" id="accountNumber" name="accountNumber" required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="expirationMonth" className="form-label">Expiration month:</label>
                    <input type="month" className="form-control" id="expirationMonth" name="expirationMonth" />

                </div>

                <div className="mb-3 note-text">
                    <p>(*) You must enter all these fields.</p>
                    <p>*All of your information you entered is protected by our Privacy Policy and our Terms of Data Collecting and Usage.</p>
                    <p>**After you successfully registered for bidding, you can change your bidding information in your account you used to login this page.</p>
                    <p>***A 0.5% deposit will be immediately charged when you make any bid on any item based on the item’s value evaluated by the company, not the starting price of the item you bid on, using bank accounts you registered here. You will not be able to bid on an item if the money you have in the registered account is under the 10% deposit required to bid.</p>
                </div>

                <button type="submit" className="btn btn-primary">Submit Bid</button>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default memo(RegisterBid);
