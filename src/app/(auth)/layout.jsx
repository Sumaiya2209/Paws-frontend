export default function AuthLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-surface font-body-md text-on-surface">
      {children}
    </div>
  );
}
