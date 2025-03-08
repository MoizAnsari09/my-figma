import Footer from "@/app/components/Footer";
import Footer2 from "@/app/components/Footer2";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";


export default function ContactUs() {
  return (
    <div className="bg-gray-100">
      <Footer />
      <Navbar/>
      <Navbar2/>
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          For more information about our products & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600 mt-2">
            236 5th SE Avenue, New York NY10000, United States
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Phone</h3>
          <p className="text-gray-600 mt-2">
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Working Time</h3>
          <p className="text-gray-600 mt-2">
            Monday-Friday: 9:00 - 22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="abc@def.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="This is optional"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                
                placeholder="Hi! I’d like to ask about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-200 py-6 mt-12">
        <div className="container mx-auto flex flex-wrap justify-around items-center px-4">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">High Quality</h4>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">
              Warranty Protection
            </h4>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}
