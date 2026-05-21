"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import PetCard from "../PetCard";
import { getFeaturedPets } from "@/lib/api";

export default function FeaturedPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedPets()
      .then(setPets)
      .catch(() => setPets([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
      <div className="mb-stack-lg flex items-end justify-between">
        <div>
          <h2 className="mb-2 font-display-lg text-headline-xl text-on-surface">
            Featured Pets
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Meet pets waiting for their forever homes.
          </p>
        </div>
        <Link href="/all-pets" className="hidden items-center gap-2 font-label-md text-primary hover:underline md:flex">
          View All Pets
          <MaterialIcon name="arrow_forward" className="text-body-md" />
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={{
                id: pet._id,
                name: pet.name,
                breed: pet.breed,
                location: pet.location,
                gender: pet.gender,
                age: pet.age,
                image: pet.imageUrl,
                fee: pet.adoptionFee,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
