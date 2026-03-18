import { Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img src="/logo.png" alt="Fitness Sports Logo" className="h-8 w-auto object-contain" />
               <h2 className="font-black uppercase tracking-tighter">Fitness <span className="text-[#eab308]">Sports Center</span></h2>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Elite training facility dedicated to pushing human potential through science-based workouts and a community of high-performers.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#eab308] hover:text-black transition cursor-pointer">
                <Instagram size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#eab308] hover:text-black transition cursor-pointer">
                <Facebook size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#eab308] hover:text-black transition cursor-pointer">
                <Twitter size={14} />
              </div>
            </div>
          </div>

          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-[#eab308]">Home</a></li>
              <li><a href="#trainers" className="hover:text-[#eab308]">Our Trainers</a></li>
              <li><a href="#membership" className="hover:text-[#eab308]">Membership Plans</a></li>
              <li><a href="#about" className="hover:text-[#eab308]">Class Schedule</a></li>
              <li><a href="#contact" className="hover:text-[#eab308]">Contact Us</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#eab308]">Nutrition Guide</a></li>
              <li><a href="#" className="hover:text-[#eab308]">Shop Apparel</a></li>
              <li><a href="#" className="hover:text-[#eab308]">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#eab308]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#eab308]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Join the Newsletter</h4>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Receive elite training tips and exclusive membership offers weekly.
            </p>
            <div className="flex bg-[#1a1a18] rounded-md overflow-hidden p-1 border border-white/5">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none text-xs px-4 py-3 w-full focus:outline-none focus:ring-0"
              />
              <button className="bg-[#eab308] text-black px-4 py-3 rounded-md hover:bg-yellow-500 transition">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        
        <div className="text-center pt-10 border-t border-white/5">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
            © 2026 Fitness Sports Center. Built for Champions.
          </p>
        </div>
      </div>
    </footer>
  );
}