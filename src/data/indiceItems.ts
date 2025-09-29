// src/data/graphicsItems.ts
export type Vendor = "general" | "nvidia" | "amd" | "intel" | "apis";

export type Item = {
  href: string;
  titleEs: string;
  vendor: Vendor;
};

export const indiceItems: Item[] = [
  // Tecnologías de uso general
  { href: "/general/ambient-occlusion", titleEs: "Oclusión ambiental", vendor: "general" },
  { href: "/general/anti-aliasing", titleEs: "Suavizado de bordes", vendor: "general" },
  { href: "/general/bloom", titleEs: "Resplandor", vendor: "general" },
  { href: "/general/chromatic-aberration", titleEs: "Aberración cromática", vendor: "general" },
  { href: "/general/depth-of-field", titleEs: "Profundidad de campo", vendor: "general" },
  { href: "/general/hdr-tone-mapping", titleEs: "Alto rango dinámico (HDR) y mapeo de tonos", vendor: "general" },
  { href: "/general/lod", titleEs: "Nivel de detalle (LOD)", vendor: "general" },
  { href: "/general/motion-blur", titleEs: "Desenfoque de movimiento", vendor: "general" },
  { href: "/general/reflections", titleEs: "Reflejos", vendor: "general" },
  { href: "/general/shadows", titleEs: "Sombras", vendor: "general" },
  { href: "/general/texture-filtering", titleEs: "Filtrado de texturas", vendor: "general" },
  { href: "/general/texture-quality", titleEs: "Calidad de texturas", vendor: "general" },
  { href: "/general/tessellation", titleEs: "Teselación", vendor: "general" },
  { href: "/general/upscaling", titleEs: "Escalado de imagen", vendor: "general" },
  { href: "/general/volumetric-effects", titleEs: "Efectos volumétricos", vendor: "general" },
  { href: "/general/vsync", titleEs: "Sincronización vertical y variable", vendor: "general" },

  // NVIDIA
  { href: "/nvidia/dlss", titleEs: "DLSS", vendor: "nvidia" },
  { href: "/nvidia/dlaa", titleEs: "DLAA", vendor: "nvidia" },
  { href: "/nvidia/hairworks", titleEs: "HairWorks", vendor: "nvidia" },
  { href: "/nvidia/hbao-plus", titleEs: "HBAO+", vendor: "nvidia" },
  { href: "/nvidia/nis", titleEs: "NIS", vendor: "nvidia" },
  { href: "/nvidia/physx", titleEs: "PhysX", vendor: "nvidia" },
  { href: "/nvidia/reflex", titleEs: "NVIDIA Reflex", vendor: "nvidia" },
  { href: "/nvidia/rtx", titleEs: "RTX", vendor: "nvidia" },

  // AMD
  { href: "/amd/fsr", titleEs: "FSR", vendor: "amd" },
  { href: "/amd/fidelityfx-suite", titleEs: "Suite FidelityFX", vendor: "amd" },
  { href: "/amd/ris", titleEs: "RIS", vendor: "amd" },
  { href: "/amd/rsr", titleEs: "RSR", vendor: "amd" },
  { href: "/amd/anti-lag", titleEs: "Anti-Lag / Boost", vendor: "amd" },

  // Intel
  { href: "/intel/xess", titleEs: "XeSS", vendor: "intel" },
  { href: "/intel/oidn", titleEs: "OIDN", vendor: "intel" },
  { href: "/intel/xess-fg", titleEs: "XeSS FG / XeLL", vendor: "intel" },
  { href: "/intel/arc-control", titleEs: "Arc Control", vendor: "intel" },

  // APIs gráficas
  { href: "/apis/directx", titleEs: "DirectX", vendor: "apis" },
  { href: "/apis/vulkan", titleEs: "Vulkan", vendor: "apis" },
  { href: "/apis/opengl", titleEs: "OpenGL", vendor: "apis" },
];
