FROM node:18-alpine AS builder-node
WORKDIR /
COPY . /
RUN npm install
ENV PORT 80
EXPOSE 80
CMD ["node", "index.js"] 
