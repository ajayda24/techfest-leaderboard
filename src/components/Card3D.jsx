"use client";

import { useEffect, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Crown } from "lucide-react";

const Card3D = ({ content, description, className, badgeText, crown }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(undefined);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    let rect;
    let centerX;
    let centerY;

    const updateCardTransform = (mouseX, mouseY) => {
      if (!rect) {
        rect = card.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      }

      const relativeX = mouseX - centerX;
      const relativeY = mouseY - centerY;

      const cardTransform = {
        rotateX: -relativeY * 0.035,
        rotateY: relativeX * 0.035,
        scale: 1.025,
      };

      const imageTransform = {
        rotateX: -relativeY * 0.025,
        rotateY: relativeX * 0.025,
        scale: 1.05,
      };

      return { cardTransform, imageTransform };
    };

    const animate = () => {
      const { cardTransform, imageTransform } = updateCardTransform(
        lastMousePosition.current.x,
        lastMousePosition.current.y,
      );

      card.style.transform = `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) scale3d(${cardTransform.scale}, ${cardTransform.scale}, ${cardTransform.scale})`;
      card.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.2)";

      image.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
      image.style.transition = "transform 0.2s ease";
      animate();
    };

    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.boxShadow = "none";
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";

      image.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      image.style.transition = "transform 0.5s ease";
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative mt-10 ${className}`}>
      <div className="absolute inset-0 animate-pulse rounded-xl bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 opacity-70 blur-sm"></div>
      {crown && (
        <Crown
          className="absolute z-10 left-1/2 -translate-x-1/2 -top-12 text-yellow-500 animate-ping"
          size={30}
        />
      )}
      <Badge
        variant="outline"
        className="absolute z-10 left-1/2 -translate-x-1/2 -top-5 bg-amber-200 p-4 px-4 sm:p-5 sm:px-6 text-[clamp(0.75rem,3vw,1.35rem)]"
      >
        {badgeText}
      </Badge>
      <Card
        ref={cardRef}
        className="relative max-w-md rounded-xl border border-white/10 sm:p-10"
      >
        <CardHeader className={"text-center"}>
          <CardTitle className={"text-[clamp(0.8rem,5vw,1.5rem)] "}>
            {content}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center text-[clamp(1rem,5vw,2rem)] ">
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Card3D;
