const plans = [
  { name: "Basic", price: "49", features: ["Unlimited Gym Access", "Standard Locker", "1 Fitness Assessment"], popular: false },
  { name: "Pro Elite", price: "89", features: ["Everything in Basic", "Unlimited Group Classes", "2 Personal Training Sessions", "Guest Passes (2/mo)"], popular: true },
  { name: "Platinum", price: "149", features: ["Everything in Pro Elite", "Dedicated Trainer 24/7", "Nutrition Planning", "Spa & Massage Access"], popular: false },
];

export default function Pricing() {
  return (
    <section id="membership" className="py-24 bg-[#121210] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Pricing Plans</p>
          <h2 className="text-5xl font-black uppercase">Choose Your Plan</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-10 rounded-lg transition-all ${plan.popular ? 'bg-[#eab308] text-black scale-105 shadow-2xl shadow-yellow-500/20' : 'bg-[#1a1a18] border border-white/5'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase tracking-tighter">{plan.name}</h3>
                {plan.popular && <span className="bg-black text-[#eab308] text-[8px] px-2 py-1 rounded-full font-bold uppercase">Most Popular</span>}
              </div>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black italic">$</span>
                <span className="text-6xl font-black italic tracking-tighter">{plan.price}</span>
                <span className="ml-2 text-sm opacity-60">/month</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${plan.popular ? 'bg-black text-white' : 'border border-[#eab308] text-[#eab308]'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-xs font-black uppercase rounded-sm border ${plan.popular ? 'bg-black text-white border-black' : 'border-white/20 hover:bg-white/5'}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}