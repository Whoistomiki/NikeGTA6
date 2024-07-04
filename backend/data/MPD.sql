-- Création de la table USER
CREATE TABLE "USERS" (
    user_id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT UNIQUE NOT NULL,
    user_password TEXT NOT NULL
);

-- Création de la table PRODUCT
CREATE TABLE "PRODUCTS" (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_description TEXT,
    product_price NUMERIC(10, 2),
    product_size VARCHAR(10),
    stock_quantity INT
);

-- Création de la table ORDER
CREATE TABLE "ORDERS" (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    order_status VARCHAR(50),
    total_amount NUMERIC(10, 2),
    user_id INT REFERENCES "USER"(user_id)
);

-- Création de la table ORDER_ITEM
CREATE TABLE "ORDER_ITEMS" (
    order_item_id SERIAL PRIMARY KEY,
    quantity INT,
    unit_price NUMERIC(10, 2),
    order_id INT REFERENCES "ORDER"(order_id),
    product_id INT REFERENCES "PRODUCT"(product_id)
);
