import Image from "next/image";
import MaterialIcon from "./MaterialIcon";

export default function SuccessStories() {
  return (
    <section className="overflow-hidden py-stack-lg">
      <div className="mx-auto mb-stack-lg max-w-container-max px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display-lg text-headline-xl text-on-surface">
          Tails of Transformation
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Seeing the difference a forever home makes.
        </p>
      </div>

      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
          <div className="relative grid h-96 grid-cols-2 lg:h-auto">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArOgpCI4MSUHXBDOAOB9NAkSJ73py1hwDL8wfhl-9TEq211jWmYQIPjyXEx_--oIbXg5zXqoZsVUysjZltL8So2Z09DbnKtEqanhq3I75C-UDRviD2SdszPHgVD-wAXF_k2s-rrUBfBzOw86ASFGI5ok-6UAoL46t8rbQPmHprVmGps1y66GsppqypU-EWNzqSzLcTctrXcTJOxQHQUh2W8VcIS6_aGtxEgeg_zRrgtxxaK7CXqBmfyHAYlTD5l8mbH8StGbQ63-dF"
                alt="Before: a thin, shy-looking shelter dog behind a metal fence"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-label-sm text-white backdrop-blur-md">
                Before
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxr4LvzEbRJpBem7iJpe2qKOsWvQVqVQX9tz4W5mi6uph_AsBFWLMN9MrFOHQHoIijXuqn11TQzuY2vtspBKLAgW-eyGhp63a3jkyDrzopqVjC87HFX8qEP6dr9ZsQg_M4cm-UJFpfW38KDcfxk6BAYRi7dxAEFlbtn3LCW--2bQORl0fxSSJk-RgmkcTqcprB-ZmQhisDqLj33XtweO1SRdumDOBdkgSK7AoY0F6YV83yUoP3IeWbwX_cwzn2CXVe7roD7P9lWsDW"
                alt="After: the same dog healthy and running on a green lawn"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 rounded-full bg-primary-container px-3 py-1 text-label-sm text-white">
                After
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-stack-lg lg:p-16">
            <div className="mb-stack-sm flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <MaterialIcon
                  key={i}
                  name="star"
                  filled
                  className="text-secondary"
                />
              ))}
            </div>
            <blockquote className="mb-stack-md text-headline-lg leading-relaxed text-on-surface italic">
              &quot;Oliver went from being a frightened stray to the heart of our
              home. Paws & Home made the process so transparent and supportive. We
              can&apos;t imagine life without him.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1MtvJ2Tdz42n288o3rRyaTc0zGRZAVi2Rp2pC4yDGbBoCBlhGPOKYVjctkeAb4GNSiUTWHPsjoUWnWcKRwxU3NusEvGtNPTFHYDZEKtX3Aj0MZvAdU37rnCs6jfS2naGU9mN9WgCzeWQS0V2JAhEEJe9NM70_iw16hm0X0PhN6t_nWs1mTSXXRqj3z7qq-EQ-Gf8ff7JzEnCVx1gKPJm6L4wsUGYURQGhbfcvnIfHcZMR6hNx7d-fCheJii0KOoH1dfLTGK-EWTAT"
                alt="Mark Richardson, pet adopter"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-on-surface">Mark Richardson</p>
                <p className="text-label-sm text-on-surface-variant">
                  Adopted Oliver in 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
