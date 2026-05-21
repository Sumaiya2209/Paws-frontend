"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import MaterialIcon from "@/components/home/MaterialIcon";
import {
  approveRequest,
  deletePet,
  getMyListings,
  getPetRequests,
  rejectRequest,
  updatePet,
} from "@/lib/api";

function RequestsModal({ pet, onClose, onUpdate }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetRequests(pet._id)
      .then(setRequests)
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [pet._id]);

  const handleApprove = async (id) => {
    try {
      await approveRequest(id);
      toast.success("Request approved");
      onUpdate();
      onClose();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectRequest(id);
      toast.success("Request rejected");
      const updated = await getPetRequests(pet._id);
      setRequests(updated);
      onUpdate();
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline-lg text-headline-lg">Requests for {pet.name}</h3>
          <button type="button" onClick={onClose} aria-label="Close">
            <MaterialIcon name="close" />
          </button>
        </div>
        {loading ? (
          <p className="text-on-surface-variant">Loading...</p>
        ) : requests.length === 0 ? (
          <p className="text-on-surface-variant">No requests yet.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((r) => (
              <li key={r._id} className="rounded-xl border border-outline-variant p-4">
                <p className="font-label-md font-bold">{r.userName}</p>
                <p className="text-sm text-on-surface-variant">{r.userEmail}</p>
                <p className="text-sm">Pickup: {r.pickupDate}</p>
                <p className="mt-1 text-sm capitalize">Status: {r.status}</p>
                {r.status === "pending" && (
                  <div className="mt-3 flex gap-2">
                    <button type="button" onClick={() => handleApprove(r._id)} className="rounded-lg bg-primary px-3 py-1.5 text-sm text-white">
                      Approve
                    </button>
                    <button type="button" onClick={() => handleReject(r._id)} className="rounded-lg border border-outline-variant px-3 py-1.5 text-sm">
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function EditPetModal({ pet, onClose, onUpdate }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await updatePet(pet._id, {
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
      toast.success("Pet updated");
      onUpdate();
      onClose();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6">
        <h3 className="mb-4 font-headline-lg">Edit {pet.name}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "breed", "age", "imageUrl", "healthStatus", "vaccinationStatus", "location", "description"].map((field) => (
            <input key={field} name={field} defaultValue={pet[field]} className="dashboard-input w-full" placeholder={field} />
          ))}
          <input name="adoptionFee" type="number" defaultValue={pet.adoptionFee} className="dashboard-input w-full" />
          <select name="species" defaultValue={pet.species} className="dashboard-input w-full">
            <option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Other</option>
          </select>
          <select name="gender" defaultValue={pet.gender} className="dashboard-input w-full">
            <option>Male</option><option>Female</option>
          </select>
          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="btn-gradient rounded-full px-6 py-2 text-white">Save</button>
            <button type="button" onClick={onClose} className="rounded-full border px-6 py-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function MyListings() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requestsPet, setRequestsPet] = useState(null);
  const [editPet, setEditPet] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    getMyListings()
      .then(setPets)
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const stats = {
    total: pets.length,
    available: pets.filter((p) => p.status === "available").length,
    adopted: pets.filter((p) => p.status === "adopted").length,
  };

  const confirmDelete = async () => {
    try {
      await deletePet(deleteId);
      toast.success("Pet deleted");
      setDeleteId(null);
      load();
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-2 font-headline-xl text-headline-xl">My Listings</h2>
      <div className="mb-6 flex gap-4">
        <div className="glass-card rounded-xl px-4 py-3"><span className="text-sm text-on-surface-variant">Total</span><p className="text-xl font-bold">{stats.total}</p></div>
        <div className="glass-card rounded-xl px-4 py-3"><span className="text-sm text-on-surface-variant">Available</span><p className="text-xl font-bold">{stats.available}</p></div>
        <div className="glass-card rounded-xl px-4 py-3"><span className="text-sm text-on-surface-variant">Adopted</span><p className="text-xl font-bold">{stats.adopted}</p></div>
      </div>

      {pets.length === 0 ? (
        <p className="text-on-surface-variant">No listings yet. <Link href="/dashboard/pets/new" className="text-primary">Add a pet</Link></p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <div key={pet._id} className="glass-card overflow-hidden rounded-2xl">
              <div className="relative h-48">
                <Image src={pet.imageUrl} alt={pet.name} fill className="object-cover" />
                <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs capitalize">{pet.status}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{pet.name}</h3>
                <p className="text-primary font-bold">${pet.adoptionFee}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setRequestsPet(pet)} className="rounded-lg border px-2 py-1 text-xs">Requests</button>
                  <button type="button" onClick={() => setEditPet(pet)} className="rounded-lg border px-2 py-1 text-xs">Edit</button>
                  <Link href={`/all-pets/${pet._id}`} className="rounded-lg border px-2 py-1 text-xs">View</Link>
                  <button type="button" onClick={() => setDeleteId(pet._id)} className="rounded-lg border border-error/30 px-2 py-1 text-xs text-error">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {requestsPet && <RequestsModal pet={requestsPet} onClose={() => setRequestsPet(null)} onUpdate={load} />}
      {editPet && <EditPetModal pet={editPet} onClose={() => setEditPet(null)} onUpdate={load} />}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="rounded-2xl bg-white p-6">
            <p className="mb-4">Delete this pet listing?</p>
            <div className="flex gap-2">
              <button type="button" onClick={confirmDelete} className="rounded-lg bg-error px-4 py-2 text-white">Delete</button>
              <button type="button" onClick={() => setDeleteId(null)} className="rounded-lg border px-4 py-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
