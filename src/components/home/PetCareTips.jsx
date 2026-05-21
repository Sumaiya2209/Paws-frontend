import MaterialIcon from "./MaterialIcon";

const tips = [
  { icon: "restaurant", title: "Nutrition", text: "Feed age-appropriate food and fresh water daily." },
  { icon: "vaccines", title: "Vet Visits", text: "Keep vaccinations and checkups up to date." },
  { icon: "directions_walk", title: "Exercise", text: "Daily walks and play keep pets happy and healthy." },
  { icon: "favorite", title: "Love", text: "Patience and routine help pets settle into a new home." },
];

export default function PetCareTips() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
      <h2 className="mb-2 font-display-lg text-headline-xl text-on-surface">Pet Care Tips</h2>
      <p className="mb-stack-lg text-on-surface-variant">Essential guidance for new pet parents.</p>
      <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => (
          <div key={tip.title} className="glass-card rounded-2xl p-6">
            <MaterialIcon name={tip.icon} className="mb-3 text-3xl text-primary" />
            <h3 className="font-headline-lg text-body-lg font-bold">{tip.title}</h3>
            <p className="mt-2 text-sm text-on-surface-variant">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
