# Bella Vita Restaurant - Customer Website

The **Customer Website** is the public-facing interface of the Bella Vita Restaurant. It provides a beautiful, responsive, and interactive experience for customers to explore the menu, book tables, and place food orders online.

---

## 🛠 Technology Stack

-   **Framework:** React 18 (Create React App)
-   **Language:** JavaScript / JSX
-   **Styling:**
    -   **CSS3:** Custom styling with CSS Variables for theming.
    -   **Responsive Design:** Mobile-first approach.
    -   **Animations:** Framer Motion (for smooth page transitions and micro-interactions).
-   **State Management:** React Context API (AuthContext, CartContext).
-   **Routing:** React Router DOM v6.
-   **Forms:** React Hook Form (for validation and handling).
-   **Notifications:** React Toastify.
-   **HTTP Client:** Axios.

---

## 📦 Project Structure

```
Website/
├── src/
│   ├── api/            # API Service layers (auth, menu, orders)
│   ├── components/     # UI Components
│   │   ├── common/     # Generic components (Button, Input, Loader)
│   │   ├── layout/     # Header, Footer, Hero
│   │   └── ...         # Feature-specific components
│   ├── context/        # Global State (AuthProvider, CartProvider)
│   ├── hooks/          # Custom React Hooks
│   ├── pages/          # Route components (Home, Menu, Checkout, Profile)
│   ├── styles/         # Global styles
│   ├── utils/          # Helpers and constants
│   ├── App.js          # Main Component and Routing
│   └── index.js        # Entry point
├── public/             # Static assets
└── package.json        # Dependencies
```

---

## ✨ Features

### 🏠 Home & Discovery
-   **Hero Section:** Attractive landing with "Order Now" usage.
-   **Featured Items:** Showcase top-rated or popular dishes.
-   **About Us:** Information about the restaurant.

### 🍔 Interactive Menu
-   **Categories:** Filter by Starters, Mains, Desserts, Drinks, etc.
-   **Details:** View ingredients, prices, and images.
-   **Search:** Quickly find specific dishes.

### 🛒 Shopping Cart & Checkout
-   **Cart Management:** Add/Remove items, adjust quantities.
-   **Live Total:** Real-time calculation of costs.
-   **Checkout:** Secure form for delivery address and payment method selection.

### 👤 User Accounts
-   **Authentication:** Secure Login and Registration.
-   **Profile:** Manage personal details.
-   **Order History:** Track current orders and view past receipts.

### 📅 Table Reservation
-   **Booking Form:** Select Date, Time, and Party Size.
-   **Validation:** Ensures booking is within business hours.

---

## ⚙️ Setup & Installation

1.  **Prerequisites:**
    -   Node.js (v16 or higher)
    -   The Backend API must be running.

2.  **Install Dependencies:**
    Navigate to the Website folder:
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Check `src/api/client.js` or `src/config.js` to ensure it points to the correct Backend URL (`https://localhost:7082`).

4.  **Run Development Server:**
    ```bash
    npm start
    ```
    The website will launch at `http://localhost:3000`.

5.  **Build for Production:**
    ```bash
    npm run build
    ```

---

## 👤 Author

**Mohamed Essam**
-   **LinkedIn:** [linkedin.com/in/mohamedessamz/](https://www.linkedin.com/in/mohamedessamz/)
-   **Email:** [mohamedessamzakariaa@gmail.com](mailto:mohamedessamzakariaa@gmail.com)
