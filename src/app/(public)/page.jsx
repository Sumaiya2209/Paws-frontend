import FeaturedPets from "@/components/home/featuredPets";
import Hero from "@/components/home/Hero";
import PetCareTips from "@/components/home/PetCareTips";
import SuccessStories from "@/components/home/SuccessStories";
import WhyAdopt from "@/components/home/WhyAdopt";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPets />
      <WhyAdopt />
      <SuccessStories />
      <PetCareTips />
    </main>
  );
}
