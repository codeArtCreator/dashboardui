import Customers from "./customers"
import Overview from "./overview"
import ProductSell from "./productSell"

const Main: React.FC = () => {
    return (
        <>
            <div id="main" className="mt-10 flex gap-5">
                <Overview />
                <Customers />
            </div>
            <ProductSell />
        </>
    )
}

export default Main