"use client";

import React from "react";

import { cn } from "@/utils";

import { useSelectPlanetStore } from "../_state/useSelectPlanetStore"; // Assume this store setup from previous instructions

interface CardData {
  id: string;
  title: string;
  description: string;
  img: string; // Update the image paths to match your project's public directory if necessary
}

const cardData: CardData[] = [
  {
    id: "c1",
    title: "Winter",
    description: "Winter has so much to offer - creative activities",
    img: "/img1.jpeg",
  },
  {
    id: "c2",
    title: "Digital Technology",
    description: "Gets better every day - stay tuned",
    img: "/img2.jpeg",
  },
  {
    id: "c3",
    title: "Globalization",
    description: "Help people all over the world",
    img: "/img3.jpeg",
  },
  {
    id: "c4",
    title: "New technologies",
    description: "Space engineering becomes more and more advanced",
    img: "/img4.jpeg",
  },
];

export const ImageCardSlider: React.FC = () => {
  const { selectedCard, setSelectedCard } = useSelectPlanetStore();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 flex h-fit items-center justify-start",
      )}
    >
      <div
        className={cn(
          "flex h-[400px] overflow-hidden",
          "max-w-screen-2xl px-4 pb-8 sm:px-6 lg:px-8",
        )}
      >
        {cardData.map((card) => (
          <React.Fragment key={card.id}>
            <input
              type="radio"
              id={card.id}
              name="slide"
              className="hidden"
              checked={selectedCard === card.id}
              onChange={() => setSelectedCard(card.id)}
            />

            <label
              htmlFor={card.id}
              className={`ease-cubic m-2 cursor-pointer overflow-hidden rounded-2xl bg-red-500 transition-all duration-700
                                                        ${selectedCard === card.id ? "w-[600px]" : "w-[80px]"} bg-cover bg-center bg-no-repeat shadow-2xl`}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="flex">
                <div className="m-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white">
                  {card.id.slice(1)}
                </div>
                <div
                  className={`flex h-20 w-full flex-col items-start justify-center overflow-hidden transition-all duration-300 ease-in
                                            ${selectedCard === card.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <h4 className="uppercase text-white">{card.title}</h4>
                  <p className="pt-1 text-gray-200">{card.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
