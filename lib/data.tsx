import {
  Github,
  Linkedin,
  Twitter,
  Cpu,
  Waves,
  Search,
  Wrench,
} from "lucide-react";
import type { Language, Project, TimelineItem } from "@/types";

export const skills = [
  { name: "Python", id: "python" },
  { name: "C", id: "c" },
  { name: "C++", id: "cpp" },
  { name: "Linux", id: "linux" },
  { name: "Git", id: "git" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/arataka1313",
    icon: <Github size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/takashi-arai-2b697b360",
    icon: <Linkedin size={24} />,
  },
  {
    name: "X",
    url: "https://x.com/takas72405",
    icon: <Twitter size={24} />,
  },
];

export const siteCopy: Record<Language, {
  hero: {
    affiliation: string;
    role: string;
    description: string;
    mission: string;
    badges: string[];
  };
  sections: {
    mission: string;
    projects: string;
    skills: string;
    languages: string;
    journey: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    captions: {
      turtle: string;
      cleanup: string;
      conservation: string;
      eggs: string;
      issueLead: string;
      warningTitle: string;
      warningBody: string;
      reveal: string;
      deadTurtle: string;
    };
  };
  modal: {
    close: string;
  };
}> = {
  ja: {
    hero: {
      affiliation: "琉球大学大学院 理工学研究科\n工学専攻 知能情報プログラム",
      role: "水中ドローンの研究",
      description:
        "複数の水中ドローンの隊形制御と安全性評価に関するシミュレーション研究に取り組んでいます。並行して、協調制御の実機検証に向けた低コスト水中ドローンの設計・製作を進めています。",
      mission: "",
      badges: [
        "EAI BodyNets 2025",
        "工学部長賞",
        "水中ドローン / 協調制御",
      ],
    },
    sections: {
      mission: "Mission",
      projects: "Selected Projects",
      skills: "Technical Skills",
      languages: "Languages",
      journey: "Research Journey",
    },
    mission: {
      eyebrow: "研究の原点",
      title: "人間とロボットの協調によって、海の課題を解決する",
      paragraphs: [
        "海が好きで長野高専から琉球大学へ進み、ウミガメ保護活動やビーチクリーンに参加してきました。そこで、海洋ごみ、水難事故、海中での救助や作業の難しさを知りました。",
        "HCI研究で培った「人間と機械をつなぐ視点」を水中ロボットへ応用し、現場で人とロボットが協力できる技術を目指しています。",
        "将来は、複数の水中ドローンを水難救助、海洋生物調査、海底測量、水中構造物の監視へ応用するとともに、イルカなどの海洋生物に負担をかけない水中ロボットエンターテインメントの実現にも取り組みたいと考えています。",
      ],
      captions: {
        turtle: "沖縄の海を泳ぐウミガメ",
        cleanup: "恩納村・名嘉真海岸でのビーチクリーン",
        conservation: "ウミガメ保護活動",
        eggs: "琉球大学ウミガメサークルでの活動",
        issueLead: "海の美しさに触れる一方で、人間の活動によって海洋生物が傷つく現実も目にしました。",
        warningTitle: "閲覧注意",
        warningBody: "死亡した海洋生物の写真を含みます",
        reveal: "画像を表示",
        deadTurtle: "漁網が絡まった状態で、浜比嘉島の海岸に漂着したウミガメ",
      },
    },
    modal: {
      close: "閉じる",
    },
  },
  en: {
    hero: {
      affiliation: "Intelligent Information Program, Department of Engineering\nGraduate School of Engineering and Science, University of the Ryukyus",
      role: "Underwater Drone Research",
      description:
        "I conduct simulation research on formation control and safety evaluation for multiple underwater robots. In parallel, I am designing and building a low-cost underwater robot for future experimental validation of cooperative control.",
      mission: "",
      badges: [
        "EAI BodyNets 2025",
        "Faculty of Engineering Dean's Award",
        "Underwater Drones / Cooperative Control",
      ],
    },
    sections: {
      mission: "Mission",
      projects: "Selected Projects",
      skills: "Technical Skills",
      languages: "Languages",
      journey: "Research Journey",
    },
    mission: {
      eyebrow: "Why I Research",
      title: "Solving Ocean Challenges Through Human–Robot Collaboration",
      paragraphs: [
        "My love of the ocean brought me from Nagano KOSEN to the University of the Ryukyus, where I joined sea turtle conservation and beach-cleanup activities. These experiences exposed me to marine debris, water accidents, and the difficulty of rescue and underwater work.",
        "I now apply the human-centered perspective developed through HCI research to underwater robotics, with the goal of enabling people and robots to work together in real marine environments.",
        "In the future, I hope to apply multi-robot systems to water rescue, marine-life surveys, seabed mapping, and underwater-infrastructure inspection, while also exploring underwater robotic entertainment that does not place a burden on dolphins or other marine animals.",
      ],
      captions: {
        turtle: "A sea turtle swimming in Okinawa",
        cleanup: "Beach cleanup at Nakama Coast, Onna Village",
        conservation: "Sea turtle conservation activity",
        eggs: "Field activity with the University of the Ryukyus Sea Turtle Club",
        issueLead: "Alongside the beauty of the ocean, I have also witnessed how human activity can harm marine life.",
        warningTitle: "Sensitive image",
        warningBody: "Contains an image of a deceased marine animal",
        reveal: "View image",
        deadTurtle: "A sea turtle found washed ashore on Hamahiga Island with fishing netting entangled around it",
      },
    },
    modal: {
      close: "Close",
    },
  },
};

export const timelineData: Record<Language, TimelineItem[]> = {
  ja: [
    {
      date: "2018.04",
      title: "長野高専",
      description:
        "長野工業高等専門学校 電子情報工学科へ入学。プログラミング、電子回路、組み込み開発など、エンジニアリングの基礎を学びました。",
    },
    {
      date: "2023.03",
      title: "長野高専卒業",
      description:
        "5年間の高専教育を修了し、実験・設計・開発を通じて実践的な問題解決力を身につけました。",
    },
    {
      date: "2024.04",
      title: "琉球大学へ編入",
      description:
        "琉球大学 工学部 知能情報コースへ3年次編入。HCI・身体情報処理の研究を開始しました。",
    },
    {
      date: "2025.12",
      title: "EAI BodyNets 2025",
      description:
        "単一装着型の光学式筋変位センサアレイによる肩甲骨運動認識の研究が、査読付き国際会議 EAI BodyNets 2025 に筆頭著者論文として採択されました。",
    },
    {
      date: "2025.12",
      title: "インドでのリサーチインターン",
      description:
        "ABV-IIITM Gwaliorに滞在し、肩甲骨運動認識に関する国際共同研究を実施。その成果をIEEE Sensors Journalへの投稿へ発展させました。",
    },
    {
      date: "2026.03",
      title: "工学部長賞・学部卒業",
      description:
        "琉球大学工学部を卒業し、研究活動と学業の成果により工学部長賞を受賞しました。",
    },
    {
      date: "2026.04",
      title: "琉球大学大学院 修士課程",
      description:
        "琉球大学大学院 理工学研究科 工学専攻 知能情報プログラムへ入学。複数の水中ドローンを安全に協調させる隊形制御研究を開始しました。",
    },
    {
      date: "2026.08",
      title: "シリコンバレー研修",
      description:
        "サン佐藤財団の研修プログラムに参加予定。現地の大学・研究機関・企業を訪問し、研究と社会実装の接点を学びます。",
    },
    {
      date: "2026.09",
      title: "NTUST交換留学",
      description:
        "国立台湾科技大学へ交換留学予定。実機製作と機体制御を学び、複数機による水中実証へつなげます。",
    },
  ],
  en: [
    {
      date: "Apr 2018",
      title: "Nagano KOSEN",
      description:
        "Entered the Department of Electronics and Computer Science at Nagano KOSEN and built foundations in programming, electronic circuits, and embedded development.",
    },
    {
      date: "Mar 2023",
      title: "Graduated from KOSEN",
      description:
        "Completed five years of practical engineering education focused on experimentation, design, development, and problem solving.",
    },
    {
      date: "Apr 2024",
      title: "University of the Ryukyus",
      description:
        "Transferred into the third year of Intelligent Information Engineering and began research in HCI and human sensing.",
    },
    {
      date: "Dec 2025",
      title: "EAI BodyNets 2025",
      description:
        "My first-author work on scapular-motion recognition using a single-site optical MMG array was accepted at the peer-reviewed international conference EAI BodyNets 2025.",
    },
    {
      date: "Dec 2025",
      title: "Research Internship in India",
      description:
        "Conducted collaborative research at ABV-IIITM Gwalior and developed the scapular-motion study toward a submission to IEEE Sensors Journal.",
    },
    {
      date: "Mar 2026",
      title: "Dean's Award and Graduation",
      description:
        "Graduated from the Faculty of Engineering, University of the Ryukyus, and received the Faculty of Engineering Dean's Award.",
    },
    {
      date: "Apr 2026",
      title: "Master's Program",
      description:
        "Entered the Intelligent Information Program in the Department of Engineering at the Graduate School of Engineering and Science, University of the Ryukyus, and began research on safe formation control for multiple underwater robots.",
    },
    {
      date: "Aug 2026",
      title: "Silicon Valley Training Program",
      description:
        "Scheduled to join a San-Sato Foundation training program focused on the connection between research and real-world implementation.",
    },
    {
      date: "Sep 2026",
      title: "NTUST Exchange",
      description:
        "Scheduled to study at National Taiwan University of Science and Technology, focusing on robot prototyping and vehicle control for future multi-robot underwater experiments.",
    },
  ],
};

export const projects: Record<Language, Project[]> = {
  ja: [
    {
      id: "cooperative-underwater-robotics",
      title: "Cooperative Underwater Robotics",
      subtitle: "修士研究 / 複数水中ロボット制御",
      description:
        "複数の水中ドローンを安全に協調させ、隊形維持・障害物回避・安全性を評価する研究です。",
      details:
        "複数の水中ドローンが互いの位置関係を保ちながら安全に移動するための隊形制御を研究しています。シミュレーション環境を用いて、隊形精度、機体間距離、障害物回避、安全性を評価し、制御性能と衝突リスクの両立を検討しています。将来的には、水難事故における捜索、位置特定、救助者の判断支援へ応用することを目指しています。",
      tag: "Robotics",
      icon: <Waves className="h-6 w-6" />,
      image: "/images/projects/cooperative-underwater.webp",
      imageAlt: "複数の水中ドローンによる隊形制御シミュレーション",
      imageFit: "contain",
      highlights: ["隊形制御", "障害物回避", "安全性評価"],
    },
    {
      id: "scapular-motion-recognition",
      title: "Scapular Motion Recognition",
      subtitle: "HCI / Optical MMG / EAI BodyNets 2025",
      description:
        "単一装着型の光学式筋変位センサアレイで、複雑な6種類の肩甲骨運動を簡易かつ高精度に認識します。",
      details:
        "肩甲骨の動きは皮膚表面から直接計測することが難しく、一般的なモーションキャプチャでは複数のカメラやマーカーが必要です。本研究では、14チャンネルの光学式筋変位センサアレイを身体の1か所に装着し、挙上・下制・外転・内転・上方回旋・下方回旋の6種類の肩甲骨運動を簡易かつ高精度に認識する手法を検討しました。装着位置ごとの性能を比較し、個人に適応させることで単一部位・単一デバイスでも高い認識性能を実現しました。将来的な応用として、VR操作、リハビリテーション、スポーツ動作評価を想定しています。",
      tag: "HCI Research",
      icon: <Cpu className="h-6 w-6" />,
      image: "/images/projects/scapular-motion.webp",
      imageAlt: "肩周辺に装着した光学式筋変位センサアレイ",
      imageFit: "contain",
      highlights: ["6種類の肩甲骨運動", "単一部位 97.3%", "MMG + IMU 99.0%"],
    },
    {
      id: "sea-turtle-nest-sensing",
      title: "Sea Turtle Nest Sensing Prototype",
      subtitle: "海洋保全 / スマートプローブ",
      description:
        "ウミガメ保護活動で経験した産卵巣調査の課題をもとに、卵への接触リスクと作業負担を減らすスマートプローブを開発しています。",
      details:
        "ウミガメ保護活動の一環として、産卵巣の調査や卵の計測に参加しました。現場では、金属製のスティックを砂浜へ差し込み、その手応えをもとに卵の位置を推定した後、手作業で砂を掘って確認します。この方法は作業者の経験と感覚に依存し、推定が外れた場合には砂浜を何度も掘り返す必要があります。また、位置を正しく推定できた場合でも、スティックによって卵を傷つけるリスクがあります。そこで、砂と卵の電気的特性（誘電率）の違いを利用し、卵へ近づいた際に警告音で知らせるスマートプローブの開発を進めています。産卵巣を大きく掘り返す前に卵の位置を推定し、調査者の負担と卵への接触リスクを減らすことを目指しています。現在は電極構成とセンサ反応の基礎検証を進めています。",
      tag: "Ocean Conservation",
      icon: <Search className="h-6 w-6" />,
      image: "/images/projects/turtle-probe.webp",
      imageAlt: "ウミガメの卵探索を支援するスマートプローブの試作機",
      imageFit: "cover",
      highlights: ["スマートプローブ", "接触リスクの低減", "現場課題からの試作"],
    },
    {
      id: "from-simulation-to-the-sea",
      title: "From Simulation to the Sea",
      subtitle: "水中ロボット設計 / 実機試作",
      description:
        "シミュレーション上の制御技術を海で動かすため、自作水中ドローンの設計・試作を進めています。",
      details:
        "研究成果をシミュレーションだけで終わらせず、実際の海で機能する技術へ発展させるため、水中ドローンの機体設計、部品選定、防水構造、配線、浮力調整、制御システムの検討を進めています。2026年9月からの国立台湾科技大学への交換留学では実機製作と機体制御を学び、その後の複数機による水中実証につなげる計画です。",
      tag: "Prototyping",
      icon: <Wrench className="h-6 w-6" />,
      image: "/images/projects/from-simulation-to-sea.webp",
      imageAlt: "複数の水中ドローンを用いた水難救助支援の応用構想",
      imageFit: "contain",
      highlights: ["機体設計", "防水・浮力調整", "実機群制御への展開"],
    },
  ],
  en: [
    {
      id: "cooperative-underwater-robotics",
      title: "Cooperative Underwater Robotics",
      subtitle: "Master's Research / Multi-Robot Control",
      description:
        "Research on safe coordination of multiple underwater robots through formation control, obstacle avoidance, and safety evaluation.",
      details:
        "I study formation control that enables multiple underwater robots to move safely while maintaining their relative positions. Using simulation environments, I evaluate formation accuracy, inter-vehicle distance, obstacle avoidance, and safety to balance control performance with collision risk. The long-term goal is to support search, localization, and human decision-making during water-rescue operations.",
      tag: "Robotics",
      icon: <Waves className="h-6 w-6" />,
      image: "/images/projects/cooperative-underwater.webp",
      imageAlt: "Formation-control simulation with multiple underwater robots",
      imageFit: "contain",
      highlights: ["Formation Control", "Obstacle Avoidance", "Safety Evaluation"],
    },
    {
      id: "scapular-motion-recognition",
      title: "Scapular Motion Recognition",
      subtitle: "HCI / Optical MMG / EAI BodyNets 2025",
      description:
        "Practical and highly accurate recognition of six complex scapular movements using a single-site optical MMG array.",
      details:
        "Scapular motion is difficult to measure directly from the body surface, and conventional motion-capture systems often require multiple cameras or markers. This study used one 14-channel optical MMG array at a single body site to recognize six scapular movements: elevation, depression, protraction, retraction, upward rotation, and downward rotation. By comparing sensor placements and using personalized models, the study demonstrated practical and highly accurate recognition with a single device and minimal placement. Potential applications include VR control, rehabilitation, and sports-motion assessment.",
      tag: "HCI Research",
      icon: <Cpu className="h-6 w-6" />,
      image: "/images/projects/scapular-motion.webp",
      imageAlt: "A single-site optical MMG array attached near the shoulder",
      imageFit: "contain",
      highlights: ["Six Movements", "Single Site 97.3%", "MMG + IMU 99.0%"],
    },
    {
      id: "sea-turtle-nest-sensing",
      title: "Sea Turtle Nest Sensing Prototype",
      subtitle: "Ocean Conservation / Smart Probe",
      description:
        "A smart probe under development to reduce physical contact with eggs and the workload involved in sea-turtle nest surveys.",
      details:
        "As part of sea-turtle conservation work, I participated in nest surveys and egg measurements. In the field, a metal probe is inserted into the sand and the location of the eggs is estimated from the resistance felt by the operator before the area is excavated by hand. This process depends heavily on experience, may require repeated digging when the estimate is incorrect, and carries a risk of contacting an egg even when the nest has been located. I am therefore developing a smart probe that uses differences in the electrical properties, including permittivity, of sand and eggs to provide an audible warning as the probe approaches an egg. The aim is to reduce unnecessary excavation, operator workload, and the risk of contact with eggs. Basic validation of electrode configurations and sensor responses is currently in progress.",
      tag: "Ocean Conservation",
      icon: <Search className="h-6 w-6" />,
      image: "/images/projects/turtle-probe.webp",
      imageAlt: "Prototype smart probe for supporting sea-turtle nest searches",
      imageFit: "cover",
      highlights: ["Smart Probe", "Reduced Contact Risk", "Field-Driven Prototyping"],
    },
    {
      id: "from-simulation-to-the-sea",
      title: "From Simulation to the Sea",
      subtitle: "Underwater Robot Design / Prototyping",
      description:
        "Designing and prototyping an underwater robot to bring simulation-based control research into real marine environments.",
      details:
        "To move beyond simulation and develop technology that works in the ocean, I am working on underwater-robot design, component selection, waterproofing, wiring, buoyancy adjustment, and control-system planning. During my exchange at NTUST beginning in September 2026, I plan to deepen my experience in robot prototyping and vehicle control, then connect this work to future multi-robot underwater experiments.",
      tag: "Prototyping",
      icon: <Wrench className="h-6 w-6" />,
      image: "/images/projects/from-simulation-to-sea.webp",
      imageAlt: "Concept for water-rescue support using multiple underwater robots",
      imageFit: "contain",
      highlights: ["Vehicle Design", "Waterproofing & Buoyancy", "Toward Multi-Robot Trials"],
    },
  ],
};
