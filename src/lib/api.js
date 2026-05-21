const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

async function getToken() {
  try {
    const base =
      process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    const res = await fetch(`${base}/api/auth/token`, { credentials: "include" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.token || null;
  } catch {
    return null;
  }
}

export async function apiFetch(path, options = {}) {
  const token = await getToken();
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

export function getPets(params = {}) {
  const qs = new URLSearchParams();
  if (params.name) qs.set("name", params.name);
  if (params.species?.length) qs.set("species", params.species.join(","));
  if (params.sort) qs.set("sort", params.sort);
  const query = qs.toString();
  return apiFetch(`/pets${query ? `?${query}` : ""}`);
}

export function getFeaturedPets() {
  return apiFetch("/pets/featured");
}

export function getPet(id) {
  return apiFetch(`/pets/${id}`);
}

export function getMyListings() {
  return apiFetch("/pets/owner/listings");
}

export function createPet(data) {
  return apiFetch("/pets", { method: "POST", body: JSON.stringify(data) });
}

export function updatePet(id, data) {
  return apiFetch(`/pets/${id}`, { method: "PATCH", body: JSON.stringify(data) });
}

export function deletePet(id) {
  return apiFetch(`/pets/${id}`, { method: "DELETE" });
}

export function createRequest(data) {
  return apiFetch("/requests", { method: "POST", body: JSON.stringify(data) });
}

export function getMyRequests() {
  return apiFetch("/requests/me");
}

export function getPetRequests(petId) {
  return apiFetch(`/requests/pet/${petId}`);
}

export function approveRequest(id) {
  return apiFetch(`/requests/${id}/approve`, { method: "PATCH" });
}

export function rejectRequest(id) {
  return apiFetch(`/requests/${id}/reject`, { method: "PATCH" });
}

export function cancelRequest(id) {
  return apiFetch(`/requests/${id}`, { method: "DELETE" });
}
