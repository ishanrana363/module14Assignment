// import Footer from "./Footer.jsx";

import Worklist from "../Component/HomeComponent/Worklist.jsx";
import FeatureProduct from "../Component/HomeComponent/FeatureProduct.jsx";
import Card from "../Component/HomeComponent/Card.jsx";

const HomePage = () => {
    return (
        <div>
            <Worklist/>
            <Card/>
            <FeatureProduct/>

            {/*<Footer/>*/}
        </div>
    );
};

export default HomePage;