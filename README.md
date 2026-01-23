# Bella Vita Restaurant - Client Website

## � Comprehensive Documentation

This document details the structure, state management, and component architecture of the customer-facing React application.

---

## 🏗 Architectural Pattern

The application uses a **Component-Based Architecture** driven by **Context API** for global state management. It is designed to be responsive, accessible, and SEO-friendly.

### Key Layers
1.  **API Layer** (`src/api`): Centralized Axios instance with interceptors. Decouples UI from API logic.
    -   **Interceptor**: Automatically attaches `Authorization: Bearer <token>` to requests.
    -   **Services**: `authService`, `menuService`, `orderService`.
2.  **State Management** (`src/context`):
    -   `AuthContext`: Manages User Login/Logout, loading states, and token persistence.
    -   `CartContext`: Manages shopping cart items, totals, and persistence (localStorage).
3.  **Routing** (`src/router`):
    -   Uses `react-router-dom` v6.
    -   **Protected Routes**: Wrappers that redirect unauthenticated users.
4.  **Components**:
    -   **Pages**: Full views (Home, Menu, Checkout).
    -   **Layouts**: `MainLayout` (Navbar + Footer), `AuthLayout`.
    -   **Common**: Reusable UI (Button, Input, Modal, Spinner).

---

## � Project Structure

```text
Front/Website/
├── public/                 # Static assets (images, index.html)
├── src/
│   ├── api/
│   │   ├── client.js       # Axios Configuration
│   │   ├── endpoints.js    # API URL Constants
│   │   └── services/       # API call definitions
│   ├── assets/             # Images, fonts
│   ├── components/
│   │   ├── common/         # Buttons, Inputs, Loaders
│   │   ├── layout/         # Navbar, Footer
│   │   ├── home/           # Home-specifc widgets
│   │   └── menu/           # Menu cards, filters
│   ├── context/            # Global State (Auth, Cart)
│   ├── hooks/              # Custom Hooks (useDebounce, useAuth)
│   ├── pages/              # Route Components
│   │   ├── auth/           # Login, Register
│   │   ├── checkout/       # Order process
│   │   └── profile/        # User settings
│   ├── styles/             # Global CSS / Variables
│   ├── utils/              # Formatters, Validators
│   └── App.js              # Root Component
└── package.json            # Dependencies
```

---

## 🧩 Key Features Implementation

### 1. Authentication Flow
-   **Login**: Submits credentials -> Stores `token` & `refreshToken` in `localStorage` -> Updates `AuthContext`.
-   **Session Check**: On app load, `AuthContext` checks `localStorage`. If token exists, sets user as authenticated.
-   **Logout**: Clears storage and resets Context state.

### 2. Shopping Cart
-   **Logic**: `CartContext` maintains an array of items.
-   **Persistence**: `useEffect` watches cart state and saves to `localStorage` on change. This persists cart across refreshes.
-   **Calculations**: Auto-calculates Subtotal, Tax, and Grand Total.

### 3. Order Placement
-   **Checkout**:
    -   Collects Address, Phone, Payment Method.
    -   Submits payload to `POST /api/orders`.
    -   On success: Clears Cart -> Redirects to Order Success Page.

---

## 🛠 Configuration & Setup

### Environment Variables
Create `.env` in root:
```env
REACT_APP_API_URL=https://localhost:7066/api
REACT_APP_NAME="Bella Vita"
```

### Scripts
-   `npm start`: Dev server (Port 3000).
-   `npm build`: Production build to `build/` folder.
-   `npm test`: Run Jest tests.

### Dependencies
-   **axios**: HTTP Client.
-   **react-router-dom**: Navigation.
-   **react-icons**: Icon pack.
-   **formik** / **yup**: Form validation (if used).
