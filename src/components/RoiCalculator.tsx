import React, { useState } from 'react';
import { Calculator, IndianRupee, Leaf, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RoiCalculator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(1500000); // 15 Lakh INR default
  const [savingsPercent, setSavingsPercent] = useState<number>(22); // 22% average saving

  const annualSpend = monthlySpend * 12;
  const annualSavings = (annualSpend * savingsPercent) / 100;
  const carbonOffsetTons = Math.round((annualSavings / 9) * 0.00082); // approx kg CO2e per kWh
  const estimatedPaybackMonths = ((annualSpend * 0.045) / (annualSavings / 12)).toFixed(1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Input Controls */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Calculator className="w-4 h-4" />
            <span>Interactive Value Estimator</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            Estimate Your Annual Resource Savings
          </h3>
          <p className="text-slate-400 text-sm">
            Calculate your potential waste reduction and payback period by unifying Energy, Water, Gas, and Chiller operations into Prishitech's intelligence platform.
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-300">Total Monthly Utility Spend (Energy + Water + Gas + Chiller):</span>
                <span className="text-emerald-400 font-mono font-bold">{formatCurrency(monthlySpend)}</span>
              </div>
              <input
                type="range"
                min="200000"
                max="10000000"
                step="100000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹2 Lakh/mo</span>
                <span>₹50 Lakh/mo</span>
                <span>₹1 Crore/mo</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-300">Target Efficiency &amp; Optimization Factor:</span>
                <span className="text-cyan-400 font-mono font-bold">{savingsPercent}% reduction</span>
              </div>
              <input
                type="range"
                min="12"
                max="35"
                step="1"
                value={savingsPercent}
                onChange={(e) => setSavingsPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>12% (Conservative)</span>
                <span>22% (Average Platform Result)</span>
                <span>35% (Deep Retrofit + AI)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output Metrics Card */}
        <div className="w-full lg:w-1/2 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
                <span>Annual Cost Saved</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                {formatCurrency(annualSavings)}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Direct bottom-line margin</div>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Avg Payback Window</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">
                {estimatedPaybackMonths} months
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Turnkey deployment ROI</div>
            </div>
          </div>

          <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-900/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-300">Estimated Carbon Reduction</div>
                <div className="text-sm font-bold text-white">~{carbonOffsetTons.toLocaleString()} Metric Tons CO₂e / year</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/40 px-2 py-1 rounded">
              BRSR &amp; ESG Ready
            </span>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all shadow-glow-emerald flex items-center justify-center gap-2 group text-sm"
            >
              <span>Get Detailed Plant Energy Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
