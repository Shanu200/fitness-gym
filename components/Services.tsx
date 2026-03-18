"use client";
import { Dumbbell, Users, Zap, Trophy } from "lucide-react";

// Data for the Icon Section (Expertise)
const expertiseServices = [
  {
    title: "Personal Training",
    desc: "Customized workouts tailored specifically to your unique goals and physiology.",
    icon: <Dumbbell className="w-6 h-6 text-[#eab308]" />,
  },
  {
    title: "Group Classes",
    desc: "High-energy sessions with expert instructors to keep you motivated and moving.",
    icon: <Users className="w-6 h-6 text-[#eab308]" />,
  },
  {
    title: "Cardio Zone",
    desc: "State-of-the-art endurance equipment featuring the latest in biometric tracking.",
    icon: <Zap className="w-6 h-6 text-[#eab308]" />,
  },
  {
    title: "Strength Hub",
    desc: "Advanced weightlifting areas, power racks, and specialized strength machines.",
    icon: <Trophy className="w-6 h-6 text-[#eab308]" />,
  },
];

// Data for the Image Section (The Standard)
const premierServices = [
  { 
    title: "Strength Training", 
    desc: "Master the fundamentals of powerlifting and hypertrophy with our elite strength equipment.", 
    img: "/strength.jpg" // Ensure these images are in your public folder
  },
  { 
    title: "Cardio Training", 
    desc: "Boost your endurance with advanced heart-rate monitored HIIT and endurance sessions.", 
    img: "/cardio.jpg" 
  },
  { 
    title: "Personal Coaching", 
    desc: "Get 1-on-1 attention from world-class coaches dedicated to your specific fitness transformation.", 
    img: "/coaching.jpg" 
  },
  { 
    title: "Nutrition Guidance", 
    desc: "Custom fuel plans designed by experts to complement your training and optimize performance.", 
    img: "/nutrition.jpg" 
  },
];

export default function Services() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      
    
      <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="md:w-1/2">
            <p className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
              Expertise
            </p>
            <h2 className="text-6xl font-black uppercase leading-[0.9]">
              Our Premium <br /> Services
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your physique with our range of specialized training 
              programs designed for all skill levels.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {expertiseServices.map((s, i) => (
            <div 
              key={i} 
              className="p-10 bg-[#1a1a18] rounded-xl border border-white/5 hover:border-[#eab308]/30 transition-all duration-300 group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-black uppercase mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
            The Standard
          </p>
          <h2 className="text-5xl font-black uppercase">Our Premier Services</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {premierServices.map((s, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-xl bg-[#141412] border border-white/5 h-[480px] hover:border-[#eab308]/20 transition-all"
            >
              
              <div className="h-2/3 overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#141412] to-transparent opacity-60"></div>
              </div>

           
              <div className="p-6">
                <h3 className="text-lg font-black uppercase mb-3 tracking-tight group-hover:text-[#eab308] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}