"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import MaterialIcon from "@/components/home/MaterialIcon";

const STEPS = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Media" },
  { id: 3, label: "Story" },
];

const personalityOptions = [
  "Gentle Soul",
  "Child-Friendly",
  "Cat-Approved",
  "Dog-Friendly",
  "Moderate Energy",
  "High Energy",
  "Leash Trained",
  "House Trained",
];

const healthOptions = [
  { key: "vaccinated", label: "Vaccinated" },
  { key: "neutered", label: "Neutered/Spayed" },
  { key: "microchipped", label: "Microchipped" },
  { key: "vetInspected", label: "Vet Inspected" },
  { key: "goodWithKids", label: "Good with Kids" },
  { key: "goodWithCats", label: "Good with Cats" },
  { key: "goodWithDogs", label: "Good with Dogs" },
];

const initialForm = {
  name: "",
  species: "Dog",
  breed: "",
  ageRange: "Adult",
  sex: "Female",
  size: "Medium",
  weight: "",
  coat: "Medium",
  color: "",
  adoptionFee: "",
  listingStatus: "available",
  story: "",
  location: "",
  city: "",
  state: "",
  personality: [],
  health: {
    vaccinated: false,
    neutered: false,
    microchipped: false,
    vetInspected: false,
    goodWithKids: false,
    goodWithCats: false,
    goodWithDogs: false,
  },
};

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-md text-on-surface-variant">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function AddNewPetForm() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [step, setStep] = useState(1);
  const [publishing, setPublishing] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([
    {
      id: "sample",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX2rQ85S2dRTl_YVFgpmg-DYtGCJqF9T-EYxlfwgSNzi_UAPaBzl-kLAoT0wzcvqQIuI-K7QpUjoPzDEOAWuMbOittwy9R91aG2FacXOBLcQdu34iaSnECUKeOwOYW1VNVdsUqbYQkYY7FDYsV5EYFU9PNvd3j1LEJrJv3UcTzdteAfcnb1DazP42gKtPiLfByi0M8MrfF2RI_VBp8fdzljux5ak_giAAwDx9VkS6quPgLg7BGlMouY_JItbRa71mSGQFTSYLSXRhl",
      file: null,
    },
  ]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const togglePersonality = (trait) => {
    setForm((prev) => ({
      ...prev,
      personality: prev.personality.includes(trait)
        ? prev.personality.filter((t) => t !== trait)
        : [...prev.personality, trait],
    }));
  };

  const toggleHealth = (key) => {
    setForm((prev) => ({
      ...prev,
      health: { ...prev.health, [key]: !prev.health[key] },
    }));
  };

  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file) => ({
      id: `${Date.now()}-${file.name}`,
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImages].slice(0, 8));
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id);
      if (img?.url.startsWith("blob:")) URL.revokeObjectURL(img.url);
      return prev.filter((i) => i.id !== id);
    });
  };

  const progressWidth =
    step === 1 ? "0%" : step === 2 ? "50%" : "100%";

  const goToStep = (target) => {
    if (target >= 1 && target <= 3) setStep(target);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else handlePublish();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePublish = async () => {
    setPublishing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setPublishing(false);
    router.push("/dashboard/pets");
  };

  const inputClass = "dashboard-input";

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col">
      <header className="mb-stack-lg text-center md:text-left">
        <Link
          href="/dashboard/pets"
          className="mb-4 inline-flex items-center gap-2 font-label-md text-on-surface-variant transition-colors hover:text-primary"
        >
          <MaterialIcon name="arrow_back" />
          Back to listings
        </Link>
        <h2 className="mb-2 font-headline-xl text-headline-xl text-on-surface">
          Add New Pet
        </h2>
        <p className="font-body-md text-on-surface-variant">
          Fill in the details below to start the adoption journey for a new
          companion.
        </p>
      </header>

      <div className="relative mb-stack-lg px-4">
        <div className="relative z-10 flex items-center justify-between">
          {STEPS.map(({ id, label }) => {
            const isActive = step === id;
            const isComplete = step > id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => goToStep(id)}
                className="group flex cursor-pointer flex-col items-center gap-2"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "active-dot"
                      : isComplete
                        ? "bg-tertiary-container"
                        : "bg-surface-container-high"
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      isActive || isComplete
                        ? "text-white"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {id}
                  </span>
                </div>
                <span
                  className={`font-label-sm ${
                    isActive
                      ? "text-primary"
                      : isComplete
                        ? "text-tertiary"
                        : "text-on-surface-variant"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="absolute top-4 right-10 left-10 -z-0 h-0.5 bg-outline-variant">
          <div
            className="h-full bg-primary-container transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <div className="glass-card relative overflow-hidden rounded-2xl p-stack-md shadow-[0px_4px_20px_rgba(0,0,0,0.03)] md:p-10">
        {step === 1 && (
          <div className="step-transition">
            <h3 className="mb-stack-md font-headline-lg text-headline-lg text-on-surface">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
              <Field label="Pet Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="e.g. Luna"
                  className={inputClass}
                />
              </Field>
              <Field label="Species" required>
                <select
                  value={form.species}
                  onChange={(e) => update("species", e.target.value)}
                  className={inputClass}
                >
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Rabbit</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Breed" required>
                <input
                  type="text"
                  required
                  value={form.breed}
                  onChange={(e) => update("breed", e.target.value)}
                  placeholder="e.g. Golden Retriever"
                  className={inputClass}
                />
              </Field>
              <Field label="Age Range" required>
                <select
                  value={form.ageRange}
                  onChange={(e) => update("ageRange", e.target.value)}
                  className={inputClass}
                >
                  <option>Puppy/Kitten</option>
                  <option>Young</option>
                  <option>Adult</option>
                  <option>Senior</option>
                </select>
              </Field>
              <Field label="Sex" required>
                <select
                  value={form.sex}
                  onChange={(e) => update("sex", e.target.value)}
                  className={inputClass}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Field>
              <Field label="Size" required>
                <select
                  value={form.size}
                  onChange={(e) => update("size", e.target.value)}
                  className={inputClass}
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </Field>
              <Field label="Weight">
                <input
                  type="text"
                  value={form.weight}
                  onChange={(e) => update("weight", e.target.value)}
                  placeholder="e.g. 65 lbs"
                  className={inputClass}
                />
              </Field>
              <Field label="Coat Length">
                <select
                  value={form.coat}
                  onChange={(e) => update("coat", e.target.value)}
                  className={inputClass}
                >
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </select>
              </Field>
              <Field label="Color / Markings">
                <input
                  type="text"
                  value={form.color}
                  onChange={(e) => update("color", e.target.value)}
                  placeholder="e.g. Golden, white chest"
                  className={inputClass}
                />
              </Field>
              <Field label="Adoption Fee">
                <input
                  type="text"
                  value={form.adoptionFee}
                  onChange={(e) => update("adoptionFee", e.target.value)}
                  placeholder="e.g. $250.00"
                  className={inputClass}
                />
              </Field>
              <Field label="Listing Status" required>
                <select
                  value={form.listingStatus}
                  onChange={(e) => update("listingStatus", e.target.value)}
                  className={inputClass}
                >
                  <option value="available">Available</option>
                  <option value="pending">Pending Review</option>
                  <option value="draft">Draft</option>
                </select>
              </Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-transition">
            <h3 className="mb-stack-md font-headline-lg text-headline-lg text-on-surface">
              Media Gallery
            </h3>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.length) handleFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <div
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) =>
                e.key === "Enter" && fileInputRef.current?.click()
              }
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files?.length)
                  handleFiles(e.dataTransfer.files);
              }}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-outline-variant p-stack-lg text-center transition-colors hover:bg-surface-container-low"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10 transition-transform group-hover:scale-110">
                <MaterialIcon
                  name="cloud_upload"
                  className="text-3xl text-primary"
                />
              </div>
              <p className="mb-2 font-headline-lg text-headline-lg text-on-surface">
                Drag and drop images
              </p>
              <p className="max-w-sm font-body-md text-on-surface-variant">
                Upload high-quality photos to help potential families fall in
                love. (JPG, PNG, up to 10MB each, max 8 photos)
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="mt-6 rounded-full border border-primary bg-surface px-6 py-3 font-label-md text-primary transition-all hover:bg-primary hover:text-white"
              >
                Browse Files
              </button>
            </div>

            <div className="mt-stack-md grid grid-cols-2 gap-4 sm:grid-cols-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container-high"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt="Pet upload preview"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => removeImage(img.id)}
                      className="text-white"
                      aria-label="Remove image"
                    >
                      <MaterialIcon name="delete" />
                    </button>
                  </div>
                </div>
              ))}
              {images.length < 8 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low transition-colors hover:bg-surface-container-high"
                >
                  <MaterialIcon name="add" className="text-outline" />
                </button>
              )}
            </div>
            <p className="mt-3 text-label-sm text-on-surface-variant">
              {images.length} of 8 photos uploaded. First photo will be the
              cover image.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="step-transition">
            <h3 className="mb-stack-md font-headline-lg text-headline-lg text-on-surface">
              Pet Story & Details
            </h3>
            <div className="flex flex-col gap-stack-md">
              <Field label="The Story" required>
                <textarea
                  required
                  rows={5}
                  value={form.story}
                  onChange={(e) => update("story", e.target.value)}
                  placeholder="Tell us about their personality, history, and what kind of home they need..."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <div className="flex flex-col gap-3">
                <label className="font-label-md text-on-surface-variant">
                  Personality Traits
                </label>
                <div className="flex flex-wrap gap-2">
                  {personalityOptions.map((trait) => (
                    <button
                      key={trait}
                      type="button"
                      onClick={() => togglePersonality(trait)}
                      className={`rounded-xl border px-4 py-2 font-label-md transition-colors ${
                        form.personality.includes(trait)
                          ? "border-primary bg-primary-container/20 text-primary"
                          : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-label-md text-on-surface-variant">
                  Health & Compatibility
                </label>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {healthOptions.map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex cursor-pointer items-center gap-3 rounded-xl bg-surface-container-low p-4 transition-colors hover:bg-surface-container-high"
                    >
                      <input
                        type="checkbox"
                        checked={form.health[key]}
                        onChange={() => toggleHealth(key)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="font-body-md text-on-surface">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
                <Field label="City" required>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    placeholder="e.g. San Francisco"
                    className={inputClass}
                  />
                </Field>
                <Field label="State" required>
                  <input
                    type="text"
                    required
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                    placeholder="e.g. CA"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Shelter / Current Location" required>
                <div className="relative">
                  <MaterialIcon
                    name="location_on"
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-on-surface-variant"
                  />
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="Enter shelter or current location"
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </Field>
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between border-t border-outline-variant pt-6">
          <button
            type="button"
            onClick={prevStep}
            className={`flex items-center gap-2 px-6 py-3 font-label-md text-on-surface-variant transition-all hover:text-primary ${
              step === 1 ? "invisible" : ""
            }`}
          >
            <MaterialIcon name="arrow_back" />
            Back
          </button>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-full px-6 py-3 font-label-md text-on-surface-variant transition-all hover:bg-surface-container-high active:scale-95"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={nextStep}
              disabled={publishing}
              className="btn-gradient rounded-full px-8 py-3 font-label-md text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 disabled:opacity-80"
            >
              {publishing
                ? "Publishing..."
                : step === 3
                  ? "Publish Pet"
                  : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
