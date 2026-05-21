"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import { authClient } from "@/lib/auth-client";
import { createRequest, getMyRequests } from "@/lib/api";

const statusStyles = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800",
};

export default function PetDetailContent({ pet }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [submitting, setSubmitting] = useState(false);
  const [existingRequest, setExistingRequest] = useState(null);
  const [checkingRequest, setCheckingRequest] = useState(false);
  const isOwner = session?.user?.email === pet.ownerEmail;
  const adopted = pet.status === "adopted";
  const hasActiveRequest =
    existingRequest &&
    (existingRequest.status === "pending" || existingRequest.status === "approved");

  useEffect(() => {
    if (!session?.user || !pet._id) {
      setExistingRequest(null);
      return;
    }
    setCheckingRequest(true);
    getMyRequests()
      .then((requests) => {
        const found = requests.find(
          (r) =>
            String(r.petId) === String(pet._id) &&
            (r.status === "pending" || r.status === "approved")
        );
        setExistingRequest(found || null);
      })
      .catch(() => setExistingRequest(null))
      .finally(() => setCheckingRequest(false));
  }, [session?.user, pet._id]);

  const handleAdopt = async (e) => {
    e.preventDefault();
    if (!session?.user) {
      router.push(`/login?redirect=/all-pets/${pet._id}`);
      return;
    }
    if (isOwner) {
      toast.error("You cannot adopt your own pet");
      return;
    }
    if (adopted) {
      toast.error("This pet is already adopted");
      return;
    }

    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await createRequest({
        petId: pet._id,
        pickupDate: fd.get("pickupDate"),
        message: fd.get("message"),
      });
      toast.success("Adoption request submitted!");
      setExistingRequest({
        petId: pet._id,
        petName: pet.name,
        pickupDate: fd.get("pickupDate"),
        message: fd.get("message"),
        status: "pending",
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-32 pb-stack-lg md:px-margin-desktop">
      <div className="flex flex-col gap-gutter lg:flex-row">
        <div className="flex-1 space-y-stack-lg">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={pet.imageUrl} alt={pet.name} fill className="object-cover" priority />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-tertiary-container/10 px-4 py-2 text-sm capitalize">{pet.species}</span>
            <span className="rounded-full bg-surface-container-high px-4 py-2 text-sm">{pet.location}</span>
            {adopted && (
              <span className="rounded-full bg-error-container/20 px-4 py-2 text-sm text-error">Adopted</span>
            )}
          </div>
          <article className="space-y-4">
            <h1 className="font-display-lg text-headline-xl text-primary">{pet.name}</h1>
            <p className="text-body-lg text-on-surface-variant">{pet.description}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl bg-surface-container p-3 text-center">
                <p className="text-xs text-on-surface-variant">Breed</p>
                <p className="font-medium">{pet.breed}</p>
              </div>
              <div className="rounded-xl bg-surface-container p-3 text-center">
                <p className="text-xs text-on-surface-variant">Age</p>
                <p className="font-medium">{pet.age}</p>
              </div>
              <div className="rounded-xl bg-surface-container p-3 text-center">
                <p className="text-xs text-on-surface-variant">Gender</p>
                <p className="font-medium">{pet.gender}</p>
              </div>
              <div className="rounded-xl bg-surface-container p-3 text-center">
                <p className="text-xs text-on-surface-variant">Fee</p>
                <p className="font-medium">${pet.adoptionFee}</p>
              </div>
            </div>
            <section className="rounded-2xl border bg-white p-6">
              <h3 className="mb-3 font-headline-lg">Health & Vaccinations</h3>
              <p><strong>Health:</strong> {pet.healthStatus}</p>
              <p><strong>Vaccination:</strong> {pet.vaccinationStatus}</p>
            </section>
          </article>
        </div>

        <aside className="lg:w-[380px]">
          <div className="glass-card sticky top-28 rounded-3xl p-6">
            <h2 className="mb-4 font-headline-lg">Adoption Request</h2>
            {adopted ? (
              <p className="text-on-surface-variant">This pet has been adopted.</p>
            ) : isOwner ? (
              <p className="text-on-surface-variant">This is your listing.</p>
            ) : checkingRequest ? (
              <div className="flex justify-center py-8">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            ) : hasActiveRequest ? (
              <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <MaterialIcon name="check_circle" />
                  <p className="font-label-md font-bold">Request Already Submitted</p>
                </div>
                <p className="text-sm text-on-surface-variant">
                  You have already sent an adoption request for {pet.name}.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-on-surface-variant">Pickup date: </span>
                    <span className="font-medium">{existingRequest.pickupDate}</span>
                  </p>
                  {existingRequest.message && (
                    <p>
                      <span className="text-on-surface-variant">Message: </span>
                      <span className="font-medium">{existingRequest.message}</span>
                    </p>
                  )}
                  <p>
                    <span className="text-on-surface-variant">Submitted: </span>
                    <span className="font-medium">
                      {new Date(existingRequest.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${statusStyles[existingRequest.status]}`}
                >
                  {existingRequest.status}
                </span>
                <Link
                  href="/dashboard/requests"
                  className="mt-2 block text-center text-sm font-medium text-primary hover:underline"
                >
                  View in My Requests
                </Link>
              </div>
            ) : (
              <form onSubmit={handleAdopt} className="space-y-4">
                <div>
                  <label className="text-sm text-on-surface-variant">Pet Name</label>
                  <input value={pet.name} readOnly className="dashboard-input mt-1 w-full bg-surface-container-low" />
                </div>
                <div>
                  <label className="text-sm text-on-surface-variant">Your Name</label>
                  <input value={session?.user?.name || ""} readOnly className="dashboard-input mt-1 w-full bg-surface-container-low" />
                </div>
                <div>
                  <label className="text-sm text-on-surface-variant">Your Email</label>
                  <input value={session?.user?.email || ""} readOnly className="dashboard-input mt-1 w-full bg-surface-container-low" />
                </div>
                <div>
                  <label className="text-sm text-on-surface-variant">Pickup Date *</label>
                  <input name="pickupDate" type="date" required className="dashboard-input mt-1 w-full" />
                </div>
                <div>
                  <label className="text-sm text-on-surface-variant">Message</label>
                  <textarea name="message" rows={3} className="dashboard-input mt-1 w-full resize-none" placeholder="Tell the owner about your home..." />
                </div>
                <button
                  type="submit"
                  disabled={submitting || !session?.user}
                  className="w-full rounded-2xl bg-gradient-to-b from-primary-container to-primary py-3 font-label-md text-white disabled:opacity-60"
                >
                  {!session?.user ? "Login to Adopt" : submitting ? "Submitting..." : "Adopt"}
                </button>
              </form>
            )}
            <p className="mt-4 text-center text-sm text-on-surface-variant">
              Owner: {pet.ownerEmail}
            </p>
          </div>
        </aside>
      </div>
      <Link href="/all-pets" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline">
        <MaterialIcon name="arrow_back" /> Back to all pets
      </Link>
    </main>
  );
}
