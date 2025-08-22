const menuData = {
  categories: [
    {
      id: 'antipasti',
      name: 'Antipasti',
      description: 'Delicious starters to begin your culinary journey',
      items: [
        {
          id: 'bruschetta',
          name: 'Bruschetta al Pomodoro',
          description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
          price: 8.99,
          dietary: ['vegetarian', 'vegan'],
          options: ['Gluten-free bread +$1.50'],
          image: '/images/Bruschetta-al-Pomodoro.jpg',
          popular: true
        },
        {
          id: 'calamari',
          name: 'Calamari Fritti',
          description: 'Crispy fried calamari served with marinara sauce and lemon wedges',
          price: 12.99,
          dietary: [],
          options: ['Spicy marinara +$1.00'],
          image: '/images/Calamari-Fritti.jpg',
          popular: true
        },
        {
          id: 'caprese',
          name: 'Insalata Caprese',
          description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
          price: 10.99,
          dietary: ['vegetarian'],
          options: ['Add avocado +$2.00'],
          image: '/images/Insalat-Caprese.jpeg'
        },
        {
          id: 'antipasto',
          name: 'Antipasto Misto',
          description: 'Selection of cured meats, cheeses, olives, and marinated vegetables',
          price: 15.99,
          dietary: [],
          options: ['Vegetarian version -$3.00'],
          image: '/images/Antipasto-Misto.jpg',
          popular: true
        },
        {
          id: 'arancini',
          name: 'Arancini Siciliani',
          description: 'Crispy risotto balls stuffed with mozzarella and served with tomato sauce',
          price: 9.99,
          dietary: ['vegetarian'],
          options: ['With meat sauce +$2.00'],
          image: '/images/Arancini-Siciliani.jpg'
        }
      ]
    },
    {
      id: 'pasta',
      name: 'Pasta',
      description: 'Authentic Italian pasta dishes made with homemade sauces',
      items: [
        {
          id: 'carbonara',
          name: 'Spaghetti Carbonara',
          description: 'Classic Roman pasta with eggs, cheese, pancetta, and black pepper',
          price: 16.99,
          dietary: [],
          options: ['Add chicken +$4.00', 'Add shrimp +$6.00'],
          image: '/images/Spaghetti-Carbonara.webp',
          popular: true
        },
        {
          id: 'pomodoro',
          name: 'Penne al Pomodoro e Basilico',
          description: 'Penne pasta with fresh tomato sauce, garlic, and basil',
          price: 14.99,
          dietary: ['vegetarian', 'vegan'],
          options: ['Add grilled vegetables +$3.00'],
          image: '/images/Penne-al-Pomodoro-e-Basilico.webp'
        },
        {
          id: 'pesto',
          name: 'Trofie al Pesto Genovese',
          description: 'Handmade trofie pasta with traditional basil pesto, potatoes, and green beans',
          price: 15.99,
          dietary: ['vegetarian'],
          options: ['Add grilled chicken +$4.00', 'Gluten-free pasta +$2.00'],
          image: '/images/Trofie-al-Pesto-Genovese.jpg'
        },
        {
          id: 'lasagna',
          name: 'Lasagna della Casa',
          description: 'Traditional homemade lasagna with meat sauce, bechamel, and three cheeses',
          price: 18.99,
          dietary: [],
          options: ['Vegetarian version -$2.00'],
          image: '/images/Lasagna-della-Casa.jpg',
          popular: true
        },
        {
          id: 'ravioli',
          name: 'Ravioli di Ricotta e Spinaci',
          description: 'Homemade ravioli filled with ricotta and spinach in sage butter sauce',
          price: 17.99,
          dietary: ['vegetarian'],
          options: ['With tomato sauce instead', 'Add truffle +$5.00'],
          image: '/images/Ravioli-di-Ricotta-e-Spinaci.webp'
        },
        {
          id: 'gnocchi',
          name: 'Gnocchi alla Sorrentina',
          description: 'Potato gnocchi with tomato sauce, mozzarella, and fresh basil',
          price: 16.99,
          dietary: ['vegetarian'],
          options: ['Add prosciutto +$3.00'],
          image: '/images/Gnocchi-alla-Sorrentina.jpeg'
        }
      ]
    },
    {
      id: 'pizza',
      name: 'Pizza',
      description: 'Wood-fired artisan pizzas with the finest ingredients',
      items: [
        {
          id: 'margherita',
          name: 'Pizza Margherita',
          description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil',
          price: 14.99,
          dietary: ['vegetarian'],
          options: ['Add pepperoni +$2.50', 'Add mushrooms +$1.50'],
          image: '/images/MargheritaPizza.jpg',
          popular: true
        },
        {
          id: 'quattro-formaggi',
          name: 'Quattro Formaggi',
          description: 'Four cheese pizza with mozzarella, gorgonzola, parmesan, and fontina',
          price: 17.99,
          dietary: ['vegetarian'],
          options: ['Add truffle oil +$3.00'],
          image: '/images/Quattro-Formaggi.jpg'
        },
        {
          id: 'diavola',
          name: 'Pizza Diavola',
          description: 'Spicy salami, tomato sauce, mozzarella, and chili flakes',
          price: 16.99,
          dietary: ['spicy'],
          options: ['Extra spicy +$1.00', 'Add olives +$1.50'],
          image: '/images/Pizza-Diavola.jpg'
        },
        {
          id: 'prosciutto',
          name: 'Pizza Prosciutto e Funghi',
          description: 'Prosciutto di Parma, mushrooms, tomato sauce, and mozzarella',
          price: 18.99,
          dietary: [],
          options: ['Add arugula +$2.00', 'Extra prosciutto +$4.00'],
          image: '/images/Pizza-Prosciutto-e-Funghi.png',
          popular: true
        },
        {
          id: 'capricciosa',
          name: 'Pizza Capricciosa',
          description: 'Ham, mushrooms, artichokes, olives, tomato sauce, and mozzarella',
          price: 17.99,
          dietary: [],
          options: ['No olives', 'Add capers +$1.00'],
          image: '/images/Pizza-Capricciosa.jpg'
        },
        {
          id: 'vegetariana',
          name: 'Pizza Vegetariana',
          description: 'Grilled vegetables, tomato sauce, mozzarella, and fresh herbs',
          price: 15.99,
          dietary: ['vegetarian'],
          options: ['Vegan cheese +$2.00', 'Add goat cheese +$3.00'],
          image: '/images/Pizza-Vegetariana.jpeg'
        }
      ]
    },
    {
      id: 'secondi',
      name: 'Secondi Piatti',
      description: 'Hearty main courses featuring the finest meats and seafood',
      items: [
        {
          id: 'osso-buco',
          name: 'Osso Buco alla Milanese',
          description: 'Braised veal shanks with gremolata, served with saffron risotto',
          price: 28.99,
          dietary: [],
          options: [],
          image: '/images/Osso-Buco-alla-Milanese.jpg',
          popular: true
        },
        {
          id: 'branzino',
          name: 'Branzino al Forno',
          description: 'Whole roasted Mediterranean sea bass with lemon, herbs, and seasonal vegetables',
          price: 32.99,
          dietary: ['gluten-free', 'dairy-free'],
          options: ['Add risotto +$4.00'],
          image: '/images/Branzino-al-Forno.webp'
        },
        {
          id: 'parmigiana',
          name: 'Melanzane alla Parmigiana',
          description: 'Layers of fried eggplant, tomato sauce, and melted cheese',
          price: 18.99,
          dietary: ['vegetarian'],
          options: ['Add mushrooms +$2.00'],
          image: '/images/Melanzane_alla_Parmigiana.jpg'
        },
        {
          id: 'pollo-parmigiana',
          name: 'Pollo alla Parmigiana',
          description: 'Breaded chicken breast topped with tomato sauce and melted mozzarella',
          price: 24.99,
          dietary: [],
          options: ['With pasta +$3.00', 'With salad +$2.00'],
          image: '/images/pollo-alla-parmigiana.jpg',
          popular: true
        },
        {
          id: 'risotto-funghi',
          name: 'Risotto ai Funghi Porcini',
          description: 'Creamy Arborio rice with porcini mushrooms and Parmesan cheese',
          price: 22.99,
          dietary: ['vegetarian', 'gluten-free'],
          options: ['Add truffle oil +$4.00', 'Add grilled chicken +$5.00'],
          image: '/images/Risotto-ai-Funghi-Porcini.jpeg'
        },
        {
          id: 'salmone',
          name: 'Salmone alla Griglia',
          description: 'Grilled Atlantic salmon with lemon butter sauce and roasted vegetables',
          price: 26.99,
          dietary: ['gluten-free'],
          options: ['With risotto +$4.00', 'With pasta +$3.00'],
          image: '/images/Salmone-alla-Griglia.jpg'
        }
      ]
    },
    {
      id: 'dolci',
      name: 'Dolci',
      description: 'Irresistible Italian desserts to complete your meal',
      items: [
        {
          id: 'tiramisu',
          name: 'Tiramisù',
          description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
          price: 8.99,
          dietary: ['vegetarian'],
          options: ['Add espresso shot +$2.00'],
          image: '/images/tiramisu.jpg',
          popular: true
        },
        {
          id: 'panna-cotta',
          name: 'Panna Cotta',
          description: 'Creamy vanilla custard with fresh berries and berry coulis',
          price: 7.99,
          dietary: ['vegetarian', 'gluten-free'],
          options: ['Chocolate sauce +$1.00'],
          image: '/images/Panna-Cotta.jpg'
        },
        {
          id: 'cannoli',
          name: 'Cannoli Siciliani',
          description: 'Crispy pastry shells filled with sweet ricotta and chocolate chips',
          price: 9.99,
          dietary: ['vegetarian'],
          options: ['Pistachio topping +$1.50'],
          image: '/images/cannoli_siciliani.jpg'
        },
        {
          id: 'gelato',
          name: 'Gelato Artigianale',
          description: 'Homemade Italian gelato - choice of vanilla, chocolate, strawberry, or pistachio',
          price: 6.99,
          dietary: ['vegetarian', 'gluten-free'],
          options: ['Extra scoop +$2.00', 'Waffle cone +$1.00'],
          image: '/images/Gelato-Artigianale.webp',
          popular: true
        },
        {
          id: 'affogato',
          name: 'Affogato al Caffè',
          description: 'Vanilla gelato "drowned" in hot espresso with amaretti cookies',
          price: 8.99,
          dietary: ['vegetarian'],
          options: ['Add liqueur +$3.00'],
          image: '/images/Affogato-al-Caffè.jpeg'
        },
        {
          id: 'limoncello-cake',
          name: 'Torta al Limoncello',
          description: 'Lemon sponge cake soaked in limoncello with mascarpone frosting',
          price: 9.99,
          dietary: ['vegetarian'],
          options: ['Add fresh berries +$2.00'],
          image: '/images/Torta-al-Limoncello.jpg'
        }
      ]
    },
    {
      id: 'bevande',
      name: 'Bevande',
      description: 'Refreshing drinks to complement your meal',
      items: [
        {
          id: 'espresso',
          name: 'Espresso Italiano',
          description: 'Traditional Italian espresso made with premium beans',
          price: 3.99,
          dietary: ['vegan', 'gluten-free', 'dairy-free'],
          options: ['Double shot +$1.00'],
          image: '/images/Espresso-Italiano.webp',
          popular: true
        },
        {
          id: 'cappuccino',
          name: 'Cappuccino',
          description: 'Classic Italian cappuccino with steamed milk and foam',
          price: 4.99,
          dietary: ['vegetarian', 'gluten-free'],
          options: ['Oat milk +$0.50', 'Extra shot +$1.00'],
          image: '/images/Cappuccino.webp'
        },
        {
          id: 'limonata',
          name: 'Limonata della Casa',
          description: 'Homemade Italian lemonade with fresh lemons and mint',
          price: 4.99,
          dietary: ['vegan', 'gluten-free', 'dairy-free'],
          options: ['Strawberry', 'Mint'],
          image: '/images/Limonata-della-Casa.jpg'
        },
        {
          id: 'sangiovese',
          name: 'Sangiovese (Glass)',
          description: 'Medium-bodied Italian red wine with cherry and earthy notes',
          price: 9.99,
          dietary: ['vegan', 'gluten-free'],
          options: ['Bottle $32.00'],
          image: '/images/Sangiovese.jpg'
        },
        {
          id: 'prosecco',
          name: 'Prosecco di Valdobbiadene',
          description: 'Premium Italian sparkling wine with delicate bubbles',
          price: 8.99,
          dietary: ['vegan', 'gluten-free'],
          options: ['Bottle $28.00'],
          image: '/images/Prosecco-di-Valdobbiadene.webp',
          popular: true
        },
        {
          id: 'aperol-spritz',
          name: 'Aperol Spritz',
          description: 'Classic Italian aperitif with Aperol, Prosecco, and soda water',
          price: 10.99,
          dietary: ['vegan', 'gluten-free'],
          options: ['Extra Aperol +$2.00'],
          image: '/images/Aperol-Spritz.webp'
        },
        {
          id: 'acqua-panna',
          name: 'Acqua Panna',
          description: 'Premium Italian still water',
          price: 3.99,
          dietary: ['vegan', 'gluten-free', 'dairy-free'],
          options: ['Sparkling +$0.50'],
          image: '/images/Acqua-Panna.png'
        }
      ]
    }
  ]
};

export default menuData;
