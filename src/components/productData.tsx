// Centralized type definitions and data
import product1 from "../../assets/product/1.jpg";

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
          name: 'קרם לחות עשיר',
          price: '300',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          activeIngredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          instructions: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    { 
      id: 2, 
      name: 'קרמים', 
      description: 'סדרת קרמים מתקדמת לטיפוח העור',
      icon: "https://dermalosophy.co.il/wp-content/uploads/2021/08/Main-Logo-2024-1024x208.png", // Add appropriate SVG
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