"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cancelRequest, getMyRequests } from "@/lib/api";

const statusColors = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800",
};

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    getMyRequests()
      .then(setRequests)
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleCancel = async (id) => {
    try {
      await cancelRequest(id);
      toast.success("Request cancelled");
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
      <h2 className="mb-2 font-headline-xl text-headline-xl">My Requests</h2>
      <p className="mb-6 text-on-surface-variant">Track your adoption requests.</p>

      {requests.length === 0 ? (
        <p className="text-on-surface-variant">
          No requests yet. <Link href="/all-pets" className="text-primary">Browse pets</Link>
        </p>
      ) : (
        <div className="glass-card overflow-hidden rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-surface-container-low/50 text-left text-sm uppercase text-on-surface-variant">
                <th className="p-4">Pet Name</th>
                <th className="p-4">Request Date</th>
                <th className="p-4">Pickup Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r._id} className="border-b">
                  <td className="p-4 font-medium">{r.petName}</td>
                  <td className="p-4 text-sm">{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-sm">{r.pickupDate}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs capitalize ${statusColors[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link href={`/all-pets/${r.petId}`} className="mr-2 text-sm text-primary hover:underline">
                      View
                    </Link>
                    {r.status === "pending" && (
                      <button type="button" onClick={() => handleCancel(r._id)} className="text-sm text-error hover:underline">
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
