# 📚 Bella Vita Restaurant - Complete Documentation

> Comprehensive technical documentation for developers

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Components Documentation](#components-documentation)
- [State Management](#state-management)
- [Routing](#routing)
- [Styling Guide](#styling-guide)
- [Data Flow](#data-flow)
- [API Integration Guide](#api-integration-guide)
- [Deployment](#deployment)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

### Description
Bella Vita is a modern, full-featured restaurant website built with React. It provides a seamless experience for customers to browse menus, place orders, make reservations, and interact with the restaurant.

### Tech Stack

#### Frontend
- **React** 18.2.0 - UI library
- **React Router DOM** 6.18.0 - Client-side routing
- **React Hook Form** 7.49.2 - Form management
- **Framer Motion** 10.18.0 - Animations
- **Bootstrap** 5.3.3 - CSS framework
- **React Icons** 5.0.1 - Icon library
- **React Toastify** 10.0.4 - Notifications

#### Development Tools
- **React Scripts** 5.0.1 - Build tooling
- **Prettier** - Code formatting
- **ESLint** - Code linting

### Key Features
- 🍕 Interactive menu with filtering
- 🛒 Shopping cart with persistence
- 🍕 Custom pizza builder
- 📅 Reservation system
- 📱 Fully responsive design
- 🎨 Modern UI with animations
- 🔍 Advanced search functionality

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 14.0.0
npm >= 6.0.0
```

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

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SITE_NAME=Bella Vita
```

4. **Start development server**
```bash
npm start
```

5. **Open browser**
```
http://localhost:3000
```

### Available Scripts

#### `npm start`
Runs the app in development mode on `http://localhost:3000`

#### `npm test`
Launches the test runner in interactive watch mode

#### `npm run build`
Builds the app for production to the `build` folder

#### `npm run lint`
Runs ESLint to check code quality

---

## 📁 Project Structure

```
Bella-Vita-Restaurant/
│
├── public/                      # Static files
│   ├── images/                  # Image assets (47 images)
│   │   ├── logo.png
│   │   ├── home.jpeg
│   │   ├── aboutus.png
│   │   └── [menu item images]
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # SEO robots file
│
├── src/                         # Source code
│   │
│   ├── components/              # React components
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.js        # Navigation bar
│   │   │   ├── Footer.js        # Footer
│   │   │   ├── Layout.js        # Main layout wrapper
│   │   │   └── index.js         # Barrel export
│   │   │
│   │   ├── cart/                # Cart-related components
│   │   │   ├── CartDropdown.js  # Cart dropdown menu
│   │   │   └── index.js
│   │   │
│   │   ├── common/              # Shared components
│   │   │   ├── ErrorBoundary.js # Error boundary
│   │   │   └── index.js
│   │   │
│   │   ├── home/                # Home page components
│   │   │   ├── HeroSection.js
│   │   │   ├── FeaturedDishes.js
│   │   │   ├── PizzaBuilderTeaser.js
│   │   │   ├── WhyChooseUs.js
│   │   │   ├── Testimonials.js
│   │   │   ├── ContactCTA.js
│   │   │   └── Newsletter.js
│   │   │
│   │   └── menu/                # Menu components
│   │       └── MenuCategory.js  # Menu item card
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.js              # Homepage
│   │   ├── Menu.js              # Menu page
│   │   ├── Cart.js              # Shopping cart
│   │   ├── OnlineOrder.js       # Online ordering
│   │   ├── Reservations.js      # Reservations
│   │   ├── About.js             # About us
│   │   ├── Contact.js           # Contact page
│   │   ├── PizzaBuilder.js      # Pizza builder
│   │   ├── PrivacyPolicy.js     # Privacy policy
│   │   ├── TermsOfService.js    # Terms of service
│   │   └── NotFound.js          # 404 page
│   │
│   ├── context/                 # React Context
│   │   └── CartContext.js       # Shopping cart state
│   │
│   ├── data/                    # Static data
│   │   └── menuData.js          # Menu items & categories
│   │
│   ├── styles/                  # CSS files
│   │   ├── components/          # Component styles
│   │   ├── pages/               # Page styles
│   │   │   └── Menu.css
│   │   ├── ContentPagesFixes.css
│   │   └── MenuPage.css
│   │
│   ├── utils/                   # Utility functions
│   │   └── dietaryUtils.js      # Dietary icon helpers
│   │
│   ├── constants/               # Application constants
│   │   └── index.js             # Shared constants
│   │
│   ├── App.js                   # Main App component
│   ├── App.css                  # App styles
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
│
├── docs/                        # Documentation
│   ├── API_SPECIFICATIONS.md    # API documentation
│   ├── FUTURE_IMPROVEMENTS.md   # Future features
│   └── DOCUMENTATION.md         # This file
│
├── .editorconfig                # Editor configuration
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── .prettierrc                  # Prettier configuration
├── .prettierignore              # Prettier ignore rules
├── jsconfig.json                # JavaScript configuration
├── package.json                 # Dependencies
├── README.md                    # Project README
├── CONTRIBUTING.md              # Contributing guidelines
├── CHANGELOG.md                 # Version history
└── LICENSE                      # MIT License
```

---

## 🏗️ Architecture

### Component Architecture

```
App
├── CartProvider (Context)
│   └── Layout
│       ├── Navbar
│       │   └── CartDropdown
│       ├── Main Content (Outlet)
│       │   ├── Home
│       │   │   ├── HeroSection
│       │   │   ├── FeaturedDishes
│       │   │   ├── PizzaBuilderTeaser
│       │   │   ├── WhyChooseUs
│       │   │   ├── Testimonials
│       │   │   ├── ContactCTA
│       │   │   └── Newsletter
│       │   ├── Menu
│       │   │   └── MenuCategory (multiple)
│       │   ├── Cart
│       │   ├── PizzaBuilder
│       │   ├── Reservations
│       │   ├── About
│       │   ├── Contact
│       │   └── [Other Pages]
│       └── Footer
```

### Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Context Action (if needed)
    ↓
State Update
    ↓
Re-render Components
    ↓
localStorage Update (for cart)
```

---

## 🧩 Components Documentation

### Layout Components

#### **Navbar.js**
Navigation bar with responsive menu and cart dropdown.

**Props:** None

**Features:**
- Responsive mobile menu
- Scroll-based styling
- Active link highlighting
- Cart integration

**Usage:**
```jsx
import { Navbar } from './components/layout';

<Navbar />
```

---

#### **Footer.js**
Footer with links and social media.

**Props:** None

**Features:**
- Quick links
- Social media icons
- Copyright information
- Hover effects

---

#### **Layout.js**
Main layout wrapper for all pages.

**Props:** None

**Features:**
- Navbar integration
- Footer integration
- Outlet for nested routes

---

### Cart Components

#### **CartDropdown.js**
Dropdown cart menu in navbar.

**Props:** None

**State:**
- `isOpen` - Dropdown visibility
- `isMobile` - Mobile detection

**Features:**
- Real-time cart updates
- Quantity management
- Item removal
- Total calculation
- Image display with fallback
- Mobile-responsive

**Context Used:**
- `useCart()` from CartContext

**Usage:**
```jsx
import { CartDropdown } from './components/cart';

<CartDropdown />
```

---

### Home Components

#### **HeroSection.js**
Hero section with call-to-action.

**Props:** None

**Features:**
- Background image
- Animated text
- CTA buttons
- Responsive design

---

#### **FeaturedDishes.js**
Showcase of featured menu items.

**Props:** None

**Features:**
- Grid layout
- Item cards
- Add to cart functionality
- Animations

---

#### **PizzaBuilderTeaser.js**
Teaser for pizza builder feature.

**Props:** None

**Features:**
- Visual preview
- Link to pizza builder
- Animations

---

#### **WhyChooseUs.js**
Benefits and features section.

**Props:** None

**Features:**
- Icon grid
- Feature descriptions
- Responsive layout

---

#### **Testimonials.js**
Customer reviews carousel.

**Props:** None

**Features:**
- Review cards
- Star ratings
- Customer photos
- Carousel navigation

---

#### **ContactCTA.js**
Call-to-action for contact.

**Props:** None

**Features:**
- Contact information
- CTA button
- Background styling

---

#### **Newsletter.js**
Newsletter subscription form.

**Props:** None

**Features:**
- Email input
- Form validation
- Success message

---

### Menu Components

#### **MenuCategory.js**
Individual menu item card.

**Props:**
```typescript
{
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    dietary?: string[];
    popular?: boolean;
    options?: string[];
  }
}
```

**Features:**
- Item image
- Price display
- Dietary icons
- Add to cart
- Customization options
- Animations

**Usage:**
```jsx
<MenuCategory item={menuItem} />
```

---

### Common Components

#### **ErrorBoundary.js**
Error boundary for graceful error handling.

**Props:**
```typescript
{
  children: ReactNode;
}
```

**Features:**
- Error catching
- Error display
- Fallback UI

**Usage:**
```jsx
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

---

## 🔄 State Management

### Cart Context

**Location:** `src/context/CartContext.js`

**State:**
```javascript
{
  items: [
    {
      id: string,
      name: string,
      price: number,
      quantity: number,
      image: string,
      customizations: array
    }
  ]
}
```

**Actions:**
- `addToCart(item, quantity)` - Add item to cart
- `removeFromCart(itemId)` - Remove item from cart
- `updateQuantity(itemId, quantity)` - Update item quantity
- `clearCart()` - Clear entire cart
- `getCartTotal()` - Get total price
- `getCartItemsCount()` - Get total item count

**Usage:**
```jsx
import { useCart } from './context/CartContext';

function Component() {
  const { items, addToCart, getCartTotal } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item, 1);
  };
  
  return (
    <div>
      <p>Total: ${getCartTotal().toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
```

**Persistence:**
Cart data is automatically saved to `localStorage` with key `restaurant-cart`.

---

## 🛣️ Routing

**Router:** React Router DOM v6

**Routes:**
```javascript
/                    → Home
/menu                → Menu
/cart                → Cart
/order               → Online Order
/online-ordering     → Online Order (alias)
/pizza-builder       → Pizza Builder
/reservations        → Reservations
/about               → About Us
/contact             → Contact
/privacy-policy      → Privacy Policy
/terms-of-service    → Terms of Service
/*                   → 404 Not Found
```

**Route Configuration:**
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="menu" element={<Menu />} />
    {/* ... other routes */}
  </Route>
</Routes>
```

**Navigation:**
```jsx
import { Link, useNavigate } from 'react-router-dom';

// Using Link
<Link to="/menu">View Menu</Link>

// Using useNavigate
const navigate = useNavigate();
navigate('/cart');
```

---

## 🎨 Styling Guide

### CSS Architecture

**Approach:** Modular CSS with Bootstrap utilities

**File Organization:**
```
styles/
├── components/     # Component-specific styles
├── pages/          # Page-specific styles
└── [utility files] # Shared utility styles
```

### Color Palette

```css
/* Primary Colors */
--primary: #e74c3c;
--secondary: #c0392b;
--dark: #2c3e50;
--light: #ecf0f1;

/* Semantic Colors */
--success: #27ae60;
--warning: #f39c12;
--danger: #e74c3c;
--info: #3498db;
```

### Typography

```css
/* Headings */
font-family: 'Playfair Display', serif;

/* Body */
font-family: 'Inter', sans-serif;
```

### Responsive Breakpoints

```css
/* Bootstrap breakpoints */
xs: 0px      /* Extra small devices */
sm: 576px    /* Small devices */
md: 768px    /* Medium devices */
lg: 992px    /* Large devices */
xl: 1200px   /* Extra large devices */
xxl: 1400px  /* Extra extra large devices */
```

### Component Styling Example

```jsx
// Inline styles
<div style={{
  backgroundColor: '#e74c3c',
  padding: '20px',
  borderRadius: '8px'
}}>
  Content
</div>

// CSS Modules (if using)
import styles from './Component.module.css';
<div className={styles.container}>Content</div>

// Bootstrap classes
<div className="container py-5">
  <div className="row g-4">
    <div className="col-lg-4 col-md-6">
      Content
    </div>
  </div>
</div>
```

---

## 📊 Data Flow

### Menu Data

**Location:** `src/data/menuData.js`

**Structure:**
```javascript
{
  categories: [
    {
      id: 'category-id',
      name: 'Category Name',
      description: 'Category description',
      items: [
        {
          id: 'item-id',
          name: 'Item Name',
          description: 'Item description',
          price: 14.99,
          category: 'category-id',
          dietary: ['vegetarian', 'gluten-free'],
          image: '/images/item.jpg',
          popular: true,
          options: ['Extra cheese +$2.00']
        }
      ]
    }
  ]
}
```

### Constants

**Location:** `src/constants/index.js`

**Available Constants:**
```javascript
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_INFO,
  SOCIAL_LINKS,
  OPENING_HOURS,
  THEME_COLORS,
  ANIMATION_DURATION,
  STORAGE_KEYS
} from './constants';
```

---

## 🔌 API Integration Guide

### Setting Up API Client

**Create:** `src/services/api.js`

```javascript
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### API Service Example

**Create:** `src/services/menuService.js`

```javascript
import apiClient from './api';

export const menuService = {
  // Get all menu items
  getAllItems: async (params) => {
    return await apiClient.get('/menu/items', { params });
  },

  // Get item by ID
  getItemById: async (itemId) => {
    return await apiClient.get(`/menu/items/${itemId}`);
  },

  // Get categories
  getCategories: async () => {
    return await apiClient.get('/menu/categories');
  },
};
```

### Using API in Components

```jsx
import { useState, useEffect } from 'react';
import { menuService } from '../services/menuService';

function MenuPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await menuService.getAllItems();
        setItems(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Platforms

#### **Netlify**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **Vercel**

1. Import GitHub repository
2. Framework: Create React App
3. Deploy

#### **GitHub Pages**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 📝 Best Practices

### Code Style

1. **Use functional components with hooks**
```jsx
// ✅ Good
function Component() {
  const [state, setState] = useState();
  return <div>{state}</div>;
}

// ❌ Avoid
class Component extends React.Component {
  render() {
    return <div>{this.state.value}</div>;
  }
}
```

2. **Destructure props**
```jsx
// ✅ Good
function Component({ name, age }) {
  return <div>{name} - {age}</div>;
}

// ❌ Avoid
function Component(props) {
  return <div>{props.name} - {props.age}</div>;
}
```

3. **Use meaningful variable names**
```jsx
// ✅ Good
const userEmail = user.email;
const isAuthenticated = !!token;

// ❌ Avoid
const e = user.email;
const flag = !!token;
```

### Performance

1. **Memoize expensive calculations**
```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

2. **Use React.memo for pure components**
```jsx
const MemoizedComponent = React.memo(function Component({ data }) {
  return <div>{data}</div>;
});
```

3. **Lazy load routes**
```jsx
const Menu = lazy(() => import('./pages/Menu'));

<Suspense fallback={<Loading />}>
  <Menu />
</Suspense>
```

### Accessibility

1. **Use semantic HTML**
```jsx
// ✅ Good
<button onClick={handleClick}>Click me</button>

// ❌ Avoid
<div onClick={handleClick}>Click me</div>
```

2. **Add ARIA labels**
```jsx
<button aria-label="Close menu" onClick={closeMenu}>
  <FaTimes />
</button>
```

3. **Ensure keyboard navigation**
```jsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>
```

---

## 🐛 Troubleshooting

### Common Issues

#### **Issue: Module not found errors after restructuring**

**Solution:**
Check import paths are correct relative to new file locations.

```jsx
// If file moved from components/ to components/layout/
// Update from:
import Navbar from './Navbar';
// To:
import Navbar from '../layout/Navbar';
```

#### **Issue: Cart not persisting**

**Solution:**
Check localStorage is enabled and CartContext is wrapping the app.

```jsx
// Verify in App.js
<CartProvider>
  <App />
</CartProvider>
```

#### **Issue: Images not loading**

**Solution:**
Ensure images are in `public/images/` and paths start with `/`:

```jsx
// ✅ Correct
<img src="/images/logo.png" alt="Logo" />

// ❌ Wrong
<img src="images/logo.png" alt="Logo" />
```

#### **Issue: Routing not working after deployment**

**Solution:**
Configure server to redirect all routes to index.html.

For Netlify, add `_redirects` file in `public/`:
```
/*    /index.html   200
```

---

## 📞 Support

For issues or questions:
- GitHub Issues: [Create an issue](https://github.com/muhamedessamz/Bella-Vita-Restaurant/issues)
- GitHub: [@muhamedessamz](https://github.com/muhamedessamz)

---

**Last Updated:** 2026-01-01  
**Version:** 1.0.0
