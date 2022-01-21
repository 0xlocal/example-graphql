# Example GraphQL using NestJS and Apollo Server

GraphQL API using NestJS and Apollo Server Using Code First / Resolver First approach.

## upgrade yarn v1 to yarn v2

Go to terminal and go inside project folder, then run:

```bash
 $ yarn set version berry
```

after that .yarnrc.yml will appear on project file.
add `nodeLinker: node-modules` on `.yarnrc.yml`.

## Dependencies needed

For create `GraphQL` using `NestJS`, we need several dependencies. Here the dependencies that we needed.

```bash
$ yarn add @nestjs/graphql graphql@^15 graphql-tools apollo-server-express
```

Why should be `graphql@^15` ? Here the [answer](https://stackoverflow.com/questions/69778679/nestjs-expected-undefined-to-be-a-graphql-schema).

For database connection, we used `TypeORM` as ORM. Here the dependencies for database:

```bash
$ yarn add @nestjs/typeorm typeorm pg
```

and for validation:

```bash
$ yarn add class-validator class-transformer
```

## Installation

```bash
$ yarn install
```

## Migrations

Before running migrations, you need to provide typeorm config in `ormconfig.json`.

<details>
  <summary>Example ormconfig.json</summary>
  
  ```javascript
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "",
    "database": "",
    "entities": ["src/modules/**/*.entity.ts"],
    "migrations": ["src/migrations/**/*.ts"],
    "cli": {
        "migrationsDir": "src/migrations"
    }
}
  ```
</details>

## Related source to know more about GraphQL

[GraphQL Documentation](https://graphql.org/learn/)

[GraphQL using NestJS Documentation](https://docs.nestjs.com/graphql/quick-start)

[Code first vs Schema first development in GraphQL](https://blog.logrocket.com/code-first-vs-schema-first-development-graphql/)

[Schema first sample code](https://github.com/nestjs/nest/tree/master/sample/12-graphql-schema-first)

[Code first sample codes](https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first)
