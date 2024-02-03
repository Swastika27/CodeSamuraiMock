# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the MongoDB connection string and server port as environment variables
ENV MONGO_URL=mongodb+srv://arpitasamurai:arpitasamurai@samurai.5afjuqn.mongodb.net/?retryWrites=true&w=majority
ENV serverPort=5000

# Make port 5000 available outside the container
EXPOSE 5000

# Define the command to run the application
CMD [ "npm", "start" ]
