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
  { id: 'fortalezas', label: 'Fortalezas' },
  { id: 'contacto', label: 'Contacto' },
];

export const HERO_METRICS: HeroMetric[] = [
  { value: 'APIs empresariales', label: 'Diseñadas para flujos críticos y escalables' },
  { value: 'Arquitectura backend', label: 'Modelado robusto, mantenible y segura' },
  { value: 'Impacto real', label: 'Proyectos para gobierno, educación y negocio privado' },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Pensamiento sistémico',
    description:
      'Traduzco reglas de negocio complejas en soluciones técnicas claras, sostenibles y preparadas para escalar.',
  },
  {
    title: 'Entrega orientada a negocio',
    description:
      'Priorizo trazabilidad, seguridad, rendimiento y experiencia de usuario para generar valor medible desde la primera iteración.',
  },
  {
    title: 'Integración end-to-end',
    description:
      'Conecto backend, frontend y datos en productos consistentes, confiables y listos para ambientes de producción.',
  },
];

export const TECHNOLOGY_CATEGORIES: TechCategory[] = [
  {
    title: 'Backend & APIs',
    description: 'Servicios empresariales, dominio, seguridad y tiempo real.',
    items: ['NestJS', 'Node.js', 'TypeScript', '.NET', 'PHP', 'Python', 'Flask', 'APIs REST', 'Socket.IO', 'JWT', 'RBAC'],
  },
  {
    title: 'Frontend & Integración',
    description: 'Interfaces sólidas para ecosistemas conectados.',
    items: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Signals', 'Arquitectura frontend', 'Integración frontend/backend'],
  },
  {
    title: 'Datos & Persistencia',
    description: 'Modelado, consultas eficientes y consistencia operativa.',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Prisma', 'Entity Framework', 'Diseño relacional', 'Optimización SQL'],
  },
  {
    title: 'DevOps & Herramientas',
    description: 'Flujo de entrega, trazabilidad y despliegues repetibles.',
    items: ['Docker', 'Git', 'Linux', 'CI/CD', 'Documentación técnica', 'Versionado', 'Buenas prácticas de release'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2023 — Actualidad',
    role: 'Software Engineer / Backend-Full Stack Developer',
    company: 'Proyectos empresariales y sector público',
    type: 'Remoto / Híbrido · Desarrollo de software y arquitectura',
    summary:
      'Participación en soluciones de misión crítica con foco en APIs, sistemas administrativos, módulos de seguridad y plataformas para operación institucional.',
    responsibilities: [
      'Diseño y desarrollo de servicios backend con NestJS, .NET y TypeScript.',
      'Modelado de bases de datos relacionales para procesos administrativos, inventarios y trazabilidad.',
      'Integración de paneles frontend con consumo de APIs, autenticación JWT y control de acceso por roles.',
    ],
    impact: [
      'Reducción de fricción operativa mediante automatización de flujos y centralización de información.',
      'Mayor mantenibilidad gracias a arquitectura modular, separación de responsabilidades y contratos claros.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Software Developer',
    company: 'Soluciones para educación y negocios',
    type: 'Tiempo completo · Implementación de plataformas internas',
    summary:
      'Construcción de sistemas para control escolar, administración operativa, inventarios y experiencias web con soporte a múltiples actores.',
    responsibilities: [
      'Desarrollo de módulos para portales escolares multi-campus y sistemas administrativos.',
      'Implementación de reportes, consultas SQL complejas y reglas de negocio alineadas al dominio.',
      'Mantenimiento evolutivo y mejora continua de productos en producción.',
    ],
    impact: [
      'Aceleración de procesos internos y reducción de errores manuales mediante digitalización.',
      'Soporte a crecimiento funcional sin comprometer estabilidad del sistema.',
    ],
  },
  {
    period: '2019 — 2021',
    role: 'Ingeniero de Software',
    company: 'Consultoría y desarrollo de soluciones a medida',
    type: 'Proyectos por objetivos · Full stack y base de datos',
    summary:
      'Participación en productos orientados a control operativo, seguridad de la información y conectividad entre distintas capas del sistema.',
    responsibilities: [
      'Levantamiento técnico, análisis de requerimientos y diseño de soluciones escalables.',
      'Construcción de endpoints, catálogos, dashboards y estructuras de permisos.',
      'Pruebas funcionales, optimización y acompañamiento a puesta en producción.',
    ],
    impact: [
      'Entrega de soluciones adaptables a diferentes clientes y contextos regulatorios.',
      'Base sólida para evolucionar productos con enfoque en rendimiento y confiabilidad.',
    ],
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'Portal Escolar Multi-campus',
    role: 'Backend / Full Stack Engineer',
    timeline: 'Plataforma académica y administrativa',
    description:
      'Portal integral para operación escolar con módulos de alumnos, docentes, pagos, comunicación y administración multi-sede.',
    problem:
      'Las instituciones requerían unificar procesos dispersos, visibilidad operativa y control sobre diferentes campus.',
    impact:
      'Centralización de la operación académica y administrativa con una plataforma escalable y preparada para crecer por módulos.',
    technologies: ['NestJS', 'Angular', 'TypeScript', 'MySQL', 'JWT', 'RBAC'],
    highlights: [
      'Diseño de APIs y estructura de roles por perfil institucional.',
      'Integración de vistas administrativas y flujos de consulta de información clave.',
      'Base preparada para nuevas sedes, usuarios y automatizaciones futuras.',
    ],
  },
  {
    name: 'Sistema de Custodia / Cadena de Custodia',
    role: 'Backend Engineer / Systems Designer',
    timeline: 'Sector público y trazabilidad operativa',
    description:
      'Sistema para registrar eventos, responsables, evidencia y trazabilidad completa en procesos sensibles de custodia.',
    problem:
      'Se necesitaba auditar movimientos y responsables con integridad de datos, historial confiable y acceso controlado.',
    impact:
      'Mayor transparencia operativa, trazabilidad por evento y soporte a procesos institucionales con altos requerimientos de control.',
    technologies: ['.NET', 'SQL Server', 'Entity Framework', 'RBAC', 'APIs REST'],
    highlights: [
      'Modelado orientado a auditoría y seguimiento cronológico.',
      'Control de acceso por roles y restricciones según contexto operativo.',
      'Enfoque en consistencia, seguridad y consulta histórica.',
    ],
  },
  {
    name: 'REFASOFT · Inventarios y Punto de Venta',
    role: 'Software Engineer',
    timeline: 'Operación comercial y control de inventario',
    description:
      'Sistema para administrar inventarios, ventas, productos, movimientos y reportes operativos para negocio minorista.',
    problem:
      'La empresa requería precisión sobre existencias, ventas y trazabilidad de operaciones diarias.',
    impact:
      'Visibilidad sobre inventario y ventas, reducción de pérdidas por errores manuales y mayor control del negocio.',
    technologies: ['PHP', 'MySQL', 'Angular', 'SCSS', 'APIs REST'],
    highlights: [
      'Catálogo de productos, movimientos y panel de indicadores operativos.',
      'Integración entre módulos administrativos y flujo de venta.',
      'Estructura mantenible para sumar nuevas reglas comerciales.',
    ],
  },
  {
    name: 'Plataforma de Análisis de Riesgo',
    role: 'Backend / Data-focused Engineer',
    timeline: 'Evaluación de riesgo y toma de decisiones',
    description:
      'Plataforma para consolidar datos, reglas y resultados de evaluación en procesos de análisis y seguimiento.',
    problem:
      'Era necesario transformar múltiples variables en información accionable con reglas consistentes y tiempos de respuesta adecuados.',
    impact:
      'Mejora de la capacidad de análisis y soporte a decisiones con información centralizada y consultable.',
    technologies: ['NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'TypeScript'],
    highlights: [
      'Diseño de dominio y persistencia para criterios complejos.',
      'Preparación para integración con servicios externos y reportes.',
      'Arquitectura limpia para evolución de reglas y procesos.',
    ],
  },
  {
    name: 'Sistemas Administrativos / Empresariales',
    role: 'Full Stack Engineer',
    timeline: 'Automatización operativa y digitalización',
    description:
      'Conjunto de soluciones internas para control de procesos, catálogos, usuarios, permisos y seguimiento operativo.',
    problem:
      'Los equipos trabajaban con hojas de cálculo, procesos manuales y baja visibilidad del estado de sus operaciones.',
    impact:
      'Digitalización de flujos, reducción de duplicidad y mejor seguimiento de tareas, registros y decisiones.',
    technologies: ['Angular', 'NestJS', 'SQL Server', 'Docker', 'Git'],
    highlights: [
      'Implementación de módulos modulares y reutilizables.',
      'Definición de catálogos, validaciones y reglas por proceso.',
      'Base sólida para escalar hacia nuevas necesidades del negocio.',
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Correo',
    value: 'carlos.lafarga.dev@gmail.com',
    href: 'mailto:carlos.lafarga.dev@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/carloslafarga',
    href: 'https://github.com/carloslafarga',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/carlos-lafarga',
    href: 'https://www.linkedin.com/in/carlos-lafarga',
  },
];
