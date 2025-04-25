# 🛍️ Multi-Vendor SaaS Platform

A scalable, production-ready **Multi-Vendor SaaS platform** built using modern technologies like **NX monorepo**, **Next.js**, **Express.js**, **Redis**, **Stripe**, **Kafka**, **Docker**, **JWT**, **ImageKit**, **React Query**, **TailwindCSS**, **Prisma**, **WebSocket**, **Firebase**, **Swagger**, **CI/CD**, **Jest**, and **AWS deployment**.

---

## 🚀 Tech Stack

| Category       | Technologies                                                            |
| -------------- | ----------------------------------------------------------------------- |
| Frontend       | Next.js (App Router), React, Tailwind CSS, React Query, React Hook Form |
| Backend        | Node.js, Express.js, Prisma ORM, JWT, Redis, Kafka, WebSocket           |
| Authentication | Firebase, JWT                                                           |
| File Storage   | ImageKit, AWS                                                           |
| Payments       | Stripe                                                                  |
| API Testing    | Jest                                                                    |
| API Docs       | Swagger                                                                 |
| Realtime       | WebSocket                                                               |
| DevOps         | Docker, AWS, CI/CD, GitHub Actions                                      |
| Monorepo       | Nx                                                                      |
| Database       | MongoDB (via Prisma ORM)                                                |

---

## 📁 Project Structure

```
├── apps
│   ├── user-ui (Next.js frontend for user)
│   ├── seller-ui (Next.js frontend for seller)
│   ├── auth-service (Authentication microservice)
│   ├── api-gateway (API aggregator)
│   └── product-service (product-related APIs)
├── packages
│   └── shared (types, utils, constants)
├── prisma
│   └── schema.prisma
├── docker
│   └── docker-compose.yml
└── .github
    └── workflows (CI/CD)
```

---

## ⚙️ Features

- 🧾 **Vendor Management** (Create, manage, verify vendors)
- 👨‍💼 **Multi-tenancy SaaS model**
- 🔐 **JWT Authentication** with Firebase
- 💳 **Stripe Integration** for payments and subscriptions
- 📦 **Kafka Messaging** for event-driven architecture
- ⚡️ **Realtime updates** via WebSocket
- 🧠 **Smart Forms** using React Hook Form + Zod
- 🧵 **Monorepo structure** via Nx
- 📊 **Charts & Analytics** (via Swagger Charts)
- ☁️ **AWS Deployment** (ECS, S3, etc.)
- 📸 **Image Upload** via ImageKit
- 🔄 **React Query** for state & caching
- ✅ **CI/CD pipeline** with GitHub Actions
- 🔍 **API Testing** with Jest & Supertest

---

## 🐳 Docker Setup

1. **Start all services**:

```bash
docker-compose up --build
```

2. Access frontend: `http://localhost:3000`

3. Access API Gateway: `http://localhost:8080`

---

## 🔐 Environment Variables

Each service uses its own `.env` file. Common variables:

```env
DATABASE_URL=
REDIS_HOST=
REDIS_PORT="6379"
REDIS_PASSWORD=
REDIS_DATABASE_URI=
SMTP_USER=
SMTP_PASS=
SMTP_PORT=
SMTP_SERVICE=x
SMTP_HOST=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=x
STRIPE_SECRET_KEY=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL=
```

---

## 🧪 Testing

Run all tests:

```bash
nx run-many --target=test --all
```

Individual test:

```bash
nx test auth-service
```

---

## 🚢 Deployment

CI/CD configured via GitHub Actions:

- Push to `main` → triggers build & deploy to AWS
- Docker images pushed to Amazon ECR
- Deployed via ECS / Lambda (depending on service)

---

## 🧩 Swagger API Docs

Each service includes Swagger documentation at:

```
http://localhost:<port>/api-docs
```

---

## 🔗 Useful Commands

| Command                            | Description                |
| ---------------------------------- | -------------------------- |
| `nx serve <app>`                   | Serve individual app       |
| `nx build <app>`                   | Build app                  |
| `nx lint <app>`                    | Run lint                   |
| `nx test <app>`                    | Run tests                  |
| `nx run-many --target=serve --all` | Serve all apps in parallel |

---

## 📸 Screenshots

_(Add images/gifs of dashboard, login, vendor panel, etc.)_

---

## 🙌 Contribution

Pull requests are welcome! Please make sure to:

- Follow Nx workspace conventions
- Write clean, well-documented code
- Add test coverage for new features

---

## 📧 Contact

For questions, reach out to **[Sachin Rathore](mailto:12sachin95@gmail.com)**  
Or open an [issue](https://github.com/12sachin95/eshop-app/issues)

---

## 📝 License

MIT © 2025 – Built with ❤️ by Sachin Rathore
