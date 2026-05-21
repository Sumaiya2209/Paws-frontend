"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import MaterialIcon from "@/components/home/MaterialIcon";
import { petListings, statusConfig } from "@/data/listings";

const filters = [
  { id: "all", label: "All" },
  { id: "available", label: "Available" },
  { id: "adopted", label: "Adopted" },
];

export default function MyPetListings() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredListings = useMemo(() => {
    return petListings.filter((pet) => {
      const matchesFilter =
        activeFilter === "all" || pet.status === activeFilter;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <>
      <header className="mb-stack-lg flex flex-col items-start justify-between gap-stack-md md:flex-row md:items-center">
        <div>
          <h2 className="font-display-lg text-headline-xl font-bold text-on-surface">
            My Pet Listings
          </h2>
          <p className="mt-2 font-body-md text-on-surface-variant">
            Manage your active, pending, and adopted pet profiles.
          </p>
        </div>
        <Link
          href="/dashboard/pets/new"
          className="group flex items-center rounded-full bg-gradient-to-b from-primary-container to-primary px-stack-md py-3 font-label-md text-white shadow-[0px_4px_20px_rgba(165,59,34,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_6px_25px_rgba(165,59,34,0.3)]"
        >
          <MaterialIcon name="add_circle" className="mr-2" />
          Post New Pet
        </Link>
      </header>

      <div className="mb-stack-md flex flex-col items-center justify-between gap-stack-sm md:flex-row">
        <div className="flex rounded-2xl bg-surface-container p-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-xl px-6 py-2 font-label-md transition-all ${
                activeFilter === filter.id
                  ? "bg-white text-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <MaterialIcon
            name="search"
            className="absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-on-surface-variant"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your pets..."
            className="w-full rounded-xl border-none bg-surface-container-low py-2 pr-4 pl-10 font-body-md placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="glass-card overflow-hidden rounded-[32px] border border-outline-variant/30 shadow-[0px_4px_20px_rgba(0,0,0,0.03)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-lowest/50">
                {[
                  "Pet Profile",
                  "Status",
                  "Views",
                  "Inquiries",
                  "Actions",
                ].map((col) => (
                  <th
                    key={col}
                    className={`px-stack-md py-stack-sm text-left font-label-sm tracking-wider text-on-surface-variant uppercase ${
                      col === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {filteredListings.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-stack-md py-stack-lg text-center text-on-surface-variant"
                  >
                    No listings match your search.
                  </td>
                </tr>
              ) : (
                filteredListings.map((pet) => {
                  const status = statusConfig[pet.status];
                  return (
                    <tr
                      key={pet.id}
                      className="group transition-colors duration-200 hover:bg-primary-container/5"
                    >
                      <td className="px-stack-md py-stack-md">
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-14 w-14 overflow-hidden rounded-2xl ring-2 ring-white shadow-md ${pet.grayscale ? "grayscale" : ""}`}
                          >
                            <Image
                              src={pet.image}
                              alt={pet.name}
                              width={56}
                              height={56}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p
                              className={`font-headline-lg text-headline-lg leading-tight font-bold ${pet.muted ? "text-on-surface-variant" : "text-on-surface"}`}
                            >
                              {pet.name}
                            </p>
                            <p className="font-label-sm text-on-surface-variant">
                              {pet.breed} • {pet.age}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-stack-md py-stack-md">
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 font-label-sm ${status.className}`}
                        >
                          <span
                            className={`mr-2 h-2 w-2 rounded-full ${status.dotClass}`}
                          />
                          {status.label}
                        </span>
                      </td>
                      <td
                        className={`px-stack-md py-stack-md font-body-md ${pet.muted ? "text-on-surface-variant" : "text-on-surface"}`}
                      >
                        {pet.views}
                      </td>
                      <td
                        className={`px-stack-md py-stack-md font-body-md ${pet.muted ? "text-on-surface-variant" : "text-on-surface"}`}
                      >
                        {pet.inquiries}
                      </td>
                      <td className="px-stack-md py-stack-md text-right">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/all-pets/${pet.id}`}
                            className="rounded-lg p-2 text-on-surface-variant transition-all hover:bg-primary-container/20 hover:text-primary"
                            title="View Listing"
                          >
                            <MaterialIcon name="visibility" />
                          </Link>
                          <button
                            type="button"
                            className="rounded-lg p-2 text-on-surface-variant transition-all hover:bg-primary-container/20 hover:text-primary"
                            title="Edit"
                          >
                            <MaterialIcon name="edit" />
                          </button>
                          <button
                            type="button"
                            className="rounded-lg p-2 text-on-surface-variant transition-all hover:bg-error-container/20 hover:text-error"
                            title="Archive"
                          >
                            <MaterialIcon name="archive" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-outline-variant/20 bg-surface-container-lowest/30 p-stack-md">
          <p className="font-body-md text-on-surface-variant">
            Showing{" "}
            <span className="font-bold text-on-surface">
              {filteredListings.length}
            </span>{" "}
            of <span className="font-bold text-on-surface">18</span> listings
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-xl border border-outline-variant/30 p-2 text-on-surface-variant transition-all hover:bg-surface-container"
              aria-label="Previous page"
            >
              <MaterialIcon name="chevron_left" />
            </button>
            <button
              type="button"
              className="rounded-xl border border-outline-variant/30 p-2 text-on-surface-variant transition-all hover:bg-surface-container"
              aria-label="Next page"
            >
              <MaterialIcon name="chevron_right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
