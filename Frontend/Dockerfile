# Use the latest Node.js image
FROM node:latest

# Set working directory to /src
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application (this will create a build or dist folder; adjust if needed)
RUN npm run build

# Install a simple static server to serve the built files
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5173

# Serve the built files (adjust the folder if your output directory is different)
CMD ["serve", "-s", "dist", "-l", "5173"]
