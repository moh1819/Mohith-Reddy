// Enterprise Mock Data for CivicFlow & Case Studies
export const initialApplications = [
  {
    id: "APP-2026-8941",
    applicantName: "Elena Rostova",
    organization: "National Agri-Tech Initiative",
    program: "Rural Nutrition & Food Access Grant",
    submittedDate: "2026-03-24",
    amountRequested: "$124,500",
    status: "Approved",
    priority: "High",
    reviewedBy: "Marcus Vance",
    complianceScore: "98%"
  },
  {
    id: "APP-2026-8942",
    applicantName: "David K. Chen",
    organization: "Metropolitan Childcare Alliance",
    program: "Early Childhood Supplemental Nutrition",
    submittedDate: "2026-03-25",
    amountRequested: "$45,000",
    status: "Under Review",
    priority: "Medium",
    reviewedBy: "Sarah Jenkins",
    complianceScore: "92%"
  },
  {
    id: "APP-2026-8943",
    applicantName: "Amara Washington",
    organization: "Community Health & Wellness Hub",
    program: "Senior Commodity Food Initiative",
    submittedDate: "2026-03-26",
    amountRequested: "$82,000",
    status: "Approved",
    priority: "High",
    reviewedBy: "Marcus Vance",
    complianceScore: "99%"
  },
  {
    id: "APP-2026-8944",
    applicantName: "Brian O'Connor",
    organization: "Regional Logistics Network",
    program: "Cold-Chain Infrastructure Modernization",
    submittedDate: "2026-03-27",
    amountRequested: "$210,000",
    status: "Pending Review",
    priority: "High",
    reviewedBy: "Unassigned",
    complianceScore: "86%"
  },
  {
    id: "APP-2026-8945",
    applicantName: "Maria Guadalupe Santos",
    organization: "Sustainable Growers Co-op",
    program: "Farm-to-Institution Nutrition Distribution",
    submittedDate: "2026-03-28",
    amountRequested: "$68,400",
    status: "Approved",
    priority: "Medium",
    reviewedBy: "Elena Kim",
    complianceScore: "95%"
  },
  {
    id: "APP-2026-8946",
    applicantName: "Robert J. Sterling",
    organization: "Regional Food Rescue Collaborative",
    program: "Emergency Surplus Recovery Grant",
    submittedDate: "2026-03-29",
    amountRequested: "$35,000",
    status: "Under Review",
    priority: "Low",
    reviewedBy: "Sarah Jenkins",
    complianceScore: "91%"
  },
  {
    id: "APP-2026-8947",
    applicantName: "Tanya L. Henderson",
    organization: "Public Health Action Trust",
    program: "Mobile Pantry & Cold Storage Expansion",
    submittedDate: "2026-03-30",
    amountRequested: "$145,000",
    status: "Rejected",
    priority: "High",
    reviewedBy: "David Holmgren",
    complianceScore: "64%"
  },
  {
    id: "APP-2026-8948",
    applicantName: "Kavita Patel",
    organization: "Urban Agriculture Innovation Lab",
    program: "Controlled Environment Nutrition Pilot",
    submittedDate: "2026-03-31",
    amountRequested: "$53,200",
    status: "Pending Review",
    priority: "Medium",
    reviewedBy: "Unassigned",
    complianceScore: "88%"
  },
  {
    id: "APP-2026-8949",
    applicantName: "Samuel G. Fletcher",
    organization: "Valley Family Outreach Services",
    program: "Rural Nutrition & Food Access Grant",
    submittedDate: "2026-04-01",
    amountRequested: "$96,000",
    status: "Approved",
    priority: "High",
    reviewedBy: "Elena Kim",
    complianceScore: "97%"
  },
  {
    id: "APP-2026-8950",
    applicantName: "Annette M. Morales",
    organization: "Northland Elder Care Partners",
    program: "Senior Commodity Food Initiative",
    submittedDate: "2026-04-02",
    amountRequested: "$41,500",
    status: "Pending Review",
    priority: "Low",
    reviewedBy: "Unassigned",
    complianceScore: "89%"
  }
];

export const monthlyChartData = [
  { month: "Nov 2025", total: 42, approved: 34, pending: 6, rejected: 2 },
  { month: "Dec 2025", total: 38, approved: 30, pending: 5, rejected: 3 },
  { month: "Jan 2026", total: 56, approved: 44, pending: 9, rejected: 3 },
  { month: "Feb 2026", total: 68, approved: 52, pending: 11, rejected: 5 },
  { month: "Mar 2026", total: 84, approved: 64, pending: 14, rejected: 6 },
  { month: "Apr 2026", total: 72, approved: 58, pending: 10, rejected: 4 }
];

export const caseStudies = [
  {
    id: "tans",
    title: "Texas Department of Agriculture – Texas Automated Nutrition System (TANS)",
    role: "Senior Full Stack .NET Developer",
    period: "Feb 2026 – Present",
    tagline: "Statewide Nutrition & Food Assistance Enterprise Modernization",
    description: "Enterprise modernization of Texas's statewide nutrition program platform, managing provider registration, annual funding applications, claims adjudication, compliance audits, payment disbursement, and USDA regulatory reporting.",
    challenges: [
      "Transitioning monolithic legacy systems into decoupled ASP.NET Core MVC Razor views and high-throughput REST APIs without disrupting statewide funding.",
      "Ensuring strict WCAG 2.1 AA and Section 508 accessibility compliance across public provider portals and internal staff workflows.",
      "Standardizing complex business validation rules across multi-tier reimbursement calculations and automated audit trails."
    ],
    architecture: [
      "Backend: C# .NET 8 / ASP.NET Core Web API with Clean Architecture and Domain-Driven Design.",
      "Database & ETL: Microsoft SQL Server, Entity Framework Core, optimized stored procedures, and Azure Data Factory / SSIS data migration pipelines.",
      "Frontend: ASP.NET Core MVC Razor views, Angular 8+ components, Kendo UI, accessible SCSS enterprise design system, and jQuery modernization.",
      "Cloud & Observability: Microsoft Azure App Service, Azure SQL Database, Application Insights telemetry with structured logging, and Azure DevOps CI/CD."
    ],
    highlights: [
      "Architected accessible, reusable form validation patterns that significantly reduced submission error rates.",
      "Achieved full WCAG 2.1 AA conformance verified with axe DevTools automated scans and JAWS screen reader manual testing.",
      "Built automated background batch jobs for claims reconciliation, saving dozens of manual administrative hours weekly."
    ],
    techStack: ["C#", ".NET 8", "ASP.NET Core MVC", "REST APIs", "Entity Framework Core", "SQL Server", "Angular", "Kendo UI", "Azure App Service", "Azure DevOps", "WCAG 2.1 AA", "JAWS"]
  },
  {
    id: "verizon",
    title: "Verizon – Enterprise Customer Applications & GIS Integration",
    role: "Senior Full Stack .NET Developer",
    period: "Jun 2024 – Feb 2026",
    tagline: "Telecom Infrastructure, GIS Spatial Integration & Automated Document Systems",
    description: "Enterprise telecommunications platform engineering supporting high-volume customer communications, automated document generation, infrastructure service workflows, and location-based spatial data services.",
    challenges: [
      "Synchronizing real-time geographic infrastructure coordinates with high-throughput backend customer and contract services.",
      "Handling thousands of concurrent document generation and notification requests with zero drop rate and complete audit logging.",
      "Modernizing legacy screens into an integrated enterprise design system."
    ],
    architecture: [
      "Microservices built on ASP.NET Core Web API using Clean Architecture and Repository / Unit-of-Work design patterns.",
      "GIS Integration: ArcGIS/Esri spatial REST endpoints mapped into custom interactive .NET map visualization workflows.",
      "Frontend: Angular, React modules, ASP.NET MVC with Sass, Bootstrap/Material design systems, and responsive data grids.",
      "Cloud & Observability: Microsoft Azure App Services, Docker containerization, Azure Monitor telemetry, and Power BI operational reporting."
    ],
    highlights: [
      "Integrated ArcGIS mapping layers directly into customer workflows to visualize network asset proximity during field service dispatching.",
      "Refactored legacy document generation into automated asynchronous backend pipelines with structured logging and correlation IDs.",
      "Maintained zero-downtime Azure DevOps deployment stages with automated unit and integration test coverage."
    ],
    techStack: ["C#", "ASP.NET Core", "Web API", "React", "Angular", "ArcGIS / Esri", "SQL Server", "Azure Monitor", "Docker", "Sass", "Power BI", "OAuth 2.0 / JWT"]
  },
  {
    id: "nysif",
    title: "New York State Insurance Fund (NYSIF)",
    role: "Full Stack .NET Developer",
    period: "Aug 2023 – Jun 2024",
    tagline: "Workers' Compensation & Disability Claims Administration Modernization",
    description: "Enterprise insurance platform enhancements and modernization supporting state workers' compensation claims adjudication, policy servicing, fraud prevention, and regulatory reporting.",
    challenges: [
      "Ensuring sub-second search and retrieval across millions of historical claims and medical payment records.",
      "Enforcing strict data privacy standards and Section 508 accessibility compliance across public and internal claims examiner portals.",
      "Generating automated state audit trails for every claim status modification and payout authorization."
    ],
    architecture: [
      "C# ASP.NET MVC architecture decoupled with service layer repositories and SQL Server / Oracle stored procedures.",
      "Data ETL: SSIS packages and Azure Data Factory orchestration pipelines moving historical policy archives into Azure SQL.",
      "Security: Azure Active Directory RBAC with JWT token validation, anti-CSRF token verification, and input sanitation.",
      "Reporting: Power BI dashboards visualizing claim backlog bottlenecks and claims adjuster cycle times."
    ],
    highlights: [
      "Engineered automated audit log generators and payment status verification routines, ensuring seamless state regulatory compliance.",
      "Redesigned claimant intake forms into accessible, multi-step responsive screens with inline server and client-side validation.",
      "Optimized complex SQL and Oracle execution plans, significantly lowering query execution times for claims analysts."
    ],
    techStack: ["C#", "ASP.NET MVC", "SQL Server", "Oracle DB", "T-SQL / PL-SQL", "Azure SQL", "Azure AD", "SSIS", "Power BI", "WCAG 2.1 AA", "Bootstrap"]
  },
  {
    id: "unionpacific",
    title: "Union Pacific Railroad – Railroad Operations & GIS Modernization",
    role: "Full Stack .NET Developer",
    period: "Apr 2021 – Aug 2023",
    tagline: "Logistics Optimization, GIS Spatial Tracking & Asset Infrastructure",
    description: "Enterprise railroad application development supporting train dispatch workflows, spatial infrastructure mapping, rail equipment tracking, and real-time operational reporting.",
    challenges: [
      "Visualizing dynamic geo-spatial railroad network tracking data alongside complex asset scheduling records.",
      "Modernizing legacy desktop and Web Forms components into responsive web modules without downtime.",
      "Integrating disparate enterprise databases across Microsoft SQL Server and Oracle clusters."
    ],
    architecture: [
      "C# .NET Core, ASP.NET MVC, Web API, and Blazor operational dashboard components.",
      "ArcGIS/Esri map service integration with custom spatial query layers.",
      "Relational databases: Microsoft SQL Server and Oracle Database with high-volume stored procedures and index optimization.",
      "Azure App Service and Azure DevOps automated CI/CD deployment pipelines."
    ],
    highlights: [
      "Implemented responsive operational data tables with dynamic filtering for railroad dispatchers.",
      "Built automated backend batch synchronization jobs processing spatial route telemetries.",
      "Standardized accessibility and keyboard navigation across all dispatcher control views."
    ],
    techStack: ["C#", ".NET Core", "ASP.NET MVC", "Blazor", "ArcGIS / Esri", "SQL Server", "Oracle DB", "Azure App Service", "Azure DevOps"]
  }
];

export const skillsData = {
  backend: [
    { name: "C#", level: "Expert", years: "12+ yrs" },
    { name: ".NET (Core 8/7/6 & Modern .NET)", level: "Expert", years: "10+ yrs" },
    { name: "ASP.NET Core MVC & Razor", level: "Expert", years: "12+ yrs" },
    { name: "Blazor (Server & WebAssembly)", level: "Advanced", years: "5+ yrs" },
    { name: "RESTful Web APIs & Microservices", level: "Expert", years: "10+ yrs" },
    { name: "Entity Framework / EF Core", level: "Advanced", years: "9+ yrs" },
    { name: "Clean Architecture & SOLID", level: "Expert", years: "10+ yrs" },
    { name: "LINQ & ADO.NET", level: "Expert", years: "11+ yrs" }
  ],
  frontend: [
    { name: "React (Hooks, Context, Redux)", level: "Advanced", years: "6+ yrs" },
    { name: "Blazor Components & Interop", level: "Advanced", years: "5+ yrs" },
    { name: "Angular (8+) & TypeScript", level: "Advanced", years: "6+ yrs" },
    { name: "JavaScript (ES6+) & Modern DOM", level: "Expert", years: "12+ yrs" },
    { name: "HTML5 Semantic Markup", level: "Expert", years: "12+ yrs" },
    { name: "CSS3 / Sass (SCSS) / Flexbox / Grid", level: "Expert", years: "12+ yrs" },
    { name: "Enterprise Design Systems & Bootstrap", level: "Expert", years: "10+ yrs" },
    { name: "Kendo UI & Material Design", level: "Advanced", years: "6+ yrs" }
  ],
  accessibility: [
    { name: "WCAG 2.1 Level AA Standards", level: "Specialist", years: "7+ yrs" },
    { name: "Section 508 Federal Compliance", level: "Specialist", years: "7+ yrs" },
    { name: "WAI-ARIA Attributes & Landmark Roles", level: "Specialist", years: "7+ yrs" },
    { name: "Keyboard Focus Management & Trapping", level: "Specialist", years: "8+ yrs" },
    { name: "Screen Reader Testing (JAWS, NVDA)", level: "Advanced", years: "6+ yrs" },
    { name: "Automated Accessibility Auditing (axe)", level: "Expert", years: "7+ yrs" },
    { name: "High-Contrast Typography & Forms", level: "Expert", years: "9+ yrs" },
    { name: "Accessible Error Messaging (aria-live)", level: "Expert", years: "8+ yrs" }
  ],
  database: [
    { name: "Microsoft SQL Server & Azure SQL", level: "Expert", years: "12+ yrs" },
    { name: "Oracle Database (11g/12c/19c)", level: "Advanced", years: "7+ yrs" },
    { name: "T-SQL & PL/SQL Stored Procedures", level: "Expert", years: "12+ yrs" },
    { name: "Query Optimization & Index Tuning", level: "Advanced", years: "10+ yrs" },
    { name: "SSIS & Azure Data Factory (ETL)", level: "Advanced", years: "8+ yrs" },
    { name: "ArcGIS / Spatial Data Integration", level: "Proficient", years: "5+ yrs" }
  ],
  cloudDevops: [
    { name: "Microsoft Azure (App Services, SQL, VMs)", level: "Advanced", years: "8+ yrs" },
    { name: "Azure Monitor & Application Insights", level: "Advanced", years: "6+ yrs" },
    { name: "Azure DevOps (Pipelines, Repos, Boards)", level: "Advanced", years: "8+ yrs" },
    { name: "Git, GitHub & Enterprise Branching", level: "Expert", years: "11+ yrs" },
    { name: "Docker Containerization", level: "Proficient", years: "4+ yrs" },
    { name: "CI/CD Build & Release Automation", level: "Advanced", years: "8+ yrs" },
    { name: "Visual Studio & VS Code", level: "Expert", years: "12+ yrs" }
  ]
};

export const careerTimeline = [
  {
    role: "Senior Full Stack .NET Developer",
    client: "Texas Department of Agriculture (TDA)",
    period: "Feb 2026 – Present",
    location: "Austin, TX",
    summary: "Leading front-end and full-stack modernization of the Texas Automated Nutrition System (TANS), transitioning legacy workflows to accessible ASP.NET Core MVC Razor views, Angular modules, and REST API microservices with rigorous WCAG 2.1 AA conformance."
  },
  {
    role: "Senior Full Stack .NET Developer",
    client: "Verizon",
    period: "Jun 2024 – Feb 2026",
    location: "Remote / Enterprise",
    summary: "Engineered scalable customer communication systems, automated document generation pipelines, and GIS/ArcGIS spatial mapping integrations using C# .NET Core, React, Angular, Azure App Services, and SQL Server."
  },
  {
    role: "Full Stack .NET Developer",
    client: "New York State Insurance Fund (NYSIF)",
    period: "Aug 2023 – Jun 2024",
    location: "Albany, NY",
    summary: "Modernized claims adjudication and policy servicing platforms using ASP.NET MVC, Azure SQL, Oracle DB, SSIS data migration pipelines, and Section 508-compliant responsive user interfaces."
  },
  {
    role: "Full Stack .NET Developer",
    client: "Union Pacific Railroad",
    period: "Apr 2021 – Aug 2023",
    location: "Omaha, NE",
    summary: "Delivered railroad operations management applications integrating ArcGIS spatial services, C# ASP.NET Web API backend engines, Blazor / Angular components, and Azure DevOps CI/CD automation."
  },
  {
    role: "Full Stack .NET Developer",
    client: "Blue Cross Blue Shield",
    period: "Nov 2019 – Apr 2021",
    location: "Richardson, TX",
    summary: "Modernized healthcare member and claims management interfaces using React, Angular, .NET Core Web API, SQL Server, and agile TDD development standards."
  }
];
