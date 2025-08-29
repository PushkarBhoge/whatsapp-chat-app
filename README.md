# WhatsApp-like Chat Application

A simple chat application built with Express.js and Mongoose, featuring a WhatsApp-inspired interface.

## Features

- Create new chat messages
- View all chat messages
- Edit existing messages
- Delete messages
- Responsive design with WhatsApp-like styling

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **EJS** - Template engine
- **Method Override** - HTTP verb support

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system

4. Initialize the database (optional):
```bash
node init.js
```

5. Start the application:
```bash
node index.js
```

6. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
├── models/
│   └── chat.js          # Chat model schema
├── public/
│   └── style.css        # Styling
├── views/
│   ├── index.ejs        # Main chat view
│   ├── new.ejs          # New message form
│   └── edit.ejs         # Edit message form
├── index.js             # Main application file
├── init.js              # Database initialization
└── package.json         # Dependencies and scripts
```

## Author

Pushkar Bhoge

## License

ISC