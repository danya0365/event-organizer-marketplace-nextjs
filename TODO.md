# EventHub - TODO List

## ✅ Phase 0: Project Setup & Foundation

- [x] Initialize Next.js 15 project with TypeScript
- [x] Setup Tailwind CSS 4
- [x] Setup Supabase
- [x] Setup folder structure (Clean Architecture)
- [ ] Setup ESLint & Prettier
- [ ] Setup Husky & lint-staged
- [ ] Setup Testing framework (Jest + React Testing Library)
- [ ] Create prompt patterns (CREATE_PAGE_PATTERN.md)

## 🎨 Phase 1: Core UI & Layout (สัปดาห์ที่ 1-2)

### Layout & Navigation

- [x] สร้าง MainLayout (Header, Footer, Navigation)
- [x] สร้าง Header พร้อม Search Bar
- [x] สร้าง Footer พร้อมลิงก์สำคัญ
- [x] สร้าง Theme Toggle (Light/Dark Mode)
- [x] สร้าง Responsive Navigation
- [x] สร้าง Mobile Menu (Hamburger)
- [x] สร้าง User Menu Dropdown
- [x] สร้าง Notification Bell

### หน้า Landing Page

- [x] สร้างหน้า Landing Page ตาม CREATE_PAGE_PATTERN.md
- [x] Hero Section พร้อม CTA
- [x] Popular Categories Section
- [x] Featured Vendors Section
- [x] How It Works Section
- [x] Testimonials/Reviews Section
- [x] CTA Section (Get Started)
- [x] Master data สำหรับ categories
- [x] Master data สำหรับ featured vendors

### Shared Components

- [ ] Button Component (Primary, Secondary, Outline)
- [ ] Input Component
- [ ] Select Component
- [ ] Textarea Component
- [ ] Card Component
- [ ] Badge Component
- [ ] Avatar Component
- [ ] Modal Component
- [ ] Toast/Notification Component
- [ ] Loading Spinner Component
- [ ] Pagination Component
- [ ] Rating Stars Component
- [ ] Image Gallery Component
- [ ] Date Picker Component
- [ ] Price Range Slider Component

## 👤 Phase 2: Authentication & User Management (สัปดาห์ที่ 3-4)

### Authentication

- [ ] สร้างหน้า Login
- [ ] สร้างหน้า Register
- [ ] สร้างหน้า Forgot Password
- [ ] สร้างหน้า Reset Password
- [ ] Integration กับ Supabase Auth
- [ ] Email Verification Flow
- [ ] Social Login (Google, Facebook)
- [ ] Protected Routes Middleware
- [ ] Auth Store (Zustand)

### User Profile

- [ ] สร้างหน้า User Profile
- [ ] แก้ไขข้อมูลส่วนตัว
- [ ] เปลี่ยนรหัสผ่าน
- [ ] อัพโหลดรูปโปรไฟล์
- [ ] ตั้งค่าการแจ้งเตือน
- [ ] Manage Addresses

### User Types

- [ ] Role-based Access Control (Customer, Vendor, Admin)
- [ ] Customer Dashboard Layout
- [ ] Vendor Dashboard Layout
- [ ] Admin Dashboard Layout

## 🏪 Phase 3: Vendor/Provider System (สัปดาห์ที่ 5-7)

### Vendor Registration

- [ ] สร้างหน้า Vendor Registration
- [ ] Business Information Form
- [ ] Category Selection
- [ ] Service Area Selection
- [ ] Verification Process
- [ ] Vendor Onboarding Flow

### Vendor Profile

- [ ] สร้างหน้า Vendor Profile (Public View)
- [ ] Business Information Section
- [ ] Services & Packages Section
- [ ] Portfolio/Gallery Section
- [ ] Reviews & Ratings Section
- [ ] Availability Calendar Section
- [ ] Contact Information Section
- [ ] Location Map Section

### Vendor Dashboard

- [ ] Dashboard Overview (Stats, Charts)
- [ ] Manage Bookings
- [ ] Manage Services/Packages
- [ ] Manage Portfolio
- [ ] Manage Availability
- [ ] View Reviews
- [ ] Revenue Analytics
- [ ] Notification Center
- [ ] Settings

### Services Management

- [ ] Create Service/Package
- [ ] Edit Service/Package
- [ ] Delete Service/Package
- [ ] Service Categories
- [ ] Pricing Options
- [ ] Add-ons Management
- [ ] Duration Settings
- [ ] Capacity Settings

## 🔍 Phase 4: Marketplace & Discovery (สัปดาห์ที่ 8-10)

### Browse & Search

- [ ] หน้า Marketplace (Browse All Vendors)
- [ ] Category Pages (แยกตามหมวดหมู่)
- [ ] Advanced Search Page
- [ ] Search Results Page
- [ ] Filter Panel (Category, Location, Price, Rating)
- [ ] Sort Options (Popular, Rating, Price, Recent)
- [ ] Pagination & Infinite Scroll
- [ ] Search Suggestions/Autocomplete

### Vendor Discovery

- [ ] Vendor Card Component
- [ ] Vendor List View
- [ ] Vendor Grid View
- [ ] Map View (Google Maps Integration)
- [ ] Featured Vendors Section
- [ ] Trending Vendors Section
- [ ] New Vendors Section
- [ ] Recommended Vendors (AI-based)

### Location Features

- [ ] Location Search & Autocomplete
- [ ] Geolocation Support
- [ ] Service Area Display
- [ ] Distance Calculation
- [ ] Map Markers for Vendors
- [ ] Location Filter

## 📅 Phase 5: Booking System (สัปดาห์ที่ 11-13)

### Booking Flow

- [ ] หน้า Service Detail
- [ ] Booking Form
- [ ] Date & Time Selection
- [ ] Package Selection
- [ ] Add-ons Selection
- [ ] Guest Count Input
- [ ] Special Requirements/Notes
- [ ] Booking Summary
- [ ] Terms & Conditions

### Booking Management

- [ ] หน้า My Bookings (Customer)
- [ ] Booking Detail Page
- [ ] Booking Status Tracking
- [ ] Cancel Booking
- [ ] Reschedule Booking
- [ ] Booking History
- [ ] Upcoming Bookings
- [ ] Past Bookings

### Vendor Booking Management

- [ ] หน้า Incoming Bookings (Vendor)
- [ ] Accept/Decline Booking
- [ ] View Booking Details
- [ ] Mark as Completed
- [ ] Booking Calendar View
- [ ] Booking Notifications

### Availability Management

- [ ] Vendor Calendar Setup
- [ ] Block Dates/Times
- [ ] Set Working Hours
- [ ] Recurring Availability
- [ ] Holiday/Break Settings
- [ ] Real-time Availability Check

## 💬 Phase 6: Communication (สัปดาห์ที่ 14-15)

### Real-time Chat

- [ ] Chat Interface
- [ ] One-on-one Chat (Customer-Vendor)
- [ ] Message List
- [ ] Message Thread
- [ ] Typing Indicator
- [ ] Read Receipts
- [ ] File/Image Sharing
- [ ] Emoji Support
- [ ] Chat History
- [ ] Socket.io Integration
- [ ] Unread Message Count

### Notifications

- [ ] Notification Center
- [ ] Real-time Notifications
- [ ] Email Notifications
- [ ] Push Notifications (Web)
- [ ] SMS Notifications (Optional)
- [ ] Notification Settings
- [ ] Notification Types:
  - [ ] New Booking
  - [ ] Booking Confirmed
  - [ ] Booking Cancelled
  - [ ] Payment Received
  - [ ] New Message
  - [ ] New Review
  - [ ] Event Reminders

### Inquiry System

- [ ] Send Inquiry Form
- [ ] View Inquiries (Vendor)
- [ ] Respond to Inquiries
- [ ] Inquiry Status Tracking

## 💳 Phase 7: Payment System (สัปดาห์ที่ 16-18)

### Payment Integration

- [ ] Stripe Integration
- [ ] Payment Gateway Setup
- [ ] Payment Methods:
  - [ ] Credit/Debit Card
  - [ ] QR Code (PromptPay)
  - [ ] Bank Transfer
- [ ] Secure Payment Flow
- [ ] Payment Status Tracking

### Escrow System

- [ ] Escrow Payment Hold
- [ ] Release Payment (after service)
- [ ] Refund Processing
- [ ] Partial Refund
- [ ] Dispute Management

### Financial Management

- [ ] หน้า Payment History
- [ ] Invoice Generation
- [ ] Receipt Download
- [ ] Vendor Payout System
- [ ] Commission Calculation
- [ ] Revenue Reports
- [ ] Transaction History

### Pricing & Packages

- [ ] Dynamic Pricing
- [ ] Seasonal Pricing
- [ ] Discount Codes/Coupons
- [ ] Package Deals
- [ ] Custom Quotes
- [ ] Price Calculator

## ⭐ Phase 8: Reviews & Ratings (สัปดาห์ที่ 19-20)

### Review System

- [ ] หน้า Write Review
- [ ] Rating (1-5 Stars)
- [ ] Review Text
- [ ] Upload Review Photos
- [ ] Review Categories (Quality, Value, Service, etc.)
- [ ] Verified Purchase Badge
- [ ] Review Moderation

### Reviews Display

- [ ] Reviews List on Vendor Profile
- [ ] Reviews Filter & Sort
- [ ] Helpful/Not Helpful Votes
- [ ] Review Statistics
- [ ] Average Rating Display
- [ ] Rating Distribution Chart
- [ ] Featured Reviews
- [ ] Recent Reviews

### Vendor Response

- [ ] Respond to Reviews
- [ ] Thank Customers
- [ ] Address Concerns
- [ ] Response Management

## 🎯 Phase 9: Event Project Management (สัปดาห์ที่ 21-23)

### Event Creation

- [ ] หน้า Create Event
- [ ] Event Information Form
- [ ] Event Type Selection
- [ ] Event Date & Time
- [ ] Guest Count
- [ ] Budget Planning
- [ ] Location/Venue
- [ ] Event Timeline

### Project Dashboard

- [ ] Event Dashboard Overview
- [ ] Project Timeline View
- [ ] Task Checklist
- [ ] Budget Tracker
- [ ] Vendor List
- [ ] Document Manager
- [ ] Guest List (Optional)
- [ ] Event Day Countdown

### Multi-Vendor Management

- [ ] Add Multiple Vendors to Event
- [ ] Vendor Coordination
- [ ] Individual Booking Status
- [ ] Unified Communication
- [ ] Payment Tracking per Vendor
- [ ] Timeline Synchronization

### Package Builder

- [ ] Create Event Package
- [ ] Select Multiple Vendors
- [ ] Bundle Pricing
- [ ] Package Templates
- [ ] Popular Packages
- [ ] Custom Package Builder

## 📊 Phase 10: Analytics & Reports (สัปดาห์ที่ 24-25)

### Customer Analytics

- [ ] Booking History Charts
- [ ] Spending Analytics
- [ ] Favorite Vendors
- [ ] Event Statistics

### Vendor Analytics

- [ ] Dashboard with Key Metrics
- [ ] Booking Trends Chart
- [ ] Revenue Chart
- [ ] Conversion Rate
- [ ] Customer Demographics
- [ ] Popular Services
- [ ] Peak Seasons Analysis
- [ ] Performance Insights
- [ ] Competitor Analysis (Optional)

### Admin Analytics

- [ ] Platform Overview
- [ ] Total GMV (Gross Merchandise Value)
- [ ] Active Users
- [ ] Total Bookings
- [ ] Revenue Reports
- [ ] Top Performing Vendors
- [ ] Category Performance
- [ ] User Growth
- [ ] System Health Monitoring

## 🛡️ Phase 11: Admin Panel (สัปดาห์ที่ 26-28)

### User Management

- [ ] User List
- [ ] User Details
- [ ] Ban/Suspend Users
- [ ] User Activity Logs
- [ ] User Verification

### Vendor Management

- [ ] Vendor Approval System
- [ ] Vendor List
- [ ] Vendor Verification
- [ ] Featured Vendor Management
- [ ] Vendor Performance Monitoring
- [ ] Ban/Suspend Vendors

### Content Management

- [ ] Category Management
- [ ] Homepage Banner Management
- [ ] Promotion Management
- [ ] Featured Listings
- [ ] Blog/Content Pages (Optional)

### Booking Management

- [ ] All Bookings Overview
- [ ] Booking Details
- [ ] Resolve Disputes
- [ ] Refund Processing
- [ ] Booking Statistics

### System Settings

- [ ] Platform Settings
- [ ] Commission Settings
- [ ] Email Templates
- [ ] Notification Templates
- [ ] Payment Gateway Settings
- [ ] Feature Flags
- [ ] SEO Settings

### Reports & Analytics

- [ ] Revenue Reports
- [ ] User Reports
- [ ] Booking Reports
- [ ] Vendor Reports
- [ ] Export to CSV/Excel

## 🚀 Phase 12: Advanced Features (สัปดาห์ที่ 29-32)

### AI & Recommendations

- [ ] AI-based Vendor Recommendations
- [ ] Smart Search
- [ ] Personalized Homepage
- [ ] Price Prediction
- [ ] Demand Forecasting

### Advanced Search

- [ ] Faceted Search
- [ ] Search Analytics
- [ ] Search History
- [ ] Saved Searches
- [ ] Search Alerts

### Wishlist & Favorites

- [ ] Add to Wishlist
- [ ] Manage Favorites
- [ ] Share Wishlist
- [ ] Wishlist Notifications

### Social Features

- [ ] Share Vendor Profile
- [ ] Share Event
- [ ] Social Media Integration
- [ ] Referral Program
- [ ] Loyalty Points System

### Mobile Optimization

- [ ] Progressive Web App (PWA)
- [ ] Mobile-First Design
- [ ] Touch Gestures
- [ ] Offline Support
- [ ] App Install Prompt

### Internationalization

- [ ] Multi-language Support (Thai, English)
- [ ] Currency Conversion
- [ ] RTL Support (Optional)
- [ ] Locale-based Content

### Performance Optimization

- [ ] Image Optimization (Next.js Image)
- [ ] Lazy Loading
- [ ] Code Splitting
- [ ] Caching Strategy
- [ ] CDN Integration
- [ ] Database Query Optimization
- [ ] Server-side Rendering (SSR)
- [ ] Static Site Generation (SSG)

## 🔒 Phase 13: Security & Compliance (สัปดาห์ที่ 33-34)

### Security

- [ ] Data Encryption
- [ ] XSS Protection
- [ ] CSRF Protection
- [ ] SQL Injection Prevention
- [ ] Rate Limiting
- [ ] API Security
- [ ] Secure File Upload
- [ ] Content Security Policy

### Privacy & Compliance

- [ ] Privacy Policy Page
- [ ] Terms of Service Page
- [ ] Cookie Consent
- [ ] GDPR Compliance
- [ ] Data Export
- [ ] Data Deletion
- [ ] User Consent Management

### Backup & Recovery

- [ ] Database Backup
- [ ] Disaster Recovery Plan
- [ ] Data Migration Tools

## 📱 Phase 14: Testing & QA (สัปดาห์ที่ 35-36)

### Testing

- [ ] Unit Tests (Key Components)
- [ ] Integration Tests
- [ ] E2E Tests (Critical Flows)
- [ ] API Tests
- [ ] Performance Tests
- [ ] Security Tests
- [ ] Browser Compatibility Tests
- [ ] Mobile Responsiveness Tests

### Quality Assurance

- [ ] Manual Testing
- [ ] User Acceptance Testing (UAT)
- [ ] Bug Tracking & Fixing
- [ ] Performance Optimization
- [ ] Accessibility Audit (WCAG)

## 🌐 Phase 15: Deployment & Launch (สัปดาห์ที่ 37-38)

### Pre-Launch

- [ ] Domain Setup
- [ ] SSL Certificate
- [ ] Email Service Setup
- [ ] SMS Service Setup (Optional)
- [ ] CDN Setup
- [ ] Monitoring Setup (Sentry, LogRocket)
- [ ] Analytics Setup (Google Analytics, Mixpanel)

### Deployment

- [ ] Production Environment Setup
- [ ] Database Migration
- [ ] Environment Variables
- [ ] Deploy to Vercel/AWS
- [ ] Set up CI/CD Pipeline
- [ ] Load Testing

### Post-Launch

- [ ] Monitoring & Alerts
- [ ] Error Tracking
- [ ] User Feedback Collection
- [ ] Bug Fixes
- [ ] Performance Monitoring
- [ ] SEO Optimization

## 📚 Phase 16: Documentation (สัปดาห์ที่ 39-40)

### Technical Documentation

- [ ] API Documentation
- [ ] Database Schema Documentation
- [ ] Architecture Documentation
- [ ] Deployment Guide
- [ ] Developer Guide

### User Documentation

- [ ] User Guide (Customer)
- [ ] Vendor Guide
- [ ] FAQ Page
- [ ] Help Center
- [ ] Video Tutorials (Optional)

### Business Documentation

- [ ] Business Model Documentation
- [ ] Marketing Strategy
- [ ] Growth Plan

## 🎉 Additional Features (Future)

### Advanced Features

- [ ] Video Consultations
- [ ] Live Streaming Events
- [ ] Marketplace for Digital Products
- [ ] Contract Management
- [ ] Insurance Integration
- [ ] Weather Integration
- [ ] Virtual Event Planning Tools
- [ ] 3D Venue Tours
- [ ] AR/VR Previews
- [ ] Blockchain Verification (Optional)

### Marketing Features

- [ ] Email Marketing Integration
- [ ] Affiliate Program
- [ ] Influencer Partnerships
- [ ] Seasonal Campaigns
- [ ] Flash Sales
- [ ] Limited Time Offers

### Community Features

- [ ] Community Forum
- [ ] Event Planning Tips Blog
- [ ] Vendor Success Stories
- [ ] Customer Testimonials
- [ ] Q&A Section

## 📋 Notes

- ทุกหน้าต้องสร้างตาม pattern ใน CREATE_PAGE_PATTERN.md
- ใช้ Clean Architecture และ SOLID Principles
- ใช้ TypeScript strict mode
- ใช้ Server Components เมื่อเป็นไปได้
- ทำ SEO optimization ทุกหน้า
- รองรับ Dark Mode ทุกหน้า
- Responsive Design ทุกหน้า
- Performance optimization ทุกหน้า
- Accessibility (WCAG AA) ทุกหน้า

## 🎯 Priority Levels

- 🔴 Critical (Must Have): Phase 1-8
- 🟡 Important (Should Have): Phase 9-13
- 🟢 Nice to Have (Could Have): Phase 14-16
- 🔵 Future (Won't Have for MVP): Additional Features
