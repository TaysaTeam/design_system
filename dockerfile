FROM node:18

WORKDIR /app
RUN apt-get update && apt-get install -y xdg-utils
COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install -g storybook

COPY . .

RUN npm run build-storybook

CMD ["npm", "run", "storybook"]
