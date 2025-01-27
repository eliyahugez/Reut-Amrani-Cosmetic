// Centralized type definitions and data
import product1 from "../../assets/product/1.jpg";
import product2 from "../../assets/product/3.jpg";

export type ProductDetail = {
    id: number;
    name: string;
    price: string;
    description: string;
    activeIngredients: string[];
    instructions: string[];
    image: string;
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
      name: 'Dermalosophy', 
      description: 'חברת דרמלוסופי, הוקמה בשנת 2010 ומאז מעניקה פתרונות דרמטולוגיים באמצעות מגוון רחב של תכשירים פעילים לטיפול הביתי ולמכון המשווקים באמצעות מכוני הקוסמטיקה המובילים בארץ. העיקרון שמוביל את חברת דרמלוסופי הוא להעניק ללקוחות את התוצאות הטובות והמהירות הקיימות נכון להיום בעולם, באמצעות חומרי גלם ייחודיים ונבחרים אשר תוצאותיהם מוכחות במחקרים קליניים.',
      icon: "https://dermalosophy.co.il/wp-content/uploads/2021/08/Main-Logo-2024-1024x208.png", // Add appropriate SVG
      products: [
        {
          id: 1,
          name: 'סרום 24 - לחות והזנה לאורך כל היום',
          price: '',
          description: 'הכירו את סרום 24 מבית Dermalosophy, פריצת דרך בעולם הקוסמטיקה המתקדמת. הסרום מיועד להזנה עמוקה והענקת לחות לאורך זמן, הודות לטכנולוגיית Longlasting ייחודית שמבטיחה שהעור יישאר רווי, זוהר ונעים למגע למשך כל היום.',
          activeIngredients: ['שמנים טבעיים', 'פוספוליפידים', 'גליקוליפידים', 'ספינגוליפידים', 'ויטמינים'],
          instructions: ['מרחו את הסרום בעדינות על הפנים, צוואר ודקולטה.', 'השתמשו בבוקר ובערב.', 'מתאים לכל סוגי העור.'],
          image: product1
        },
        
          {
            id: 2,
            name: 'קרם הבהרה B-WHITE CREAM - דרמלוסופי',
            price: '', // ניתן לעדכן את המחיר אם יש צורך
            description: 'קרם הבהרה בעל 2 פעולות - פירוק ומניעת היווצרות כתמים. באמצעות שימוש בחומרי הבהרה חזקים ומרוכזים, ושימוש במרכיב ייחודי המאפשר את החדרת המרכיבים לשכבות העמוקות של העור, מקנים תוצאות מצוינות לעור בעל גוון לא אחיד וכתמים.',
            activeIngredients: ['חומרי הבהרה מרוכזים', 'מרכיב ייחודי להחדרה עמוקה'],
            instructions: ['מרחי שכבה דקה על האזור הרצוי.', 'יש להשתמש מדי ערב על עור נקי בלבד.', 'מתאים לשימוש ממוקד או אזורים רחבים.'],
            image: product2
          }
          
        
      ]
    },
    { 
      id: 2, 
      name: 'Hava Zingboim', 
      description: 'מפתחת שיטת הטיפול הדו-עומקי, ומי ששינתה את פני הקוסמטיקה בארץ כשייבאה את ה-P.M.E לישראל, הטמיעה בקרב הקוסמטיקאיות.ים שעובדות.ים איתה את הגישה הדו-עומקית לטיפול בעור המשלבת פיתוחים טכנולוגיים פורצי דרך, והיא לא מפסיקה לחדש ולהפתיע',
      icon: "https://new-lp.havazingboim.co.il/wp-content/uploads/2022/11/HZ_Workmark_Black_RGB-1.png", // Add appropriate SVG
      products: [
        {
          id: 2,
          name: 'קרם לחות עשיר',
          price: '₪199',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          activeIngredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          instructions: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    { 
      id: 3, 
      name: 'קרמים', 
      description: 'סדרת קרמים מתקדמת לטיפוח העור',
      icon: 'https://dermalosophy.co.il/wp-content/uploads/2021/08/Main-Logo-2024-1024x208.png', // Add appropriate SVG
      products: [
        {
          id: 3,
          name: 'קרם לחות עשיר',
          price: '₪199',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          activeIngredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          instructions: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    // Add more product types
  ];

  export default productTypes;