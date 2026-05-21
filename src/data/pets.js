const pets = {
  luna: {
    id: "luna",
    name: "Luna",
    breed: "Golden Retriever",
    age: "3 Years Old",
    location: "San Francisco, CA",
    weight: "65 lbs",
    sex: "Female",
    coat: "Long",
    adoptionFee: "$250.00",
    about:
      'Luna is a three-year-old Golden Retriever with a heart of pure gold. She was rescued from a high-volume shelter and has since blossomed into a confident, loving companion. Known for her "wiggle-walk" when she sees her favorite humans, Luna is the embodiment of joy and loyalty.',
    story:
      "Looking for someone who loves morning walks as much as belly rubs. I'm a good listener and I promise to be your most loyal friend...",
    traits: [
      "Gentle Soul",
      "Child-Friendly",
      "Cat-Approved",
      "Moderate Energy",
      "Leash Trained",
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFn7xlMwDA1CawkZnmESq-4Cnmw5RbX4eytW0M8HXSR9dx66JWf5Jqci7CC37AliiO59SFl8ZmwSn0qi0rrAPVtANSMSPZp8nip8OBk31CJXfKVJ09KHq1zjZQ5sVjMk75YvUXlct5zfqMReg4yMZ_0zk9sNgpF4Hj0GgJyoEqfkScaaCb5T3YnFWoUAjduRueR73hEwSF0SBQnx6fTNA5-KmnjjEBC4w_Iuu4GIe4XtBTaMsBvKXHb3S4YnpMpo0xGoqi6UmTHoR7",
        alt: "Luna the Golden Retriever on a sun-drenched wooden porch",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDafuCAFORhqSU_MknjfqwUaPuXFNQvj4gAtj2Z2yhSHTMOPH31rK6nSqUEThye6zt2xRfWWxSkhPQRmoxmvd7keKz7_z-qnvqml_bQ82BmKhWcTl2z9htqVGn5nga0SDmtU-4dDbr3PGjpktctpPVtuNgVR4BDlbBFlQ9pFQSC3lSvprH8J_BqiQFP5Cw3rNWYt-T3H7IDcUUXMBJTo-nbaMznSHvxTEUEeQP0EWmacHQ315CLdHWfebeHldoSDunb4_Bb1DWCfvwh",
        alt: "Close up portrait of Luna's face with soft lighting",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi5S1U6Eo08L2OWl1JqUUbacV1kKObkqyRRfr0BA3CMbhKC3t-9PT0fjtl51sbUt9lpUBbomPR3c5EabEy6JxWbofR7Ud2ae-lvnlsysHyT7D7d55Vk47dtXFLMUveIYwSxdAzPCMShIcDKrjmmzu6BYfV-t4QjLjE_y-Vh0eacx8VFRc7kq8KF14uHVUJp7nBMwgh9YhdsnEHU3pe_PvLD4RZh_7294kcrlxo35PPCjJw8PVPsgIPW2g2sbln1zjDH9rAlouqtHZC",
        alt: "Luna running joyfully in a park with green grass",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPvmwzQSwB6K8wcMt63iZePLnYT08uDINmDziG7gnbaAcD61PdSSV3dXYKbJplQmtdeIbUYWmT3CSENtkbrTXQB6jq49U38vkHjHYckBP-vj1xxQYHMpmOH89WVDjAdD33N2ftZB9qO2EZfKNxy_0XniXycab_dlR0l56VfMld7HiWXgo67qn6Q2ICcobo6jf0AOyVoRyI0d4fTjlNJR2_JGbRYu9eW0f4bHTp2T88yFXAg2_ZIkpj3UCo0bKpdS6iGKNSFHzIuwFZ",
        alt: "Luna sleeping peacefully on a designer dog bed",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYYZ9RXs7j8YEGN50offH20xEDgkyxM7_nie7eC0tmbOuMa3eg8JjD7zHW4vENG8oZd5OwbDjfJPmFvVx9EmkHj5b1RTGBj8Th-YEN0Ex047FR6iIr89jGeVNHt3bhnFpyQr-RwatUFZZlSGq4I-AgyunQNQRE3g6HkjoPJKmnSHoMtKswHypybZFQTjOYOk6M67g1DuIexUU93PeLBBKfHSpKNz0pMrO0rNZp-JIbcSUTDByIP7GZm_ZuXg7vXmb_tQp7M8VNgb0H",
        alt: "Luna interacting gently with a small child",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc70NBFkais4UASThla0ENUWPVz9NA_8MF3UFj3oYNcbSQwz4kkso6tdmmM7e1KvdIQLjY94ovRchgNb5zPOrJuLEvpCF7xhlTgAqi-N3B-HL0f_Dm-OrOvSmAOrv_a-0tN9CV2D4ZT6VDc2ToSJD4Zxx9yziTmmAVblGqP9YraFBdpgEZ1Jxq0cwXlP_e9bg6ziWvxCEJF8EYKwasF2hgf32Shvzlfb-5nCLY1H2CMmJoCYlEHW74KXUNr5Xj-joPBvmkFO2msuhQ",
        alt: "Luna looking out of a window with a curious expression",
      },
    ],
    health: [
      {
        icon: "vaccines",
        title: "Fully Vaccinated",
        detail: "Last update: Oct 2023",
      },
      {
        icon: "check_circle",
        title: "Spayed/Neutered",
        detail: "Confirmed procedure",
      },
      {
        icon: "location_chip",
        title: "Microchipped",
        detail: "ID: 985112000214",
      },
      {
        icon: "monitor_heart",
        title: "Vet Inspected",
        detail: "Excellent condition",
      },
    ],
    owner: {
      name: "Sarah Miller",
      organization: "Bay Area Animal Rescue",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuUyIrUwUGJulFL3vLoHnReuPs6xGYf6AV3NX5eRIh7TFr4U3Phd0aovUBFQ75pYFsY7r310Ci82XuIf0m_Bi1U4FH8fLBoO7D1JSgjxRJSSj9jWlNxre_-z413StucbKltNKKBNR4_xEUdzMB-_5LHLKLkN5cyvu5VxoN3CM9p6NiOFqi_2HEFDzrQAU6pdfoGdHXHGbA5iaV-mhvvx3TF7WmA3LcVzWHTDEFTIkSh9QJQyjW8q1_g24d3XPV0zFbxs_rpggJ7yle",
      alt: "Sarah Miller, animal shelter coordinator",
    },
  },
};

export function getPet(id) {
  const key = String(id).toLowerCase();
  return pets[key] ?? pets.luna;
}

export default pets;
