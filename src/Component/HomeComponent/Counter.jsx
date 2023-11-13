import React, {useState} from 'react';
import counterData from "./counterData.json"
import "./home.css"
const Counter = () => {
    const [data, setData] = useState(counterData);
    return (
        <div className= "CounterData" >
                <div className= "container" >
                    <div className= "counter" >
                        <div className= "leftCounter" >
                            <p className= "Increase" >
                                Increase Your <br/>  Customers Loyalty <br/> and Satisfaction.
                            </p>
                            <p className= "help" >
                                We help businesses like yours earn more customers,
                                standout from competitors,  make more money
                            </p>
                            <button className= "getStart" >
                                Get Started
                            </button>
                        </div>
                        <div className= "rightCounter" >
                            <section>
                                <div className= "imgData" >
                                    {
                                        data.map((item,i)=>{
                                            const {image} = item;
                                            return(
                                                <div key={i} >
                                                    <img src={image} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Counter;