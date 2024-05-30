
FROM node:14

WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json /app/package.json
RUN npm install

# Copy the rest of the application code
COPY . /app

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "server.js"]
