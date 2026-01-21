# 🔌 Bella Vita Restaurant - API Specifications

> Complete API documentation for backend implementation

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication APIs](#authentication-apis)
- [User Management APIs](#user-management-apis)
- [Menu Management APIs](#menu-management-apis)
- [Order Management APIs](#order-management-apis)
- [Reservation APIs](#reservation-apis)
- [Cart APIs](#cart-apis)
- [Payment APIs](#payment-apis)
- [Admin Dashboard APIs](#admin-dashboard-apis)
- [Analytics APIs](#analytics-apis)
- [Notification APIs](#notification-apis)
- [Review & Rating APIs](#review--rating-apis)
- [Loyalty Program APIs](#loyalty-program-apis)

---

## 🌐 Overview

### Base URL
```
Production: https://api.bellavita.com/v1
Development: http://localhost:5000/api/v1
```

### Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer <token>
```

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  },
  "timestamp": "2026-01-01T00:00:00Z"
}
```

---

## 🔐 Authentication APIs

### 1. Register User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "phone": "+1234567890",
  "dateOfBirth": "1990-01-01"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "customer"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here"
  }
}
```

---

### 2. Login
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "customer"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here"
  }
}
```

---

### 3. Refresh Token
```http
POST /auth/refresh
```

**Request Body:**
```json
{
  "refreshToken": "refresh_token_here"
}
```

---

### 4. Logout
```http
POST /auth/logout
```

**Headers:** `Authorization: Bearer <token>`

---

### 5. Forgot Password
```http
POST /auth/forgot-password
```

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

---

### 6. Reset Password
```http
POST /auth/reset-password
```

**Request Body:**
```json
{
  "token": "reset_token",
  "newPassword": "NewSecurePass123!"
}
```

---

### 7. Verify Email
```http
GET /auth/verify-email/:token
```

---

## 👤 User Management APIs

### 1. Get Current User Profile
```http
GET /users/me
```

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "dateOfBirth": "1990-01-01",
    "role": "customer",
    "loyaltyPoints": 150,
    "memberSince": "2025-01-01T00:00:00Z",
    "preferences": {
      "dietaryRestrictions": ["vegetarian"],
      "favoriteItems": ["pizza_margherita", "tiramisu"]
    }
  }
}
```

---

### 2. Update User Profile
```http
PUT /users/me
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "preferences": {
    "dietaryRestrictions": ["vegetarian"],
    "favoriteItems": ["pizza_margherita"]
  }
}
```

---

### 3. Change Password
```http
PUT /users/me/password
```

**Request Body:**
```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass123!"
}
```

---

### 4. Get User Addresses
```http
GET /users/me/addresses
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "addr_123",
      "type": "home",
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA",
      "isDefault": true
    }
  ]
}
```

---

### 5. Add Address
```http
POST /users/me/addresses
```

**Request Body:**
```json
{
  "type": "home",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "country": "USA",
  "isDefault": true
}
```

---

### 6. Update Address
```http
PUT /users/me/addresses/:addressId
```

---

### 7. Delete Address
```http
DELETE /users/me/addresses/:addressId
```

---

## 🍕 Menu Management APIs

### 1. Get All Menu Items
```http
GET /menu/items
```

**Query Parameters:**
- `category` - Filter by category (antipasti, pasta, pizza, etc.)
- `dietary` - Filter by dietary (vegetarian, vegan, gluten-free)
- `search` - Search by name or description
- `popular` - Filter popular items (true/false)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "item_123",
        "name": "Pizza Margherita",
        "description": "Classic pizza with tomato sauce...",
        "price": 14.99,
        "category": "pizza",
        "dietary": ["vegetarian"],
        "image": "/images/pizza-margherita.jpg",
        "popular": true,
        "available": true,
        "preparationTime": 15,
        "calories": 800,
        "ingredients": ["tomato", "mozzarella", "basil"],
        "allergens": ["dairy", "gluten"]
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "pages": 3
    }
  }
}
```

---

### 2. Get Menu Item by ID
```http
GET /menu/items/:itemId
```

---

### 3. Get Menu Categories
```http
GET /menu/categories
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat_123",
      "name": "Pizza",
      "description": "Wood-fired artisan pizzas",
      "image": "/images/pizza-category.jpg",
      "itemCount": 8,
      "order": 1
    }
  ]
}
```

---

### 4. Create Menu Item (Admin Only)
```http
POST /menu/items
```

**Request Body:**
```json
{
  "name": "Pizza Margherita",
  "description": "Classic pizza...",
  "price": 14.99,
  "category": "pizza",
  "dietary": ["vegetarian"],
  "image": "/images/pizza-margherita.jpg",
  "ingredients": ["tomato", "mozzarella", "basil"],
  "allergens": ["dairy", "gluten"],
  "preparationTime": 15,
  "calories": 800
}
```

---

### 5. Update Menu Item (Admin Only)
```http
PUT /menu/items/:itemId
```

---

### 6. Delete Menu Item (Admin Only)
```http
DELETE /menu/items/:itemId
```

---

### 7. Toggle Item Availability (Admin Only)
```http
PATCH /menu/items/:itemId/availability
```

**Request Body:**
```json
{
  "available": false
}
```

---

## 🛒 Cart APIs

### 1. Get User Cart
```http
GET /cart
```

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "cart_123",
    "userId": "user_123",
    "items": [
      {
        "id": "cart_item_1",
        "menuItemId": "item_123",
        "name": "Pizza Margherita",
        "price": 14.99,
        "quantity": 2,
        "customizations": [],
        "subtotal": 29.98
      }
    ],
    "subtotal": 29.98,
    "tax": 2.40,
    "deliveryFee": 5.00,
    "discount": 0,
    "total": 37.38,
    "updatedAt": "2026-01-01T00:00:00Z"
  }
}
```

---

### 2. Add Item to Cart
```http
POST /cart/items
```

**Request Body:**
```json
{
  "menuItemId": "item_123",
  "quantity": 2,
  "customizations": [
    {
      "type": "extra",
      "name": "Extra Cheese",
      "price": 2.00
    }
  ],
  "specialInstructions": "No onions please"
}
```

---

### 3. Update Cart Item
```http
PUT /cart/items/:cartItemId
```

**Request Body:**
```json
{
  "quantity": 3
}
```

---

### 4. Remove Cart Item
```http
DELETE /cart/items/:cartItemId
```

---

### 5. Clear Cart
```http
DELETE /cart
```

---

### 6. Apply Coupon
```http
POST /cart/coupon
```

**Request Body:**
```json
{
  "code": "SAVE20"
}
```

---

## 📦 Order Management APIs

### 1. Create Order
```http
POST /orders
```

**Request Body:**
```json
{
  "type": "delivery",
  "deliveryAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001"
  },
  "paymentMethod": "card",
  "paymentDetails": {
    "cardToken": "tok_123"
  },
  "specialInstructions": "Ring doorbell",
  "scheduledFor": "2026-01-01T18:00:00Z",
  "couponCode": "SAVE20"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "order_123",
    "orderNumber": "BV-2026-001",
    "userId": "user_123",
    "type": "delivery",
    "status": "pending",
    "items": [...],
    "subtotal": 29.98,
    "tax": 2.40,
    "deliveryFee": 5.00,
    "discount": 5.99,
    "total": 31.39,
    "paymentStatus": "paid",
    "estimatedDeliveryTime": "2026-01-01T18:45:00Z",
    "createdAt": "2026-01-01T17:30:00Z"
  }
}
```

---

### 2. Get User Orders
```http
GET /orders
```

**Query Parameters:**
- `status` - Filter by status (pending, preparing, ready, delivered, cancelled)
- `page` - Page number
- `limit` - Items per page

**Response:**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "order_123",
        "orderNumber": "BV-2026-001",
        "type": "delivery",
        "status": "delivered",
        "total": 31.39,
        "itemCount": 3,
        "createdAt": "2026-01-01T17:30:00Z",
        "deliveredAt": "2026-01-01T18:40:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  }
}
```

---

### 3. Get Order by ID
```http
GET /orders/:orderId
```

---

### 4. Cancel Order
```http
POST /orders/:orderId/cancel
```

**Request Body:**
```json
{
  "reason": "Changed my mind"
}
```

---

### 5. Track Order
```http
GET /orders/:orderId/track
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orderId": "order_123",
    "status": "preparing",
    "timeline": [
      {
        "status": "pending",
        "timestamp": "2026-01-01T17:30:00Z",
        "message": "Order received"
      },
      {
        "status": "confirmed",
        "timestamp": "2026-01-01T17:32:00Z",
        "message": "Order confirmed"
      },
      {
        "status": "preparing",
        "timestamp": "2026-01-01T17:35:00Z",
        "message": "Chef is preparing your order"
      }
    ],
    "estimatedDeliveryTime": "2026-01-01T18:45:00Z",
    "driver": {
      "name": "Mike Johnson",
      "phone": "+1234567890",
      "location": {
        "lat": 40.7128,
        "lng": -74.0060
      }
    }
  }
}
```

---

### 6. Reorder
```http
POST /orders/:orderId/reorder
```

---

### 7. Update Order Status (Admin/Kitchen)
```http
PATCH /orders/:orderId/status
```

**Request Body:**
```json
{
  "status": "preparing",
  "notes": "Started cooking"
}
```

---

## 📅 Reservation APIs

### 1. Create Reservation
```http
POST /reservations
```

**Request Body:**
```json
{
  "date": "2026-01-15",
  "time": "19:00",
  "partySize": 4,
  "occasion": "birthday",
  "specialRequests": "Window table please",
  "contactInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "res_123",
    "confirmationNumber": "BV-RES-001",
    "date": "2026-01-15",
    "time": "19:00",
    "partySize": 4,
    "status": "confirmed",
    "tableNumber": "T12",
    "createdAt": "2026-01-01T00:00:00Z"
  }
}
```

---

### 2. Get User Reservations
```http
GET /reservations
```

**Query Parameters:**
- `status` - Filter by status (pending, confirmed, seated, completed, cancelled)
- `upcoming` - Show only upcoming reservations (true/false)

---

### 3. Get Reservation by ID
```http
GET /reservations/:reservationId
```

---

### 4. Update Reservation
```http
PUT /reservations/:reservationId
```

**Request Body:**
```json
{
  "date": "2026-01-16",
  "time": "20:00",
  "partySize": 6
}
```

---

### 5. Cancel Reservation
```http
DELETE /reservations/:reservationId
```

---

### 6. Check Availability
```http
GET /reservations/availability
```

**Query Parameters:**
- `date` - Date (YYYY-MM-DD)
- `partySize` - Number of guests

**Response:**
```json
{
  "success": true,
  "data": {
    "date": "2026-01-15",
    "availableSlots": [
      {
        "time": "17:00",
        "available": true,
        "maxPartySize": 6
      },
      {
        "time": "17:30",
        "available": true,
        "maxPartySize": 4
      },
      {
        "time": "18:00",
        "available": false
      }
    ]
  }
}
```

---

## 💳 Payment APIs

### 1. Create Payment Intent
```http
POST /payments/intent
```

**Request Body:**
```json
{
  "amount": 31.39,
  "currency": "USD",
  "orderId": "order_123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "clientSecret": "pi_123_secret_456",
    "paymentIntentId": "pi_123"
  }
}
```

---

### 2. Confirm Payment
```http
POST /payments/confirm
```

**Request Body:**
```json
{
  "paymentIntentId": "pi_123",
  "paymentMethodId": "pm_123"
}
```

---

### 3. Get Payment Methods
```http
GET /payments/methods
```

---

### 4. Add Payment Method
```http
POST /payments/methods
```

**Request Body:**
```json
{
  "type": "card",
  "cardToken": "tok_123"
}
```

---

### 5. Delete Payment Method
```http
DELETE /payments/methods/:methodId
```

---

### 6. Process Refund (Admin)
```http
POST /payments/:paymentId/refund
```

**Request Body:**
```json
{
  "amount": 31.39,
  "reason": "Customer request"
}
```

---

## 📊 Admin Dashboard APIs

### 1. Get Dashboard Overview
```http
GET /admin/dashboard
```

**Headers:** `Authorization: Bearer <admin_token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "today": {
      "revenue": 2450.00,
      "orders": 45,
      "newCustomers": 8,
      "averageOrderValue": 54.44
    },
    "thisWeek": {
      "revenue": 15680.00,
      "orders": 298,
      "newCustomers": 42
    },
    "thisMonth": {
      "revenue": 68900.00,
      "orders": 1245,
      "newCustomers": 186
    },
    "topSellingItems": [
      {
        "itemId": "item_123",
        "name": "Pizza Margherita",
        "orderCount": 156,
        "revenue": 2338.44
      }
    ],
    "recentOrders": [...],
    "upcomingReservations": [...]
  }
}
```

---

### 2. Get Sales Analytics
```http
GET /admin/analytics/sales
```

**Query Parameters:**
- `startDate` - Start date (YYYY-MM-DD)
- `endDate` - End date (YYYY-MM-DD)
- `groupBy` - Group by (day, week, month)

**Response:**
```json
{
  "success": true,
  "data": {
    "period": {
      "start": "2026-01-01",
      "end": "2026-01-31"
    },
    "totalRevenue": 68900.00,
    "totalOrders": 1245,
    "averageOrderValue": 55.34,
    "chartData": [
      {
        "date": "2026-01-01",
        "revenue": 2450.00,
        "orders": 45
      }
    ]
  }
}
```

---

### 3. Get Customer Analytics
```http
GET /admin/analytics/customers
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalCustomers": 1250,
    "newCustomers": 186,
    "returningCustomers": 890,
    "customerRetentionRate": 71.2,
    "averageLifetimeValue": 450.00,
    "topCustomers": [...]
  }
}
```

---

### 4. Get Inventory Status
```http
GET /admin/inventory
```

---

### 5. Update Inventory
```http
PUT /admin/inventory/:itemId
```

**Request Body:**
```json
{
  "quantity": 50,
  "lowStockThreshold": 10
}
```

---

### 6. Get All Users (Admin)
```http
GET /admin/users
```

**Query Parameters:**
- `role` - Filter by role (customer, admin, kitchen, delivery)
- `status` - Filter by status (active, inactive, banned)
- `search` - Search by name or email
- `page` - Page number
- `limit` - Items per page

---

### 7. Update User Role (Admin)
```http
PATCH /admin/users/:userId/role
```

**Request Body:**
```json
{
  "role": "admin"
}
```

---

### 8. Ban/Unban User (Admin)
```http
PATCH /admin/users/:userId/status
```

**Request Body:**
```json
{
  "status": "banned",
  "reason": "Violation of terms"
}
```

---

## 📈 Analytics APIs

### 1. Get Menu Item Performance
```http
GET /analytics/menu-items
```

**Query Parameters:**
- `startDate` - Start date
- `endDate` - End date
- `sortBy` - Sort by (revenue, orders, rating)

---

### 2. Get Peak Hours
```http
GET /analytics/peak-hours
```

**Response:**
```json
{
  "success": true,
  "data": {
    "hourlyData": [
      {
        "hour": 12,
        "orderCount": 45,
        "revenue": 1250.00
      }
    ],
    "peakHours": [12, 13, 18, 19, 20]
  }
}
```

---

### 3. Get Customer Behavior
```http
GET /analytics/customer-behavior
```

---

## 🔔 Notification APIs

### 1. Get User Notifications
```http
GET /notifications
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "notif_123",
      "type": "order_update",
      "title": "Order Delivered",
      "message": "Your order #BV-2026-001 has been delivered",
      "read": false,
      "createdAt": "2026-01-01T18:40:00Z",
      "data": {
        "orderId": "order_123"
      }
    }
  ]
}
```

---

### 2. Mark Notification as Read
```http
PATCH /notifications/:notificationId/read
```

---

### 3. Mark All as Read
```http
PATCH /notifications/read-all
```

---

### 4. Delete Notification
```http
DELETE /notifications/:notificationId
```

---

### 5. Get Notification Preferences
```http
GET /notifications/preferences
```

---

### 6. Update Notification Preferences
```http
PUT /notifications/preferences
```

**Request Body:**
```json
{
  "email": {
    "orderUpdates": true,
    "promotions": false,
    "newsletter": true
  },
  "push": {
    "orderUpdates": true,
    "promotions": false
  },
  "sms": {
    "orderUpdates": true
  }
}
```

---

## ⭐ Review & Rating APIs

### 1. Create Review
```http
POST /reviews
```

**Request Body:**
```json
{
  "orderId": "order_123",
  "rating": 5,
  "comment": "Amazing food and service!",
  "itemRatings": [
    {
      "menuItemId": "item_123",
      "rating": 5
    }
  ]
}
```

---

### 2. Get Reviews for Item
```http
GET /menu/items/:itemId/reviews
```

**Query Parameters:**
- `rating` - Filter by rating (1-5)
- `page` - Page number
- `limit` - Items per page

---

### 3. Get User Reviews
```http
GET /users/me/reviews
```

---

### 4. Update Review
```http
PUT /reviews/:reviewId
```

---

### 5. Delete Review
```http
DELETE /reviews/:reviewId
```

---

### 6. Report Review
```http
POST /reviews/:reviewId/report
```

**Request Body:**
```json
{
  "reason": "inappropriate_content"
}
```

---

## 🎁 Loyalty Program APIs

### 1. Get Loyalty Points
```http
GET /loyalty/points
```

**Response:**
```json
{
  "success": true,
  "data": {
    "currentPoints": 150,
    "lifetimePoints": 450,
    "tier": "silver",
    "nextTier": "gold",
    "pointsToNextTier": 350,
    "recentTransactions": [
      {
        "id": "trans_123",
        "type": "earned",
        "points": 50,
        "description": "Order #BV-2026-001",
        "date": "2026-01-01T18:40:00Z"
      }
    ]
  }
}
```

---

### 2. Get Available Rewards
```http
GET /loyalty/rewards
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "reward_123",
      "name": "Free Dessert",
      "description": "Get any dessert for free",
      "pointsCost": 100,
      "available": true,
      "expiresAt": "2026-12-31T23:59:59Z"
    }
  ]
}
```

---

### 3. Redeem Reward
```http
POST /loyalty/rewards/:rewardId/redeem
```

---

### 4. Get Loyalty History
```http
GET /loyalty/history
```

---

## 📱 Additional APIs

### 1. Contact Form
```http
POST /contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Catering Inquiry",
  "message": "I would like to inquire about catering services..."
}
```

---

### 2. Newsletter Subscription
```http
POST /newsletter/subscribe
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "preferences": {
    "weeklyDeals": true,
    "newMenuItems": true,
    "events": false
  }
}
```

---

### 3. Get Restaurant Info
```http
GET /restaurant/info
```

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Bella Vita",
    "description": "Authentic Italian Cuisine",
    "address": {
      "street": "123 Italian Street",
      "city": "Food City",
      "state": "FC",
      "zipCode": "12345"
    },
    "contact": {
      "phone": "+1234567890",
      "email": "info@bellavita.com"
    },
    "hours": {
      "monday": "11:00 AM - 10:00 PM",
      "tuesday": "11:00 AM - 10:00 PM",
      "wednesday": "11:00 AM - 10:00 PM",
      "thursday": "11:00 AM - 10:00 PM",
      "friday": "11:00 AM - 11:00 PM",
      "saturday": "11:00 AM - 11:00 PM",
      "sunday": "12:00 PM - 9:00 PM"
    },
    "socialMedia": {
      "facebook": "https://facebook.com/bellavita",
      "instagram": "https://instagram.com/bellavita",
      "twitter": "https://twitter.com/bellavita"
    }
  }
}
```

---

### 4. Upload Image
```http
POST /upload/image
```

**Request:** `multipart/form-data`

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.bellavita.com/images/abc123.jpg",
    "thumbnailUrl": "https://cdn.bellavita.com/images/abc123_thumb.jpg"
  }
}
```

---

## 🔒 Rate Limiting

- **Public endpoints:** 100 requests per 15 minutes
- **Authenticated endpoints:** 1000 requests per 15 minutes
- **Admin endpoints:** 5000 requests per 15 minutes

---

## 📝 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Validation Error
- `429` - Too Many Requests
- `500` - Internal Server Error

---

## 🔐 Roles & Permissions

### Customer
- View menu
- Place orders
- Make reservations
- View own orders/reservations
- Manage profile
- Write reviews

### Kitchen Staff
- View orders
- Update order status
- Manage inventory
- View menu items

### Delivery Driver
- View assigned deliveries
- Update delivery status
- View customer location

### Admin
- Full access to all endpoints
- Manage users
- Manage menu
- View analytics
- Manage orders/reservations
- Manage reviews

---

## 📚 WebSocket Events

### Real-time Order Updates
```javascript
// Client subscribes
socket.emit('subscribe:order', { orderId: 'order_123' });

// Server sends updates
socket.on('order:status', (data) => {
  // { orderId, status, message, timestamp }
});
```

### Kitchen Display System
```javascript
// New order notification
socket.on('kitchen:new-order', (order) => {
  // Display new order
});

// Order cancelled
socket.on('kitchen:order-cancelled', ({ orderId }) => {
  // Remove from display
});
```

---

## 🧪 Testing

### Test Credentials
```
Admin:
Email: admin@bellavita.com
Password: Admin123!

Customer:
Email: customer@bellavita.com
Password: Customer123!
```

### Test Cards (Stripe)
```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
```

---

**Last Updated:** 2026-01-01  
**API Version:** v1.0.0
