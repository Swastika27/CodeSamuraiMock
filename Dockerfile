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
ENV MONGO_URL=mongodb+srv://Ans2003:a2003ns@ans2003.qp6dlxl.mongodb.net/?retryWrites=true&w=majority
ENV serverPort=8000

# Make port 5000 available outside the container
EXPOSE 8000

# Define the command to run the application
CMD [ "npm", "start" ]
