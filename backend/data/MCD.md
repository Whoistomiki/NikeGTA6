USERS: user_id, firstname, lastname, email, user_password
BELONG, 0N ORDER, 1N USER
ORDERS: order_id, order_date, order_status, total_amount, user_id
COMPOSE, 1N ORDER, 0N ORDER_ITEM
ORDER_ITEM: order_item_id, quantity, unit_price, order_id, product_id
INCLUDE, 0N ORDER_ITEM, 1N PRODUCT
PRODUCTS: product_id, product_name, product_description, product_price, product_size, stock_quantity