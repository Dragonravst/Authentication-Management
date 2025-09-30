🔐 Full Stack Authentication Management System

A complete authentication and user management system built with Spring Boot, React (Vite), Spring Security, MySQL, Bootstrap, Java Mail, Thymeleaf, and Brevo.

This project demonstrates real-world authentication features including login, signup with email verification, OTP-based password reset, and secure user data management.

🚀 Features

User Registration

New users can sign up with name, email, password.

Email verification using OTP before activating the account.

User Login

Secure login with Spring Security & JWT (if used).

Passwords stored in DB with encryption (BCrypt).

Forgot Password / Reset Password

OTP-based password reset system.

User enters registered email → OTP sent to email → reset with new password.

Email Verification

OTP sent via Java Mail + Brevo SMTP.

User must verify email to activate account.

Responsive UI

Built with React (Vite) and Bootstrap.

Thymeleaf used for some server-rendered templates.

🛠️ Tech Stack

Frontend

React (Vite)

Bootstrap

Backend

Spring Boot

Spring Security

Java Mail (Brevo SMTP)

Thymeleaf

Database

MySQL

Language

Java

📸 Screenshots (Add later)

Home Page

Login Page

Registration Page

OTP Verification Page

Reset Password Flow

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/authentication-management.git
cd authentication-management


Backend (Spring Boot)

Import into Eclipse/IntelliJ as a Maven project.

Update application.properties with your MySQL credentials and Brevo SMTP settings:

spring.datasource.url=jdbc:mysql://localhost:3306/auth_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

spring.mail.host=smtp-relay.brevo.com
spring.mail.port=587
spring.mail.username=your-brevo-email
spring.mail.password=your-brevo-api-key
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true


Run the Spring Boot application.

Frontend (React + Vite)

cd frontend
npm install
npm run dev


Access the App

Frontend: http://localhost:5173 (default Vite port)

Backend API: http://localhost:8080

📂 Project Structure
authentication-management/
│
├── backend/                # Spring Boot Backend
│   ├── src/main/java/com/example/
│   │   ├── controller/     # Controllers
│   │   ├── service/        # Business Logic
│   │   ├── repository/     # Database Repositories
│   │   ├── security/       # Spring Security Config
│   │   └── entity/         # User Entities
│   └── resources/
│       ├── application.properties
│       └── templates/      # Thymeleaf templates
│
├── frontend/               # React Vite Frontend
│   ├── src/
│   │   ├── pages/          # Login, Signup, Reset, Verify
│   │   ├── components/     # Reusable components
│   │   └── App.jsx
│   └── package.json
│
└── README.md

📧 Email & OTP Flow

Registration → Email with OTP → Verify → Account activated.

Forgot Password → Email with OTP → Reset password → Login again.

✨ Future Improvements

Add JWT authentication for API security.

Add Role-based authorization (Admin/User).

Add Account lockout after multiple failed login attempts.

Add Resend OTP feature.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit pull requests.

📝 License

This project is licensed under the MIT License.
