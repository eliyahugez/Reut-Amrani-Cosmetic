import photoFacial from "../../assets/bg.png";
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
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1738004621/zyxczbanc91w2k5omdzz.mp4",
      thumbnail: "/images/facial-thumbnail.jpg",
    },
    technologies: ["מיזוטרפיה", "פילינג יהלום", "פוטוטרפיה"],
    testimonial: {
      text: "הטיפול שינה את עור הפנים שלי מקצה לקצה! מקצועיות ברמה הגבוהה ביותר.",
      author: "שירה לוי",
      image: feedbackFaical,
    },
    pricing: [
      { description: "טיפול בודד", price: "₪350" },
      { description: "סדרת 6 טיפולים", price: "₪300 לטיפול" },
    ],
  },
  {
    id: "laser",
    title: "לייזר",
    image: photoLaizer,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/video-output-AFBC899F-F5F5-47C0-B815-E6347DA118AF_sh0i2f.mp4",
      thumbnail: "/images/laser-thumbnail.jpg",
    },
    technologies: ["FEATHER LITE LEONARDO", "היפר פולס", "ALT"],
    testimonial: {
      text: "תוצאות מדהימות כבר מהטיפול הראשון! צוות מקצועי ואדיב.",
      author: "",
      image: feedbackLaizer,
    },
    pricing: [
      { description: "רגליים", price: "₪250" },
      { description: "שחי + מפשעות", price: "₪250" },
      { description: "כל הגוף", price: "₪600" },
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
      { description: "סדרה בת שישה טיפולים", price: " לטיפול ₪300" },
      { description: "טיפול בודד", price: "₪400" },
    ],
  },
  {
    id: "gabot",
    title: "הרמת גבות והרמת ריסים",
    image: photoGabot,
    video: {
      type: "local",
      url: "https://res.cloudinary.com/djcbwaqfj/video/upload/v1742848353/Reut%20Cosmetics/cgkwbmng0qov6m5ejcwz.mp4",
      thumbnail: "/images/massage-thumbnail.jpg",
    },
    technologies: ["חומר כימי מאושר משרד הבריאות"],
    testimonial: {
      text: "אין כמו לקום בבוקר עם גבות וריסים מורמות",
      author: "דנית אוחיון",
      image: feedbackGabot,
    },
    pricing: [
      { description: "גבות", price: "200" },
      { description: "ריסים", price: "250" },
    ],
  },
];

export default services;
