import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homepage/HomePage";
import { ROUTERS } from "./utils/router";
import ProfilePage from "./pages/user/profilePage";
import AllAuctionPage from "./pages/user/allAuctionPage";
import RegisterSell from "./pages/user/registerSell";
import RegisterBid from "./pages/user/registerBid";
import ItemBidding from "./pages/user/itemBidding";
import BidderEvaluate from "./pages/user/bidderEvaluate";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.ALLAUCTIONPAGE,
            component: <AllAuctionPage />
        },
        {
            path: ROUTERS.USER.REGISTERSELL,
            component: <RegisterSell />
        },
        {
            path: ROUTERS.USER.REGISTERBID,
            component: <RegisterBid />
        },
        {
            path: ROUTERS.USER.ITEMBIDDING,
            component: <ItemBidding />
            
        },
        {
            path: ROUTERS.USER.BIDDEREVALUATE,
            component: <BidderEvaluate />
            
        }

    ];
    return (

        <Routes>
            {
                userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))
            }
        </Routes>

    );
};

const App = () => {
    return renderUserRouter();
}

export default App;