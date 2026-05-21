import MaterialIcon from "./MaterialIcon";

const benefits = [
  {
    icon: "volunteer_activism",
    title: "Save a Life",
    description:
      "By adopting, you give a second chance to an animal that has so much love to offer and reduce the demand for unethical breeding.",
    iconBg: "bg-primary-container/20",
    iconColor: "text-primary",
  },
  {
    icon: "health_and_safety",
    title: "Lifelong Wellness",
    description:
      "Pets are proven to reduce stress, lower blood pressure, and improve mental health. They are the ultimate wellness companion.",
    iconBg: "bg-tertiary-container/20",
    iconColor: "text-tertiary",
  },
  {
    icon: "psychology",
    title: "Unbreakable Bond",
    description:
      "Rescue pets often show profound gratitude. The bond formed with an adopted pet is uniquely deep and rewarding.",
    iconBg: "bg-secondary-container/20",
    iconColor: "text-secondary",
  },
];

export default function WhyAdopt() {
  return (
    <section className="bg-surface-container-low py-stack-lg">
      <div className="mx-auto mb-stack-lg max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-stack-sm font-display-lg text-headline-xl text-on-surface">
          The Emotional & Ethical Choice
        </h2>
        <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
          Adoption isn&apos;t just about saving a life—it&apos;s about enriching
          yours with unconditional love and finding a connection that changes
          everything.
        </p>
      </div>

      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-3 md:px-margin-desktop">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="glass-card flex flex-col items-center rounded-3xl p-stack-lg text-center"
          >
            <div
              className={`mb-stack-md flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}
            >
              <MaterialIcon name={item.icon} filled className="text-4xl" />
            </div>
            <h3 className="mb-2 font-headline-lg text-headline-lg">
              {item.title}
            </h3>
            <p className="text-on-surface-variant">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
