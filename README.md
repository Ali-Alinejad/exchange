# 🚀 Mojex Exchange: The Next-Gen Live Crypto Trading Platform

**Mojex** is a high-performance, feature-rich cryptocurrency exchange built with modern web technologies, focusing on **real-time data analysis**, **fluid user experience**, and robust **live trading** capabilities.

## ✨ Features at a Glance

| Feature | Description | Key Technology |
| :--- | :--- | :--- |
| **Live Trading Engine** | Real-time order book and trade execution. | `Prisma`/`Mongoose`, GraphQL/Apollo |
| **Fluid UI/UX** | Beautifully animated, responsive interface for desktop and mobile. | **Framer Motion**, Tailwind CSS |
| **Advanced Charting** | Detailed, professional-grade market analysis tools. | `ApexCharts`, `react-chartjs-2` |
| **Dark Mode Ready** | Seamless theme switching for optimal viewing day or night. | `next-themes` |
| **Real-time Data** | Instant updates to prices and the crypto list. | GraphQL/Apollo Client |

---

## 💻 Design Showcase

Our interface is designed to be data-dense yet visually clean, providing traders with all the necessary tools without clutter.

### Main Dashboard: Live Market Overview

A full-screen, responsive view that immerses the user in the live market environment.

<img width="1897" height="958" alt="Mojex Main Exchange Dashboard" src="https://github.com/user-attachments/assets/37dc2bdb-fb48-42d5-86d0-9c18ebf56399" />

### Crypto List: Dynamic Price Tracking

The core trading pairs, featuring **real-time price changes** and volume metrics, presented in a clean, scannable table format.

<img width="1897" height="958" alt="Mojex Crypto Currency List" src="https://github.com/user-attachments/assets/9dcc48cd-2efb-4fac-a0d4-c2d89c06b1c50" />

### Mobile-First Experience

A dedicated layout that optimizes data flow and interaction for mobile users, ensuring full functionality on the go.

<img width="1897" height="958" alt="Mojex Mobile Trading View" src="https://github.com/user-attachments/assets/7dabf360-8af3-4621-bf92-6c82c22c9e38" />

### Charting & Analysis

Integrated TradingView-style charts offering multiple indicators, timeframes, and drawing tools for professional market analysis.

<img width="1897" height="958" alt="Mojex Advanced Charting Interface" src="https://github.com/user-attachments/assets/ffb8250a-7bb7-48ec-9e10-08afef6976ee" />

---

## 🎨 Animated & Fluid Experience

Mojex utilizes **Framer Motion** for captivating and meaningful animations that enhance user focus and feedback.

### Key Animations

* **Page Transitions:** Smooth cross-fades and subtle slides between major views using shared layout IDs.
* **Data Updates:** Micro-interactions like **price pulse animations** (green/red flash) on the Crypto List when a trade executes.
* **Card Hover Effects:** Subtle **3D tilt and elevation** on crypto cards and buttons for interactive depth.
* **Modal & Drawer:** Animated slide-in/out effects for order forms and mobile navigation.

---

## 🛠️ Technology Stack

Mojex is a high-performance application built on a modern, robust, and scalable stack.

### Frontend
| Component | Purpose | Libraries |
| :--- | :--- | :--- |
| **Framework** | High-performance React framework. | `next@15.1.7` (with `turbopack`) |
| **Animation** | Physics-based, declarative UI motion. | **`framer-motion`**, `motion` |
| **Styling** | Utility-first CSS for rapid, responsive design. | `tailwindcss`, `@heroui/react` |
| **State Management** | Fast, simple, and scalable global state. | `zustand` |
| **Charting** | Advanced financial data visualization. | `apexcharts`, `react-chartjs-2` |

### Backend & Data
| Component | Purpose | Libraries |
| :--- | :--- | :--- |
| **Database** | Flexible data model for market and user data. | `mongoose` (MongoDB), `prisma` |
| **API** | Efficient data fetching and real-time subscription. | `@apollo/client`, `graphql` |

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (LTS version)
* MongoDB or PostgreSQL instance (depending on your `prisma` setup)

### Installation

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL]
    cd my-exchange
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Set up environment variables (`.env` file) for database and API keys.

### Running Locally

To start the development server with the fastest performance:

```bash
npm run dev
# The project will start on http://localhost:3000
```
