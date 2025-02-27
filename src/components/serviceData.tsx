import photoFacial from "../../assets/bg.png";
import feedbackFaical from "../../assets/feedBack/IMG_7715.png";
import feedbackLaizer from "../../assets/feedBack/IMG_7712.png";
import photoLaizer from "../../assets/laizer.png";

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
    technologies: ["מיקרונדלינג", "פילינג כימי", "אלקטרופורציה"],
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
    technologies: ["לייזר Soprano Titanium", "לייזר Diode", "IPL"],
    testimonial: {
      text: "תוצאות מדהימות כבר מהטיפול הראשון! צוות מקצועי ואדיב.",
      author: "מיכל כהן",
      image: feedbackLaizer,
    },
    pricing: [
      { description: "אזור קטן", price: "₪200" },
      { description: "אזור בינוני", price: "₪350" },
      { description: "כל הגוף", price: "₪600" },
    ],
  },
  // {
  //   id: 'massage',
  //   title: 'עיסויים',
  //   image: '/images/massage.jpg',
  //   video: {
  //     type: 'local',
  //     url: '/videos/massage.mp4',
  //     thumbnail: '/images/massage-thumbnail.jpg',
  //   },
  //   technologies: ['שוודי', 'רקמות עמוק', 'עיסוי ספורטאים'],
  //   testimonial: {
  //     text: 'עיסוי מקצועי ומרגיע. ממליצה בחום!',
  //     author: 'יעל אברהם',
  //     image: '/images/author.jpg',
  //   },
  //   pricing: [
  //     { description: '30 דקות', price: '₪200' },
  //     { description: '60 דקות', price: '₪350' },
  //   ],
  // },
];

export default services;
