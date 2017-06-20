psql postgres

CREATE DATABASE grocery_store;

-- NAME PRICE SECTION

CREATE TABLE grocery_items(
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  section TEXT
);

CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name1 TEXT,
  name2 TEXT
);


CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  orderDate TIMESTAMP
);
