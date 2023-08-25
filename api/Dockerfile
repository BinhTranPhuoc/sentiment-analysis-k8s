# Use an official Node.js runtime as the base image
FROM node:latest

ENV SA_LOGIC_API_URL http://localhost:5000

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY ./src .

# Expose the port your app runs on
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
