import React, { useState } from 'react';
import { Calculator, IndianRupee, Leaf, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RoiCalculator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(1500000);
  const [savingsPercent, setSavingsPercent] = useState<number>(22);

  const annualSpend = monthlySpend * 12;
  const annualSavings = (annualSpend * savingsPercent) / 100;
  const carbonOffsetTons = Math.round((annualSavings / 9) * 0.00082);
  const estimatedPaybackMonths = ((annualSpend * 0.045) / (annualSavings / 12)).toFixed(1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Input Controls */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Value Estimator</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            Estimate Your Annual Resource Savings
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Calculate your potential waste reduction and payback period by unifying Energy, Water, Gas, and Chiller operations into Prishitech's intelligence platform.
          </p>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700">Monthly Utility Spend:</span>
                <span className="text-emerald-700 font-mono font-bold">{formatCurrency(monthlySpend)}</span>
              </div>
              <input
                type="range"
                min="200000"
                max="10000000"
                step="100000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹2 Lakh/mo</span>
                <span>₹50 Lakh/mo</span>
                <span>₹1 Crore/mo</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700">Target Optimization Factor:</span>
                <span className="text-sky-700 font-mono font-bold">{savingsPercent}% reduction</span>
              </div>
              <input
                type="range"
                min="12"
                max="35"
                step="1"
                value={savingsPercent}
                onChange={(e) => setSavingsPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>12% (Conservative)</span>
                <span>22% (Average Platform Result)</span>
                <span>35% (Deep Retrofit + AI)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output Metrics Card */}
        <div className="w-full lg:w-1/2 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                <span>Annual Cost Saved</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">
                {formatCurrency(annualSavings)}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Direct bottom-line margin</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Avg Payback Window</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
                {estimatedPaybackMonths} months
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Turnkey deployment ROI</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-800">Estimated Carbon Reduction</div>
                <div className="text-sm font-bold text-slate-900">~{carbonOffsetTons.toLocaleString()} Metric Tons CO₂e / yr</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-medium">
              ESG Ready
            </span>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group text-sm"
            >
              <span>Get Detailed Plant Energy Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-slate-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
