export const personalInfo = {
  name: "Ayush Patel",
  role: "Full Stack / Agentic AI Developer",
  education: "B.Tech in Information Technology, NIT Raipur, 2023–2027",
  email: "ayush005rkt@gmail.com",
  github: "https://github.com/ayush-patel1",
  linkedin: "https://www.linkedin.com/in/ayush-patel1/",
  location: "Varanasi, Uttar Pradesh",
  coordinates: "21°14'N 81°38'E",
  positioning: "I build intelligent systems that connect AI, software, and infrastructure.",
  heroHeadline: "Engineering intelligent systems. Building what’s next.",
  heroSupporting: "From full-stack products to multi-agent AI workflows, I turn complex engineering problems into usable, reliable software.",
  resumeUrl: "https://drive.google.com/file/d/1O4VAMpWOqkBi31fgR8_xu6L1Yu5iFdD9/view?usp=sharing"
};

export const projectsData = [
  {
    id: "neurorepurpose-ai",
    number: "01",
    title: "NeuroRepurpose AI",
    category: "AGENTIC AI / BIOMEDICAL RESEARCH",
    stack: ["LangGraph", "FastAPI", "React", "Python", "RAG", "LLM APIs"],
    summary: "An exploratory research platform that searches PubMed, extracts text from research PDFs, coordinates specialized agents, and produces source-linked literature summaries and reports.",
    image: "/images/project-neurorepurpose.webp",
    links: {
      demo: "https://pharma-mine.netlify.app/",
      github: "https://github.com/ayush-patel1/pharma-agentic-ai",
      caseStudy: "/work/neurorepurpose-ai"
    },
    capabilities: [
      "PubMed literature retrieval with biomedical query expansion",
      "PDF document ingestion and structured text extraction",
      "Compound and indication detection when configured",
      "Four-agent coordinated workflow orchestration via LangGraph",
      "Source-grounded summarization with citation preservation",
      "Structured scientific report generation and markdown synthesis",
      "HTML export and downloadable research dossiers"
    ],
    architecture: [
      { step: "01", title: "User Query / PDF", desc: "Target disease, compound or document upload" },
      { step: "02", title: "Master Agent", desc: "Decomposes research goal into task graph" },
      { step: "03", title: "Search & Extraction", desc: "Queries PubMed API and parses PDF chunks" },
      { step: "04", title: "Summarizer Agent", desc: "Generates citation-backed finding nodes" },
      { step: "05", title: "Report Agent", desc: "Synthesizes structured scientific dossier" },
      { step: "06", title: "Research Workspace", desc: "Interactive UI with inspectable claims" }
    ],
    challenges: [
      "Coordinating multi-agent execution while maintaining state determinism across nodes",
      "Passing typed state through LangGraph checkpoints without payload bloat",
      "Extracting coherent tabular data and clinical text from diverse PDF publication formats",
      "Grounding LLM summaries directly in retrieved PubMed IDs to eliminate hallucinations",
      "Gracefully handling sparse or missing compound/indication pairings in literature",
      "Providing full inspection into intermediate agent reasoning steps for researchers"
    ],
    tradeoffs: "Prioritized citation accuracy and traceability over rapid single-turn generation. Used LangGraph state machines instead of autonomous loops to maintain strict verification gates.",
    disclaimer: "Exploratory research tool. Generated summaries and reports do not establish drug safety, clinical efficacy, or validated medical recommendations."
  },
  {
    id: "secure-gluco",
    number: "02",
    title: "SecureGluco",
    category: "AI / CYBERSECURITY / IoMT",
    stack: ["Python", "ANN-LSTM", "TensorFlow", "Node.js", "Streamlit", "IoMT"],
    summary: "A proof-of-concept intrusion detection platform exploring how machine-learning models can identify malicious network traffic targeting connected medical devices.",
    image: "/images/project-securegluco.webp",
    links: {
      dashboard: "https://secure-gluco.vercel.app/",
      demo: "https://modelbackendai.streamlit.app/",
      github: "https://github.com/ayush-patel1/secure-gluco",
      caseStudy: "/work/secure-gluco"
    },
    capabilities: [
      "Real-time and batch network traffic preprocessing",
      "Feature selection and continuous min-max normalization",
      "Hybrid ANN-LSTM deep learning attack classification",
      "Multi-class intrusion detection across known attack vectors",
      "Interactive model inference visualization and confidence scoring",
      "Operational security monitoring dashboard with incident alerts",
      "Lightweight model footprint targeted for edge-gateway deployment"
    ],
    architecture: [
      { step: "01", title: "Network Traffic", desc: "Packet flow captures from IoMT telemetry" },
      { step: "02", title: "Preprocessing", desc: "Packet parsing, cleaning, and sanitization" },
      { step: "03", title: "Feature Selection", desc: "Dimensionality reduction & normalization" },
      { step: "04", title: "ANN-LSTM Model", desc: "Captures spatial features and temporal sequences" },
      { step: "05", title: "Attack Classifier", desc: "Multi-class categorization & anomaly detection" },
      { step: "06", title: "Security Dashboard", desc: "Real-time telemetry and incident triage UI" }
    ],
    challenges: [
      "Handling imbalanced telemetry datasets where benign traffic vastly outnumbers attack instances",
      "Balancing temporal sequence depth in LSTM with real-time inference latency constraints",
      "Normalizing diverse IoMT protocol headers into consistent feature tensors",
      "Minimizing false positives to prevent alarm fatigue in simulated clinical environments",
      "Designing an intuitive security analyst dashboard for inspecting attack vectors"
    ],
    tradeoffs: "Selected a hybrid ANN-LSTM architecture over heavier transformer models to allow potential deployment on resource-constrained medical edge gateways.",
    disclaimer: "Experimental proof of concept evaluated on benchmark network intrusion datasets. Does not provide clinical guarantees or certified medical device safety."
  },
  {
    id: "safety-management",
    number: "03",
    title: "Safety & Maintenance Portal",
    category: "FULL STACK / INDUSTRIAL OPERATIONS",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Recharts"],
    summary: "A full-stack industrial operations platform for managing equipment, tracking maintenance, recording incidents, and visualizing operational performance.",
    image: "/images/project-safety-management.webp",
    links: {
      demo: "https://safety-management-f.onrender.com/",
      github: "https://github.com/ayush-patel1/safety-management",
      caseStudy: "/work/safety-management"
    },
    capabilities: [
      "Comprehensive machine and machinery asset registry",
      "Real-time equipment operational status and health tracking",
      "Incident logging and maintenance ticketing workflows",
      "Preventative maintenance scheduling with recurrence triggers",
      "Role-based access control (Operator, Technician, Safety Officer, Admin)",
      "Secure JWT authentication and bcrypt password hashing",
      "Cloudinary asset storage for equipment inspection photos",
      "Operational analytics with Recharts performance breakdowns",
      "Mobile-responsive technician dashboard"
    ],
    architecture: [
      { step: "01", title: "React Frontend", desc: "Responsive operations dashboard with state caches" },
      { step: "02", title: "Express REST API", desc: "Resource routing, validation & business logic" },
      { step: "03", title: "Auth & RBAC", desc: "JWT verification and permission middleware" },
      { step: "04", title: "MongoDB Database", desc: "Document storage for assets, tickets, and logs" },
      { step: "05", title: "Cloudinary Service", desc: "Encrypted image and documentation storage" }
    ],
    challenges: [
      "Structuring complex relational links between machines, maintenance history, and incident reports",
      "Enforcing strict role-based authorization so technicians only modify assigned tickets",
      "Designing responsive charts and tables that display critical operational metrics cleanly",
      "Handling multipart image uploads reliably across slow industrial mobile connections",
      "Optimizing query performance for asset history logs with compound database indices"
    ],
    tradeoffs: "Used document-based MongoDB models with denormalized status caches for rapid dashboard reads, balancing schema flexibility with data consistency.",
    disclaimer: "Operational demo deployed on public cloud instances. Service availability depends on host instance waking."
  },
  {
    id: "support2fix",
    number: "04",
    title: "Support2Fix",
    category: "AGENTIC ENGINEERING / DEVELOPER TOOLS",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "LangGraph", "MCP", "PostgreSQL", "Docker", "GitHub Actions"],
    summary: "An engineering investigation platform designed to turn customer-support issues into evidence-backed investigations, using controlled integrations with code repositories, logs, deployments, and databases.",
    image: "/images/project-support2fix.webp",
    links: {
      github: "https://github.com/ayush-patel1/Support2Fix",
      caseStudy: "/work/support2fix"
    },
    capabilities: [
      "User authentication and multi-tenant organization isolation",
      "Support ticket ingestion and customer reproduction context",
      "Integration management for local and cloud developer adapters",
      "GitHub App code-host integration for branch and repository reads",
      "Model Context Protocol (MCP) server exposing controlled tools",
      "Policy-enforcing ToolGateway enforcing read-only boundaries",
      "Structured evidence collection linking logs to stack traces",
      "Source-matched AI hypotheses generation when configured",
      "Mandatory human review before any code repository mutations"
    ],
    architecture: [
      { step: "01", title: "Support Ticket", desc: "Raw issue report, logs, and customer context" },
      { step: "02", title: "Evidence Collection", desc: "Adapters gather stack traces & deployment logs" },
      { step: "03", title: "Integration Adapters", desc: "GitHub, CloudWatch, and DB adapters" },
      { step: "04", title: "ToolGateway / MCP", desc: "Policy-enforced tool execution environment" },
      { step: "05", title: "Matched Hypothesis", desc: "Root-cause hypothesis linked to code files" },
      { step: "06", title: "Human Review", desc: "Engineer verifies evidence before any action" }
    ],
    challenges: [
      "Establishing strict organization-scoped isolation across all tool executions",
      "Building a policy-enforced ToolGateway to prevent unauthorized code mutations",
      "Sanitizing customer log data and redacting PII before context ingestion",
      "Standardizing disparate log, deploy, and git sources into unified investigation sessions",
      "Designing a transparent verification UX where engineers can audit every AI deduction"
    ],
    tradeoffs: "Enforced strict human-in-the-loop gates. The system is designed to accelerate root-cause investigation with verified evidence, rather than autonomously creating pull requests without oversight.",
    statusBreakdown: {
      implemented: [
        "User authentication and organization isolation",
        "Support tickets and customer context schemas",
        "Integration management framework",
        "Local code, log, deployment, and data adapters",
        "GitHub App code-host integration",
        "MCP server exposing integration tools",
        "Policy-enforcing ToolGateway boundaries"
      ],
      inProgress: [
        "Persistent multi-step evidence-collection graph",
        "Automated reproduction sandbox configuration",
        "Source-matched hypothesis refinement pipeline"
      ],
      planned: [
        "Automated patch proposal generation",
        "Isolated test-suite validation runner",
        "Human-approved PR publication workflow"
      ]
    },
    disclaimer: "Actively developed open-source engineering platform. Incomplete modules are clearly distinguished from verified working components."
  }
];

export const experienceData = [
  {
    company: "Zscaler",
    role: "Software Development Intern",
    location: "Bengaluru, India",
    duration: "May 2026 – July 2026",
    kicker: "02 / EXPERIENCE",
    headline: "Engineering beyond the side project.",
    description: "Worked on an enterprise AI-driven orchestration platform for automated testbed provisioning, topology management, and infrastructure workflows.",
    metrics: [
      { value: "80%", label: "Setup Time Reduction" },
      { value: "40%", label: "Deployment Time Reduction" },
      { value: "20+", label: "Tools Integrated into AI Agent" }
    ],
    highlights: [
      "Engineered an automated multi-phase provisioning pipeline covering VM creation, credential injection, portal registration, OCR validation, health checks, and failure recovery.",
      "Developed an autonomous AI agent coordinating 20+ specialized infrastructure tools to handle requirement-driven testbed deployments and topology tracking.",
      "Automated gateway upgrades and configuration synchronization across distributed cloud and on-premise test environments.",
      "Resolved critical Alpha-testing issues and delivered robust infrastructure services according to enterprise engineering standards."
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "LangChain", "LangGraph", "Ansible", "AWS"]
  }
];

export const arsenalData = [
  {
    category: "Languages",
    code: "01 / LANG",
    skills: [
      { name: "C++", context: "Data structures, algorithms, and high-performance competitive programming (800+ solved)." },
      { name: "Python", context: "FastAPI backends, LangGraph workflows, machine learning models, and automation scripting." },
      { name: "JavaScript", context: "Modern ES6+, DOM mechanics, browser extensions, and asynchronous event loops." },
      { name: "TypeScript", context: "Typed systems architecture, React props, API contract enforcement, and tooling." },
      { name: "SQL", context: "PostgreSQL, relational modeling, complex joins, indexing, and vector similarity search." }
    ]
  },
  {
    category: "Frontend",
    code: "02 / FRONT",
    skills: [
      { name: "React", context: "Component architecture, custom hooks, context state management, and performance tuning." },
      { name: "Next.js", context: "Server-side rendering, App Router conventions, dynamic routes, and asset optimization." },
      { name: "HTML5 & CSS3", context: "Semantic architecture, responsive layouts, CSS variables, and fluid typography." },
      { name: "Tailwind CSS", context: "Utility-first design systems, responsive breakpoints, and custom theme tokens." }
    ]
  },
  {
    category: "Backend",
    code: "03 / BACK",
    skills: [
      { name: "Node.js", context: "Event-driven asynchronous microservices and CLI runtime environments." },
      { name: "Express.js", context: "RESTful API design, JWT auth middleware, error pipelines, and resource routers." },
      { name: "FastAPI", context: "High-concurrency async Python services, Pydantic validation, and OpenAPI documentation." },
      { name: "REST APIs", context: "Idempotent resource patterns, status conventions, pagination, and rate limiting." }
    ]
  },
  {
    category: "Agentic AI",
    code: "04 / AI",
    skills: [
      { name: "LangGraph", context: "Cyclic state graphs, checkpointing, multi-agent orchestration, and conditional routing." },
      { name: "LangChain", context: "Prompt templates, document loaders, vector store retrievers, and chain composition." },
      { name: "Model Context Protocol (MCP)", context: "Tool server implementation, standard schemas, and policy-governed tool gateways." },
      { name: "Retrieval-Augmented Gen (RAG)", context: "Document chunking, dense vector embeddings, hybrid search, and source-grounded answers." },
      { name: "Multi-Agent Workflows", context: "Specialized agent roles, human-in-the-loop review gates, and deterministic state hand-offs." }
    ]
  },
  {
    category: "Data & Infrastructure",
    code: "05 / INFRA",
    skills: [
      { name: "PostgreSQL & pgvector", context: "Relational persistence and high-dimensional vector similarity indexing." },
      { name: "MongoDB", context: "Document databases, flexible schema design, and aggregation pipelines." },
      { name: "Docker", context: "Containerization, multi-stage builds, isolated runtime environments, and Compose." },
      { name: "Git & GitHub Actions", context: "Version control workflows, branch protection, and automated CI/CD pipelines." },
      { name: "AWS & Ansible", context: "Cloud infrastructure provisioning, IAM permissions, and automated server configuration." }
    ]
  },
  {
    category: "Core Computer Science",
    code: "06 / CS",
    skills: [
      { name: "Data Structures & Algorithms", context: "Rigorous algorithmic problem solving (800+ solved across platforms)." },
      { name: "Object-Oriented Programming", context: "Clean design patterns, polymorphism, modularity, and encapsulation." },
      { name: "Operating Systems", context: "Process concurrency, threading, memory virtualization, and file systems." },
      { name: "DBMS", context: "ACID transactions, normalization, indexing strategies, and query optimization." },
      { name: "Computer Networks", context: "TCP/IP protocol stack, HTTP/HTTPS, DNS, sockets, and network security." }
    ]
  }
];

export const achievementsData = [
  {
    year: "2026",
    numeral: "01",
    title: "Amazon ML Summer School 2026",
    badge: "SELECT COHORT",
    description: "Selected for Amazon's premier machine learning program covering advanced deep learning, LLMs, and computer vision."
  },
  {
    year: "2026",
    numeral: "02",
    title: "Xcelerate Hackathon 2026",
    badge: "WINNER",
    description: "First-place winner among competitive national teams for building high-impact automated engineering solutions."
  },
  {
    year: "2025",
    numeral: "03",
    title: "WWT Unravel 2025",
    badge: "2ND RUNNER-UP",
    description: "Second Runner-up in national data science competition by World Wide Technology evaluating complex predictive models."
  },
  {
    year: "2025",
    numeral: "04",
    title: "GE HealthCare — Precision Care Challenge",
    badge: "NATIONAL FINALIST",
    description: "National Finalist in healthcare technological innovation for AI-assisted patient data systems."
  },
  {
    year: "2025",
    numeral: "05",
    title: "Thales GenTech Hackathon",
    badge: "NATIONAL FINALIST",
    description: "National Finalist exploring cybersecurity architectures and real-time threat intelligence systems."
  },
  {
    year: "2024",
    numeral: "06",
    title: "OpenCode'24 Open Source",
    badge: "20+ MERGED PRS",
    description: "Active open-source contributor with over 20 pull requests merged into public tools and developer libraries."
  },
  {
    year: "2024–25",
    numeral: "07",
    title: "Technocracy Committee, NIT Raipur",
    badge: "TECH LEAD",
    description: "Led development of college tech fest portal, registration systems, and digital event platforms."
  }
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "ayush005rkt",
    url: "https://leetcode.com/u/ayush005rkt/",
    metric: "Competitive programming"
  },
  {
    name: "Codeforces",
    handle: "ayush.rtr",
    url: "https://codeforces.com/profile/ayush.rtr",
    metric: "Algorithmic Contests"
  },
  {
    name: "CodeChef",
    handle: "nlogn_sorted",
    url: "https://www.codechef.com/users/nlogn_sorted",
    metric: "Competitive Programming"
  },
  {
    name: "GitHub",
    handle: "ayush-patel1",
    url: "https://github.com/ayush-patel1",
    metric: "Open source codebases"
  },
  {
    name: "LinkedIn",
    handle: "ayush-patel1",
    url: "https://www.linkedin.com/in/ayush-patel05",
    metric: "Professional network"
  },
  {
    name: "X / Twitter",
    handle: "DevAyushX",
    url: "https://x.com/DevAyushX",
    metric: "Ideas and updates"
  }
];
