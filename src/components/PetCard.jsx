"use client";

import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "./home/MaterialIcon";

export default function PetCard({ pet, onAdopt }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={pet.image} alt={pet.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="rounded-full bg-primary-container/90 px-3 py-1 text-label-sm text-on-primary-container backdrop-blur-md">
            {pet.gender}
          </span>
          <span className="rounded-full bg-surface/90 px-3 py-1 text-label-sm backdrop-blur-md">{pet.age}</span>
        </div>
      </div>
      <div className="p-stack-md">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-display-lg text-headline-lg text-on-surface">{pet.name}</h3>
          {pet.fee != null && <span className="font-bold text-primary">${pet.fee}</span>}
        </div>
        <p className="mb-1 text-on-surface-variant">{pet.breed}</p>
        <p className="mb-stack-md flex items-center gap-1 text-sm text-on-surface-variant">
          <MaterialIcon name="location_on" className="text-sm" />
          {pet.location}
        </p>
        <div className="flex gap-2">
          <Link
            href={`/all-pets/${pet.id}`}
            className="flex-1 rounded-xl border border-outline-variant py-3 text-center font-label-md transition-all hover:bg-surface-container"
          >
            View Details
          </Link>
          {onAdopt && (
            <button
              type="button"
              onClick={onAdopt}
              className="flex-1 rounded-xl bg-linear-to-b from-primary-container to-primary py-3 font-label-md text-white" >
              Adopt Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
