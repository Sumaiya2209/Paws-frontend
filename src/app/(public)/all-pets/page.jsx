"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import MaterialIcon from "@/components/home/MaterialIcon";
import PetCard from "@/components/PetCard";
import { authClient } from "@/lib/auth-client";
import { getPets } from "@/lib/api";

const SPECIES_OPTIONS = ["Dog", "Cat", "Bird", "Rabbit", "Other"];

export default function AllPetsPage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState([]);
  const [sort, setSort] = useState("newest");

  const fetchPets = useCallback(() => {
    setLoading(true);
    const sortMap = { newest: "", "fee-asc": "fee-asc", "fee-desc": "fee-desc", name: "name" };
    getPets({ name: search, species, sort: sortMap[sort] })
      .then(setPets)
      .catch(() => setPets([]))
      .finally(() => setLoading(false));
  }, [search, species, sort]);

  useEffect(() => {
    const t = setTimeout(fetchPets, 300);
    return () => clearTimeout(t);
  }, [fetchPets]);

  const toggleSpecies = (s) => {
    setSpecies((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleAdoptClick = (petId) => {
    if (!session?.user) {
      router.push(`/login?redirect=/all-pets/${petId}`);
      return;
    }
    router.push(`/all-pets/${petId}`);
  };

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-28 pb-stack-lg md:px-margin-desktop">
      <div className="mb-stack-md flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display-lg text-headline-xl text-on-surface">All Pets</h1>
          <p className="mt-2 text-on-surface-variant">Find your new best friend.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-label-md text-on-surface-variant">Sort:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-outline-variant bg-white px-4 py-2 text-sm"
          >
            <option value="newest">Newest</option>
            <option value="fee-asc">Fee: Low to High</option>
            <option value="fee-desc">Fee: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-gutter lg:flex-row">
        <aside className="w-full lg:w-64">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-3 font-bold">Search</h3>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name..."
              className="dashboard-input mb-4 w-full"
            />
            <h3 className="mb-3 font-bold">Species</h3>
            <div className="space-y-2">
              {SPECIES_OPTIONS.map((s) => (
                <label key={s} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={species.includes(s)}
                    onChange={() => toggleSpecies(s)}
                    className="rounded text-primary"
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={() => { setSearch(""); setSpecies([]); }}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        </aside>

        <div className="flex-1">
          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : pets.length === 0 ? (
            <p className="text-center text-on-surface-variant">No pets found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 xl:grid-cols-3">
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
                  onAdopt={() => handleAdoptClick(pet._id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
