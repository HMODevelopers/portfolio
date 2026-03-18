import {
  ContactLink,
  ExperienceItem,
  HeroMetric,
  HighlightItem,
  NavItem,
  ProjectItem,
  TechCategory,
} from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'fortalezas', label: 'Competencias' },
  { id: 'contacto', label: 'Contacto' },
];

export const HERO_METRICS: HeroMetric[] = [
  { value: '10+ años', label: 'Experiencia desarrollando y manteniendo soluciones para operación diaria.' },
  { value: 'Angular + .NET', label: 'Stack principal para productos empresariales, académicos y de gobierno.' },
  { value: 'Power BI + SQL', label: 'Dashboards, análisis de datos y optimización de consultas con impacto real.' },
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
    description: 'Servicios, APIs y lógica de negocio para soluciones empresariales y de misión crítica.',
    items: ['.NET (ASP.NET MVC / Web API / .NET Core)', 'NestJS (TypeScript)', 'PHP (Laravel / MVC)', 'Python (Flask)'],
  },
  {
    title: 'Frontend',
    description: 'Interfaces web mantenibles, integradas con APIs y enfocadas en una experiencia clara para el usuario.',
    items: [
      'Angular (v10–v20)',
      'JavaScript',
      'jQuery',
      'HTML / CSS',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI / Angular Material',
    ],
  },
  {
    title: 'Bases de datos',
    description: 'Modelado, consultas, mantenimiento y optimización orientados a operación continua.',
    items: ['SQL Server', 'MySQL / MariaDB', 'PostgreSQL'],
  },
  {
    title: 'DevOps / Herramientas',
    description: 'Versionado, despliegue, colaboración y análisis para equipos y productos en evolución constante.',
    items: ['Docker', 'Git', 'Azure DevOps / TFS', 'Power BI'],
  },
  {
    title: 'Seguridad',
    description: 'Controles de acceso y autenticación alineados a reglas de negocio y perfiles operativos.',
    items: ['JWT', 'Auth', 'RBAC'],
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

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'Portal Escolar multi-campus',
    role: 'Mid Full Stack Developer',
    timeline: 'Plataforma académica para +15,000 usuarios',
    description:
      'Plataforma académica y administrativa construida para centralizar procesos escolares, reglas de negocio y operación de múltiples campus en un mismo entorno.',
    problem:
      'La institución requería unificar procesos académicos y administrativos, mantener consistencia entre sedes y soportar una base amplia de usuarios.',
    impact:
      'Se fortaleció la operación institucional con una plataforma centralizada, escalable y alineada a necesidades reales de estudiantes, docentes y administración.',
    technologies: ['NestJS', 'Angular', 'SQL Server', 'TypeScript', 'Scrum'],
    highlights: [
      'Diseño de APIs y reglas de negocio para procesos académicos.',
      'Integración de módulos frontend y backend con enfoque multiusuario.',
      'Base técnica preparada para crecimiento funcional y continuidad operativa.',
    ],
  },
  {
    name: 'Sistema de Custodia',
    role: 'Mid Full Stack Developer',
    timeline: 'Trazabilidad y control institucional',
    description:
      'Sistema orientado al registro y seguimiento de procesos sensibles, con énfasis en trazabilidad, consulta de datos y estabilidad operativa.',
    problem:
      'Era necesario contar con un sistema claro y confiable para dar seguimiento a eventos, responsables y estados dentro de procesos institucionales críticos.',
    impact:
      'Se mejoró el control de la información, la consulta histórica y la capacidad operativa de las áreas responsables.',
    technologies: ['.NET', 'Angular', 'SQL Server', 'Web API', 'Power BI'],
    highlights: [
      'Desarrollo y mantenimiento sobre procesos críticos del sector público.',
      'Optimización de consultas SQL y mejora de tiempos de respuesta.',
      'Dashboards y reportes para seguimiento operativo con información accionable.',
    ],
  },
  {
    name: 'Sistema de Inventarios / POS',
    role: 'Full Stack Developer',
    timeline: 'Control comercial e inventario',
    description:
      'Solución web para administrar inventarios, ventas, movimientos y control operativo, pensada para facilitar procesos diarios y reducir errores manuales.',
    problem:
      'La operación requería mejor visibilidad sobre existencias, ventas y movimientos para mantener control confiable del negocio.',
    impact:
      'Se logró un seguimiento más preciso del inventario y de las transacciones, mejorando la organización y el control operativo.',
    technologies: ['ASP.NET MVC', 'Angular', 'SQL Server', 'JavaScript', 'Bootstrap'],
    highlights: [
      'Módulos de inventario, ventas y seguimiento de movimientos.',
      'Soporte y mantenimiento continuo en ambientes productivos.',
      'Mejoras evolutivas enfocadas en usabilidad y continuidad del servicio.',
    ],
  },
  {
    name: 'Plataforma de análisis de datos',
    role: 'Desarrollador / Analista de Datos',
    timeline: 'Reportes operativos y visualización',
    description:
      'Conjunto de tableros, reportes y procesos de análisis para transformar datos operativos en información útil para seguimiento y toma de decisiones.',
    problem:
      'Las áreas operativas necesitaban interpretar mejor la información disponible y contar con reportes claros para dar seguimiento a indicadores clave.',
    impact:
      'Se facilitó el acceso a información relevante mediante reportes y dashboards más claros, oportunos y alineados a necesidades reales.',
    technologies: ['Power BI', 'SQL Server', 'MySQL', 'PHP', 'Excel'],
    highlights: [
      'Construcción de dashboards y reportes operativos.',
      'Análisis de datos para detectar oportunidades de mejora.',
      'Soporte a usuarios en interpretación y aprovechamiento de la información.',
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Correo',
    value: 'carloslafarga22@gmail.com',
    href: 'mailto:carloslafarga22@gmail.com',
  },
  {
    label: 'Teléfono',
    value: '+52 662 395 3551',
    href: 'tel:+526623953551',
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
