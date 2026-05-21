import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/home/MaterialIcon";

const stats = [
  {
    label: "Total Listings",
    value: "124",
    change: "+8%",
    changeClass: "text-emerald-600 bg-emerald-50",
    icon: "list_alt",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Active Requests",
    value: "42",
    change: "+12%",
    changeClass: "text-primary bg-primary/5",
    icon: "pending_actions",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
  {
    label: "Adopted Pets",
    value: "18",
    change: "+15%",
    changeClass: "text-emerald-600 bg-emerald-50",
    icon: "celebration",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    label: "Profile Views",
    value: "2.4k",
    change: "Steady",
    changeClass: "text-on-surface-variant bg-surface-variant",
    icon: "visibility",
    iconBg: "bg-on-surface/5",
    iconColor: "text-on-surface",
  },
];

const adoptionRequests = [
  {
    name: "Emily Watson",
    location: "Austin, TX",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvIUf9Pkbxy9rlR-29eXNYFZ_9UDUAh8z8ck476tZZpP0LHLtSRWDxyiIBZGv3tYmMJKLGwjbvIIuYgNBBGAt3mZ6CjJrAW7v_2xtOPtZFM7rY53WMqX0aYWHkWxc3YZ-qISO2aZx-WGR0cx21JcR3ytPtFT9A3PmUgRvXU9DoRAH5xXBO6AyugEzn69nlXA8TolPk-TrWAfD8mretsEOuJnQevEOzE3PBaAcVQO_r6inKs7OX9aOt28yE8Y2QWLfPOuDhel0-z7o3",
    pet: "Cooper",
    date: "Oct 29, 2024",
    status: "Pending",
    statusClass: "bg-primary-container/20 text-on-primary-container",
  },
  {
    name: "James Miller",
    location: "Pflugerville, TX",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM9H_2ey9BTr6EqPWnHR-_cxR4Y5TcqPqhp58DM55vYUlThijXSARKYG3gKHw2QgSieOGU8x6pf9bWbllsLM9f3AH46MGBTutPMYOOJrP5CP5gG9VUiBotTqXg02DhK81Rum_Ofto0_ffcSBgZOmWJymSmcAiL7uR3chiAa4BWydBRA1PC16URz42tSWMYZQ1nl89clDV2EJaX6QPMi-LKzF2jSY98yG9P9mswiCLru7E3yyHQ5TUMcjcwpS2ypSzUXtmm8z_Xde2u",
    pet: "Luna",
    date: "Oct 28, 2024",
    status: "Approved",
    statusClass: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "David Chen",
    location: "Round Rock, TX",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbj1icInzuVOzcM8_ZhU4tXAnr4pmiBUvMLgHCAAkVhaXdUxQQKR0iDvH2-aoVN7ruqxjqhwc7xYCTFOUJpDOJxi64qXCk2kuvYn1ftGJ5x6yf5PLiMWJj1wDDPNJTANyuNSoGxXyqM_7cZxQb7cKeDRy0TOrIBtgiCCYmnDh56xlG7GETebJHlPGhXUJqwvGV7R-K638EV92R_hG9E1vPHrmYhOVE67NN0HR7u83VGESQ5zcwBM37K4wd46GD7_kzZOKM145nURc8",
    pet: "Max",
    date: "Oct 28, 2024",
    status: "Pending",
    statusClass: "bg-primary-container/20 text-on-primary-container",
  },
];

const topPerformers = [
  {
    name: "Cooper",
    score: 85,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqa1GJL328AASXaVM11ybhMPeHPva_UcIssshnkJS37VZiP_TEbcHNQrfpbhgq1WuFYezDQ2Z-Q_NldzdxNDqxbvussurfjX_1VyxqE1keF6MESQxlkrKi8KJ4nXOyZCAi8-cWL9uiXfJJp-BrmZ_eLlpCHmItjgA8O_v5GZNz9Fu3KStsnqT24kisAFP7B7EQ9pNeCL1ksqC9hMM1_sZZJCtQ0vYowxwrTBppLVmM0qRFWW5e4i2Khl7rhkQtG4w5RCWXPOa1yQVN",
  },
  {
    name: "Luna",
    score: 62,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLfc9APOXPRBRAJ5BtDvwJ1oyeuvNN-A8rMt22_ZYqKEUnKh7TeEH831Xp_pUniFU5NpGhPuAkiCtv9wcYGjY4o9Cwh-RdbnLtN0WUGz62GFRF6T-YxPsvUp_q8wTRnqFSwbuhkbpBkkQXN6ZD9N9i1Uo25gqyy6R_juO52DeP23sOBL8WonluRLk0ecefqku-iMzqzrm2NUnasT9TOneLFHNQJ4pFOzuSREK7M2hEEjH91O9JvtEiM6lf15FVJj6fyty2SydegFHn",
  },
  {
    name: "Max",
    score: 48,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXMyN3tjYNa_1Gj1-jg0Pg6Ec05-19pBjx7b288O8iLoe-7tI9clNamq37gLFU6hmX-XNoSg6yz3mmhutDS542fEwTaO7sTKesNLk7C63MZsFlyjvtm1Q755Mf3kVhLtYjHLiG7JZHLGH2h6V2VmsspksWO8gUG1qHECRg2uniUJFDc8yMufVTkr8fs21vwAZaAz6otSw_ZjK79Z5JUw9jbggLGBXbDxb-swkW1JA6GE2DVy0NbWgbAZIEZAbRxHvrmB3ybBlUNUF1",
  },
];

export default function DashboardOverview() {
  return (
    <>
      <header className="mb-stack-lg flex flex-col justify-between gap-gutter md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 font-headline-xl text-headline-xl text-on-surface">
            Welcome back, Sarah
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Here&apos;s what&apos;s happening at your shelter today.
          </p>
        </div>
        <div className="flex items-center gap-stack-sm rounded-xl border border-outline-variant bg-white p-2 shadow-sm">
          <MaterialIcon
            name="calendar_month"
            className="pl-2 text-on-surface-variant"
          />
          <select className="cursor-pointer border-none bg-transparent font-label-md text-on-surface-variant focus:ring-0">
            <option>Oct 24 - Oct 31, 2024</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </header>

      <section className="mb-stack-lg grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card flex flex-col justify-between rounded-2xl p-stack-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className={`rounded-lg p-2 ${stat.iconBg}`}>
                <MaterialIcon
                  name={stat.icon}
                  className={stat.iconColor}
                />
              </div>
              <span
                className={`rounded-full px-2 py-1 text-label-sm ${stat.changeClass}`}
              >
                {stat.change}
              </span>
            </div>
            <div>
              <p className="font-label-md text-on-surface-variant">
                {stat.label}
              </p>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
        <div className="glass-card flex flex-col overflow-hidden rounded-2xl lg:col-span-2">
          <div className="flex items-center justify-between border-b border-outline-variant p-stack-md">
            <h4 className="font-headline-lg text-headline-lg text-on-surface">
              Recent Adoption Requests
            </h4>
            <button
              type="button"
              className="font-label-md text-primary transition-all hover:underline"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  {["Applicant", "Pet Name", "Date", "Status", "Action"].map(
                    (col) => (
                      <th
                        key={col}
                        className={`px-stack-md py-4 font-label-md text-on-surface-variant ${
                          col === "Action" ? "text-right" : ""
                        }`}
                      >
                        {col}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {adoptionRequests.map((row) => (
                  <tr
                    key={row.name}
                    className="group transition-colors hover:bg-primary-container/5"
                  >
                    <td className="px-stack-md py-5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={row.avatar}
                          alt={row.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-label-md text-on-surface">
                            {row.name}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {row.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-stack-md py-5 font-body-md text-on-surface">
                      {row.pet}
                    </td>
                    <td className="px-stack-md py-5 text-sm text-on-surface-variant">
                      {row.date}
                    </td>
                    <td className="px-stack-md py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-stack-md py-5 text-right">
                      <button
                        type="button"
                        className="text-on-surface-variant transition-colors hover:text-primary"
                        aria-label="More actions"
                      >
                        <MaterialIcon name="more_vert" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-gutter">
          <div className="glass-card rounded-2xl p-stack-md">
            <h4 className="mb-stack-sm font-headline-lg text-headline-lg text-on-surface">
              Quick Actions
            </h4>
            <div className="grid grid-cols-1 gap-stack-sm">
              <Link
                href="/dashboard/pets/new"
                className="group flex items-center gap-4 rounded-xl border border-outline-variant p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
              >
                <MaterialIcon
                  name="add_a_photo"
                  className="rounded-lg bg-primary/10 p-2 text-primary"
                />
                <div>
                  <p className="font-label-md text-on-surface">Post New Pet</p>
                  <p className="text-xs text-on-surface-variant">
                    Upload photos and info
                  </p>
                </div>
              </Link>
              <button
                type="button"
                className="group flex items-center gap-4 rounded-xl border border-outline-variant p-4 text-left transition-all hover:border-tertiary hover:bg-tertiary/5"
              >
                <MaterialIcon
                  name="chat"
                  className="rounded-lg bg-tertiary/10 p-2 text-tertiary"
                />
                <div>
                  <p className="font-label-md text-on-surface">
                    Message Adopters
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    12 unread messages
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-stack-md">
            <div className="mb-stack-sm flex items-center justify-between">
              <h4 className="font-headline-lg text-headline-lg text-on-surface">
                Top Performers
              </h4>
              <MaterialIcon
                name="trending_up"
                className="text-sm text-on-surface-variant"
              />
            </div>
            <div className="space-y-4">
              {topPerformers.map((pet) => (
                <div key={pet.name} className="flex items-center gap-3">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-label-md text-on-surface">{pet.name}</p>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-surface-variant">
                      <div
                        className="h-1.5 rounded-full bg-primary"
                        style={{ width: `${pet.score}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant">
                    {pet.score}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
