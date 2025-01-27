// Centralized type definitions and data
export type ProductDetail = {
    id: number;
    name: string;
    price: string;
    description: string;
    ingredients: string[];
    benefits: string[];
    image: string;
  };
  
  export type ProductType = {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode; // SVG or icon component
    products: ProductDetail[];
  };
  
  export const productTypes: ProductType[] = [
    { 
      id: 1, 
      name: 'קרמים', 
      description: 'סדרת קרמים מתקדמת לטיפוח העור',
      icon: <svg>...</svg>, // Add appropriate SVG
      products: [
        {
          id: 1,
          name: 'קרם לחות עשיר',
          price: '₪199',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          ingredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          benefits: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    { 
      id: 2, 
      name: 'קרמים', 
      description: 'סדרת קרמים מתקדמת לטיפוח העור',
      icon: <svg>...</svg>, // Add appropriate SVG
      products: [
        {
          id: 2,
          name: 'קרם לחות עשיר',
          price: '₪199',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          ingredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          benefits: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    { 
      id: 3, 
      name: 'קרמים', 
      description: 'סדרת קרמים מתקדמת לטיפוח העור',
      icon: <svg>...</svg>, // Add appropriate SVG
      products: [
        {
          id: 3,
          name: 'קרם לחות עשיר',
          price: '₪199',
          description: 'קרם לחות מתקדם לטיפוח עור הפנים',
          ingredients: ['היאלורונית', 'ויטמין E', 'קולגן'],
          benefits: ['לחות עמוקה', 'הצערת העור', 'הגנה מפני זיהום'],
          image: 'https://example.com/cream.jpg'
        }
      ]
    },
    // Add more product types
  ];

  export default productTypes;