export default function Footer() {
    return (
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-800">Plant</span>
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <p className="text-gray-600">Beautiful plants for your home</p>
            </div>
            {['Shop', 'About', 'Support'].map((section) => (
              <div key={section}>
                <h3 className="font-bold text-gray-800 mb-4">{section}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-green-600">
                        Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Plant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  