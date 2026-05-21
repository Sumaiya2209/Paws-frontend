"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PetDetailContent from "@/components/pet-detail/PetDetailContent";
import { getPet } from "@/lib/api";

export default function PetDetailPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    getPet(id)
      .then(setPet)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center pt-28">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error || !pet) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center pt-28 text-center">
        <h1 className="text-2xl font-bold">Pet not found</h1>
        <a href="/all-pets" className="mt-4 text-primary hover:underline">Back to All Pets</a>
      </div>
    );
  }

  return <PetDetailContent pet={pet} />;
}
