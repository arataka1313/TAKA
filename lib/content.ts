// ============================================================
// All site copy lives here, in both languages.
// To update the site, edit this file — components only render it.
// ============================================================

export type Lang = "ja" | "en";
export type Bilingual = Record<Lang, string>;

// ---- Hero ------------------------------------------------------------

export const hero = {
  log: "EXPLORATION LOG — TAKASHI ARAI",
  coords: "26.21° N / 127.68° E — OKINAWA, JAPAN",
  fields: "Marine Robotics / Swarm Control / HCI",
  name: "TAKA",
  fullName: {
    ja: "Takashi Arai — 荒井隆",
    en: "Takashi Arai",
  } as Bilingual,
  tagline: {
    ja: {
      main: "イルカの代わりに、ロボットが泳ぐ日。",
      sub: "Teaching robots to school.",
    },
    en: {
      main: "Teaching robots to school.",
      sub: "イルカの代わりに、ロボットが泳ぐ日。",
    },
  },
  dive: { ja: "潜る", en: "DIVE" } as Bilingual,
};

// ---- Vision ----------------------------------------------------------

export const vision = {
  zone: "ZONE 01 · SUNLIT — VISION",
  title: "VISION",
  sub: { ja: "構想", en: "The idea" } as Bilingual,
  // The site's central message.
  statement: {
    ja: "海洋ロボティクスで、海の課題と新しい体験をつなぐ。",
    en: "Connecting ocean challenges and new experiences through marine robotics.",
  } as Bilingual,
  body1: {
    ja: "沖縄の海に潜り、ウミガメ保全やビーチクリーンの現場に立ち続けるうちに生まれた代表的な構想が、魚群のように泳ぐ水中ドローン群による新しいショー・海洋教育体験。生き物への負担を減らしながら、海に感動する体験を増やしたい。",
    en: "Diving in Okinawa — through sea-turtle conservation and beach cleanups — one flagship idea took shape: a new kind of underwater show and ocean-education experience, performed by a school of underwater drones. More ways to be moved by the ocean, with less burden on the animals.",
  } as Bilingual,
  body2: {
    ja: "ただし、ショーは応用先のひとつにすぎない。複数AUVによる海底測量、沿岸・海中監視、海洋設備点検、海洋生物保全、水難救助支援——群れで動く低価格な海洋ロボットを、海の課題全体に届けることを目指している。",
    en: "The show, however, is just one of the applications. Seabed mapping with multiple AUVs, coastal and underwater monitoring, marine infrastructure inspection, marine wildlife conservation, water rescue support — the goal is to bring affordable, swarming marine robots to the full range of ocean challenges.",
  } as Bilingual,
  missionsLabel: "MISSION PROFILES — TARGET APPLICATIONS",
  missions: [
    {
      ja: "水中ドローンによる新しいショー・海洋教育体験",
      en: "Robotic underwater shows & ocean education",
    },
    {
      ja: "複数AUVによる海底測量",
      en: "Seabed mapping with multiple AUVs",
    },
    {
      ja: "沿岸・海中監視",
      en: "Coastal & underwater monitoring",
    },
    {
      ja: "海洋設備点検",
      en: "Marine infrastructure inspection",
    },
    {
      ja: "海洋生物保全",
      en: "Marine wildlife conservation",
    },
    {
      ja: "水難救助支援",
      en: "Water rescue support",
    },
  ] as Bilingual[],
  annotation: "CONCEPT 001 — ROBOTIC UNDERWATER SHOW",
};

// ---- Field / Okinawa ---------------------------------------------------

export const field = {
  zone: "ZONE 02 · SHALLOWS — FIELD",
  title: "FIELD",
  sub: { ja: "現場 — 沖縄", en: "Okinawa, on the ground" } as Bilingual,
  lead: {
    ja: "研究は、机の上ではなく海辺から始まった。",
    en: "This research did not start at a desk. It started on the shoreline.",
  } as Bilingual,
  body: {
    ja: "沖縄の海は、このポートフォリオに載っているすべての原点。砂浜に立ち、海と生き物の実際を知っているからこそ、「技術を何のために使うのか」を考え続けられる。",
    en: "The ocean of Okinawa is the origin of everything on this page. Standing in the field — knowing the sea and its animals firsthand — is what keeps the question alive: what should this technology be for?",
  } as Bilingual,
  entries: [
    {
      code: "TIDE 01",
      label: { ja: "美らがーみー", en: "Chura-gāmī" },
      desc: {
        ja: "ウミガメ保全サークルでの活動",
        en: "Sea-turtle conservation circle",
      },
    },
    {
      code: "TIDE 02",
      label: { ja: "ビーチクリーン", en: "Beach cleanups" },
      desc: {
        ja: "沖縄各地の海岸での清掃活動",
        en: "Coastal cleanups across Okinawa",
      },
    },
    {
      code: "TIDE 03",
      label: {
        ja: "沖縄クリーンコーストネットワーク",
        en: "Okinawa Clean Coast Network",
      },
      desc: {
        ja: "ボランティアリーダー(2025年7月)",
        en: "Volunteer leader (July 2025)",
      },
    },
  ],
  figures: [
    {
      label: "PHOTO — BEACH CLEANUP",
      note: { ja: "画像は後日追加予定", en: "Image coming soon" },
    },
    {
      label: "PHOTO — SEA TURTLE CONSERVATION (CHURA-GĀMĪ)",
      note: { ja: "画像は後日追加予定", en: "Image coming soon" },
    },
  ],
};

// ---- Research: main marine themes ---------------------------------------

export interface ThemeFigure {
  label: string;
  note: Bilingual;
}

export interface Theme {
  id: string;
  no: string;
  status: string;
  title: Bilingual;
  tags: string[];
  desc: Bilingual;
  figures: ThemeFigure[];
}

export const research = {
  zone: "ZONE 03 · TWILIGHT — MAIN RESEARCH THEMES",
  title: "RESEARCH SIGNALS",
  sub: { ja: "主要研究テーマ", en: "Main research themes" } as Bilingual,
  phaseLabel: "CURRENT PHASE — SITL → PROTOTYPE",
  phase: {
    ja: "現在はSITL環境で複数水中ロボットの隊形制御・変形・安全な運動を検証しています。次の段階として、低価格AUVの試作機を製作し、シミュレーションで検証した群制御を実海域・水槽環境で評価することを目指しています。",
    en: "Currently evaluating formation control, reshaping, and safe motion of multiple underwater robots in a SITL environment. The next step is to build affordable AUV prototypes and evaluate the swarm-control methods through physical experiments in tanks and real aquatic environments.",
  } as Bilingual,
};

export const themes: Theme[] = [
  {
    id: "auv-swarm",
    no: "SIG-01",
    status: "SITL VALIDATION",
    title: {
      ja: "群制御実験のための低価格AUVプラットフォーム",
      en: "Affordable AUV Platform for Swarm Robotics",
    },
    tags: ["Swarm Control", "AUV", "SITL", "Low-Cost Platform"],
    desc: {
      ja: "複数の水中ロボットによる実機群制御研究を実現するため、1機10万円以下を目標とした小型AUVの試作機を開発しています。現在はSITL上で群制御を検証しながら、実機製作を進めています。水中ドローンショーは応用先の一つであり、将来的には複数AUVによる海底測量、沿岸監視、海洋設備点検など、幅広い海洋分野への展開を目指しています。",
      en: "Developing a compact AUV prototype targeting a cost below JPY 100,000 per unit to enable real-world experiments with multiple underwater robots. Swarm-control methods are currently being evaluated in SITL while the first physical prototype is under development. Underwater robotic performances are one possible application, alongside seabed mapping, coastal monitoring, marine infrastructure inspection, and other multi-AUV missions.",
    },
    figures: [
      {
        label: "FIG. 01-A — SITL SWARM SIMULATION (SCREENSHOT)",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
      {
        label: "FIG. 01-B — AUV PROTOTYPE / BUILD IN PROGRESS",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
    ],
  },
  {
    id: "smart-probe",
    no: "SIG-02",
    status: "IN DEVELOPMENT",
    title: {
      ja: "ウミガメ卵調査用スマートプローブ",
      en: "Smart Probe for Sea Turtle Egg Detection",
    },
    tags: ["Conservation Tech", "Sensing", "Field Tool"],
    desc: {
      ja: "ウミガメの産卵巣を調査する際、従来はスティックで砂中を探り、手応えをもとに卵の位置を推定していました。しかし、ウミガメ保全サークル「美らがーみー」での活動中に、スティックが卵に当たり、卵を傷つけてしまう場面を経験しました。この問題を技術で解決するため、スティック先端が卵へ接触する前に卵への接近を検知し、音で警告するスマートプローブを開発しています。卵を破壊するリスクを減らしながら、安全に産卵位置を特定できる調査方法を目指しています。",
      en: "Traditional sea turtle nest surveys often rely on probing the sand with a stick and estimating the location of eggs from tactile feedback. During conservation activities with Chura-gāmī, I witnessed cases in which the probe accidentally contacted and damaged eggs. To address this problem, I am developing a smart probe designed to detect proximity to an egg and issue an audible warning before physical contact. The goal is to reduce the risk of egg damage while helping field teams locate nests more safely.",
    },
    figures: [
      {
        label: "PHOTO — SMART PROBE PROTOTYPE",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
      {
        label: "FIG. 02-A — CIRCUIT SCHEMATIC",
        note: { ja: "回路図は後日追加予定", en: "Schematic coming soon" },
      },
      {
        label: "PHOTO — FIELD SURVEY WITH CHURA-GĀMĪ",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
    ],
  },
  {
    id: "acoustic-rescue",
    no: "SIG-03",
    status: "PARTS SELECTION",
    title: {
      ja: "溺者救助のための水中音響ビーコン測位",
      en: "Underwater Acoustic Beacon Localization for Rescue",
    },
    tags: ["Acoustic Localization", "Hydrophone Array", "Rescue Support"],
    desc: {
      ja: "人が装着するリストバンド型音響ビーコンの信号を、水中ドローンに搭載したハイドロフォンアレイで検出し、要救助者の位置を推定するシステムを研究しています。水中では反射やマルチパスによって音響信号が複雑になるため、それらの影響を抑えた位置推定方法を検討します。現在は試作機製作に向けた部品を購入・選定している段階であり、視界の悪い水中でも要救助者を素早く発見できる救助支援システムを目指しています。",
      en: "Researching a rescue-support system in which a hydrophone array mounted on an underwater robot detects signals from a wrist-worn acoustic beacon and estimates the wearer's position. Because underwater reflections and multipath propagation can significantly distort acoustic signals, the project will investigate localization methods that remain reliable under these conditions. Components are currently being selected and purchased for the first prototype, with the long-term goal of supporting faster searches in low-visibility underwater environments.",
    },
    figures: [
      {
        label: "FIG. 03-A — HYDROPHONE ARRAY",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
      {
        label: "PHOTO — PROTOTYPE COMPONENTS / TEST SETUP",
        note: { ja: "画像は後日追加予定", en: "Image coming soon" },
      },
    ],
  },
];

// ---- Previous HCI research ----------------------------------------------

export const hci = {
  label: "PREVIOUS HCI RESEARCH",
  sensorLabel: "OPTICAL MUSCLE DISPLACEMENT — SCAPULA",
  no: "SIG-04",
  status: "PRESENTED",
  tags: ["HCI", "VR", "Optical MMG"],
  title: {
    ja: "肩甲骨動作によるVR翼操作インターフェース",
    en: "Scapular Motion Interface for VR Wing Control",
  } as Bilingual,
  desc: {
    ja: "前鋸筋上に装着した光学式筋変位センサを用いて、肩甲骨の複雑な6方向動作を簡便かつ高精度に認識し、VR空間内の翼をハンズフリーで操作するインターフェースを研究しました。",
    en: "Developed an interface that uses an optical muscle displacement sensor placed over the serratus anterior to recognize six complex scapular movements with a simple, high-accuracy setup and control virtual wings hands-free in VR.",
  } as Bilingual,
  publication: {
    ja: "査読付き論文「Personalized 6-DoF Scapular Motion Recognition Using a Single-Device, Single-Site Optical MMG Array」がEAI BodyNets 2025に採択され、発表を行いました。",
    en: "The peer-reviewed paper “Personalized 6-DoF Scapular Motion Recognition Using a Single-Device, Single-Site Optical MMG Array” was accepted and presented at EAI BodyNets 2025.",
  } as Bilingual,
  image: {
    // Drop the file into public/images/ and set available: true.
    src: "/images/scapular-wing-interface.jpg",
    available: false,
    alt: "Six scapular movements mapped to virtual wing control",
    caption: "Fig. — Six scapular movements mapped to virtual wing control.",
    placeholderLabel: "FIG. — SCAPULAR WING INTERFACE",
    placeholderNote: {
      ja: "画像を public/images/scapular-wing-interface.jpg に追加予定",
      en: "Add image to public/images/scapular-wing-interface.jpg",
    } as Bilingual,
  },
};

// ---- Records (mission records) --------------------------------------------

export interface RecordEntry {
  date?: string;
  title: Bilingual;
  note?: Bilingual;
  status?: string;
  accent?: "sand" | "glow";
  big?: boolean;
}

export interface RecordGroup {
  id: string;
  code: string;
  label: string;
  jp: string;
  entries: RecordEntry[];
}

export const records = {
  zone: "ZONE 04 · MIDNIGHT — MISSION RECORDS",
  title: "RECORDS",
  sub: { ja: "研究航海記録", en: "Mission records" } as Bilingual,
  groups: [
    {
      id: "outputs",
      code: "REC-A",
      label: "RESEARCH OUTPUTS",
      jp: "研究成果",
      entries: [
        {
          date: "2025",
          title: {
            ja: "査読付き論文がEAI BodyNets 2025に採択され、発表を行いました",
            en: "Peer-reviewed paper accepted and presented at EAI BodyNets 2025",
          },
          note: {
            ja: "「Personalized 6-DoF Scapular Motion Recognition Using a Single-Device, Single-Site Optical MMG Array」",
            en: "“Personalized 6-DoF Scapular Motion Recognition Using a Single-Device, Single-Site Optical MMG Array”",
          },
          status: "PRESENTED",
          accent: "glow",
        },
        {
          title: {
            ja: "国際共同研究による共著ジャーナル論文が現在査読中",
            en: "Co-authored journal paper from an international research collaboration, currently under review",
          },
          status: "UNDER REVIEW",
        },
      ],
    },
    {
      id: "awards",
      code: "REC-B",
      label: "AWARDS & ACADEMICS",
      jp: "受賞・学業",
      entries: [
        {
          title: { ja: "3.92", en: "3.92" },
          note: { ja: "GPA / 4.00", en: "GPA / 4.00" },
          big: true,
        },
        {
          date: "2026.03",
          title: {
            ja: "卒業時に工学部長賞を受賞",
            en: "Faculty of Engineering Dean's Award at graduation",
          },
          note: {
            ja: "Faculty of Engineering Dean's Award at graduation",
            en: "University of the Ryukyus",
          },
          accent: "sand",
        },
      ],
    },
    {
      id: "global",
      code: "REC-C",
      label: "GLOBAL RESEARCH",
      jp: "海外研究",
      entries: [
        {
          date: "2025.12",
          title: {
            ja: "インド・ABV-IIITM Gwaliorにて短期研究滞在",
            en: "Short-term research stay at ABV-IIITM Gwalior, India",
          },
          status: "LOGGED",
        },
        {
          date: "2026.09",
          title: {
            ja: "台湾・NTUSTへ交換留学",
            en: "Exchange study at NTUST, Taiwan",
          },
          status: "NEXT",
        },
      ],
    },
    {
      id: "leadership",
      code: "REC-D",
      label: "FIELD & LEADERSHIP",
      jp: "現場・リーダーシップ",
      entries: [
        {
          date: "2025.07",
          title: {
            ja: "沖縄クリーンコーストネットワーク ボランティアリーダー",
            en: "Okinawa Clean Coast Network Volunteer Leader",
          },
          status: "LEAD",
        },
        {
          title: {
            ja: "美らがーみーでのウミガメ保全・ビーチクリーン活動",
            en: "Sea turtle conservation and beach cleanup activities with Chura-gāmī",
          },
        },
      ],
    },
  ] as RecordGroup[],
};

// ---- Equipment (toolkit + operator languages) ------------------------------

export interface Tool {
  id: string;
  name: string;
  role: Bilingual;
}

export const equipment = {
  zone: "ZONE 05 · PAYLOAD BAY — EQUIPMENT",
  title: "EQUIPMENT",
  sub: { ja: "装備・使用技術", en: "Toolkit" } as Bilingual,
  tools: [
    {
      id: "python",
      name: "Python",
      role: { ja: "シミュレーション・解析", en: "Simulation & analysis" },
    },
    {
      id: "c",
      name: "C",
      role: { ja: "組み込み開発", en: "Embedded systems" },
    },
    {
      id: "cpp",
      name: "C++",
      role: { ja: "ロボティクス・システム", en: "Robotics & systems" },
    },
    {
      id: "linux",
      name: "Linux",
      role: { ja: "開発環境", en: "Development environment" },
    },
    {
      id: "git",
      name: "Git",
      role: { ja: "バージョン管理", en: "Version control" },
    },
    {
      id: "arduino",
      name: "Arduino",
      role: { ja: "マイコン試作", en: "Microcontroller prototyping" },
    },
    {
      id: "ardusub",
      name: "ArduSub",
      role: { ja: "水中機体の制御ファームウェア", en: "Underwater vehicle autopilot" },
    },
  ] as Tool[],
  languagesLabel: "OPERATOR — LANGUAGES",
  languages: [
    {
      name: { ja: "日本語", en: "Japanese" },
      level: { ja: "ネイティブ", en: "Native" },
    },
    {
      name: { ja: "英語", en: "English" },
      level: {
        ja: "TOEIC Listening & Reading 750 / 英検2級",
        en: "TOEIC Listening & Reading 750 / EIKEN Grade 2",
      },
    },
  ],
};

// ---- Journey (dive log) --------------------------------------------------

export interface JourneyEntry {
  depth: string;
  date: string;
  title: Bilingual;
  note?: Bilingual;
  upcoming?: boolean;
}

export const journey = {
  zone: "ZONE 06 · ABYSS — DIVE LOG",
  title: "DIVE LOG",
  sub: { ja: "航跡", en: "The descent so far" } as Bilingual,
  entries: [
    {
      depth: "0 m",
      date: "2018.04",
      title: {
        ja: "長野工業高等専門学校に入学",
        en: "Entered Nagano National College of Technology",
      },
      note: {
        ja: "エンジニアリングの基礎を身につけた5年間のはじまり。",
        en: "The start of five years of engineering fundamentals.",
      },
    },
    {
      depth: "-150 m",
      date: "2023.03",
      title: {
        ja: "長野工業高等専門学校を卒業",
        en: "Graduated from Nagano National College of Technology",
      },
    },
    {
      depth: "-300 m",
      date: "2024.04",
      title: {
        ja: "琉球大学に3年次編入",
        en: "Transferred to the University of the Ryukyus as a third-year student",
      },
      note: {
        ja: "沖縄へ。海が研究の原点になった。",
        en: "To Okinawa — where the ocean became the origin of the research.",
      },
    },
    {
      depth: "-520 m",
      date: "2026.03",
      title: {
        ja: "琉球大学を卒業",
        en: "Graduated from the University of the Ryukyus",
      },
      note: {
        ja: "卒業時に工学部長賞を受賞。",
        en: "Faculty of Engineering Dean's Award at graduation.",
      },
    },
    {
      depth: "-700 m",
      date: "2026.04",
      title: {
        ja: "琉球大学大学院 理工学研究科に入学",
        en: "Entered the Graduate School of Engineering and Science, University of the Ryukyus",
      },
      note: {
        ja: "海洋ロボティクスの研究を本格化。",
        en: "Deepening the research in marine robotics.",
      },
    },
    {
      depth: "-900 m",
      date: "2026.09",
      title: {
        ja: "台湾・NTUSTへ交換留学",
        en: "Exchange study at NTUST",
      },
      note: {
        ja: "次の潜水計画。",
        en: "The next dive, already planned.",
      },
      upcoming: true,
    },
  ] as JourneyEntry[],
};

// ---- Currents (global) -----------------------------------------------------

export interface CurrentEntry {
  code: string;
  date: string;
  place: Bilingual;
  desc: Bilingual;
  status: string;
}

export const currents = {
  zone: "ZONE 07 · OPEN OCEAN — CURRENTS",
  title: "CURRENTS",
  sub: { ja: "海流 — 世界とのつながり", en: "Where the currents lead" } as Bilingual,
  entries: [
    {
      code: "IND",
      date: "2025.12",
      place: { ja: "ABV-IIITM Gwalior(インド)", en: "ABV-IIITM Gwalior, India" },
      desc: { ja: "短期研究滞在", en: "Short-term research stay" },
      status: "LOGGED",
    },
    {
      code: "TWN",
      date: "2026.09",
      place: { ja: "NTUST(台湾)", en: "NTUST, Taiwan" },
      desc: { ja: "交換留学", en: "Exchange study" },
      status: "NEXT",
    },
    {
      code: "USA",
      date: "—",
      place: { ja: "アメリカ", en: "United States" },
      desc: {
        ja: "海洋ロボティクスの構想を、英語で発信することを目指して",
        en: "Aiming to pitch the marine robotics vision in English",
      },
      status: "AHEAD",
    },
  ] as CurrentEntry[],
  figure: {
    label: "PHOTO — RESEARCH STAY AT ABV-IIITM GWALIOR (DEC 2025)",
    note: { ja: "画像は後日追加予定", en: "Image coming soon" } as Bilingual,
  },
};

// ---- Footer / contact ------------------------------------------------------

export const footer = {
  zone: "SEABED — CONTACT",
  heading: {
    ja: "次の海へ、一緒に。",
    en: "Into the next ocean, together.",
  } as Bilingual,
  body: {
    ja: "研究・共同研究・プロジェクトのお誘いなど、お気軽にご連絡ください。",
    en: "Research, collaboration, or projects — feel free to reach out.",
  } as Bilingual,
  // Links with an empty url are hidden until the URL is confirmed.
  links: [
    { name: "Email", url: "mailto:arataka1313@gmail.com" },
    { name: "GitHub", url: "https://github.com/arataka1313" },
    { name: "ORCID", url: "https://orcid.org/0009-0009-8512-2704" },
    { name: "X", url: "" }, // TODO: set the confirmed X profile URL
    { name: "LinkedIn", url: "" }, // TODO: set the confirmed LinkedIn profile URL
  ],
  resurface: { ja: "浮上する", en: "RESURFACE" } as Bilingual,
};
