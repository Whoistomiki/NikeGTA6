USER: user_id, firstname, lastname, email, address, password
BELONG, 0N ORDER, 1N USER
ORDER: order_id, order_date, status, total_amount, user_id
COMPOSE, 1N ORDER, 0N ORDER_ITEM
ORDER_ITEM: order_item_id, quantity, unit_price, order_id, product_id
INCLUDE, 0N ORDER_ITEM, 1N PRODUCT
PRODUCT: product_id, name, description, price, size, stock_quantity