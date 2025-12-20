# PawMart 🐾

PawMart is a full-stack web application for managing and exploring pet-related products and services. Users can add, edit, and delete listings for pets, food, accessories, and care products. The app provides a smooth user experience with instant updates, conditional forms, and PDF generation for orders.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

---

## Project Overview
PawMart allows users to:
- Add listings for pets or pet products
- Edit or delete existing listings
- Handle orders and generate PDFs for them
- See all their added listings in a table with instant UI updates
- Conditional form inputs (e.g., price automatically set to 0 for pets)

The backend is powered by **Node.js**, **Express**, and **MongoDB**, while the frontend uses **React.js**, **TailwindCSS**, and **SweetAlert2** for alerts.

---

## Features
- **User Authentication** (login/signup)
- **CRUD Operations** for Listings
- **Conditional Form Logic** (Pets category price auto-set)
- **Instant UI Updates** on Edit/Delete without page reload
- **PDF Generation** for orders using `jspdf` and `jspdf-autotable`
- **Responsive UI** for mobile and desktop
- **SweetAlert2** confirmation dialogs for deletions

---

## Technologies Used
- **Frontend:** React, TailwindCSS, Lucide Icons, SweetAlert2
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **HTTP Requests:** Axios
- **PDF Generation:** jsPDF, jsPDF-AutoTable
- **State Management:** React Context API

---

## Screenshots
### My Listings Page
![My Listings](./screenshots/my-listings.png)

### Add/Edit Listing Modal
![Add/Edit Listing](./screenshots/add-edit-listing.png)

### Orders PDF Download
![Orders PDF](./screenshots/orders-pdf.png)

---

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pawmart.git
