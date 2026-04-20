"use client";

import { Star, MessageSquare, Zap, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GOOGLE_RATING } from "@/lib/constants";

const stats = [
  {
    icon: Star,
    value: `${GOOGLE_RATING.score}/5`,
    label: "Note Google",
    color: "text-lime",
  },
  {
    icon: MessageSquare,
    value: String(GOOGLE_RATING.count),
    label: "Avis clients",
    color: "text-teal",
  },
  {
    icon: Zap,
    value: "10+",
    label: "Ans d'expérience",
    color: "text-lime",
  },
  {
    icon: MapPin,
    value: "Alsace",
    label: "Zone d'intervention",
    color: "text-teal",
  },
];

function AnimatedNumber({ value, isInView }: { value: string; isInView: boolean }) {
  const num = parseInt(value);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    let current = 0;
    const step = Math.ceil(num / 30);
    const interval = setInterval(() => {
      current += step;
      if (current >= num) {
        current = num;
        clearInterval(interval);
      }
      setDisplay(value.includes("/") ? `${current}/5` : value.includes("+") ? `${current}+` : String(current));
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, num, value]);

  return <>{display}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <p className="text-3xl font-bold text-navy mb-1">
                <AnimatedNumber value={stat.value} isInView={isInView} />
              </p>
              <p className="text-sm text-gray-text">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
