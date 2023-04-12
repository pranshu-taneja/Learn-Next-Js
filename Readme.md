# Learnings from My Next Js Practices. 📚 📝
## *Go Through the whole Project for better Practical understanding*

- Best practice for naming convention is
  - Components name goes with first capital letter
  - For all other folders keep the small letters naming filenames
- For maintaining CSS, Containerization techniques seems working pretty well.
- Do make sure you name all the export components (not folder name) or pages names in their code as first capital letter to avoid any error later in the buildtime.
- Using Meta Components can be really helpful for creating meta description and title each time. They provide really good SEO. Keep them a part of good practice. And use Meta component each time dynamically.

```javascript
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
```

- **Build And Export**: There is a command in pack.json (`"build": "next build && next export"`). By running this command your project will start building itself for production testing when running locally uk. It will create two folder named as `.next` and `out` in your project root directory. The `.next` folder will contain all the build files and the `out` folder will contain all the static files which will be used for production deployment.
- **SERVE**: You can actually use it to test on local enviourment that the site will build properly on the production server or not. Just use `serve` package to serve the static files from the `out` folder. Its awesome!!

```json
{ "command": "serve -s out" }
```

- **ORM**: Object Relational Mapping is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. In other words, it’s a way for an object-oriented programming language to communicate with a relational database. Example: Prisma, TypeORM, Sequelize, Mongoose, etc.

- **Prisma** : It is a ORM tool database. It is used to connect the database with the application. and apollo is set of tools to connect the graphql with the application.
- **GrpahQL**: GraphQL is a query language for APIs that allows you to specify exactly what data you need and get back only that data, while REST API follows a fixed structure for all requests and responses, which can result in fetching more data than needed.
  Example:

## `GraphQL Example: `

```javascript
query {
  user(id: "123") {
    name
    posts {
      title
      body
    }
  }
}
```

## `REST API Example: `

```javascript
GET / users / 123;
GET / users / 123 / posts;
```
