"use client";

import { usePathname } from "next/navigation";
import DetailFooter from "@/components/pet-detail/DetailFooter";
import HomeFooter from "./HomeFooter";

export default function Footer() {
  const pathname = usePathname();
  const isPetDetail = /^\/all-pets\/[^/]+$/.test(pathname ?? "");

  if (isPetDetail) {
    return <DetailFooter />;
  }

  return <HomeFooter />;
}
