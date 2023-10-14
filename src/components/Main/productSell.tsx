
const ProductSell: React.FC = () => {
    return (
        <div className="productsell bg-white mt-10 rounded-lg">

            <div className='flex items-center justify-between pt-5 mx-3'>
                <h2 className="text-2xl font-semibold font-serif flex gap-2 items-center">
                    Product Sell
                </h2>
                <div className="flex items-center">
                    <div className='max-w-md'>
                        <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search" />
                        </div>
                    </div>

                    <div className='text-slate-400 font-semibold'>
                        <select id="mySelect">
                            <option value="option1">Last 30 days</option>
                            <option value="option2">Last 7 days</option>
                            <option value="option2">Last 1 day</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className=" font-medium dark:border-neutral-500 text-slate-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Product Name</th>
                                        <th scope="col" className="px-6 py-4">Stock</th>
                                        <th scope="col" className="px-6 py-4">Price</th>
                                        <th scope="col" className="px-6 py-4">Total Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            <div className="flex items-center gap-2">
                                                <div className="h-28 w-28 bg-cover bg-center flex items-center">
                                                    <img className="rounded-lg" src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697296396/intr-tasks/metallic-3d-spheres-background_52683-28659_fak2d1.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h1 className="text-xl font-bold">Abstract 3D</h1>
                                                    <p>Product Description</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">32 in stock</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-bold">$ 45.99</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">20</td>
                                    </tr>
                                    <tr
                                        className=" transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            <div className="flex items-center gap-2">
                                                <div className="h-28 w-28 bg-cover bg-center flex items-center">
                                                    <img className="rounded-lg" src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697296490/intr-tasks/contraception-methods-concept-illustration_114360-3592_bfns6v.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h1 className="text-xl font-bold">Sarphens Illustration</h1>
                                                    <p>Product Description</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">32 in stock</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-bold">$ 45.99</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">20</td>
                                    </tr>
                                    <tr
                                        className=" transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 ">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium ">
                                            <div className="flex items-center gap-2">
                                                <div className="h-28 w-28 bg-cover bg-center flex items-center">
                                                    <img className="rounded-lg" src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697296595/intr-tasks/realistic-black-shimmer-background_23-2149992348_yqenjx.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h1 className="text-xl font-bold">Wavy Lines</h1>
                                                    <p>Product Description</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">32 in stock</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-bold">$ 45.99</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold">20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSell