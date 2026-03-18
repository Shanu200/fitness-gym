"use client"; // Required for useState
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  // 1. Setup State for form data and success status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.email || !formData.message) {
      alert("Please fill in the required fields.");
      return;
    }

    // Simulate API call
    console.log("Form Submitted:", formData);
    setSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => setSuccess(false), 5000);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <p className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Connect</p>
          <h2 className="text-6xl font-black uppercase leading-none mb-8">Ready to <br />Transform <br />Your Body?</h2>
          <p className="text-gray-400 mb-10 max-w-sm">Stop making excuses and start making progress. Our team is ready to guide you every step of the way.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a18] flex items-center justify-center rounded-lg text-[#eab308]"><Phone size={20} /></div>
              <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Call Us</p><p className="font-bold">+1 (555) 123-4567</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a18] flex items-center justify-center rounded-lg text-[#eab308]"><Mail size={20} /></div>
              <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email Us</p><p className="font-bold">join@fitnessports.com</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a18] flex items-center justify-center rounded-lg text-[#eab308]"><MapPin size={20} /></div>
              <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Location</p><p className="font-bold">123 Iron Avenue, Muscle City</p></div>
            </div>
          </div>
        </div>

        <div className="bg-[#141412] p-10 rounded-xl border border-white/5 relative">
          {/* 4. The Form with onSubmit */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-md focus:outline-none focus:border-[#eab308]" 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe" 
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-md focus:outline-none focus:border-[#eab308]" 
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-md focus:outline-none focus:border-[#eab308]" 
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I want to start a transformation journey..." 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-md focus:outline-none focus:border-[#eab308]"
                required
              ></textarea>
            </div>
            
            {success ? (
              <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/50 text-green-500 py-4 rounded-md animate-pulse">
                <CheckCircle size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">Message Sent Successfully!</span>
              </div>
            ) : (
              <button 
                type="submit" 
                className="w-full bg-[#eab308] text-black font-black uppercase py-4 rounded-md shadow-lg shadow-yellow-500/20 hover:bg-yellow-500 transition active:scale-[0.98]"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}