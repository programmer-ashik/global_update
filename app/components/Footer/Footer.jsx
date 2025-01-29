
const Footer = () => {
  const footerNavigation = {
    shop: [
      { name: 'Our Project', href: '/our_projects' },
      { name: 'Our Partner', href: '#' },
      { name: 'Tastimunial', href: '#' },
      { name: 'Accessories', href: '#' },
    ],
    company: [
      { name: 'Who we are', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
    connect: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
  }
  return (
    <footer className=" bg-cover">
      <div className=" bg-[#040D12] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-opacity-55">
        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-3  justify-center gap-8 xl:col-span-2">
            {/*  1st */}
            <div>
              <h3 className="text-sm font-medium text-white">Services</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.shop.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* 2ns */}
            <div>
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.company.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* 3rd  */}
            <div>
              <h3 className="text-sm font-medium text-white">Connect</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.connect.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" mt-12 md:mt-16 xl:mt-0">
            <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
            <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
            <form className="mt-2 flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="text"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              />
              <div className="ml-4 flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-10">
          <p className="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer