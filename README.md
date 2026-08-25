# User Management API

A RESTful **user management API** built with **Node.js, Express.js, EJS, and MySQL**.

The application provides CRUD operations for user records, including creating users, viewing users, updating usernames, and deleting users. Password verification is required before updating or deleting an existing user.

## Features

- Create new users
- View all users
- View total user count
- Update usernames
- Delete users
- Password verification for update and delete operations
- UUID-based user identification
- MySQL database integration
- RESTful routing
- EJS-based server-side rendering
- Method Override for `PATCH` and `DELETE` requests

## Tech Stack

| Category | Technologies |
|---|---|
| Backend | Node.js, Express.js |
| Database | MySQL, MySQL2 |
| Frontend | EJS, HTML, CSS |
| Other | UUID, Method Override |
| Tools | Git, GitHub, VS Code |

## Project Structure

```text
User-Managment-API/
│
├── views/
│   ├── home.ejs
│   ├── users.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── delete.ejs
│
├── index.js
├── schema.sql
├── package.json
├── package-lock.json
└── README.md
```

## Database

The application uses a MySQL database named `delta_app` with a `user` table.

### Schema

```sql
CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);
```

| Column | Description |
|---|---|
| `id` | Unique UUID for each user |
| `username` | Unique username |
| `email` | Unique user email |
| `password` | User password |

User records are stored persistently in MySQL rather than in application memory.

## API Routes

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Displays the application home page and user count |
| `GET` | `/user` | Retrieves and displays all users |
| `GET` | `/user/new` | Displays the create-user form |
| `POST` | `/user/new` | Creates a new user |
| `GET` | `/user/:id/edit` | Displays the edit form for a user |
| `PATCH` | `/user/:id` | Updates a user's username |
| `GET` | `/user/:id/delete` | Displays the delete confirmation page |
| `DELETE` | `/user/:id` | Deletes a user |

### Password Verification

The application verifies the user's password before allowing:

- Username updates
- User deletion

This provides a basic layer of protection for modifying and destructive operations.

## CRUD Operations

### Create

A new user is created through:

```text
POST /user/new
```

A UUID is generated for the user and the record is inserted into MySQL.

### Read

All users can be retrieved through:

```text
GET /user
```

The application retrieves user records from MySQL and renders them using EJS.

### Update

A username can be updated through:

```text
PATCH /user/:id
```

The submitted password is verified before the update is performed.

### Delete

A user can be deleted through:

```text
DELETE /user/:id
```

The submitted password is verified before the record is removed from MySQL.

## Method Override

Since standard HTML forms primarily support `GET` and `POST`, the application uses **Method Override** to support `PATCH` and `DELETE` requests.

For example:

```text
POST /user/:id?_method=PATCH
```

is handled by Express as:

```text
PATCH /user/:id
```

Similarly:

```text
POST /user/:id?_method=DELETE
```

is handled as:

```text
DELETE /user/:id
```

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd User-Managment-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure MySQL

Make sure MySQL is installed and running.

Create the database:

```sql
CREATE DATABASE delta_app;
```

Select the database:

```sql
USE delta_app;
```

Run the SQL from `schema.sql` to create the `user` table.

### 4. Configure the database connection

Update the MySQL connection details in `index.js` according to your local MySQL configuration.

The current development configuration uses:

```text
Host: localhost
User: root
Database: delta_app
```

### 5. Start the application

```bash
node index.js
```

The application will run at:

```text
http://localhost:3000
```

## Configuration Note

The current implementation stores database credentials directly in `index.js`.

For a production application, sensitive configuration should be moved to environment variables using a `.env` file and a package such as `dotenv`.

## Security Considerations

This project is a basic implementation and is not production-ready.

Current limitations include:

- Passwords are stored in plain text.
- Database credentials are stored in the source code.
- Some SQL queries use string interpolation instead of parameterized queries.
- No authentication or session management is implemented.
- No password hashing is implemented.
- Server-side input validation is limited.

For production use, the application should use:

- Password hashing with a library such as bcrypt
- Parameterized SQL queries
- Environment variables for credentials
- Proper authentication and authorization
- Input validation and sanitization
- Secure session or token management

## 🤖 AI Assistance & Transparency

AI tools were used during the development of this project.

AI assistance was used for:

- Debugging code and identifying errors
- Understanding Node.js, Express.js, EJS, and MySQL concepts
- Fixing syntax and routing problems
- Reviewing code
- Understanding SQL queries
- Improving project documentation and README structure

The AI-generated suggestions were reviewed and integrated during development.

Therefore, this project is **not claimed to have been developed entirely without AI assistance**.

AI was used as a development and learning assistant while practicing the underlying concepts of **Node.js, Express.js, MySQL, SQL, CRUD operations, EJS, REST-style routing, UUID, and Method Override**.

---



## Author

**Saiyam**

B.Tech Computer Science Engineering Student