import React, { useState, useEffect } from 'react';
import {
  Coffee, Phone, Menu, X, CheckCircle, Calendar, MessageCircle,
  ClipboardList, Truck, User, MapPin, Building2, Mail, ArrowLeft,
  Search
} from 'lucide-react';

const ALL_MENU_ITEMS = [
  { id: 1, name: "Attayampatti Murukku", price: "10", category: "Snacks", image: "/src/assets/Attayampatti Murukku.png" },
  { id: 2, name: "Bun", price: "10", category: "Snacks", image: "/src/assets/Bun.png" },
  { id: 3, name: "Butter Milk", price: "15", category: "Beverage", image: "/src/assets/Butter Milk.png" },
  { id: 4, name: "Coffee", price: "20", category: "Beverage", image: "/src/assets/Coffee.png" },
  { id: 5, name: "Tea", price: "15", category: "Beverage", image: "/src/assets/Tea.png" },
  { id: 6, name: "Jalebi", price: "20", category: "Sweets", image: "/src/assets/Jalebi.png" },
  { id: 7, name: "Laddu", price: "15", category: "Sweets", image: " /src/assets/Laddu.png" },
  { id: 8, name: "Lime Soda", price: "20", category: "Beverage", image: "/src/assets/Lime Soda.png " },



  { id: 9, name: "Medu Vada", price: "15", category: "Hot Snacks", image: "/src/assets/Medu Vada.png" },
  { id: 10, name: "Mixture", price: "15", category: "Snacks", image: "/src/assets/Mixture.png" },
  { id: 11, name: "Palkova", price: "10", category: "Bakery", image: "/src/assets/Palkova.png" },

  { id: 12, name: "Paruppu Vadai", price: "10", category: "Hot Snacks", image: "/src/assets/Paruppu Vadai.png" },
  { id: 13, name: "Salt Biscuit", price: "10", category: "Bakery", image: "/src/assets/Salt Biscuit.png" },
  { id: 14, name: "Samosas", price: "15", category: "Hot Snacks", image: "/src/assets/Samosas.png" },
  { id: 15, name: "Sweet Poondhi", price: "15", category: "Sweets", image: "/src/assets/Sweet Poondhi.png" },





  { id: 16, name: "Tea Biscuit", price: "10", category: "Bakery", image: "/src/assets/Tea Biscuit.png" },
  { id: 17, name: "Thattuvadai Set", price: "10", category: "Bakery", image: "/src/assets/Thattuvadai Set.png" },
  { id: 18, name: "Thengai Bun", price: "10", category: "Snacks", image: "/src/assets/Thengai Bun.png" },
  { id: 19, name: "Urulaikilangu Bonda", price: "10", category: "Hot Snacks", image: "/src/assets/Urulaikilangu Bonda.png" },
  { id: 20, name: "Valakkai Bajji", price: "10", category: "Hot Snacks", image: "/src/assets/Valakkai Bajji.png" },

 
];

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    if (currentView === 'home') {
      document.title = "The Office Cup | Premium Office Tea & Snacks Delivery";
    } else if (currentView === 'menu') {
      document.title = "Complete Menu | The Office Cup Snacks & Beverages";
    }
  }, [currentView]);

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-[#C59D5F] selection:text-white bg-[#FDFBF7]">
      {currentView === 'home' ? (
        <HomePage onViewAllMenu={() => navigateTo('menu')} />
      ) : (
        <FullMenuPage onBack={() => navigateTo('home')} />
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918892606625"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-transform z-[60] flex items-center justify-center border-2 border-white"
        style={{ width: '45px', height: '45px' }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

const HomePage = ({ onViewAllMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const message = `*New Service Enquiry - The Office Cup*%0a%0a👤 *Name:* ${data.name}%0a🏢 *Company:* ${data.company}%0a📧 *Email:* ${data.email}%0a📍 *Address:* ${data.address}%0a☕ *Req:* ${data.requirement}`;
    window.open(`https://wa.me/918892606625?text=${message}`, '_blank');
  };

  const previewItems = ALL_MENU_ITEMS.slice(0, 5);

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#2C1810] shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C59D5F] flex items-center justify-center text-[#2C1810]">
              <Coffee size={24} />
            </div>
            <span className="text-2xl font-bold tracking-wide font-serif">The Office Cup</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider uppercase">
            <a href="#home" className="hover:text-[#C59D5F] transition">Home</a>
            <a href="#menu" className="hover:text-[#C59D5F] transition">Menu</a>
            <a href="#service" className="hover:text-[#C59D5F] transition">Service</a>
            <a href="#events" className="hover:text-[#C59D5F] transition">Events</a>
            <a href="#process" className="hover:text-[#C59D5F] transition">Process</a>
            <a href="tel:+918892606625" className="bg-[#C59D5F] text-[#2C1810] px-5 py-2 rounded hover:bg-white transition flex items-center gap-2">
              <Phone size={16} /> +91 8892606625
            </a>
          </div>
          <button className="md:hidden text-[#C59D5F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#3E2723] p-6 absolute w-full text-center shadow-2xl border-t border-white/10 mt-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[#FFF8E1] hover:text-[#C59D5F]">Home</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[#FFF8E1] hover:text-[#C59D5F]">Menu</a>
            <a href="#service" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[#FFF8E1] hover:text-[#C59D5F]">Service</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[#FFF8E1] hover:text-[#C59D5F]">Events</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[#FFF8E1] hover:text-[#C59D5F]">Process</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-fixed bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.7)), url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}>
        <div className="absolute top-28 right-6 md:top-32 md:right-16 z-10 animate-bounce">
          <div className="bg-[#DAB87F] text-[#2C1810] font-bold px-6 py-3 rounded-full shadow-2xl transform rotate-6 border border-[#2C1810]/20">
            <p className="text-xs uppercase tracking-widest text-center">Minimum Order</p>
            <p className="text-lg font-serif">10 Tea/Coffee</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto z-10 text-white mt-12">
          <span className="text-[#DAB87F] uppercase tracking-[0.2em] font-bold mb-4 block text-sm">Premium Desk Service</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 drop-shadow-lg">The Office Cup</h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-2xl mx-auto">
            Fresh tea, coffee, and snacks delivered directly to your workstation during office hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:+918892606625" className="bg-[#DAB87F] hover:bg-white text-[#2C1810] font-bold py-4 px-10 shadow-xl transition duration-300 flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now
            </a>
            <button onClick={onViewAllMenu} className="bg-transparent border border-[#DAB87F] hover:bg-[#DAB87F] text-[#DAB87F] hover:text-[#2C1810] font-bold py-4 px-10 transition duration-300 flex items-center justify-center gap-2">
              <Coffee size={20} /> View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* POPULAR MENU SECTION */}
      <section id="menu" className="py-24 px-6 bg-[#FDFBF7]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A4804A] font-bold uppercase tracking-widest text-sm">Freshly Brewed & Baked</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mt-2">Popular Items</h2>
            <div className="w-12 h-0.5 bg-[#A4804A] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {previewItems.map(item => <MenuCard key={item.id} item={item} />)}
            
            {/* VIEW ALL BUTTON CARD */}
            <button onClick={onViewAllMenu} className="group bg-[#3E2723] rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white border border-[#3E2723] hover:-translate-y-2 transition duration-300 cursor-pointer h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-[#5D4037] flex items-center justify-center mb-4 group-hover:bg-[#A4804A] transition">
                <ArrowLeft size={28} className="text-[#DAB87F] group-hover:text-white rotate-180 transition" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#DAB87F]">View All 23+ Items</h3>
              <p className="text-[#D7CCC8] text-sm mt-3 px-4 leading-relaxed">
                Explore our complete range of hot beverages, sweets, traditional snacks & bajjis.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#A4804A] font-bold uppercase tracking-widest text-sm">Simple Process</span>
            <h2 className="text-4xl font-serif font-bold text-[#3E2723] mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step icon={<MessageCircle size={24} />} title="1. Contact Us" desc="Fill the form or call us to discuss requirements." color="bg-[#FFF8E1]" />
            <Step icon={<ClipboardList size={24} />} title="2. Choose Menu" desc="Select beverages and snacks tailored for you." color="bg-[#FFF8E1]" />
            <Step icon={<CheckCircle size={24} />} title="3. Place Order" desc="Confirm your monthly subscription or bulk order." color="bg-[#FFF8E1]" />
            <Step icon={<Truck size={24} className="text-white" />} title="4. Desk Delivery" desc="Sit back! We deliver hot refreshments to your desk." color="bg-[#DAB87F]" />
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="py-24 relative bg-[#4E342E] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-block p-4 border border-[#DAB87F] rounded-full mb-6">
            <Calendar size={32} className="text-[#DAB87F]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Events & Office Parties</h2>
          <p className="text-lg text-[#D7CCC8] max-w-2xl mx-auto mb-10 font-light">
            Planning a board meeting, outdoor team gathering, or an office celebration? 
            We provide bulk catering services tailored to your event needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 rounded-full border border-gray-400 text-sm font-semibold">Outdoor Catering</span>
            <span className="px-6 py-2 rounded-full border border-gray-400 text-sm font-semibold">Bulk Coffee Cans</span>
            <span className="px-6 py-2 rounded-full border border-gray-400 text-sm font-semibold">Snack Platters</span>
          </div>
        </div>
      </section>

      {/* WE SERVE AT YOUR DESK */}
      <section id="service" className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto border border-gray-100">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Office Desk" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-[#A4804A]" size={20} />
                <span className="text-[#A4804A] font-bold uppercase tracking-wider text-xs">Convenience First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E2723] mb-6">We Serve At Your Desk</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Don't break your flow. Our staff delivers piping hot tea and coffee directly to your employee's desk, ensuring maximum productivity and comfort.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#4CAF50] mt-0.5" /><span className="text-gray-700 text-sm">Scheduled delivery times</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#4CAF50] mt-0.5" /><span className="text-gray-700 text-sm">Hygienic handling & serving</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-[#4CAF50] mt-0.5" /><span className="text-gray-700 text-sm">Zero downtime for your team</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-[#3E2723]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            
            {/* Form Header */}
            <div className="bg-[#2C1810] p-8 text-center border-b border-[#3E2723]">
              <h2 className="text-3xl font-serif font-bold text-white">Start Your Subscription</h2>
              <p className="text-[#D7CCC8] text-sm mt-2">We will reply instantly on WhatsApp</p>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* Left Side: Inputs */}
              <form onSubmit={handleOrderSubmit} className="w-full md:w-2/3 p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input name="name" placeholder="Name" icon={<User size={18} />} />
                  <Input name="company" placeholder="Company" icon={<Building2 size={18} />} />
                </div>
                <Input name="email" type="email" placeholder="Email" icon={<Mail size={18} />} />
                <div className="relative">
                  <MapPin size={18} className="absolute left-4 top-3.5 text-gray-400" />
                  <textarea name="address" placeholder="Office Address" rows="3" className="w-full pl-12 pr-4 py-3 bg-white rounded border border-gray-200 focus:outline-none focus:border-[#DAB87F] transition text-sm" required></textarea>
                </div>
                
                {/* Fixed Dropdown */}
                <div className="relative">
                  <Coffee size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select name="requirement" className="w-full pl-12 pr-4 py-3 bg-white rounded border border-gray-200 focus:outline-none focus:border-[#DAB87F] appearance-none text-sm text-gray-600">
                    <option>Monthly: 30-50 Cups/Day</option>
                    <option>Monthly: 50-100 Cups/Day</option>
                    <option>Event Booking</option>
                    <option>Other Quanty </option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1fa851] text-white font-bold py-3.5 rounded transition duration-300 flex justify-center items-center gap-2 mt-2">
                  <MessageCircle size={20} /> Send Enquiry via WhatsApp
                </button>
              </form>

              {/* Right Side: Contact Details */}
              <div className="w-full md:w-1/3 bg-[#FFF8E1] p-8 flex flex-col justify-center items-center text-center border-l border-gray-100">
                <div className="text-[#3E2723] mb-3 text-sm font-bold">Or Call Us Directly</div>
                <a href="tel:+918892606625" className="text-2xl font-bold text-[#2C1810] hover:text-[#A4804A] transition mb-6">
                  +91 8892606625
                </a>
               <div className="text-base font-bold text-gray-700 leading-relaxed">
                  Available Mon - Sat<br/>9:00 AM - 7:00 PM
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

const FullMenuPage = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(ALL_MENU_ITEMS.map(item => item.category))];
  const filteredItems = ALL_MENU_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="bg-[#3E2723] text-white pt-8 pb-16 px-6 relative z-40 shadow-md">
        <div className="container mx-auto max-w-7xl">
          <button onClick={onBack} className="flex items-center gap-2 text-[#DAB87F] hover:text-white transition duration-300 font-medium mb-6">
            <ArrowLeft size={20} /> Back to Home
          </button>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">Our Complete Menu</h1>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search items..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded text-white focus:outline-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => <MenuCard key={item.id} item={item} small={true} />)}
        </div>
      </div>
    </div>
  );
};

// --- REUSABLE COMPONENTS ---

const Step = ({ icon, title, desc, color }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm ${color} ${color === 'bg-[#DAB87F]' ? 'text-white' : 'text-[#3E2723]'}`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#3E2723] mb-2">{title}</h3>
    <p className="text-gray-500 text-sm max-w-[200px]">{desc}</p>
  </div>
);

const MenuCard = ({ item, small = false }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 flex flex-col h-full transition duration-300">
    <div className={`${small ? 'h-40' : 'h-56'} overflow-hidden relative bg-stone-100`}>
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      {/* Price Tag */}
      <div className="absolute top-3 right-3 bg-[#3E2723] text-[#DAB87F] px-2 py-1 rounded text-xs font-bold shadow-md">
        ₹{item.price}
      </div>
      {/* Category Tag */}
      <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded shadow text-[10px] font-bold text-gray-700 uppercase tracking-widest">
        {item.category}
      </div>
    </div>
    <div className={`flex flex-col flex-grow bg-white ${small ? 'p-4' : 'p-5'}`}>
      <h3 className={`${small ? 'text-lg' : 'text-xl'} font-bold text-[#3E2723]`}>{item.name}</h3>
    </div>
  </div>
);

const Input = ({ name, placeholder, type = "text", icon }) => (
  <div className="relative">
    <span className="absolute left-4 top-3.5 text-gray-400">{icon}</span>
    <input type={type} name={name} placeholder={placeholder} className="w-full pl-12 pr-4 py-3 bg-white rounded border border-gray-200 focus:outline-none focus:border-[#DAB87F] text-sm text-gray-700" required />
  </div>
);

const Footer = () => (
  <footer className="text-center text-[#D7CCC8] pt-8 relative z-10 border-t border-[#3E2723]">
    {/* Social Links */}
    <div className="flex justify-center mb-6">
      <a 
        href="https://instagram.com/your_instagram_handle" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DAB87F] hover:text-[#3E2723] transition duration-300"
        aria-label="Follow us on Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      </a>
    </div>

    {/* Copyright Text */}
    <p className="text-xs opacity-60 pb-8">
      &copy; {new Date().getFullYear()} The Office Cup Services. All Rights Reserved.
    </p>
  </footer>
);

export default App;