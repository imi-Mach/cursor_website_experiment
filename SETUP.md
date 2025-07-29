# Setup Guide

## Prerequisites

Before you can run this project, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**: Go to [https://nodejs.org/](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Run the installer and follow the installation wizard
3. **Verify Installation**: Open a terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

### Alternative Installation Methods

#### Windows (using Chocolatey)
```bash
choco install nodejs
```

#### macOS (using Homebrew)
```bash
brew install node
```

#### Linux (using apt)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Project Setup

Once Node.js is installed, follow these steps:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and go to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Make sure Node.js is properly installed
   - Restart your terminal/command prompt
   - Check if npm is in your PATH

2. **Port 3000 is already in use**
   - The development server will automatically try the next available port
   - Or kill the process using port 3000

3. **Module not found errors**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

### Getting Help

If you encounter any issues:
1. Check the [Node.js documentation](https://nodejs.org/docs/)
2. Search for solutions on [Stack Overflow](https://stackoverflow.com/)
3. Open an issue in this repository

## Next Steps

After setting up the project:
1. Customize the content in the page files
2. Update your personal information
3. Deploy to GitHub Pages
4. Share your portfolio!

Happy coding! 🚀 