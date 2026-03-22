"use client";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Medal } from "lucide-react";
const chartData = [
  {
    department: "CSE",
    totalStudents: 244,
    participatingStudents: 102,
    points: 0.4099,
    color: "bg-blue-500",
  },
  {
    department: "ECE",
    totalStudents: 113,
    participatingStudents: 64,
    points: 0.8851,
    color: "bg-red-500",
  },
  {
    department: "PT",
    totalStudents: 113,
    participatingStudents: 55,
    points: 0.8851,
    color: "bg-green-500",
  },
  {
    department: "ME",
    totalStudents: 94,
    participatingStudents: 67,
    points: 1.064,
    color: "bg-yellow-500",
  },
  {
    department: "EEE",
    totalStudents: 71,
    participatingStudents: 32,

    points: 1.4086,
    color: "bg-purple-500",
  },
  {
    department: "EP",
    totalStudents: 59,
    participatingStudents: 25,
    points: 1.6951,
    color: "bg-cyan-500",
  },
];
export const RevenueChart = memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="border-border bg-card/40 rounded-xl border p-3">
      {/* Fixed Chart Area */}
      <div className="relative mb-4 h-64 rounded-lg p-4">
        <div className="flex h-full items-end justify-between gap-3">
          {chartData.map((item, index) => (
            <div
              key={item.department}
              className="group flex flex-1 flex-col items-center"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(item.participatingStudents / item.totalStudents) * 180}px`,
                }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`w-full ${item.color} relative min-h-[20px] cursor-pointer rounded-t-lg transition-opacity hover:opacity-80`}
              >
                {/* Tooltip */}
                <div
                  className={`gap-1 flex flex-col border-border bg-popover absolute -top-16 left-1/2 z-10 -translate-x-1/2 transform rounded-lg border px-3 py-2 text-sm whitespace-nowrap shadow-lg transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"} group-hover:opacity-100`}
                >
                  <div className="font-medium text-xs flex gap-2 items-center text-blue-500">
                    <User size={15} />
                    {item.participatingStudents} /{" "}
                    {item.totalStudents.toLocaleString()}
                  </div>
                  <div
                    className={`font-medium text-xs flex gap-2 items-center text-green-700`}
                  >
                    <Medal size={15} />
                    {item.points}
                  </div>
                </div>
              </motion.div>

              <div className="text-muted-foreground mt-2 text-center text-xs font-medium">
                {item.department}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      {/* <div className="border-border/50 grid grid-cols-3 gap-4 border-t pt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">$27K</div>
          <div className="text-muted-foreground text-xs">Total Revenue</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-500">+18%</div>
          <div className="text-muted-foreground text-xs">Growth Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-500">$4.5K</div>
          <div className="text-muted-foreground text-xs">Average</div>
        </div>
      </div> */}
    </div>
  );
});
RevenueChart.displayName = "RevenueChart";
