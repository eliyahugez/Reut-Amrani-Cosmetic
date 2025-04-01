// Centralized type definitions and data
// Import product images for Dermalosophy
import serum24 from "../../assets/product/serum24.jpg";
import bWhiteCream from "../../assets/product/b_white_cream.jpg";
import bWhiteGel from "../../assets/product/b_white_gel.jpg";
import vitaminCSerum from "../../assets/product/vitamin_c_serum.jpg";
import moisturizerSpf30 from "../../assets/product/moisturizer_spf30.jpg";
import hyaluronicSerum from "../../assets/product/hyaluronic_serum.jpg";
import eyeCream from "../../assets/product/eye_cream.jpg";
import clayMask from "../../assets/product/clay_mask.jpg";
import nightCream from "../../assets/product/night_cream.jpg";
import enzymaticPeeling from "../../assets/product/enzymatic_peeling.jpg";
import peptideSerum from "../../assets/product/peptide_serum.jpg";
import cleansingMilk from "../../assets/product/cleansing_milk.jpg";
import activeSerum from "../../assets/product/active_serum.jpg";
import dryMoisturizer from "../../assets/product/dry_moisturizer.jpg";
import intensiveMask from "../../assets/product/intensive_mask.jpg";
import antioxidantSerum from "../../assets/product/antioxidant_serum.jpg";
import spf50 from "../../assets/product/spf50.jpg";
import acneSerum from "../../assets/product/acne_serum.jpg";
import handCream from "../../assets/product/hand_cream.jpg";
import faceToner from "../../assets/product/face_toner.jpg";
import hzSerum from "../../assets/product/hz_serum.jpg";
import hzCream from "../../assets/product/hz_cream.jpg";
import hzMask from "../../assets/product/hz_mask.jpg";
import hzCleanser from "../../assets/product/hz_cleanser.jpg";
import hzToner from "../../assets/product/hz_toner.jpg";
import hzEyeCream from "../../assets/product/hz_eye_cream.jpg";
import hzSunscreen from "../../assets/product/hz_sunscreen.jpg";
import hzNightCream from "../../assets/product/hz_night_cream.jpg";
import hzAntiAging from "../../assets/product/hz_anti_aging.jpg";
import hzIntensiveMask from "../../assets/product/hz_intensive_mask.jpg";

// Import product images for 2080 products
import purifier from "../../assets/product/purifier.jpg";
import therapist from "../../assets/product/therapist.jpg";
import forte from "../../assets/product/forte.jpg";
import polisher from "../../assets/product/polisher.jpg";
import teacher from "../../assets/product/teacher.jpg";
import restore from "../../assets/product/restore.jpg";
import nourisher1 from "../../assets/product/nourisher1.jpg";
import nourisher3 from "../../assets/product/nourisher3.jpg";
import melanight from "../../assets/product/melanight.jpg";
import melaboost from "../../assets/product/melaboost.jpg";
import melaclear from "../../assets/product/melaclear.jpg";
import sunsitive from "../../assets/product/sunsitive.jpg";

// Default image fallback
import defaultProductImage from "../../assets/product/default_product.jpg";
// יש להוסיף את התמונות החסרות או להשתמש בתמונות קיימות כברירת מחדל

export type ProductDetail = {
  id: number;
  name: string;
  price: string;
  description: string;
  activeIngredients: string[];
  instructions: string[];
  image: string;
  textColor: string;
};

export type ProductType = {
  id: number;
  name?: string;
  description: string;
  icon: string; // SVG or icon component
  products: ProductDetail[];
};

export const productTypes: ProductType[] = [
  {
    id: 1,
    name: "Dermalosophy",
    description:
      "חברת דרמלוסופי, הוקמה בשנת 2010 ומאז מעניקה פתרונות דרמטולוגיים באמצעות מגוון רחב של תכשירים פעילים לטיפול הביתי ולמכון המשווקים באמצעות מכוני הקוסמטיקה המובילים בארץ. העיקרון שמוביל את חברת דרמלוסופי הוא להעניק ללקוחות את התוצאות הטובות והמהירות הקיימות נכון להיום בעולם, באמצעות חומרי גלם ייחודיים ונבחרים אשר תוצאותיהם מוכחות במחקרים קליניים.",
    icon: "https://dermalosophy.co.il/wp-content/uploads/2021/08/Main-Logo-2024-1024x208.png",
    products: [
      {
        id: 1,
        name: "סרום 24 - לחות והזנה לאורך כל היום",
        price: "₪289",
        description:
          "הכירו את סרום 24 מבית Dermalosophy, פריצת דרך בעולם הקוסמטיקה המתקדמת. הסרום מיועד להזנה עמוקה והענקת לחות לאורך זמן, הודות לטכנולוגיית Longlasting ייחודית שמבטיחה שהעור יישאר רווי, זוהר ונעים למגע למשך כל היום.",
        activeIngredients: [
          "שמנים טבעיים",
          "פוספוליפידים",
          "גליקוליפידים",
          "ספינגוליפידים",
          "ויטמינים",
        ],
        instructions: [
          "מרחו את הסרום בעדינות על הפנים, צוואר ודקולטה.",
          "השתמשו בבוקר ובערב.",
          "מתאים לכל סוגי העור.",
        ],
        image: serum24,
        textColor: "pink",
      },
      {
        id: 2,
        name: "קרם הבהרה B-WHITE CREAM",
        price: "₪320",
        description:
          "קרם הבהרה בעל 2 פעולות - פירוק ומניעת היווצרות כתמים. באמצעות שימוש בחומרי הבהרה חזקים ומרוכזים, ושימוש במרכיב ייחודי המאפשר את החדרת המרכיבים לשכבות העמוקות של העור, מקנים תוצאות מצוינות לעור בעל גוון לא אחיד וכתמים.",
        activeIngredients: ["חומרי הבהרה מרוכזים", "מרכיב ייחודי להחדרה עמוקה"],
        instructions: [
          "מרחי שכבה דקה על האזור הרצוי.",
          "יש להשתמש מדי ערב על עור נקי בלבד.",
          "מתאים לשימוש ממוקד או אזורים רחבים.",
        ],
        image: bWhiteCream,
        textColor: "amber",
      },
      {
        id: 3,
        name: "ג'ל הבהרה B-WHITE GEL",
        price: "₪320",
        description:
          "ג'ל הבהרה עוצמתי המיועד לטיפול בכתמי פיגמנטציה וחוסר אחידות בגוון העור. מכיל תרכובת ייחודית של חומרי הבהרה פעילים שחודרים לעומק העור ומטפלים בכתמים קיימים תוך מניעת היווצרות כתמים חדשים.",
        activeIngredients: [
          "ארבוטין",
          "קוג'יק אסיד",
          "ויטמין C",
          "חומצה אזלאית",
        ],
        instructions: [
          "מרחו שכבה דקה על אזורים עם פיגמנטציה.",
          "השתמשו פעם ביום, עדיף בערב.",
          "הקפידו על שימוש במקדם הגנה בשעות היום.",
        ],
        image: bWhiteGel,
        textColor: "blue",
      },
      {
        id: 4,
        name: "סרום ויטמין C מרוכז",
        price: "₪299",
        description:
          "סרום עוצמתי המכיל ויטמין C מיוצב בריכוז גבוה. מעניק הגנה אנטיאוקסידנטית, מבהיר כתמי פיגמנטציה, מעודד ייצור קולגן ומעניק לעור מראה בהיר, אחיד וקורן.",
        activeIngredients: [
          "ויטמין C 15%",
          "חומצה פרולית",
          "ויטמין E",
          "חומצה היאלורונית",
        ],
        instructions: [
          "מרחו 3-4 טיפות על עור נקי ויבש בבוקר.",
          "המתינו לספיגה והמשיכו בשגרת הטיפוח הרגילה.",
          "השתמשו במקביל במוצר הגנה מהשמש.",
        ],
        image: vitaminCSerum,
        textColor: "orange",
      },
      {
        id: 5,
        name: "קרם לחות מגן SPF30",
        price: "₪275",
        description:
          "קרם לחות יומי המשלב הגנה מהשמש עם לחות אופטימלית. מגן מפני קרינת UVA/UVB, מונע נזקי סביבה ומעשיר את העור בלחות לאורך כל היום.",
        activeIngredients: [
          "מסנני קרינה רחבי טווח",
          "חומצה היאלורונית",
          "ויטמין E",
          "נוגדי חמצון",
        ],
        instructions: [
          "מרחו שכבה נדיבה על הפנים והצוואר מדי בוקר.",
          "חדשו את המריחה במהלך היום בעת הצורך.",
          "מתאים לכל סוגי העור.",
        ],
        image: moisturizerSpf30,
        textColor: "yellow",
      },
      {
        id: 6,
        name: "סרום חומצה היאלורונית",
        price: "₪265",
        description:
          "סרום לחות אינטנסיבי המכיל חומצה היאלורונית במשקל מולקולרי נמוך, בינוני וגבוה. חודר לשכבות העור השונות ומספק לחות עמוקה, ממלא קמטוטים ומשפר את מרקם העור.",
        activeIngredients: [
          "חומצה היאלורונית בשלושה משקלים מולקולריים",
          "גליצרין",
          "פנטנול",
          "אלוורה",
        ],
        instructions: [
          "מרחו 2-3 טיפות על עור לח.",
          "טפחו קלות לספיגה מיטבית.",
          "השתמשו בבוקר ובערב לפנית הלחות.",
        ],
        image: hyaluronicSerum,
        textColor: "blue",
      },
      {
        id: 7,
        name: "קרם עיניים אנטי-אייג'ינג",
        price: "₪245",
        description:
          "קרם עיניים ייעודי המטפל בסימני עייפות, נפיחות, עיגולים שחורים וקמטוטים באזור העיניים. נוסחה קלילה המכילה קפאין, פפטידים וחומצה היאלורונית לתוצאות מיידיות וארוכות טווח.",
        activeIngredients: [
          "קפאין",
          "פפטידים",
          "חומצה היאלורונית",
          "ויטמין K",
          "שמן ארגן",
        ],
        instructions: [
          "טפטפו כמות קטנה ועסו בעדינות מתחת לעיניים ומסביב להן.",
          "השתמשו בבוקר ובערב.",
          "ניתן לשמור במקרר לאפקט מרענן נוסף.",
        ],
        image: eyeCream,
        textColor: "purple",
      },
      {
        id: 8,
        name: "מסכת חימר מטהרת",
        price: "₪195",
        description:
          "מסכת חימר עשירה המשלבת חימר ירוק וחימר לבן לספיחת עודפי שומן וטיהור עמוק של העור. מכילה תמציות צמחים מרגיעות ומסייעת בהפחתת נקבוביות מורחבות ומניעת פגמים.",
        activeIngredients: [
          "חימר ירוק",
          "חימר לבן",
          "פחם פעיל",
          "תמצית אלוורה",
          "תמצית קמומיל",
        ],
        instructions: [
          "מרחו שכבה אחידה על עור נקי ויבש.",
          "השאירו למשך 10-15 דקות עד להתייבשות.",
          "שטפו במים פושרים והמשיכו בשגרת הטיפוח.",
        ],
        image: clayMask,
        textColor: "green",
      },
      {
        id: 9,
        name: "קרם לילה מחדש",
        price: "₪285",
        description:
          "קרם לילה עשיר המכיל תערובת ייחודית של רטינול, פפטידים וחומצות AHA המעודדים התחדשות תאים בזמן השינה. מסייע בהפחתת קמטים, שיפור מרקם העור והענקת מראה רענן ובריא בבוקר.",
        activeIngredients: [
          "רטינול",
          "פפטידים",
          "חומצות AHA",
          "שמן ארגן",
          "שמן מקדמיה",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי לפניה.",
          "הימנעו מאזור העיניים.",
          "השתמשו 2-3 פעמים בשבוע בהתחלה והגבירו בהדרגה.",
        ],
        image: nightCream,
        textColor: "indigo",
      },
      {
        id: 10,
        name: "פילינג אנזימטי",
        price: "₪210",
        description:
          "פילינג עדין המבוסס על אנזימים טבעיים המסירים תאי עור מתים ללא שפשוף. מחדש את העור, מבהיר כתמים, מטהר נקבוביות ומשפר את מרקם העור.",
        activeIngredients: [
          "פפאין",
          "ברומלין",
          "חומצות פירות",
          "תמצית אננס",
          "תמצית פפאיה",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי ולח.",
          "השאירו למשך 5-10 דקות.",
          "עסו בעדינות בתנועות סיבוביות ושטפו היטב.",
        ],
        image: enzymaticPeeling,
        textColor: "lime",
      },
      {
        id: 11,
        name: "סרום פפטידים",
        price: "₪310",
        description:
          "סרום מתקדם המכיל תערובת ייחודית של פפטידים החקים את פעילות הבוטוקס. מפחית קמטי הבעה, מחזק את העור ומשפר את גמישותו ללא הזרקות.",
        activeIngredients: [
          "ארגירלין",
          "מטריקסיל",
          "לפירמקס",
          "חומצה היאלורונית",
          "קופראסיל",
        ],
        instructions: [
          "מרחו 3-4 טיפות על אזורים עם קמטי הבעה.",
          "טפחו קלות לספיגה.",
          "השתמשו פעמיים ביום לתוצאות מיטביות.",
        ],
        image: peptideSerum,
        textColor: "rose",
      },
      {
        id: 12,
        name: "תחליב ניקוי עדין",
        price: "₪175",
        description:
          "תחליב ניקוי קרמי המסיר איפור, לכלוך וזיהומים מבלי לייבש את העור. מכיל שמנים טבעיים ומרכיבים מרגיעים השומרים על מעטה החומציות הטבעי של העור.",
        activeIngredients: [
          "שמן חוחובה",
          "אלוורה",
          "קמומיל",
          "גליצרין",
          "ויטמין E",
        ],
        instructions: [
          "עסו על עור יבש להסרת איפור ולכלוך.",
          "הוסיפו מעט מים והמשיכו בעיסוי.",
          "שטפו היטב במים פושרים.",
        ],
        image: cleansingMilk,
        textColor: "cyan",
      },
      {
        id: 13,
        name: "סרום אקטיבי לעור בוגר",
        price: "₪350",
        description:
          "סרום אינטנסיבי המיועד לעור בוגר. מכיל תערובת ייחודית של חומרים פעילים המטפלים בסימני הזדקנות העור, מעניקים מיצוק, הרמה והצערה נראית לעין.",
        activeIngredients: [
          "פפטידים מתקדמים",
          "חומצה היאלורונית",
          "תאי גזע צמחיים",
          "נוגדי חמצון",
        ],
        instructions: [
          "מרחו 3-4 טיפות על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב לפני קרם הלחות.",
        ],
        image: activeSerum,
        textColor: "fuchsia",
      },
      {
        id: 14,
        name: "קרם לחות לעור יבש",
        price: "₪249",
        description:
          "קרם לחות עשיר אשר מעלה את רמת לחות העור, תורם לגמישותו ומגן עליו מפני נזקי הסביבה. מתאים לשימוש יום יומי ומיועד במיוחד לעור יבש.",
        activeIngredients: [
          "חומצה היאלורונית",
          "ויטמין E",
          "קולגן",
          "שמן שיאה",
          "סקוואלן",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב.",
        ],
        image: dryMoisturizer,
        textColor: "green",
      },
      {
        id: 15,
        name: "מסכת הזנה אינטנסיבית",
        price: "₪280",
        description:
          "מסכת הזנה עשירה המעניקה לעור לחות אינטנסיבית, מזינה ומרגיעה. מכילה תערובת ייחודית של שמנים טבעיים, ויטמינים ומינרלים החיוניים לעור בריא וזוהר.",
        activeIngredients: [
          "שמן ארגן",
          "שמן מקדמיה",
          "ויטמין E",
          "אלוורה",
          "חמאת שיאה",
        ],
        instructions: [
          "מרחו שכבה עבה על עור נקי.",
          "השאירו למשך 15-20 דקות.",
          "הסירו את העודפים במגבון או שטפו במים פושרים.",
        ],
        image: intensiveMask,
        textColor: "amber",
      },
      {
        id: 16,
        name: "סרום אנטי-אוקסידנטי",
        price: "₪320",
        description:
          "סרום עוצמתי המכיל תערובת של נוגדי חמצון המגנים על העור מפני נזקי סביבה, זיהום ורדיקלים חופשיים. סייע במניעת הזדקנות מוקדמת ושומר על עור בריא וצעיר.",
        activeIngredients: [
          "ויטמין C",
          "ויטמין E",
          "רסברטרול",
          "קואנזים Q10",
          "תמצית תה ירוק",
        ],
        instructions: [
          "מרחו 3-4 טיפות על עור נקי בבוקר.",
          "המתינו לספיגה והמשיכו בשגרת הטיפוח.",
          "מומלץ להשתמש יחד עם מוצר הגנה מהשמש.",
        ],
        image: antioxidantSerum,
        textColor: "red",
      },
      {
        id: 17,
        name: "קרם הגנה SPF50",
        price: "₪225",
        description:
          "קרם הגנה מתקדם המעניק הגנה מקסימלית מפני קרינת UVA/UVB. בעל מרקם קליל שנספג במהירות ואינו משאיר שאריות לבנות או תחושה שמנונית.",
        activeIngredients: [
          "מסנני קרינה רחבי טווח",
          "ויטמין E",
          "אלוורה",
          "נוגדי חמצון",
        ],
        instructions: [
          "מרחו שכבה נדיבה 15 דקות לפני החשיפה לשמש.",
          "חדשו את המריחה כל שעתיים ולאחר שחייה או הזעה.",
          "מתאים לכל סוגי העור.",
        ],
        image: spf50,
        textColor: "yellow",
      },
      {
        id: 18,
        name: "סרום לטיפול באקנה",
        price: "₪230",
        description:
          "סרום ייעודי לטיפול בפגמי עור ואקנה. מכיל חומרים אנטי-בקטריאליים ואנטי-דלקתיים הפחיתים אדמומיות, מונעים היווצרות פצעונים חדשים ומסייעים בריפוי פצעונים קיימים.",
        activeIngredients: [
          "חומצה סליצילית",
          "ניאצינאמיד",
          "תה עץ",
          "אבץ",
          "אלוורה",
        ],
        instructions: [
          "מרחו שכבה דקה על אזורים נגועים בלבד.",
          "השתמשו פעמיים ביום על עור נקי.",
          "הימנעו ממגע עם העיניים.",
        ],
        image: acneSerum,
        textColor: "emerald",
      },
      {
        id: 19,
        name: "קרם ידיים מזין",
        price: "₪85",
        description:
          "קרם ידיים עשיר המעניק לחות אינטנסיבית, מרכך ומגן על העור מפני יובש וגורמים סביבתיים. נספג במהירות ואינו משאיר תחושה שמנונית.",
        activeIngredients: [
          "חמאת שיאה",
          "שמן קוקוס",
          "אלוורה",
          "ויטמין E",
          "קרטין",
        ],
        instructions: [
          "מרחו כמות קטנה על הידיים ועסו עד לספיגה.",
          "השתמשו לפי הצורך לאורך היום.",
          "מומלץ להשתמש לאחר שטיפת ידיים.",
        ],
        image: handCream,
        textColor: "teal",
      },
      {
        id: 20,
        name: "מי פנים מרעננים",
        price: "₪120",
        description:
          "מי פנים מרעננים המאזנים את רמת החומציות של העור, מסירים שאריות איפור וניקוי, ומכינים את העור לספיגה מיטבית של מוצרי הטיפוח הבאים.",
        activeIngredients: [
          "מי ורדים",
          "חמוציות",
          "אלוורה",
          "פנטנול",
          "חומצה היאלורונית",
        ],
        instructions: [
          "רססו על הפנים והצוואר או מרחו באמצעות צמר גפן.",
          "השתמשו לאחר ניקוי ולפני סרום או קרם לחות.",
          "ניתן להשתמש גם במהלך היום לריענון העור.",
        ],
        image: faceToner,
        textColor: "sky",
      },
    ],
  },
  {
    id: 2,
    name: "Hava Zingboim",
    description:
      "מפתחת שיטת הטיפול הדו-עומקי, ומי ששינתה את פני הקוסמטיקה בארץ כשייבאה את ה-P.M.E לישראל, הטמיעה בקרב הקוסמטיקאיות.ים שעובדות.ים איתה את הגישה הדו-עומקית לטיפול בעור המשלבת פיתוחים טכנולוגיים פורצי דרך, והיא לא מפסיקה לחדש ולהפתיע",
    icon: "https://new-lp.havazingboim.co.il/wp-content/uploads/2022/11/HZ_Workmark_Black_RGB-1.png",
    products: [
      {
        id: 1,
        name: "סרום אקטיבי לעור רגיש",
        price: "₪350",
        description:
          "סרום ייחודי המיועד לעור רגיש ומגורה. מכיל תמציות צמחיות מרגיעות ומרכיבים אנטי-דלקתיים המסייעים להפחתת אדמומיות, גירויים ותחושת אי-נוחות בעור.",
        activeIngredients: [
          "אלוורה",
          "קמומיל",
          "ביסבולול",
          "פנטנול",
          "אלנטואין",
        ],
        instructions: [
          "מרחו 2-3 טיפות על עור נקי.",
          "טפחו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב לפני קרם הלחות.",
        ],
        image: hzSerum,
        textColor: "blue",
      },
      {
        id: 2,
        name: "קרם לחות מאזן",
        price: "₪280",
        description:
          "קרם לחות קליל המאזן את רמת השומן והלחות בעור. מתאים במיוחד לעור מעורב ושמן, מסייע בהפחתת ברק עודף ומונע סתימת נקבוביות תוך שמירה על לחות אופטימלית.",
        activeIngredients: [
          "חומצה היאלורונית",
          "ניאצינאמיד",
          "אבץ",
          "תמצית תה ירוק",
          "אלוורה",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב.",
        ],
        image: hzCream,
        textColor: "green",
      },
      {
        id: 3,
        name: "מסכת התחדשות לילית",
        price: "₪320",
        description:
          "מסכת לילה חדשנית המחדשת את העור בזמן השינה. מכילה תערובת ייחודית של חומצות AHA/BHA, רטינול ותמציות צמחיות המעודדות התחדשות תאים, מטהרות את העור ומשפרות את מרקמו.",
        activeIngredients: [
          "חומצה גליקולית",
          "חומצה סליצילית",
          "רטינול",
          "פפטידים",
          "שמן ארגן",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי לפני השינה.",
          "השאירו למשך הלילה ושטפו בבוקר.",
          "השתמשו 2-3 פעמים בשבוע.",
        ],
        image: hzMask,
        textColor: "purple",
      },
      {
        id: 4,
        name: "תחליב ניקוי עמוק",
        price: "₪195",
        description:
          "תחליב ניקוי עמוק המסיר ביעילות איפור, לכלוך וזיהומים מבלי לפגוע במעטה ההגנה הטבעי של העור. מותיר את העור נקי, רענן ומוכן לספיגה מיטבית של מוצרי הטיפוח הבאים.",
        activeIngredients: [
          "חומצות אמינו",
          "גליצרין",
          "אלוורה",
          "שמן חוחובה",
          "ויטמין E",
        ],
        instructions: [
          "עסו על עור יבש בתנועות עיסוי עדינות.",
          "הוסיפו מעט מים והמשיכו בעיסוי.",
          "שטפו היטב במים פושרים.",
        ],
        image: hzCleanser,
        textColor: "cyan",
      },
      {
        id: 5,
        name: "טונר מאזן pH",
        price: "₪165",
        description:
          "טונר עדין המאזן את רמת ה-pH של העור לאחר הניקוי. מסיר שאריות ניקוי, מכווץ נקבוביות ומכין את העור לספיגה מיטבית של מוצרי הטיפוח הבאים.",
        activeIngredients: [
          "חומצה לקטית",
          "מי ורדים",
          "אלוורה",
          "פנטנול",
          "נוגדי חמצון",
        ],
        instructions: [
          "הספיגו צמר גפן ונגבו את הפנים והצוואר.",
          "השתמשו לאחר הניקוי ולפני מוצרי הטיפוח.",
          "ניתן להשתמש גם במהלך היום לריענון העור.",
        ],
        image: hzToner,
        textColor: "sky",
      },
      {
        id: 6,
        name: "קרם עיניים מתקדם",
        price: "₪290",
        description:
          "קרם עיניים מתקדם המטפל בכל סימני העייפות והגיל באזור העיניים. מפחית עיגולים שחורים, נפיחות, קמטים וקמטוטים, ומעניק מראה צעיר ורענן.",
        activeIngredients: [
          "פפטידים",
          "קפאין",
          "חומצה היאלורונית",
          "ויטמין K",
          "שמן ארגן",
        ],
        instructions: [
          "טפטפו כמות קטנה ועסו בעדינות באזור העיניים.",
          "השתמשו בבוקר ובערב.",
          "הימנעו ממגע ישיר עם העיניים.",
        ],
        image: hzEyeCream,
        textColor: "violet",
      },
      {
        id: 7,
        name: "קרם הגנה SPF50 PA++++",
        price: "₪245",
        description:
          "קרם הגנה מתקדם המעניק הגנה מקסימלית מפני קרינת UVA/UVB. בעל מרקם קליל שנספג במהירות, אינו משאיר שאריות לבנות ומתאים לשימוש יומיומי תחת איפור.",
        activeIngredients: [
          "מסנני קרינה רחבי טווח",
          "ויטמין E",
          "ויטמין C",
          "חומצה היאלורונית",
          "נוגדי חמצון",
        ],
        instructions: [
          "מרחו שכבה נדיבה 15 דקות לפני החשיפה לשמש.",
          "חדשו את המריחה כל שעתיים.",
          "מתאים לכל סוגי העור.",
        ],
        image: hzSunscreen,
        textColor: "yellow",
      },
      {
        id: 8,
        name: "קרם לילה מחדש",
        price: "₪310",
        description:
          "קרם לילה עשיר המכיל תערובת ייחודית של רטינול, פפטידים וחומצות AHA המעודדים התחדשות תאים בזמן השינה. מסייע בהפחתת קמטים, שיפור מרקם העור והענקת מראה רענן ובריא בבוקר.",
        activeIngredients: [
          "רטינול",
          "פפטידים",
          "חומצות AHA",
          "שמן ארגן",
          "שמן מקדמיה",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי לפני השינה.",
          "הימנעו מאזור העיניים.",
          "השתמשו 2-3 פעמים בשבוע בהתחלה והגבירו בהדרגה.",
        ],
        image: hzNightCream,
        textColor: "indigo",
      },
      {
        id: 9,
        name: "סרום אנטי-אייג'ינג",
        price: "₪380",
        description:
          "סרום אנטי-אייג'ינג מתקדם המכיל ריכוז גבוה של פפטידים, חומצה היאלורונית ונוגדי חמצון. מפחית קמטים, משפר את גמישות העור ומעניק מראה צעיר וקורן.",
        activeIngredients: [
          "פפטידים מתקדמים",
          "חומצה היאלורונית",
          "ויטמין C",
          "קואנזים Q10",
          "תמציות צמחיות",
        ],
        instructions: [
          "מרחו 2-3 טיפות על עור נקי.",
          "טפחו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב לפני קרם הלחות.",
        ],
        image: hzAntiAging,
        textColor: "pink",
      },
      {
        id: 10,
        name: "מסכת הזנה אינטנסיבית",
        price: "₪270",
        description:
          "מסכת הזנה עשירה המעניקה לעור לחות אינטנסיבית, מזינה ומרגיעה. מכילה תערובת ייחודית של שמנים טבעיים, ויטמינים ומינרלים החיוניים לעור בריא וזוהר.",
        activeIngredients: [
          "שמן ארגן",
          "שמן מקדמיה",
          "ויטמין E",
          "אלוורה",
          "חמאת שיאה",
        ],
        instructions: [
          "מרחו שכבה עבה על עור נקי.",
          "השאירו למשך 15-20 דקות.",
          "הסירו את העודפים במגבון או שטפו במים פושרים.",
        ],
        image: hzIntensiveMask,
        textColor: "amber",
      },
    ],
  },
  {
    id: 3,
    name: "2080",
    description:
      "מותג 2080 מציע מגוון רחב של מוצרי היגיינת הפה, המפותחים בטכנולוגיה מתקדמת לשמירה על בריאות השיניים והחניכיים. המוצרים מבוססים על מחקר מדעי ומציעים פתרונות יעילים לכל צרכי בריאות הפה.",
    icon: "https://www.2080skincare.co.il/wp-content/uploads/2021/04/20-80skincare-Logo.png",
    products: [
      {
        id: 1,
        name: "PURIFIER",
        price: "₪189",
        description:
          "תחליב ניקוי עדין המסיר ביעילות איפור, לכלוך וזיהומים מבלי לפגוע במעטה ההגנה הטבעי של העור. מותיר את העור נקי, רענן ומוכן לספיגה מיטבית של מוצרי הטיפוח הבאים.",
        activeIngredients: [
          "חומצות אמינו",
          "גליצרין",
          "אלוורה",
          "שמן חוחובה",
          "ויטמין E",
        ],
        instructions: [
          "עסו על עור יבש בתנועות עיסוי עדינות.",
          "הוסיפו מעט מים והמשיכו בעיסוי.",
          "שטפו היטב במים פושרים.",
        ],
        image: purifier,
        textColor: "cyan",
      },
      {
        id: 2,
        name: "THERAPIST",
        price: "₪220",
        description:
          "סרום טיפולי מתקדם המכיל תערובת ייחודית של חומרים פעילים המטפלים בבעיות עור שונות. מסייע בהרגעת העור, הפחתת אדמומיות ושיפור מרקם העור.",
        activeIngredients: [
          "ניאצינאמיד",
          "חומצה היאלורונית",
          "אלנטואין",
          "פנטנול",
          "תמציות צמחיות",
        ],
        instructions: [
          "מרחו 2-3 טיפות על עור נקי.",
          "טפחו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב לפני קרם הלחות.",
        ],
        image: therapist,
        textColor: "blue",
      },
      {
        id: 3,
        name: "FORTE",
        price: "₪250",
        description:
          "סרום מרוכז במיוחד המכיל ריכוז גבוה של חומרים פעילים לטיפול אינטנסיבי בבעיות עור. מיועד לשימוש ממוקד באזורים בעייתיים ומספק תוצאות מהירות ויעילות.",
        activeIngredients: [
          "ויטמין C מיוצב",
          "פפטידים",
          "חומצה אזלאית",
          "נוגדי חמצון",
          "חומצה סליצילית",
        ],
        instructions: [
          "מרחו כמות קטנה על אזורים בעייתיים בלבד.",
          "השתמשו פעם ביום, עדיף בערב.",
          "הימנעו ממגע עם העיניים.",
        ],
        image: forte,
        textColor: "red",
      },
      {
        id: 4,
        name: "POLISHER",
        price: "₪210",
        description:
          "פילינג עדין המסיר תאי עור מתים ומחדש את מרקם העור. מכיל חומצות פירות וגרגירים עדינים לפעולה כפולה של התחדשות והחלקה.",
        activeIngredients: [
          "חומצות AHA",
          "חומצה סליצילית",
          "גרגירי במבוק",
          "אלוורה",
          "שמן חוחובה",
        ],
        instructions: [
          "מרחו שכבה דקה על עור לח.",
          "עסו בעדינות בתנועות סיבוביות.",
          "שטפו היטב במים פושרים.",
          "השתמשו 1-2 פעמים בשבוע.",
        ],
        image: polisher,
        textColor: "green",
      },
      {
        id: 5,
        name: "TEACHER",
        price: "₪195",
        description:
          "טונר מאזן המסייע בהשלמת תהליך הניקוי, מאזן את רמת ה-pH של העור ומכין אותו לספיגה מיטבית של מוצרי הטיפוח הבאים.",
        activeIngredients: [
          "חומצה לקטית",
          "מי ורדים",
          "אלוורה",
          "פנטנול",
          "תמציות צמחיות",
        ],
        instructions: [
          "הספיגו צמר גפן ונגבו את הפנים והצוואר.",
          "השתמשו לאחר הניקוי ולפני מוצרי הטיפוח.",
          "ניתן להשתמש גם במהלך היום לריענון העור.",
        ],
        image: teacher,
        textColor: "purple",
      },
      {
        id: 6,
        name: "RESTORE",
        price: "₪280",
        description:
          "קרם שיקום אינטנסיבי המסייע בחידוש מחסום העור ושיקום עור פגום. מכיל תערובת ייחודית של שמנים טבעיים, קרמידים וחומצות שומן חיוניות.",
        activeIngredients: [
          "קרמידים",
          "חומצות שומן חיוניות",
          "שמן ארגן",
          "שמן שיאה",
          "סקוואלן",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב או לפי הצורך.",
        ],
        image: restore,
        textColor: "amber",
      },
      {
        id: 7,
        name: "NOURISHER 1",
        price: "₪265",
        description:
          "קרם לחות קליל המעניק לחות אופטימלית לעור מבלי להכביד עליו. מתאים לעור רגיל עד שמן ומספק הגנה מפני נזקי סביבה.",
        activeIngredients: [
          "חומצה היאלורונית",
          "ויטמין E",
          "נוגדי חמצון",
          "אלוורה",
          "תמציות צמחיות",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב.",
        ],
        image: nourisher1,
        textColor: "blue",
      },
      {
        id: 8,
        name: "NOURISHER 3",
        price: "₪285",
        description:
          "קרם לחות עשיר המיועד לעור יבש במיוחד. מכיל שמנים טבעיים וחמאות המעניקים לחות אינטנסיבית ומסייעים בשיקום מחסום העור.",
        activeIngredients: [
          "שמן ארגן",
          "חמאת שיאה",
          "סקוואלן",
          "קרמידים",
          "חומצה היאלורונית",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי.",
          "עסו בעדינות עד לספיגה מלאה.",
          "השתמשו בבוקר ובערב או לפי הצורך.",
        ],
        image: nourisher3,
        textColor: "indigo",
      },
      {
        id: 9,
        name: "MELANIGHT",
        price: "₪320",
        description:
          "קרם לילה מבהיר המטפל בכתמי פיגמנטציה בזמן השינה. מכיל תערובת ייחודית של חומרי הבהרה פעילים המפחיתים כתמים קיימים ומונעים היווצרות כתמים חדשים.",
        activeIngredients: [
          "ארבוטין",
          "קוג'יק אסיד",
          "ויטמין C",
          "חומצה אזלאית",
          "ניאצינאמיד",
        ],
        instructions: [
          "מרחו שכבה דקה על עור נקי לפני השינה.",
          "השתמשו מדי ערב.",
          "הקפידו על שימוש במקדם הגנה בשעות היום.",
        ],
        image: melanight,
        textColor: "purple",
      },
      {
        id: 10,
        name: "MELABOOST",
        price: "₪340",
        description:
          "סרום מבהיר מרוכז לטיפול אינטנסיבי בכתמי פיגמנטציה. מכיל ריכוז גבוה של חומרי הבהרה פעילים לתוצאות מהירות ויעילות.",
        activeIngredients: [
          "ויטמין C מיוצב 15%",
          "אלפא ארבוטין",
          "גלוטטיון",
          "ניאצינאמיד",
          "חומצה אזלאית",
        ],
        instructions: [
          "מרחו 2-3 טיפות על אזורים עם פיגמנטציה.",
          "השתמשו פעמיים ביום על עור נקי.",
          "הקפידו על שימוש במקדם הגנה בשעות היום.",
        ],
        image: melaboost,
        textColor: "orange",
      },
      {
        id: 11,
        name: "MELACLEAR",
        price: "₪290",
        description:
          "טיפול ממוקד לכתמי פיגמנטציה עקשניים. מכיל תערובת ייחודית של חומרי הבהרה חזקים במיוחד לטיפול בכתמים קשים.",
        activeIngredients: [
          "הידרוקינון",
          "רטינול",
          "ויטמין C",
          "חומצה אזלאית",
          "חומצה גליקולית",
        ],
        instructions: [
          "מרחו כמות קטנה ישירות על הכתם.",
          "השתמשו פעם ביום, עדיף בערב.",
          "הקפידו על שימוש במקדם הגנה בשעות היום.",
        ],
        image: melaclear,
        textColor: "yellow",
      },
      {
        id: 12,
        name: "SUNSITIVE",
        price: "₪225",
        description:
          "קרם הגנה מתקדם המעניק הגנה מקסימלית מפני קרינת UVA/UVB. מכיל גם נוגדי חמצון להגנה מפני נזקי סביבה ומתאים במיוחד לעור רגיש.",
        activeIngredients: [
          "מסנני קרינה רחבי טווח",
          "ויטמין E",
          "ויטמין C",
          "אלוורה",
          "נוגדי חמצון",
        ],
        instructions: [
          "מרחו שכבה נדיבה 15 דקות לפני החשיפה לשמש.",
          "חדשו את המריחה כל שעתיים ולאחר שחייה או הזעה.",
          "מתאים לכל סוגי העור, במיוחד לעור רגיש.",
        ],
        image: sunsitive,
        textColor: "teal",
      },
    ],
  },
];

export default productTypes;
