FROM node:12.13.0 as build-deps
WORKDIR /app
COPY . ./
RUN npm install --silent
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# how to run
# docker run -p 8080:80 bhodge/superheroes:latest
# localhost 8080