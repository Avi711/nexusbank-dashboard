"use client";

import { useEffect, useRef } from "react";

interface RevenueData {
  month: string;
  amount: number;
}

const data: RevenueData[] = [
  { month: "Mar", amount: 1500 },
  { month: "Apr", amount: 1800 },
  { month: "May", amount: 1600 },
  { month: "Jun", amount: 1700 },
  { month: "Jul", amount: 2240 },
  { month: "Aug", amount: 1900 },
];

export default function RevenueChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const maxAmount = Math.max(...data.map((d) => d.amount));
    const bars = chartRef.current.querySelectorAll(".bar");

    bars.forEach((bar, i) => {
      const height = (data[i].amount / maxAmount) * 100;
      (bar as HTMLElement).style.height = `${height}%`;
    });
  }, []);

  return (
    <div className="h-64 flex flex-col">
      {/* Value indicators */}
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>2.5k$</span>
        <span>2.0k$</span>
        <span>1.5k$</span>
        <span>1.0k$</span>
        <span>0.5k$</span>
        <span>0$</span>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-end gap-4" ref={chartRef}>
        {data.map((item, index) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center gap-2 group"
          >
            <div className="relative w-full">
              {/* Value tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A1D1F] text-white text-xs px-2 py-1 rounded pointer-events-none">
                ${item.amount.toLocaleString()}
              </div>
              {/* Bar */}
              <div
                className={`bar w-full rounded-t-lg transition-all duration-700 ease-out ${
                  index === 4
                    ? "bg-purple-500"
                    : "bg-[#2A2F33] group-hover:bg-[#3A3F43]"
                }`}
                style={{ height: "0%", minHeight: "4px" }}
              />
            </div>
            <span className="text-sm text-gray-400">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
