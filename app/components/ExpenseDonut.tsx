"use client";

import { useEffect, useRef } from "react";

interface ExpenseData {
  category: string;
  amount: number;
  color: string;
}

const data: ExpenseData[] = [
  { category: "Food", amount: 950, color: "#9333EA" },
  { category: "Clothes", amount: 420, color: "#15C39A" },
  { category: "Other", amount: 480, color: "#60A5FA" },
];

export default function ExpenseDonut() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.amount, 0);

    // Draw donut chart
    let startAngle = -Math.PI / 2;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Add shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.amount) / total;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(
        centerX,
        centerY,
        radius * 0.6,
        startAngle + sliceAngle,
        startAngle,
        true
      );
      ctx.closePath();

      ctx.fillStyle = item.color;
      ctx.fill();

      startAngle += sliceAngle;
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center h-48">
      <canvas
        ref={canvasRef}
        className="absolute w-full h-full"
        style={{ maxWidth: "200px", maxHeight: "200px" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold">$1,750</p>
          <p className="text-sm text-gray-400">Total Expenses</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 space-y-2">
        {data.map((item) => (
          <div key={item.category} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">
              {item.category}{" "}
              <span className="text-gray-400">${item.amount}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
