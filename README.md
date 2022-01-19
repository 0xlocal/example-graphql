# Example GraphQL

## GraphQL example using NestJS and Apollo Server

---

### upgrade yarn v1 to yarn v2

Go to terminal and go inside project folder, then run:

> $ yarn set version berry

after that .yarnrc.yml will appear on project file.
add `nodeLinker: node-modules` on `.yarnrc.yml`.

### Dependencies needed

For create `GraphQL` using `NestJS`, we need several dependencies. Here the dependencies that we needed.

> $ yarn add @nestjs/graphql graphql@^15 graphql-tools apollo-server-express

> $ npm install @nestjs/graphql graphql@^15 graphql-tools apollo-server-express

Why should be `graphql@^15` ? Here the [answer](https://stackoverflow.com/questions/69778679/nestjs-expected-undefined-to-be-a-graphql-schema).

For database connection, we used `TypeORM` as ORM. Here the dependencies for database:

> $ yarn add @nestjs/typeorm typeorm pg

> $ npm install @nestjs/typeorm typeorm pg
