import type {
  Project,
  ExperienceItem,
  SkillCategory,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Moch Yudha Rusdian',
  title: 'Frontend Engineer',
  tagline:
    'Frontend Engineer with 4+ years of experience developing and maintaining scalable web, mobile, and desktop applications using React.js, React Native, TypeScript, and Tauri. Experienced in building real-time trading platforms, designing frontend architectures, leading development teams, and delivering enterprise-grade solutions across banking, telecommunications, agriculture, and e-commerce sectors. Skilled in improving application performance, collaborating with cross-functional teams, and driving products from concept to production.',
  status: 'Open for Senior Frontend Opportunities',
  location: 'Jakarta & Bandung, Indonesia (GMT+7)',
  email: 'yudharus007@gmail.com',
  phone: '+62813-1341-0515',
  github: 'https://github.com/yudharus',
  linkedin: 'https://www.linkedin.com/in/moch-yudha-rusdian-b03825210/',
  instagram: 'https://www.instagram.com/yudharuss/',
  youtube: 'https://www.youtube.com/@ajaxjson22',
  avatar: '/2.jpeg',
  portrait: '/2.jpeg',
  bio: `Frontend Engineer with 4+ years of professional experience developing and maintaining scalable web, mobile, and desktop applications. Experienced in designing robust frontend architectures, building high-frequency real-time interfaces, leading development teams, and delivering enterprise-grade solutions. Skilled in optimizing performance, establishing component-driven systems, and driving products from concept to production.`,
};

export const PROJECTS: Project[] = [
  {
    id: 'rarangken-app',
    title: 'Rarangkén Studio',
    subtitle: 'Dynamic Layout Engine & Responsive Invitation Builder',
    category: 'web',
    type: 'Next.js & Canvas Design Engine',
    year: '2026',
    description:
      'Visual drag-and-drop digital wedding invitation builder with sub-100KB client-side static compilation, custom themes, and guest RSVP.',
    longDescription:
      'Rarangkén ("Rangkai Carita, Janten Momen") gives couples and digital agencies complete creative freedom to design bespoke digital wedding invitations. Built with Next.js, TypeScript, and Tailwind CSS, it features instant zero-delay rendering on all mobile networks, personalized guest link generation, RSVP confirmation with digital bank transfer/QRIS gift integration, and interactive route guidance.',
    image: '/rarangken.png',
    metrics: 'Sub-100KB Static Compilation · Custom Theming Engine',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Dynamic Layout', 'Vercel'],
    link: 'https://rarangken.vercel.app',
  },
  {
    id: 'etang-app',
    title: 'Etang Finance',
    subtitle: 'Personal Money Tracker & Client-Side OCR Scanner',
    category: 'web',
    type: 'Next.js & WebAssembly Web App',
    year: '2026',
    description:
      'Intelligent personal finance web application featuring 100% private client-side OCR receipt scanning powered by Tesseract.js and analytics.',
    longDescription:
      'Etang ("Ngatur duit, teu kudu lieur") is a privacy-first personal financial tracker. Users can record daily income, expenses, and deposit balances, or automatically extract merchant, date, total, and items from physical paper receipts via in-browser WebAssembly Web Worker OCR without sending private receipts to remote servers.',
    image: '/etang.png',
    metrics: 'Client-Side OCR (Tesseract.js) · 100% Privacy-Focused',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Tesseract.js / WASM', 'Financial Analytics'],
    link: 'https://etang-app.vercel.app',
  },
  {
    id: 'movie-app',
    title: 'CineSphere Discovery',
    subtitle: 'TMDB Cinema Hub & Trailer Explorer',
    category: 'web',
    type: 'Interactive Web Application',
    year: '2023',
    description:
      'Curated cinema explorer powered by the TMDB API featuring movie trailers, cast filmographies, and dynamic category filtering.',
    longDescription:
      'A sleek, cinema-oriented web application leveraging the TMDB API. Includes real-time movie trailer playback, cast and crew deep-dives, genre classification, category rankings, and debounced instant search.',
    image: '/movieApp.png',
    metrics: 'TMDB Cinema API · High Fidelity UI',
    tags: ['React.js', 'Tailwind CSS', 'TMDB API', 'Async State', 'Netlify'],
    link: 'https://yudharus-movie-app.netlify.app/',
  },
  {
    id: 'ip-tracker',
    title: 'GeoTrace IP Tracker',
    subtitle: 'Network Intelligence & Geolocation Tool',
    category: 'web',
    type: 'Web Utility Application',
    year: '2023',
    description:
      'Real-time IP address inspection tool providing ISP metadata, timezone coordinates, and interactive geospatial mapping.',
    longDescription:
      'Utility tool delivering precise geographical location data, ASN records, carrier details, and interactive coordinate maps through high-throughput IP intelligence APIs and Leaflet mapping.',
    image: '/iptracker.png',
    metrics: 'Leaflet Mapping · Real-Time IP Intelligence',
    tags: ['React.js', 'Leaflet Maps', 'IP Geolocation API', 'Tailwind CSS', 'Netlify'],
    link: 'https://yudharus-ip-tracker.netlify.app/',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Apr 2025 – Present',
    role: 'Frontend Engineer (Full-Time)',
    company: 'PT. Maybank Sekuritas Indonesia',
    location: 'Jakarta, Indonesia',
    description: [
      'Developed and maintained the Maybank Trade Mobile Application using React Native, TypeScript, Redux, WebSocket, and Fastlane, delivering real-time trading experiences for capital market users.',
      'Managed Android and iOS application releases, including deployment, versioning, and distribution through Google Play Store and Apple App Store.',
      'Successfully implemented Two-Factor Authentication (2FA) using OTP verification, enhancing account security and user authentication processes. Improved the Watchlist feature by refining the user interface, introducing animations, and optimizing performance for a better user experience.',
      'Led a major refactoring initiative for the Maybank Trade Mobile Application, redesigning the project structure and WebSocket architecture to improve code maintainability, scalability, and the efficiency of real-time data processing.',
      'Architected and led the frontend team in building the Maybank Trade Desktop Application from scratch using Tauri v2, React.js, TypeScript, Zustand, and WebSocket. Designed a scalable frontend architecture and established development standards to efficiently handle high-frequency real-time market data while ensuring application performance, responsiveness, and maintainability.',
    ],
    technologies: [
      'React Native',
      'Tauri v2',
      'React.js',
      'TypeScript',
      'Redux',
      'Zustand',
      'WebSocket',
      'Fastlane',
      'Google Play & App Store',
    ],
  },
  {
    period: 'Oct 2024 – Apr 2025',
    role: 'Frontend Developer (Full-Time)',
    company: 'PT. CIMB Niaga Tbk ID',
    location: 'Jakarta, Indonesia',
    description: [
      'Developed and maintained the Arjuna by CIMB Niaga using TypeScript (ReactJS), implementing Tailwind CSS for Front Office styling and SCSS for Back Office.',
      'Successfully developed two new features/modules: SLIK for Front Office and TRS Letter for Back Office, enhancing system functionality and user experience.',
      'Awarded Top Sprinter in the February sprint period for outstanding performance, demonstrating strong problem-solving skills and efficient project delivery.',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Banking Systems', 'Front & Back Office'],
  },
  {
    period: 'Mar 2024 – Oct 2024',
    role: 'Mobile Developer & Frontend Developer (Full-Time)',
    company: 'PT. Rastek Inovasi Digital',
    location: 'Bandung, Indonesia',
    description: [
      'Developed and maintained the IDMAI Mobile Survey Apps for BAPPENAS using Javascript (React Native), facilitating its use by farmers across Indonesia to enhance agricultural productivity and data collection.',
      'Developed and maintained the M Bravo Mobile Apps for Mitra Telkom using Javascript (React Native), creating offline mode feature to ensure continuous functionality in areas with limited connectivity.',
      'Developed and maintained the Squat Bravo Web Apps for Mitra Telkom using Javascript (ReactJS), including the creation of master data features and integration with master data APIs.',
      'Developed and maintained the GSD Web Apps for Telkom Property using JavaScript (ReactJS), including the creation of SIMA (Asset Management Information System) features and integration with SIMA APIs. Optimized large datasets to ensure the web app performance remained efficient and responsive.',
      'Collaborated seamlessly with Back-End Developers, UI/UX Designers, Computer Vision experts, and the Project Manager to innovate and develop new features, integrating cutting-edge Machine Learning technology to improve functionality.',
      'Conducted thorough code evaluations and optimizations for the IDMAI and M Bravo applications, achieving a significant 30% improvement in performance and increased operational efficiency.',
    ],
    technologies: [
      'React Native',
      'React.js',
      'JavaScript',
      'Offline SQLite',
      'Enterprise REST APIs',
      'Machine Learning Integration',
    ],
  },
  {
    period: 'Aug 2023 – Nov 2023',
    role: 'Mobile Developer (Full-Time)',
    company: 'PT. Halal Pedia Indonesia',
    location: 'Bandung, Indonesia',
    description: [
      'Performed routine maintenance to ensure that the Halalpedia application runs smoothly and optimally using Javascript (React Native).',
      'Contributed to developing 5 new features in the Halalpedia application, including Notification List, Inbox, Giving Rating to Purchased Items, Rating History, and Product Discussion.',
      'Conducted regular updates on the Google Play Store and Apple App Store to ensure that users always have access to the latest version with improvements and new features.',
      'Collaborated with Quality Assurance, Back-End, and Marketing teams to ensure high-quality application updates and develop new features that enhance functionality and user experience.',
    ],
    technologies: ['React Native', 'Redux', 'E-Commerce', 'Google Play & App Store', 'Mobile QA'],
  },
  {
    period: 'Feb 2022 – Aug 2023',
    role: 'Mobile Developer & Frontend Developer (Full-Time)',
    company: 'PT. Komunita Ambis Nusantara',
    location: 'Bandung, Indonesia',
    description: [
      'Mentored 4 team internship members, assisting in enhancing their skills, such as teaching UI slicing, API consumption, and providing help when encountering challenges.',
      'Responsible for creating, developing, and launching the Android-based Schoolfess mobile application using Javascript (React Native), contributing to a 450+ user increase in new downloads within a week after launch (scaling to 100K+ total active users).',
      'Responsible for the development of the "Schoolfess Indonesia" website using PHP (Laravel), which includes UI slicing, API consumption, and new feature additions to enhance UX and user engagement.',
      'Responsible for the development of the "SBM Indonesia" website using Javascript (ReactJS), which includes UI slicing, API consumption, updating functionalities, and adding new features to meet user needs.',
      'Collaborated with the UI/UX Designer, Back-End Developer, Quality Assurance, Marketing, and CTO to develop new features in the Schoolfess App, ensuring alignment with functionality and business processes.',
    ],
    technologies: ['React Native', 'React.js', 'PHP (Laravel)', 'Redux', 'Mentoring & Leadership'],
  },
  {
    period: 'Apr 2020 – Apr 2021',
    role: 'Fullstack Web Developer (Internship)',
    company: 'PT. Bayer Indonesia',
    location: 'Bandung, Indonesia',
    description: [
      'Created and developed a web application, the "Employee Performance Management Information System," to facilitate the employee performance assessment process at the West Java branch office.',
      'Utilized PHP programming language and leveraged the Laravel framework with MySQL.',
      'Built a responsive and user-friendly User Interface for the web application.',
      'Responsible for deploying the system on the provided hosting, ensuring smooth application operation.',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'Web Deployment', 'Internal Enterprise Tools'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'PHP'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'Tauri v2',
      'Tailwind CSS',
      'Redux',
      'Zustand',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'Node.js',
      'Express.js',
      'Laravel',
      'REST APIs',
      'WebSocket',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Postman',
      'ArgoCD',
      'Fastlane',
      'Figma',
    ],
  },
];
