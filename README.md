# Surplus Food Redistribution Platform

## Overview

Food waste is a significant global challenge, while millions continue to struggle with hunger. Our digital platform bridges the gap between surplus food sources—such as restaurants, bakeries, caterers, and canteens—and NGOs, shelters, and volunteers who work to distribute food to those in need. By leveraging real-time tracking, optimized routing, and AI-driven inventory management, our platform ensures that surplus food is efficiently redistributed before spoilage occurs.

[Nourish AI](https://aissms-pune-hack.vercel.app/)

## Key Features

### Role-Based Access & Registration
- **Donors:**  
  - Restaurants, canteens, caterers, and bakeries can sign up to upload details about surplus food (e.g., expiry dates, pickup schedules).
- **Recipients:**  
  - NGOs, shelters, and volunteers can register to browse available donations and claim food based on current need.
- **Communication:**  
  - Integrated notifications and scheduling tools facilitate seamless communication between donors and recipients.

### Real-Time Food Redistribution & Optimization
- **Geolocation & Route Optimization:**  
  - Utilizes the Google Maps API to calculate optimal pickup routes for fast and efficient food collection.
- **Smart Alerts:**  
  - Automated notifications warn donors when food is nearing its expiry date, prompting timely action.
- **Live Tracking:**  
  - Both donors and recipients can monitor donation statuses in real time.

### AI-Powered Food Management & Inventory Tracking
<!-- - **OCR-Based Inventory Management:**  
  - Donors can quickly upload food details using OCR technology. -->
- **Predictive Analytics:**  
  - AI-driven models analyze historical donation trends to suggest optimal food quantities, minimizing waste.
- **Smart Recipe Chatbot:**  
  - Provides creative recipe suggestions to help users make the most of available food.

### Seamless Pickup & Distribution Process
- **Efficient Claiming:**  
  - NGOs and volunteers easily claim food donations through the platform.
- **Optimized Pickup Routes:**  
  - The system provides optimized routing options to ensure efficient collection and distribution.
- **Transparent Delivery Coordination:**  
  - Track deliveries and donation status for a seamless redistribution process.

## Technology Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Additional Integrations:**
  - **Google Maps API:** For geolocation and route optimization.
  - **Twilio:** For SMS notifications.
  - **OCR Tools:** For fast inventory uploads.
  - **AI/ML Models:** For predictive analytics and smart recommendations.

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or cloud service)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (Optional, for containerization)
- [Git](https://git-scm.com/)

### Running Locally

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

#### 2. Backend Setup
- Navigate to the `Backend` directory:
  ```bash
  cd Backend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Configure your environment by creating a `.env` file:
  ```env
  PORT=4000
  MONGO_URL=mongodb://localhost:27017/mydatabase
  ```
- Start the backend server:
  ```bash
  npm start
  ```

#### 3. Frontend Setup
- Open a new terminal and navigate to the `Frontend` directory:
  ```bash
  cd ../Frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Configure your environment by creating a `.env` file:
  ```env
  VITE_BASE_URL=http://localhost:4000/api/v1
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
- For production build and preview:
  ```bash
  npm run build
  npm run preview -- --port 5173
  ```

### Running with Docker

A Docker Compose setup is provided to containerize the application components (Backend, Frontend, and MongoDB).

#### Docker Compose File (`docker-compose.yml`)
```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./Backend
      dockerfile: Dockerfile
    container_name: backend
    ports:
      - "4000:4000"
    environment:
      - PORT=4000
      - MONGO_URL=mongodb://mongo:27017/mydatabase  # Replace 'mydatabase' with your database name
    depends_on:
      - mongo
    volumes:
      - ./Backend:/src  # Optional: mount for development

  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  frontend:
    build:
      context: ./Frontend
      dockerfile: Dockerfile
    container_name: frontend
    ports:
      - "5173:5173"  # Adjust as needed. Ensure your container listens on 5173.
    volumes:
      - ./Frontend:/src  # Optional: mount for development

volumes:
  mongo-data:
```

> **Note:**  
> If you use a volume mount for the frontend during development, it may override your built files. For production, consider removing the volume mount from the frontend service.

#### To Build & Run
From the repository root (where `docker-compose.yml` is located), run:
```bash
docker-compose up --build
```
Access your services at:
- **Backend:** [http://localhost:4000](http://localhost:4000)
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **MongoDB:** Accessible on port 27017 for backend connections.

## Impact & Future Enhancements

- **Social Impact:**  
  Reduces food wastage while enhancing food security for communities in need.
- **Economic Potential:**  
  Potential for subscription-based analytics and AI insights tailored for businesses.
- **Scalability:**  
  Designed with cloud-based infrastructure in mind, the platform can expand to multiple cities.
- **Future Enhancements:**  
  Further integration with advanced AI models, enhanced API integrations, and additional user experience improvements.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.
4. Follow the coding standards and include tests for new features.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or further information, please contact [jamdadeatharva14@gmail.com](mailto:your-jamdadeatharva14@gmail.coms).
