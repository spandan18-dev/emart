import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv'; dotenv.config();
import path from 'path';
import debug from 'debug';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import expressSession from 'express-session';

const app = express();
const log = debug("development:app");

// Routes
import ownerrouter from './routes/owner.route.js';
import productrouter from './routes/product.route.js';
import userrouter from './routes/user.route.js';
import indexrouter from './routes/index.route.js';

// .env config
const port = process.env.PORT;
const db_url = process.env.MONGODB_URL;

// DB connection
connectdb(db_url);

// View engine + static
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({
   resave: false,
   saveUninitialized: false,
   secret: process.env.SESSION_KEY,
   cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24
   }
}));
app.use(flash());

// Routes
app.use('/', indexrouter);
app.use('/admin', ownerrouter);
app.use('/users', userrouter);
app.use('/products', productrouter);

// Server start
app.listen(port, () => {
   log(`Server running at http://localhost:${port}`);
});
