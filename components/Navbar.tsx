export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md text-white px-6 py-4 z-50 border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img 
    src="/logo.png" 
    alt="Fitness Sports Logo" 
    className="h-9 w-auto object-contain" 
  />
          <h1 className="font-bold uppercase tracking-tighter leading-none">
            Fitness <span className="text-[#eab308] block text-[10px]">Sports Center</span>
          </h1>
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase font-semibold tracking-widest">
          <a href="#home" className="hover:text-[#eab308] transition">Home</a>
          <a href="#about" className="hover:text-[#eab308] transition">About</a>
          <a href="#services" className="hover:text-[#eab308] transition">Services</a>
          <a href="#trainers" className="hover:text-[#eab308] transition">Trainers</a>
          <a href="#membership" className="hover:text-[#eab308] transition">Membership</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-[#eab308] text-black px-5 py-2 text-xs font-bold uppercase rounded-sm">Join Now</button>
          <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/20 overflow-hidden">
             <img src="/user-avatar.jpg" alt="user" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}