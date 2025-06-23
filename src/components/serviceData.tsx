import photoFacial from "../../assets/cover-face-service.jpeg";
import feedbackFaical from "../../assets/feedBack/IMG_7715.png";
import feedbackLaizer from "../../assets/feedBack/feedbackLaizer1.jpg";
import feedbackGabot from "../../assets/feedBack/gabotbackLaizer.jpg";
import feedbackMitzuk from "../../assets/feedBack/feedbackMitzuk.jpg";
import photoLaizer from "../../assets/laizer.png";
import photoMituk from "../../assets/mitzk.jpg";
import photoGabot from "../../assets/photoGabot.png";

export interface VideoSource {
  type: "vimeo" | "youtube" | "local" | "cloudinary";
  url: string;
  thumbnail?: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  video: VideoSource;
  technologies: string[];
  testimonial: {
    text: string;
    author: string;
    image: string;
  };
  pricing: {
    description: string;
    price: string | number;
  }[];
}

const services: Service[] = [
  {
    id: "facial",
    title: "טיפולי פנים",
    image: photoFacial,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1750273575/Reut%20Cosmetics/yxrvwcltouvdwqsvd7vo.mp4",
      thumbnail: "/images/facial-thumbnail.jpg",
    },
    technologies: ["מיזוטרפיה", "פילינג יהלום", "פוטוטרפיה"],
    testimonial: {
      text: "הטיפול שינה את עור הפנים שלי מקצה לקצה! מקצועיות ברמה הגבוהה ביותר.",
      author: "שירה לוי",
      image: feedbackFaical,
    },
    pricing: [
      { description: "טיפול בודד", price: "₪400" },
      { description: "סדרת 6 טיפולים", price: "₪350 לטיפול" },
      { description: "טיפול לחות וגלואו", price: "₪300" },
    ],
  },
  {
    id: "laser",
    title: "לייזר",
    image: photoLaizer,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1750272862/Reut%20Cosmetics/zhhp1mnsoywaxnfhbxwx.mp4",
      thumbnail: "/images/laser-thumbnail.jpg",
    },
    technologies: ["FEATHER LITE LEONARDO", "היפר פולס", "ALT"],
    testimonial: {
      text: "תוצאות מדהימות כבר מהטיפול הראשון! צוות מקצועי ואדיב.",
      author: "",
      image: feedbackLaizer,
    },
    pricing: [
      { description: "איזור", price: "₪100-250" },
      { description: "שחי + מפשעות", price: "לפי דרישה" },
      { description: "כל הגוף", price: "₪599" },
    ],
  },
  {
    id: "mitzk",
    title: "מיצוק",
    image: photoMituk,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1742845825/Reut%20Cosmetics/nbewerms4ew5eased4lq.mp4",
      thumbnail: "/images/massage-thumbnail.jpg",
    },
    technologies: ["7Hz - 7 הבזקים בשניה", "LED לייצור קולוגן", "אנרגיית RF"],
    testimonial: {
      text: "אין מילים העור חזר לקדמותו - מתיחה מדהימה של הבטן",
      author: "קורל אברהמוב",
      image: feedbackMitzuk,
    },
    pricing: [
      { description: "טיפול בודד", price: "₪400" },
      { description: "סדרה בת שישה טיפולים", price: " לטיפול ₪300" },
    ],
  },
  {
    id: "gabot",
    title: "הרמת גבות והרמת ריסים",
    image: photoGabot,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1750273324/Reut%20Cosmetics/jt1lavtxhem598tnmdsb.mp4",
      thumbnail: "/images/massage-thumbnail.jpg",
    },
    technologies: ["חומר כימי מאושר משרד הבריאות"],
    testimonial: {
      text: "אין כמו לקום בבוקר עם גבות וריסים מורמות",
      author: "דנית אוחיון",
      image: feedbackGabot,
    },
    pricing: [
      { description: "ריסים", price: "₪300" },
      { description: "גבות", price: "₪250" },
    ],
  },
];

export default services;
