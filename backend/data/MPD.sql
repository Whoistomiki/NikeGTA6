-- Création de la table USER
CREATE TABLE "USER" (
    user_id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT UNIQUE NOT NULL,
    address TEXT,
    password TEXT NOT NULL
);

-- Création de la table PRODUCT
CREATE TABLE "PRODUCT" (
    product_id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price NUMERIC(10, 2),
    size VARCHAR(10),
    stock_quantity INT
);

-- Création de la table ORDER
CREATE TABLE "ORDER" (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    status VARCHAR(50),
    total_amount NUMERIC(10, 2),
    user_id INT REFERENCES "USER"(user_id)
);

-- Création de la table ORDER_ITEM
CREATE TABLE "ORDER_ITEM" (
    order_item_id SERIAL PRIMARY KEY,
    quantity INT,
    unit_price NUMERIC(10, 2),
    order_id INT REFERENCES "ORDER"(order_id),
    product_id INT REFERENCES "PRODUCT"(product_id)
);
