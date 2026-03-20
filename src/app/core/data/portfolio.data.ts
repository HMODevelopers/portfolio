import {
  ContactLink,
  ExperienceItem,
  HeroMetric,
  HighlightItem,
  NavItem,
  TechCategory,
} from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'fortalezas', label: 'Competencias' },
  { id: 'contacto', label: 'Contacto' },
];

export const HERO_METRICS: HeroMetric[] = [
  { value: '10+ años', label: 'Experiencia en desarrollo y mantenimiento de soluciones para operación continua.' },
  { value: 'Angular + .NET', label: 'Stack principal para productos empresariales, académicos e institucionales.' },
  { value: 'Power BI + SQL', label: 'Dashboards, análisis de datos y optimización de consultas con impacto operativo real.' },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Adaptabilidad y aprendizaje rápido',
    description:
      'Me integro con facilidad a nuevos dominios, herramientas y procesos para generar valor desde etapas tempranas del proyecto.',
  },
  {
    title: 'Trabajo en equipo y colaboración',
    description:
      'Colaboro de forma cercana con equipos técnicos y usuarios clave para convertir necesidades reales en soluciones claras y funcionales.',
  },
  {
    title: 'Resolución de problemas y pensamiento analítico',
    description:
      'Analizo contexto, datos y restricciones operativas para proponer mejoras sostenibles enfocadas en estabilidad, rendimiento y continuidad.',
  },
];

export const TECHNOLOGY_CATEGORIES: TechCategory[] = [
  {
    title: 'Backend',
    description:
      'Desarrollo de APIs, servicios y lógica de negocio para sistemas empresariales y soluciones de misión crítica, enfocados en escalabilidad, seguridad y rendimiento.',
    items: ['.NET (ASP.NET MVC / API / Core)', 'NestJS (TypeScript)', 'PHP (Laravel / MVC)', 'Python (Flask)'],
  },
  {
    title: 'Frontend',
    description:
      'Construcción de interfaces modernas, integradas con APIs y enfocadas en experiencia de usuario, rendimiento y mantenibilidad a largo plazo.',
    items: [
      'Angular (v10–v20)',
      'Angular Material',
      'TypeScript / JavaScript',
      'HTML / CSS',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery',
    ],
  },
  {
    title: 'Bases de datos',
    description:
      'Diseño, modelado y optimización de bases de datos, enfocados en integridad, rendimiento y alta disponibilidad en entornos productivos.',
    items: ['SQL Server', 'PostgreSQL', 'MySQL / MariaDB'],
  },
  {
    title: 'DevOps / Herramientas',
    description:
      'Gestión de código, despliegue y herramientas de análisis para garantizar integración continua, estabilidad y evolución constante de los sistemas.',
    items: ['Git', 'Azure DevOps / TFS', 'Docker', 'Power BI'],
  },
  {
    title: 'Seguridad',
    description:
      'Implementación de autenticación y control de acceso basado en roles, alineado a reglas de negocio y seguridad en aplicaciones empresariales.',
    items: ['JWT', 'Autenticación', 'RBAC'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: 'Ene 2024 — Actualidad',
    role: 'Mid Full Stack Developer',
    company: 'Fiscalía General de Justicia del Estado de Sonora',
    type: 'Tiempo completo · .NET, Angular y SQL Server',
    summary:
      'Desarrollo y mantenimiento de sistemas que apoyan procesos institucionales, con foco en estabilidad operativa, análisis de información y rendimiento.',
    responsibilities: [
      'Desarrollo y mantenimiento de sistemas con .NET, Angular y SQL Server.',
      'Creación de dashboards con Power BI para seguimiento operativo y toma de decisiones.',
      'Optimización de consultas SQL y ajustes orientados a mejorar rendimiento y tiempos de respuesta.',
    ],
    impact: [
      'Mejora de estabilidad en sistemas críticos utilizados en la operación diaria.',
      'Mayor visibilidad de información mediante reportes y tableros con datos accionables.',
    ],
  },
  {
    period: 'Ene 2023 — Ene 2024',
    role: 'Mid Full Stack Developer',
    company: 'Universidad Estatal de Sonora',
    type: 'Tiempo completo · NestJS, Angular y SQL Server',
    summary:
      'Participación en una plataforma académica para más de 15,000 usuarios, desarrollando módulos backend y frontend alineados a procesos universitarios.',
    responsibilities: [
      'Desarrollo de una plataforma académica para +15,000 usuarios.',
      'Diseño de APIs, reglas de negocio e integración entre NestJS, Angular y SQL Server.',
      'Trabajo colaborativo bajo Scrum para entrega continua de funcionalidades.',
    ],
    impact: [
      'Soporte a una operación académica multiusuario con procesos centralizados.',
      'Base técnica robusta para evolucionar módulos y reglas institucionales.',
    ],
  },
  {
    period: 'Mar 2022 — Oct 2023',
    role: 'Desarrollador Web',
    company: 'ANFEXI',
    type: 'Tiempo completo · ASP.NET MVC y Angular',
    summary:
      'Desarrollo, soporte y mantenimiento de sistemas financieros en producción, asegurando continuidad del servicio y mejoras evolutivas.',
    responsibilities: [
      'Desarrollo de sistemas financieros con ASP.NET MVC y Angular.',
      'Soporte y mantenimiento en producción para incidencias y ajustes operativos.',
      'Corrección de errores y mejora continua sobre funcionalidades existentes.',
    ],
    impact: [
      'Mayor confiabilidad en procesos financieros soportados por la plataforma.',
      'Reducción de incidencias recurrentes mediante mantenimiento correctivo y evolutivo.',
    ],
  },
  {
    period: 'Feb 2019 — Ene 2023',
    role: 'JR Full Stack Developer',
    company: 'Secretaría de Educación y Cultura',
    type: 'Tiempo completo · .NET, PHP/Laravel y MySQL',
    summary:
      'Desarrollo de sistemas para docentes y áreas operativas, integrando backend, frontend, bases de datos y despliegues a producción.',
    responsibilities: [
      'Desarrollo de soluciones con .NET y PHP/Laravel.',
      'Integración con MySQL y mantenimiento de estructuras de datos para operación institucional.',
      'Soporte funcional, despliegues en producción y seguimiento a usuarios.',
    ],
    impact: [
      'Digitalización de procesos dirigidos a personal docente y administrativo.',
      'Continuidad operativa mediante soporte cercano y liberaciones controladas.',
    ],
  },
  {
    period: 'Jul 2018 — Feb 2019',
    role: 'Analista Programador',
    company: 'Fiscalía General de Justicia del Estado de Sonora',
    type: 'Tiempo completo · SQL Server, Angular y Web API',
    summary:
      'Mantenimiento de sistemas críticos y desarrollo de herramientas para mejorar consulta, limpieza y explotación de datos institucionales.',
    responsibilities: [
      'Mantenimiento de sistemas críticos en operación.',
      'Trabajo con SQL Server: stored procedures, consultas y limpieza de datos.',
      'Desarrollo de herramientas con Angular y Web API.',
    ],
    impact: [
      'Mayor confiabilidad en la información utilizada por áreas operativas.',
      'Mejor soporte a procesos internos mediante herramientas de consulta y seguimiento.',
    ],
  },
  {
    period: 'Mar 2015 — Jun 2018',
    role: 'Desarrollador / Analista de Datos',
    company: 'Secretaría de Educación y Cultura',
    type: 'Tiempo completo · PHP, MySQL y análisis operativo',
    summary:
      'Desarrollo del sistema SICAT, generación de reportes operativos y soporte a usuarios para asegurar continuidad y aprovechamiento de la información.',
    responsibilities: [
      'Desarrollo en PHP + MySQL para el sistema SICAT.',
      'Elaboración de reportes operativos y análisis de datos para distintas áreas.',
      'Atención y soporte a usuarios finales en procesos cotidianos.',
    ],
    impact: [
      'Mejora del acceso a información operativa para seguimiento y control.',
      'Atención directa a necesidades reales de usuarios con soluciones funcionales y sostenibles.',
    ],
  },
];

export const CONTACT_WHATSAPP_MESSAGE = 'Hola Carlos, vi tu portafolio y me gustaría ponerme en contacto contigo.';
export const CONTACT_WHATSAPP_URL = `https://wa.me/526624640131?text=${encodeURIComponent(CONTACT_WHATSAPP_MESSAGE)}`;

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Correo',
    value: 'carloslafarga22@gmail.com',
    href: 'mailto:carloslafarga22@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+52 662 464 0131',
    href: CONTACT_WHATSAPP_URL,
  },
  {
    label: 'GitHub',
    value: 'github.com/HMODevelopers',
    href: 'https://github.com/HMODevelopers',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/carlos-octavio-preciado-lafarga-0423a5ba',
    href: 'https://www.linkedin.com/in/carlos-octavio-preciado-lafarga-0423a5ba/',
  },
];
