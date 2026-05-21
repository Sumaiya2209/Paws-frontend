"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import { authClient } from "@/lib/auth-client";
import { createPet } from "@/lib/api";

const inputClass = "dashboard-input w-full";

export default function AddPetForm() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await createPet({
        name: fd.get("name"),
        species: fd.get("species"),
        breed: fd.get("breed"),
        age: fd.get("age"),
        gender: fd.get("gender"),
        imageUrl: fd.get("imageUrl"),
        healthStatus: fd.get("healthStatus"),
        vaccinationStatus: fd.get("vaccinationStatus"),
        location: fd.get("location"),
        adoptionFee: Number(fd.get("adoptionFee")),
        description: fd.get("description"),
      });
      toast.success("Pet listed successfully!");
      router.push("/dashboard/pets");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/dashboard/pets" className="mb-4 inline-flex items-center gap-2 text-on-surface-variant hover:text-primary">
        <MaterialIcon name="arrow_back" /> Back to My Listings
      </Link>
      <h2 className="mb-2 font-headline-xl text-headline-xl text-on-surface">Add Pet</h2>
      <p className="mb-6 text-on-surface-variant">List a pet available for adoption.</p>

      <form onSubmit={handleSubmit} className="glass-card space-y-4 rounded-2xl p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="font-label-md text-on-surface-variant">Pet Name *</label>
            <input name="name" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Species *</label>
            <select name="species" required className={inputClass}>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Rabbit</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Breed *</label>
            <input name="breed" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Age *</label>
            <input name="age" required placeholder="e.g. 2 years" className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Gender *</label>
            <select name="gender" required className={inputClass}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Image URL *</label>
            <input name="imageUrl" type="url" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Health Status *</label>
            <input name="healthStatus" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Vaccination Status *</label>
            <input name="vaccinationStatus" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Location *</label>
            <input name="location" required className={inputClass} />
          </div>
          <div>
            <label className="font-label-md text-on-surface-variant">Adoption Fee ($) *</label>
            <input name="adoptionFee" type="number" min="0" required className={inputClass} />
          </div>
        </div>
        <div>
          <label className="font-label-md text-on-surface-variant">Description *</label>
          <textarea name="description" required rows={4} className={`${inputClass} resize-none`} />
        </div>
        <div>
          <label className="font-label-md text-on-surface-variant">Owner Email</label>
          <input value={session?.user?.email || ""} readOnly className={`${inputClass} bg-surface-container-low`} />
        </div>
        <button type="submit" disabled={loading} className="btn-gradient rounded-full px-8 py-3 font-label-md text-white disabled:opacity-70">
          {loading ? "Saving..." : "Add Pet"}
        </button>
      </form>
    </div>
  );
}
