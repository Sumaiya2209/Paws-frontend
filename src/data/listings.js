export const petListings = [
  {
    id: "cooper",
    name: "Cooper",
    breed: "Golden Retriever",
    age: "2 Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FSrhVpgOvBVGI_44ffoOlry0hhD14F0DETtiRUdZ9BA15TyUsL30FE9V5KWUUOzdx1s3jVmAaOvUTl0CMdH0mTf0wYg7R0yDGiIaBnl4_U2QainJ4WRlmbNsNS48_vCskZX_OaRnnZA1Cp73U6Mva1GH2p8l9FJWiuD_wzd0sRDAUJ_isdJCQY_aUYly1Lm5tRLGEo7vz1AW7oGDtybX5m5cqGR-gMuiXSn7b9ae5DDWIRGic8wISBYzIfZq7yw9vwwm3JIIHb9Q",
    status: "available",
    views: "1,248",
    inquiries: "12",
    grayscale: false,
    muted: false,
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Calico Cat",
    age: "1 Year",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ch4NK6iHAkIkTmevGQr0809Zk4iRmTV-6cP1Tqever_AYs4YWC4O_wVe1ga34hVo_ycrUxAKd14AsZ7SqdEObuY4Q59zEbZTIVoJPkZfvS_r5CKhpQ1--FZVj-wioLKb7FQLP3gdEPpM70KIzYnuyoTuqYlC8wHqm6I7eKEpcNOlg_HD4M5E33DSbCCY5s1Iz2JJZxl2iWZYoAtANiNrd-W00lzBulpiAp-Nl74Qewx5-JtMj0GJQbtP17PtWo9oyEUQZGIvDoed",
    status: "pending",
    views: "842",
    inquiries: "5",
    grayscale: false,
    muted: false,
  },
  {
    id: "oliver",
    name: "Oliver",
    breed: "Domestic Shorthair",
    age: "4 Years",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0zv9X1l2tRu8xCxjumURAUalBX4qUvwLFRdzUhhkWx5CTbMDvc3msDvDEGmpXQ-1NzDkrqjHZTjajs4gOPUVPZvcmScvxJvt1YDsf2ASlOx98sYr51o78tS1lgmNTsz22hQ8_pNej5urmNhC25drJOR2yilPGKJMeiz1YOXvxIKBGU6vJOfQ69XxkAETqY-PXCfr8sRewJQG91tlA1MZptWnStz16OhEo3GXL1XyP_FwBKf17LP241ZcJn5zGfbn2sDr4p8fOm7Yo",
    status: "adopted",
    views: "2,104",
    inquiries: "28",
    grayscale: true,
    muted: true,
  },
];

export const statusConfig = {
  available: {
    label: "Available",
    className:
      "bg-emerald-100 text-emerald-700 border-emerald-200",
    dotClass: "bg-emerald-500",
  },
  pending: {
    label: "Pending",
    className: "bg-orange-100 text-orange-700 border-orange-200",
    dotClass: "bg-orange-500",
  },
  adopted: {
    label: "Adopted",
    className:
      "bg-surface-container-high text-on-surface-variant border-outline-variant/30",
    dotClass: "bg-on-surface-variant",
  },
};
