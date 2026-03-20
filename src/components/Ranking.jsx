import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const rankings = [
    {
      eventName: "Tech Innovators ",
      students: [
        {
          rank: 1,
          name: "Alice Johnson",
          points: 95,
          department: "Computer Science",
        },
        {
          rank: 2,
          name: "Bob Smith",
          points: 90,
          department: "Electrical Engineering",
        },
        {
          rank: 3,
          name: "Charlie Davis",
          points: 85,
          department: "Mechanical Engineering",
        },
      ],
    },
    {
      eventName: "AI & Robotics Challenge 2024",
      students: [
        {
          rank: 1,
          name: "Charlie Davis",
          points: 98,
          department: "Mechanical Engineering",
        },
        {
          rank: 2,
          name: "Diana Lee",
          points: 92,
          department: "Computer Science",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl">
      <div className="flex justify-between items-center mt-8 p-3 md:px-12">
        <h1 className="text-white text-2xl font-semibold orbitron-font  ">
          <span className="text-cyan-300">|</span> Ranking
        </h1>
        <h3 className="text-muted/90">Updated 30s ago</h3>
      </div>
      <div className="w-full flex justify-center">
        <AnimatedTestimonials contents={rankings} />;
      </div>
    </div>
  );
}
