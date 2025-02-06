import React from 'react';
const productCategories = [
    {
        name: "Smartphones", products: [
            { productName: "iPhone 15 Pro", brand: "Apple", quantity: 25 },
            { productName: "Samsung Galaxy S23", brand: "Samsung", quantity: 30 }
        ]
    },
    {
        name: "Laptops", products: [
            { productName: "MacBook Air M2", brand: "Apple", quantity: 15 },
            { productName: "Dell XPS 15", brand: "Dell", quantity: 10 }
        ]
    },
    {
        name: "Headphones", products: [
            { productName: "Sony WH-1000XM5", brand: "Sony", quantity: 50 }
        ]
    },
    {
        name: "Television", products: [
            { productName: "Samsung 65-inch OLED TV", brand: "Samsung", quantity: 20 }
        ]
    },
    {
        name: "Monitors", products: [
            { productName: "LG UltraWide 34-inch", brand: "LG", quantity: 35 }
        ]
    },
    {
        name: "Smartwatches", products: [
            { productName: "Apple Watch Series 8", brand: "Apple", quantity: 40 }
        ]
    },
    {
        name: "Cameras", products: [
            { productName: "Canon EOS R5", brand: "Canon", quantity: 10 }
        ]
    },
    {
        name: "Tablets", products: [
            { productName: "iPad Pro", brand: "Apple", quantity: 25 }
        ]
    },
    {
        name: "Gaming Consoles", products: [
            { productName: "PlayStation 5", brand: "Sony", quantity: 15 }
        ]
    },
    {
        name: "Speakers", products: [
            { productName: "JBL Flip 6", brand: "JBL", quantity: 45 }
        ]
    },
    {
        name: "Laptops Accessories", products: [
            { productName: "Logitech MX Master 3S", brand: "Logitech", quantity: 100 }
        ]
    },
    {
        name: "Chargers", products: [
            { productName: "Anker PowerPort", brand: "Anker", quantity: 200 }
        ]
    }
];
const CategoriTable = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-h-screen overflow-y-auto">
            {/* First Section: Categories List */}
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-white">Product Categories</h1>
                    <p className="mt-2 text-sm text-white">
                        A list of all product categories available, along with their details.
                    </p>
                </div>
                <div className="mt-4 bg-indigo-500 hover:bg-indigo-700 rounded-md sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" className="bg-indigo-600 p-2 rounded-md text-white">
                        Add Category
                    </button>
                </div>
            </div>

            <div className="mt-8 flow-root dark:bg-gray-900/80">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                        Category Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Number of Products
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {productCategories.map((category, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                            {category.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                                            {category.products.length}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Second Section: Products for Each Category */}
            <div className="mt-8 flow-root dark:bg-gray-900/80">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Brand
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {productCategories.map((category, index) => (
                                    <React.Fragment key={index}>
                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0" colSpan="3">
                                                <strong>{category.name}</strong>
                                            </td>
                                        </tr>
                                        {category.products.map((product, productIndex) => (
                                            <tr key={productIndex}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-white sm:pl-0">
                                                    {product.productName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.brand}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.quantity}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriTable