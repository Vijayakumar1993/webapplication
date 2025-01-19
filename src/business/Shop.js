import React from "react";
import CommonNavbar from "../components/util/NavigationBar";
import Footer from "../components/util/Footer";
import Panel from "../components/util/Panel";
import { PRODUCTS } from "../data/static";
import { Button } from "../components/util/Widgets";

export default class Shop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <CommonNavbar />
                <div className="row ">
                    {PRODUCTS.map((product, index) => (
                        <div key={index} className="col-md-3  margin-bottom-1-per">
                            <Panel
                                heading={product.name}
                                body={
                                    <>
                                        <div><img alt={product.id} src={product.smallImage} className="img-fluid" /></div>
                                        <div>${product.Description}</div>
                                        <div>${product.price}</div>
                                    </>
                                }
                                footer={<Button className='btn btn-primary btn-sm' value="Buy"></Button>}
                            />
                        </div>
                    ))}
                </div>
                <Footer />
            </>
        )
    }
}