// import Footer from "./Footer.jsx";

import Worklist from "../Component/HomeComponent/Worklist.jsx";
import FeatureProduct from "../Component/HomeComponent/FeatureProduct.jsx";
import Card from "../Component/HomeComponent/Card.jsx";
import Subcribe from "../Component/FooterComponent/Subcribe.jsx";
import Footer from "../Component/FooterComponent/Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <Worklist/>
            <Card/>
            <FeatureProduct/>
            <Subcribe/>
            <Footer/>
        </div>
    );
};

export default HomePage;