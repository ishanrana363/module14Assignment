// import Footer from "./Footer.jsx";

import Worklist from "../Component/HomeComponent/Worklist.jsx";
import FeatureProduct from "../Component/HomeComponent/FeatureProduct.jsx";
import Card from "../Component/HomeComponent/Card.jsx";
import FooterCom from "../Component/FooterComponent/FooterCom.jsx";

const HomePage = () => {
    return (
        <div>
            <Worklist/>
            <Card/>
            <FeatureProduct/>
            <FooterCom/>
        </div>
    );
};

export default HomePage;