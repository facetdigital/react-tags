# The Node version that we'll be running for our version of React.
FROM node:10.19.0

# Make sure we get the latest updates for the image
RUN apt-get update

# Install global packages in the non-root user directory
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Make sure NPM is always up to date, then install global NPM packages
RUN npm install npm@latest -g && npm i -g npm-check license-checker

# Setup what is needed to build the image
ARG PROJECT_DIR=/app
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR

ADD package*.json ./

# Set the user to the non-root user so we don't run the container as root which is a security issue
USER node

# Run the application
CMD ["npm", "run", "start"]
