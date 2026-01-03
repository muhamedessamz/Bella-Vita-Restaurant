# 🍝 Bella Vita Restaurant

> Authentic Italian Cuisine with International Influences

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Documentation](#documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## 🎯 About

Bella Vita is a modern, responsive restaurant website built with React. It offers a seamless user experience for browsing menus, making reservations, and ordering food online. The application features a beautiful Italian-inspired design with smooth animations and an intuitive interface

## ✨ Features

- 🍕 **Interactive Menu** - Browse our extensive menu with filtering and search capabilities
- 🛒 **Shopping Cart** - Add items to cart with real-time updates
- 🍕 **Pizza Builder** - Create your custom pizza with our interactive builder
- 📅 **Reservations** - Book a table online with our reservation system
- 📱 **Responsive Design** - Fully responsive across all devices
- 🎨 **Modern UI/UX** - Beautiful animations and smooth transitions
- 🔍 **Advanced Search** - Search by dish name, ingredients, or dietary preferences
- 🏷️ **Dietary Filters** - Filter menu items by dietary requirements (vegetarian, vegan, gluten-free, etc.)
- 💾 **Persistent Cart** - Cart data saved in local storage
- 🌐 **Multi-page Application** - Built with React Router for smooth navigation

## 🛠️ Tech Stack

### Core
- **React** 18.2.0 - UI library
- **React Router DOM** 6.18.0 - Client-side routing
- **React Hook Form** 7.49.2 - Form management

### Styling
- **Bootstrap** 5.3.3 - CSS framework
- **Framer Motion** 10.18.0 - Animation library
- **Custom CSS** - Additional styling

### UI Components
- **React Icons** 5.0.1 - Icon library
- **React Toastify** 10.0.4 - Toast notifications

### Development
- **React Scripts** 5.0.1 - Build tooling
- **Testing Library** - Unit testing

## 📁 Project Structure

```
Bella-Vita-Restaurant/
├── public/
│   ├── images/              # Static images (47 images)
│   ├── index.html           # HTML template
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
│
├── src/
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── Layout.js
│   │   │   └── index.js
│   │   ├── cart/            # Cart components
│   │   │   ├── CartDropdown.js
│   │   │   └── index.js
│   │   ├── common/          # Shared components
│   │   │   ├── ErrorBoundary.js
│   │   │   └── index.js
│   │   ├── home/            # Home page components
│   │   │   ├── HeroSection.js
│   │   │   ├── FeaturedDishes.js
│   │   │   ├── PizzaBuilderTeaser.js
│   │   │   ├── WhyChooseUs.js
│   │   │   ├── Testimonials.js
│   │   │   ├── ContactCTA.js
│   │   │   └── Newsletter.js
│   │   └── menu/            # Menu components
│   │       └── MenuCategory.js
│   │
│   ├── pages/               # Page components
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── Cart.js
│   │   ├── OnlineOrder.js
│   │   ├── Reservations.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── PizzaBuilder.js
│   │   ├── PrivacyPolicy.js
│   │   ├── TermsOfService.js
│   │   └── NotFound.js
│   │
│   ├── context/             # React Context
│   │   └── CartContext.js   # Shopping cart state management
│   │
│   ├── data/                # Static data
│   │   └── menuData.js      # Menu items and categories
│   │
│   ├── styles/              # CSS files
│   │   ├── components/      # Component-specific styles
│   │   ├── pages/           # Page-specific styles
│   │   │   └── Menu.css
│   │   ├── ContentPagesFixes.css
│   │   └── MenuPage.css
│   │
│   ├── utils/               # Utility functions
│   │   └── dietaryUtils.js  # Dietary icon helpers
│   │
│   ├── constants/           # Application constants
│   │   └── index.js         # Shared constants
│   │
│   ├── App.js               # Main App component
│   ├── App.css              # App styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
│
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhamedessamz/Bella-Vita-Restaurant.git
   cd Bella-Vita-Restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

### `npm run lint`
Runs ESLint to check code quality.

## � Documentation

For comprehensive documentation, please refer to the following files in the `docs/` folder:

### 📖 [Complete Documentation](docs/DOCUMENTATION.md)
Full technical documentation covering:
- Project architecture
- Component documentation
- State management
- Routing
- Styling guide
- API integration
- Deployment guide
- Best practices
- Troubleshooting

### 🔌 [API Specifications](docs/API_SPECIFICATIONS.md)
Complete API documentation for backend implementation:
- Authentication APIs
- User Management
- Menu Management
- Order Management
- Reservation APIs
- Payment APIs
- Admin Dashboard APIs
- Analytics APIs
- And more...

### 🚀 [Future Improvements](docs/FUTURE_IMPROVEMENTS.md)
Comprehensive list of planned features and enhancements:
- Critical missing features
- High priority improvements
- Medium priority features
- Technical improvements
- UI/UX enhancements
- Security enhancements
- Future integrations
- Roadmap suggestions

## �🔐 Environment Variables

Create a `.env` file in the root directory (optional):

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_SITE_NAME=Bella Vita
```

## 🎨 Key Features Explained

### Shopping Cart
- Persistent cart using localStorage
- Real-time cart updates
- Quantity management
- Price calculations

### Menu System
- Dynamic filtering by category
- Search functionality
- Dietary preference filters
- Responsive grid layout

### Pizza Builder
- Interactive ingredient selection
- Real-time price calculation
- Custom pizza creation
- Visual feedback

### Reservations
- Date and time selection
- Party size options
- Special requests
- Form validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mohamed Essam**
- GitHub: [@muhamedessamz](https://github.com/muhamedessamz)
- LinkedIn: [Mohamed Essam](https://www.linkedin.com/in/mohamedessamz/)

---

**Made with ❤️ Mohamed Essam**
