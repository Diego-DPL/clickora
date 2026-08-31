/**
 * Casos de estudio.
 *
 * Nota importante: aquí NO hay métricas de resultados (visitas, leads,
 * conversiones). No se inventan. Cuando tengas los datos reales de analítica de
 * cada proyecto —y permiso del cliente para publicarlos— añádelos en `metricas`
 * y se pintarán automáticamente: un caso con números reales convence mucho más
 * que cualquier texto, y es de lo que más citan los buscadores y los LLMs.
 */

import type { ImageMetadata } from 'astro';
import renderFisioclinic from '../assets/portfolio/render_fisioclinic.webp';
import renderZypace from '../assets/portfolio/render_zypace.webp';
import renderRaiz from '../assets/portfolio/render_raiz.webp';
import renderDiegodpl from '../assets/portfolio/render_diegodpl.webp';

export interface Caso {
  slug: string;
  title: string;
  label: string;
  /** Frase de portada. */
  intro: string;
  /** Para el <title> y la meta description. */
  metaTitle: string;
  metaDescription: string;
  /** Importada desde src/assets para que Astro genere los tamaños y el srcset. */
  image: ImageMetadata;
  url: string;
  urlLabel: string;
  ficha: { key: string; value: string }[];
  reto: string[];
  solucion: { title: string; text: string }[];
  cierre: string[];
  /** Opcional: métricas reales cuando las tengas. */
  metricas?: { value: string; label: string }[];
}

export const CASOS: Caso[] = [
  {
    slug: 'diegodpl',
    title: 'Diego DPL',
    label: 'Marca personal · Dirección de arte · Proyecto propio',
    intro:
      'La web de una marca personal de creador de contenido de running y viajes. Un proyecto propio, y el que más lejos ha llevado la parte de dirección de arte.',
    metaTitle: 'Caso: diegodpl.com — web de marca personal | Clickora',
    metaDescription:
      'Diseño y desarrollo de diegodpl.com, la web de marca personal de Diego DPL: estética documental analógica, narrativa por capítulos y tipografía como elemento principal.',
    image: renderDiegodpl,
    url: 'https://diegodpl.com',
    urlLabel: 'diegodpl.com',
    ficha: [
      { key: 'Proyecto', value: 'Diego DPL' },
      { key: 'Sector', value: 'Marca personal · Creación de contenido' },
      { key: 'Tipo', value: 'Portafolio y narrativa de marca' },
      { key: 'Stack', value: 'Astro · Tailwind' },
      { key: 'Rol', value: 'Dirección de arte, diseño y desarrollo' },
    ],
    reto: [
      'Una marca personal no vende un servicio con una lista de características: vende una forma de ver las cosas. El reto no era técnico, era encontrar un tono y sostenerlo en toda la web sin caer en el porfolio genérico de creativo.',
      'El material de partida son fotografía y vídeo de running y viajes con estética documental analógica. La web tenía que estar al servicio de ese material, no competir con él.',
    ],
    solucion: [
      {
        title: 'Estructura de capítulos, no de secciones',
        text: 'La navegación va numerada —el camino, el trabajo, sobre mí, marcas, diario— y se lee como un índice. Convierte el recorrido en una narración en lugar de en un menú, que es exactamente lo que diferencia una marca personal de un currículum.',
      },
      {
        title: 'La tipografía como imagen',
        text: 'Serif de alto contraste a tamaño enorme sobre fondo casi negro. Con poco material visual disponible en cada momento, la tipografía sostiene sola la personalidad de la página.',
      },
      {
        title: 'Paleta reducida al mínimo',
        text: 'Negro cálido, hueso y un dorado tenue como único acento. Menos color significa que la fotografía es lo único que aporta saturación, que es justo lo que se buscaba.',
      },
      {
        title: 'Detalles que sitúan',
        text: 'Coordenadas geográficas en la cabecera, marcas de encuadre, la nota «Super 8 · sin retoque». Pequeñas señales que refuerzan la idea documental sin necesidad de explicarla.',
      },
    ],
    cierre: [
      'Es un proyecto propio, no un encargo de cliente, y por eso está aquí con esa etiqueta: sirve para enseñar hasta dónde llega la dirección de arte cuando no hay que negociar cada decisión, no para presumir de cartera.',
      'Si tu proyecto necesita una identidad con criterio y no solo una web que funcione, este es el registro del que hablamos.',
    ],
  },
  {
    slug: 'fisioclinic',
    title: 'FisioClinic Murcia',
    label: 'Landing page · SEO local · Salud',
    intro:
      'Rehacer de cero la web de una clínica de fisioterapia de Murcia para que la primera visita acabe reservando cita, y para que Google la encuentre cuando alguien del barrio busca un fisio.',
    metaTitle: 'Caso: FisioClinic Murcia — web para clínica de fisioterapia | Clickora',
    metaDescription:
      'Cómo se rehízo la web de FisioClinic Murcia con Astro e islas de React: carrusel de portada, SEO local y una estructura orientada a la reserva de cita.',
    image: renderFisioclinic,
    url: 'https://fisioclinicmurcia.com',
    urlLabel: 'fisioclinicmurcia.com',
    ficha: [
      { key: 'Cliente', value: 'FisioClinic Murcia' },
      { key: 'Sector', value: 'Salud · Fisioterapia' },
      { key: 'Zona', value: 'Murcia' },
      { key: 'Tipo', value: 'Web de clínica con enfoque de conversión' },
      { key: 'Stack', value: 'Astro 5 · Islas de React · Tailwind v4' },
    ],
    reto: [
      'Una clínica de fisioterapia compite en un radio de pocos kilómetros. No necesita tráfico de toda España: necesita salir cuando alguien de su zona busca ayuda para un dolor concreto, y que esa visita se convierta en una primera cita.',
      'El punto de partida era una web que presentaba la clínica correctamente, pero que no estaba construida para eso: la reserva no era el eje, y la estructura no le daba a Google señales claras de qué servicios se ofrecían ni dónde.',
    ],
    solucion: [
      {
        title: 'Astro con islas de React',
        text: 'La web se sirve como HTML estático, así que carga prácticamente al instante, y solo las partes que necesitan interacción —el carrusel de portada, el menú— cargan JavaScript. Es la diferencia entre una web que abre al momento con datos móviles y una que hace esperar tres segundos a alguien que está buscando con dolor.',
      },
      {
        title: 'Portada que sitúa en cinco segundos',
        text: 'Carrusel de imágenes reales de la clínica, con el servicio y la vía de contacto siempre visibles. Nada de imágenes de banco: en salud, ver la sala y al profesional real es parte de la decisión.',
      },
      {
        title: 'SEO local desde el código',
        text: 'Datos de la clínica marcados con Schema.org —dirección, horarios, teléfono, servicios—, jerarquía de encabezados limpia y contenido organizado por servicio, para que el buscador pueda relacionar la clínica con las búsquedas de su zona.',
      },
      {
        title: 'Animaciones que guían, no que distraen',
        text: 'Revelado progresivo al hacer scroll, al estilo de las webs de estudio de diseño, pero puesto al servicio del recorrido: cada bloque aparece cuando toca y termina llevando al mismo sitio, la reserva.',
      },
    ],
    cierre: [
      'El proyecto está en producción y se sigue trabajando sobre él: quedan pendientes las fichas de servicio individuales, el bloque de preguntas frecuentes con datos estructurados y la incorporación de reseñas reales de Google.',
      'Es un buen ejemplo de cómo se plantea aquí una web de salud: primero la conversión y la velocidad, después el acabado visual. Nunca al revés.',
    ],
  },
  {
    slug: 'zypace',
    title: 'Zypace',
    label: 'Aplicación web · IA · Running',
    intro:
      'Un entrenador personal de running que se conecta a tu cuenta de Strava, analiza tus carreras reales y genera planes de entrenamiento adaptados a tu nivel.',
    metaTitle: 'Caso: Zypace — app de entrenamiento con IA y Strava | Clickora',
    metaDescription:
      'Desarrollo de Zypace, una aplicación web que analiza tus entrenamientos de Strava con IA y genera planes de running personalizados. React, Supabase y OpenAI.',
    image: renderZypace,
    url: 'https://zypace.com',
    urlLabel: 'zypace.com',
    ficha: [
      { key: 'Proyecto', value: 'Zypace' },
      { key: 'Sector', value: 'Deporte · Producto digital' },
      { key: 'Tipo', value: 'Aplicación web con IA' },
      { key: 'Stack', value: 'React 19 · Supabase · OpenAI · API de Strava' },
      { key: 'Rol', value: 'Producto y desarrollo completo' },
    ],
    reto: [
      'Los planes de entrenamiento genéricos fallan por lo mismo: no saben nada de ti. Están calculados sobre un corredor medio que no existe, y no se enteran de que esta semana has dormido mal, has corrido de más o llevas tres días sin salir.',
      'La idea de Zypace era usar lo que un corredor ya está generando sin esfuerzo —su historial de Strava— para construir un plan que se ajuste a la realidad en lugar de a una tabla.',
    ],
    solucion: [
      {
        title: 'Conexión con Strava',
        text: 'Autenticación con la API de Strava e importación del historial de actividades: ritmos, distancias, desniveles y frecuencia. El corredor no rellena ningún formulario de nivel: sus datos ya cuentan la verdad.',
      },
      {
        title: 'Análisis con IA',
        text: 'Los entrenamientos se procesan y se envían al modelo con el contexto necesario para que genere un plan coherente con la carga real de las últimas semanas, no con una plantilla de "principiante / intermedio / avanzado".',
      },
      {
        title: 'Supabase como columna vertebral',
        text: 'Autenticación, base de datos y seguridad a nivel de fila. Cada usuario solo puede ver sus propios datos, que en una aplicación que maneja información de actividad física y salud no es un detalle menor.',
      },
      {
        title: 'React 19 en el frontend',
        text: 'Interfaz de aplicación real: paneles con la evolución del corredor, plan de la semana y detalle de cada sesión, pensada para consultarse desde el móvil justo antes de salir a correr.',
      },
    ],
    cierre: [
      'Zypace es un proyecto propio, y por eso es el mejor ejemplo de hasta dónde llega el desarrollo aquí: no es solo maquetar una web bonita, es construir producto con autenticación, base de datos, integraciones con APIs externas e IA aplicada a un problema concreto.',
      'Si tu proyecto no es una landing sino una aplicación, este es el tipo de trabajo del que hablamos.',
    ],
  },
  {
    slug: 'raiz',
    title: 'Raíz',
    label: 'Diseño web · Identidad · Proyecto sensible',
    intro:
      'Un espacio digital de memoria para familias que han pasado por un duelo perinatal. El encargo más delicado posible: una web donde el diseño no puede llamar la atención sobre sí mismo.',
    metaTitle: 'Caso: Raíz — espacio digital de memoria y duelo perinatal | Clickora',
    metaDescription:
      'Diseño y desarrollo de Raíz, un espacio de testimonios sobre duelo perinatal. Un caso donde la contención visual y el tono importaban más que cualquier efecto.',
    image: renderRaiz,
    url: 'https://raiz-b7d0a.web.app',
    urlLabel: 'raiz-b7d0a.web.app',
    ficha: [
      { key: 'Proyecto', value: 'Raíz' },
      { key: 'Sector', value: 'Social · Acompañamiento en el duelo' },
      { key: 'Tipo', value: 'Espacio de testimonios' },
      { key: 'Stack', value: 'Firebase · Diseño e identidad visual' },
      { key: 'Rol', value: 'Identidad, diseño y desarrollo' },
    ],
    reto: [
      'Raíz recoge testimonios de familias que han perdido un bebé durante el embarazo o el parto. Todo lo que normalmente se considera buen diseño de conversión —urgencia, contraste alto, llamadas a la acción insistentes— aquí es exactamente lo que no se debe hacer.',
      'El reto era construir un lugar donde alguien en el peor momento de su vida pudiera leer y compartir sin sentirse un usuario dentro de un embudo.',
    ],
    solucion: [
      {
        title: 'Identidad contenida',
        text: 'Paleta suave, tipografía amable y muchísimo aire. La decisión de diseño más importante fue de resta: quitar todo lo que pudiera leerse como marketing.',
      },
      {
        title: 'Ritmo de lectura pausado',
        text: 'Los testimonios se presentan con espacio y sin elementos que compitan por la atención. Nada de ventanas emergentes, banners ni sugerencias de "contenido relacionado".',
      },
      {
        title: 'Compartir sin exponerse',
        text: 'El proceso de enviar un testimonio se diseñó para que la persona controle en todo momento cuánto cuenta y con qué nombre, sin campos obligatorios innecesarios.',
      },
      {
        title: 'Firebase de base',
        text: 'Alojamiento y base de datos con las reglas de acceso ajustadas al contenido: material sensible que exige cuidado también en la parte que no se ve.',
      },
    ],
    cierre: [
      'Raíz es el proyecto que mejor explica cómo se entiende aquí el diseño: no se trata de aplicar siempre el mismo recetario de conversión, sino de entender qué necesita la persona que va a estar al otro lado.',
      'Una landing de ventas y un espacio de duelo se diseñan con criterios opuestos. Saber cuándo toca cada uno es el trabajo.',
    ],
  },
];
