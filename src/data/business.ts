/**
 * Fuente única de verdad del negocio.
 *
 * Todo lo que aparezca aquí se usa a la vez en el contenido visible y en los
 * datos estructurados (JSON-LD). Si cambias un precio, cámbialo SOLO aquí:
 * antes el schema decía 299€ "Landing Page Premium" mientras la web mostraba
 * tres planes distintos, y Google descarta los datos estructurados que no
 * coinciden con lo que ve el usuario.
 */

export const SITE_URL = 'https://clickora.es';

export const BUSINESS = {
  name: 'Clickora',
  founder: 'Diego DPL',
  email: 'info@clickora.es',
  phone: '+34608008081',
  phoneDisplay: '608 00 80 81',
  whatsapp: 'https://wa.me/34608008081',
  priceRange: '€€',
  /** Negocio de zona de servicio: se trabaja desde Murcia para toda España. */
  city: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  /** Coordenadas del centro de Murcia. Ajusta si das dirección exacta. */
  geo: { lat: 37.9922, lng: -1.1307 },
  areaServed: ['Murcia', 'Región de Murcia', 'España'],
  description:
    'Estudio de diseño y desarrollo web en Murcia especializado en landing pages de alta conversión para negocios de servicios. Diseño, desarrollo ultrarrápido y medición configurada.',
  /**
   * Perfiles externos. Cuantos más perfiles reales haya aquí, más fácil es que
   * Google y los LLMs identifiquen a Clickora como una entidad concreta.
   * Añade LinkedIn, Google Business Profile y directorios en cuanto los tengas.
   */
  sameAs: ['https://github.com/Diego-DPL'],
} as const;

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '299',
    description: 'Para validar tu oferta y empezar a captar leads.',
    features: [
      'Landing Page One-Page',
      'Diseño profesional',
      'Integración WhatsApp',
      'Formulario de contacto',
      'Adaptada a móviles',
      'Carga ultrarrápida',
      'Entrega en 2 semanas',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '499',
    description: 'Para negocios que quieren escalar y medir resultados con exactitud.',
    features: [
      'Todo lo del Starter',
      'Copywriting persuasivo',
      'Pixel & Analytics listos',
      'SEO técnico optimizado',
      'Integración CRM básico',
      'Página de Gracias',
      'Entrega prioritaria',
    ],
    highlighted: true,
    badge: 'Más popular',
  },
  {
    name: 'Pro',
    price: '899',
    description: 'La solución completa para marcas que compiten en alto nivel.',
    features: [
      'Todo lo del Growth',
      'Estrategia de conversión',
      'Diseño totalmente a medida',
      'A/B Testing en titulares',
      'Automatización de emails',
      'Soporte 30 días',
      'Revisión de campañas Ads',
    ],
    highlighted: false,
  },
];

/** Servicio recurrente, se vende aparte de los planes de proyecto. */
export const MAINTENANCE = {
  name: 'Mantenimiento VIP',
  price: '49',
  description: 'Tu web rápida, segura y actualizada cada mes.',
};
