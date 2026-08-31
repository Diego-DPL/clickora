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

/**
 * Interruptor de los datos fiscales (NIF y domicilio completo).
 *
 * En `false` mientras Diego no esté dado de alta como autónomo: publicar el DNI
 * y el domicilio particular no aporta nada hasta que la ficha de Google esté
 * verificada, y a cambio expone un identificador personal.
 *
 * Ponlo en `true` el día del alta y se publican solos en el aviso legal, en la
 * política de privacidad y en el JSON-LD. No hay que tocar nada más.
 */
export const PUBLISH_FISCAL_IDENTITY = false;

export const BUSINESS = {
  name: 'Clickora',
  founder: 'Diego DPL',
  /**
   * Sitio y perfiles personales del fundador.
   *
   * Ojo con dónde va esto: diegodpl.com NO puede ir en el `sameAs` del negocio,
   * porque `sameAs` significa "esta es la misma entidad" y Clickora (empresa) no
   * es la misma entidad que Diego DPL (persona). Va colgado del nodo Person del
   * fundador, que es lo que tiende el puente correcto entre los dos dominios:
   * "este sitio pertenece a la persona que fundó este negocio".
   */
  founderUrl: 'https://diegodpl.com',
  founderSameAs: ['https://www.linkedin.com/in/diego-miguel-perez-lorente/'],
  email: 'info@clickora.es',
  phone: '+34608008081',
  phoneDisplay: '608 00 80 81',
  whatsapp: 'https://wa.me/34608008081',
  priceRange: '€€',
  /**
   * Negocio de zona de servicio: se trabaja desde Murcia para toda España.
   * La dirección completa se publica porque el artículo 10 de la LSSI obliga a
   * ello en el aviso legal; al estar ya publicada, incluirla también aquí no
   * expone nada nuevo y mantiene el NAP (nombre, dirección, teléfono) idéntico
   * en web, schema y ficha de Google, que es lo que consolida la señal local.
   */
  street: 'Calle Portillo San Antonio, 4',
  postalCode: '30005',
  city: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  /** Coordenadas del centro de Murcia. */
  geo: { lat: 37.9922, lng: -1.1307 },
  areaServed: ['Murcia', 'Región de Murcia', 'España'],
  /** Horario de atención. Ajusta los días si atiendes también en fin de semana. */
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '20:00',
  },
  /** Solo para el aviso legal (obligatorio por LSSI). No va en el JSON-LD. */
  nif: '48658090A',
  description:
    'Estudio de diseño y desarrollo web en Murcia especializado en landing pages de alta conversión para negocios de servicios. Diseño, desarrollo ultrarrápido y medición configurada.',
  /**
   * Perfiles externos verificados uno a uno. Este campo es lo que le dice a
   * Google y a los LLMs que el dominio, los directorios y los perfiles son el
   * mismo negocio: es lo que consolida a Clickora como entidad en lugar de como
   * un dominio suelto.
   *
   * Falta por añadir la ficha de Google Business en cuanto esté verificada, y
   * la página de empresa de LinkedIn si se crea (pesa más que el perfil
   * personal). No metas aquí una URL sin comprobar que carga.
   */
  sameAs: [
    'https://www.linkedin.com/in/diego-miguel-perez-lorente/',
    'https://www.sortlist.es/agency/clickora',
    'https://www.malt.es/profile/diegoperezlorente',
    'https://github.com/Diego-DPL',
  ],
} as const;

export interface Plan {
  name: string;
  /** `null` = precio a consultar. Se pinta `priceLabel` y sale del JSON-LD sin importe. */
  price: string | null;
  /** Texto que sustituye a la cifra cuando no hay precio cerrado. */
  priceLabel?: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '400',
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
    price: '800',
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
    price: null,
    priceLabel: 'A medida',
    description: 'Para proyectos que se salen de lo estándar. Presupuesto cerrado tras una primera conversación.',
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
