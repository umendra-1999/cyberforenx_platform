"use client";

import { ArrowRight, CheckSquare, LayoutGrid } from "lucide-react";

const categories = [
  { label: "Creative & Design", icon: CheckSquare },
  { label: "Software Development", icon: LayoutGrid },
  { label: "Marketing", icon: CheckSquare },
  { label: "Project Management", icon: LayoutGrid },
  { label: "Task Tracking", icon: CheckSquare },
  { label: "HR & Operations", icon: LayoutGrid },
];

export default function HeroSectin() {
  return (
    <section className="relative overflow-hidden  flex items-center justify-center px-18">
      {/* Left Glow */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-white blur-3xl opacity-95" />

      {/* Right Glow */}
      <div className="absolute -right-40 -top-16 h-[500px] w-[500px] rounded-full bg-[#f4eeff] blur-2xl opacity-95" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-[#09112f] leading-tight">
          Plan smarter. Work faster. Grow consistently.
        </h1>

        <h2 className="text-4xl md:text-5xl font-medium text-[#4c5cff]">
          All at one Place
        </h2>

        <p className="mt-6 text-xl text-[#1f2937] font-medium">
          What would you like to manage with Intaskr?
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-600 shadow-sm hover:shadow-md transition-all"
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="group inline-flex items-center gap-3 rounded-full bg-[#2563eb] px-6 py-3 text-xl font-medium text-white  transition-all hover:scale-105">
            Get Started
            <ArrowRight
              size={22}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <p className="mt-4 text-gray-400">
            No credit card needed ✦ Start free
          </p>
        </div>
      </div>
    </section>
  );
}