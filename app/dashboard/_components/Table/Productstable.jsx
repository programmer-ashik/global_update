const products = [
    { name: "iPhone 15 Pro", category: "Smartphone", price: "$1199", stock: 25, brand: "Apple" },
    { name: "Samsung Galaxy S23", category: "Smartphone", price: "$999", stock: 30, brand: "Samsung" },
    { name: "MacBook Air M2", category: "Laptop", price: "$1299", stock: 15, brand: "Apple" },
    { name: "Dell XPS 15", category: "Laptop", price: "$1499", stock: 10, brand: "Dell" },
    { name: "Sony WH-1000XM5", category: "Headphones", price: "$399", stock: 50, brand: "Sony" },
    { name: "Samsung 65-inch OLED TV", category: "Television", price: "$1799", stock: 20, brand: "Samsung" },
    { name: "Logitech MX Master 3S", category: "Mouse", price: "$99", stock: 100, brand: "Logitech" }
];

export default function ProductTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-h-screen overflow-y-auto">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-white">Products</h1>
                    <p className="mt-2 text-sm text-white">
                        A list of all the products available in your inventory, including name, category, price, stock, and brand.
                    </p>
                </div>
                <div className="mt-4 bg-indigo-500 hover:bg-indigo-700 rounded-md sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" className="bg-indigo-600 p-2 rounded-md text-white">
                        Add Product
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
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Category
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Price
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Brand
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.category}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.price}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.stock}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{product.brand}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {product.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
