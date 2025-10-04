// src/pages/DesignServices.jsx
import React from "react";

const services = [
    {
        id: 1,
        title: "Interior Consultation",
        description: "Our experts help you plan your space for both style and functionality.",
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Furniture Layout",
        description: "Get personalized furniture arrangement plans to maximize your space.",
        img: "https://plus.unsplash.com/premium_photo-1726812066382-5b403903e9ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Color & Decor Advice",
        description: "Choose the perfect color palette and decor items for your home.",
        img: "https://plus.unsplash.com/premium_photo-1726863053218-27373fe92107?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const DesignServices = () => {
    return (
        <div className="font-sans min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-100 h-[300px] flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Design Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Transform Your Space with Experts</h2>
                    <p className="mt-4 text-lg md:text-xl">Professional interior design services tailored for your home</p>
                    <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
                        Get Started
                    </button>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center mb-12">3 ways to meet</h2>
  
  <div className="grid md:grid-cols-3 gap-8 border-t border-b py-8">
    
    <div className="flex flex-col items-center text-center px-6 border-r last:border-r-0">
  
      <div className="mb-4">
        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 10l9-7 9 7v11a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10z"/>
        </svg>
      </div>
      <p className="mb-4">
        <span className="font-semibold">Most Popular!</span> Your designer comes to your home, gets to know you & your real-life space, takes measurements & more.
      </p>
      <button className="px-6 py-2 border border-gray-500 text-sm font-semibold tracking-wider hover:bg-gray-100 transition">
        MEET AT HOME
      </button>
    </div>

    <div className="flex flex-col items-center text-center px-6 border-r last:border-r-0">
      <div className="mb-4">
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 2C8 2 4 6 4 10c0 4.418 8 12 8 12s8-7.582 8-12c0-4-4-8-8-8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <p className="mb-4">
        Come to your nearest store to talk through your project with your design pro and see furniture, decor and swatches in person.
      </p>
      <button className="px-6 py-2 border border-gray-500 text-sm font-semibold tracking-wider hover:bg-gray-100 transition">
        MEET IN-STORE
      </button>
    </div>

    <div className="flex flex-col items-center text-center px-6">
      <div className="mb-4">
        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
          <polygon points="10 9 15 12 10 15 10 9"/>
        </svg>
      </div>
      <p className="mb-4">
        Hop on a video call with your design pro—they’ll tour your space on-screen and guide you through ideas & options.
      </p>
      <button className="px-6 py-2 border border-gray-500 text-sm font-semibold tracking-wider hover:bg-gray-100 transition">
        MEET ONLINE
      </button>
    </div>

  </div>
</div>


            {/* Services Section */}
            <section className="px-8 py-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                            <img src={service.img} alt={service.title} className="w-full h-48 object-cover"/>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-8 py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Casa&Aura?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="text-center">
                        <img
                            src="https://img.icons8.com/ios-filled/100/000000/free-shipping.png"
                            alt="Free Shipping"
                            className="mx-auto mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                        <p className="text-gray-600 text-sm">On all orders over $100</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://img.icons8.com/ios-filled/100/000000/return.png"
                            alt="Easy Returns"
                            className="mx-auto mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
                        <p className="text-gray-600 text-sm">30-day hassle-free returns</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://img.icons8.com/ios-filled/100/000000/customer-support.png"
                            alt="24/7 Support"
                            className="mx-auto mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                        <p className="text-gray-600 text-sm">We're here to help anytime</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DesignServices;
