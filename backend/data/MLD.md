USER
- user_id (PK)
- firstname
- lastname
- email
- address
- password

ORDER
- order_id (PK)
- order_date
- status
- total_amount
- user_id (FK vers USER)

ORDER_ITEM
- order_item_id (PK)
- quantity
- unit_price
- order_id (FK vers ORDER)
- product_id (FK vers PRODUCT)

PRODUCT
- product_id (PK)
- name
- description
- price
- size
- stock_quantity
