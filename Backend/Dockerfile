# Use the latest Node.js image
FROM node:latest

# Set working directory to /src
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose the port your backend listens on (adjust if necessary)
EXPOSE 4000

# Start the backend application (ensure your package.json has a "start" script)
CMD ["npm", "start"]
