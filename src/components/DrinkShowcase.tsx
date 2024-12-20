"use client";

import { Beverage } from "@/types/type";
import Image from "next/image";

interface DrinkShowcaseProps {
  beverages: Beverage[];
}

const DrinkShowcase: React.FC<DrinkShowcaseProps> = ({ beverages }) => {
  return (
    <div>
      {beverages.map((beverage, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-6 max-w-3xl"
        >
          <h1 className="text-4xl font-bold text-center">
            {beverage.name}
          </h1>
          <Image
            src={beverage.imageUrl}
            alt={`${beverage.name} Image`}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="text-lg text-center max-w-2xl">
            {beverage.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DrinkShowcase;
