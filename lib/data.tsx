import { 
  Github, 
  Linkedin, 
  Twitter, 
  Cpu, 
  Waves, 
  Plane, 
  Layout, 
  Code2, 
  Terminal, 
  Binary 
} from "lucide-react";

// --- 1. スキル  ---
export const skills = [
  { name: "Python", id: "python" },
  { name: "C", id: "c" },
  { name: "C++", id: "cpp" },
  { name: "TypeScript", id: "ts" },
  { name: "React", id: "react" },
  { name: "Next.js", id: "nextjs" },
  { name: "Tailwind", id: "tailwind" },
  { name: "Unity", id: "unity" },
  { name: "Linux", id: "linux" },
  { name: "Git", id: "git" },
];

// --- 2. SNSリンク ---
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/arataka1313", icon: <Github size={24} /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/takashi-arai-2b697b360", icon: <Linkedin size={24} /> },
  { name: "X (Twitter)", url: "https://x.com/takas72405", icon: <Twitter size={24} /> },
];

// --- 3. タイムライン ---
export const timelineData = {
  ja: [
    { date: "2002.06.25", title: "Born in Japan", description: "長野県にて誕生。" },
    { date: "2018.04", title: "Nagano KOSEN", description: "長野工業高等専門学校 電子情報工学科 入学。エンジニアとしての基礎を築く。" },
    { date: "2023.03", title: "Graduated KOSEN", description: "長野高専を卒業。実学に基づいた設計・開発スキルを習得。" },
    { date: "2024.04", title: "University of the Ryukyus", description: "琉球大学 工学部 知能情報コース 3年次編入学。BodySharingLab所属。GPA: 3.92/4.00 (Academic Honor)." },
    { 
      date: "2025.12", 
      title: "EAI BodyNets 2025 Presentation", 
      description: "査読付き国際会議 EAI BodyNets 2025 にて口頭発表。学部4年次(B4)筆頭著者として採択(Accept)され、成果発表を行いました。" 
    },
    { date: "2026.04", title: "CS Master's Program", description: "琉球大学大学院 理工学研究科 知能情報プログラム 修士課程入学予定。HCI・BodySharingの研究を本格化。" },
    { date: "2026.09", title: "NTUST Exchange (Taiwan)", description: "国立台湾科技大学へ交換留学予定。グローバルな研究環境へ挑戦。" },
  ],
  en: [
    { date: "June 25, 2002", title: "Born in Japan", description: "Born in Nagano, Japan." },
    { date: "Apr 2018", title: "Nagano KOSEN", description: "Entered Nagano National College of Technology (Electronics & CS). Built engineering fundamentals." },
    { date: "Mar 2023", title: "Graduated KOSEN", description: "Graduated from KOSEN with practical design and development skills." },
    { date: "Apr 2024", title: "University of the Ryukyus", description: "Transferred to 3rd year, Intelligent Information Engineering. Joined BodySharingLab (HCI Research). GPA: 3.92/4.00 (Academic Honor)." },
    { 
      date: "Dec 2025", 
      title: "EAI BodyNets 2025 Presentation", 
      description: "Presented at EAI BodyNets 2025. The paper was accepted as a B4 first author." 
    },
    { date: "Apr 2026", title: "CS Master's Program", description: "Will enroll in the CS Master's program at Ryukyus. Focusing on HCI & BodySharing." },
    { date: "Sep 2026", title: "NTUST Exchange (Taiwan)", description: "Exchange student at National Taiwan University of Science and Technology." },
  ]
};

// --- 4. プロジェクト ---
export const projects = {
  ja: [
    {
      id: "scapular-vr",
      title: "Scapular Motion Interface",
      subtitle: "B4 First Author Research / EAI BodyNets 2025",
      description: "学部生として国際会議採択を果たした研究。肩甲骨でVR空間を飛ぶ。",
      details: "玉城絵美教授（BodySharingLab）指導下の研究です。学部4年次に筆頭著者として EAI BodyNets 2025 に採択されました。手を使わずに肩甲骨の直感的な操作だけでVR空間内を自在に飛行できるインターフェースの構築を目指しています。筋変位センサ(FirstVR)を用いて、非侵襲かつ高精度な身体運動認識を実現しました。",
      tag: "HCI Research",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: "vr-flight-app",
      title: "VR Flight Experience",
      subtitle: "Prototype Application",
      description: "FirstVR等を用いたプロトタイプ実装。身体拡張体験の初期検討。",
      details: "研究の実用化に向けたアプリケーション開発。筋変位センサを用いて「翼が生えたような」感覚を提示し、BodySharing（身体共有・拡張）の概念を実証するためのVRフライトシミュレーターです。Unityを用いて実装を行いました。",
      tag: "VR/HCI",
      icon: <Plane className="w-6 h-6" />
    },
    {
      id: "underwater",
      title: "Underwater Robotics",
      subtitle: "Sub Research Theme",
      description: "水中音響測位を用いたダイバー自動追従システムの研究。",
      details: "GPSの届かない水中環境において、音響信号を用いた測位システムを構築し、ダイバーを自動で追従・撮影する水中ドローンの制御アルゴリズムを研究・実装しています。サブテーマとして取り組んでいます。",
      tag: "Robotics",
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: "uiux",
      title: "UI/UX & Web Dev",
      subtitle: "Full-stack Projects",
      description: "ノーマンの7段階モデルに基づいた設計。",
      details: "Next.jsとTailwind CSSを用いたモダンなWebアプリケーション開発を行っています。ドナルド・ノーマンの行為の7段階モデルなどを意識した、ユーザーにとって認知的負荷の少ないインターフェース設計を心がけています。",
      tag: "Development",
      icon: <Layout className="w-6 h-6" />
    }
  ],
  en: [
    {
      id: "scapular-vr",
      title: "Scapular Motion Interface",
      subtitle: "Undergraduate Achievement / EAI BodyNets 2025",
      description: "First-author paper accepted as an undergraduate. Flying in VR using scapular motion.",
      details: "Research conducted under Prof. Emi Tamaki (BodySharingLab). Accepted to EAI BodyNets 2025 as a first author during my senior year. Developing an interface that allows users to fly freely in VR space using intuitive scapular movements. Achieved non-invasive and high-precision body motion recognition using optical MMG sensor arrays.",
      tag: "HCI Research",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: "vr-flight-app",
      title: "VR Flight Experience",
      subtitle: "Prototype Application",
      description: "Prototype using FirstVR. Initial study of body extension.",
      details: "Application development for practical use of research. A VR flight simulator implemented in Unity that uses muscle displacement sensors to provide a sensation like 'growing wings', demonstrating the concept of BodySharing (Body Extension).",
      tag: "VR/HCI",
      icon: <Plane className="w-6 h-6" />
    },
    {
      id: "underwater",
      title: "Underwater Robotics",
      subtitle: "Sub Research Theme",
      description: "Autonomous diver tracking system using underwater acoustic positioning.",
      details: "Researching and implementing control algorithms for underwater drones that automatically track divers using acoustic positioning in GPS-denied environments. Conducted as a sub-research theme.",
      tag: "Robotics",
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: "uiux",
      title: "UI/UX & Web Dev",
      subtitle: "Full-stack Projects",
      description: "Design based on Norman's 7-stage model.",
      details: "Developing modern Web applications using Next.js and Tailwind CSS. Focusing on interface design that minimizes cognitive load, conscious of Donald Norman's Seven Stages of Action.",
      tag: "Development",
      icon: <Layout className="w-6 h-6" />
    }
  ]
};