const services = [
  { title: "Strength Training", desc: "Master the fundamentals of powerlifting and hypertrophy with our elite strength equipment.", img: "/strength.jpg" },
  { title: "Cardio Training", desc: "Boost your endurance with advanced heart-rate monitored HIIT and endurance sessions.", img: "/cardio.jpg" },
  { title: "Personal Coaching", desc: "Get 1-on-1 attention from world-class coaches dedicated to your specific fitness transformation.", img: "/coaching.jpg" },
  { title: "Nutrition Guidance", desc: "Custom fuel plans designed by experts to complement your training and optimize performance.", img: "/nutrition.jpg" },
];

const trainers = [
  { name: "Sarah Jenkins", role: "CrossFit Specialist", img: "/sarah.jpg" },
  { name: "David Miller", role: "Bodybuilding Coach", img: "/david.jpg" },
  { name: "Marcus Thorne", role: "Functional Training", img: "/marcus.jpg" },
];

export default function ServicesAndTrainers() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      
      <section id="trainers" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Professionals</p>
          <h2 className="text-5xl font-black uppercase">Meet Our Elite Trainers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <div key={i} className="relative h-[500px] rounded-xl overflow-hidden group">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-black uppercase">{t.name}</h3>
                <p className="text-[#eab308] text-xs font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}