import MaterialIcon from "./MaterialIcon";

const steps = [
  {
    icon: "search",
    title: "Browse",
    description: "Find pets that match your personality and home.",
    gradient: false,
  },
  {
    icon: "description",
    title: "Apply",
    description: "Submit a simple application to start the conversation.",
    gradient: false,
  },
  {
    icon: "handshake",
    title: "Meet",
    description: "Schedule a visit to ensure you're the perfect match.",
    gradient: false,
  },
  {
    icon: "home",
    title: "Welcome Home",
    description: "Finalize the adoption and start your new life together.",
    gradient: true,
    filled: true,
  },
];

export default function AdoptionProcess() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
      <div className="mb-stack-lg text-center">
        <h2 className="font-display-lg text-headline-xl text-on-surface">
          Your Journey Home
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          A simple, transparent path to meeting your new best friend.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-outline-variant lg:block" />
        <div className="relative z-10 grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group flex flex-col items-center text-center"
            >
              <div
                className={`mb-stack-md flex h-16 w-16 items-center justify-center rounded-full border-4 border-background shadow-lg transition-transform group-hover:scale-110 ${
                  step.gradient
                    ? "primary-gradient text-white"
                    : "bg-white text-primary"
                }`}
              >
                <MaterialIcon
                  name={step.icon}
                  filled={step.filled}
                  className="text-3xl"
                />
              </div>
              <h4 className="mb-2 font-headline-lg text-headline-lg">
                {step.title}
              </h4>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
