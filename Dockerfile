# For more information, please refer to https://aka.ms/vscode-docker-python
FROM node:14.17.1

# Create app directory
WORKDIR /recipeapi


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .
COPY .env .env

ENV PORT=8080
EXPOSE 8080
CMD [ "node", "index.js" ]