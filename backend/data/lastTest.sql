BEGIN;

-- Suppression et réinitialisation des séquences
TRUNCATE "USER", "PRODUCT", "ORDER", "ORDER_ITEM" RESTART IDENTITY CASCADE;

-- Insertion des utilisateurs
INSERT INTO "USER"("user_id", "firstname", "lastname", "email", "password")
VALUES
    (1, 'Jean', 'Bon1', 'test@gmail.com', 'test1'),
    (2, 'Jean', 'Bon2', 'test2@gmail.com', 'test2'),
    (3, 'Jean', 'Bon3', 'test3@gmail.com', 'test3'),
    (4, 'Jean', 'Bon4', 'test4@gmail.com', 'test4');

-- Insertion des produits (corrigée)
INSERT INTO "PRODUCT"("product_id", "name", "description", "price", "size", "stock_quantity")
VALUES
    (1, 'Tshirt futuriste GTA', 'Un tshirt de compression', 900, 'S', 3),
    (2, 'Tshirt futuriste GTA', 'Un tshirt de compression', 900, 'M', 3),
    (3, 'Tshirt futuriste GTA', 'Un tshirt de compression', 900, 'L', 3),
    (4, 'Haut de compression GTA', 'Un haut de compression futuriste', 1400, 'M', 3),
    (5, 'Haut de compression GTA', 'Un haut de compression futuriste', 1400, 'L', 3),
    (6, 'Haut de compression GTA', 'Un haut de compression futuriste', 1400, 'XL', 3),
    (7, 'Bas de compression GTA', 'Un bas de compression futuriste', 1700, 'M', 3),
    (8, 'Bas de compression GTA', 'Un bas de compression futuriste', 1700, 'L', 3),
    (9, 'Bas de compression GTA', 'Un bas de compression futuriste', 1700, 'XL', 3);

-- Insertion des commandes
INSERT INTO "ORDER"("order_id", "order_date", "status", "total_amount")
VALUES
    (1, '2024-07-02', 'En cours', 900),
    (2, '2024-07-02', 'En cours', 1400),
    (3, '2024-07-02', 'En cours', 1700);

-- Insertion des éléments de commande
INSERT INTO "ORDER_ITEM"("order_item_id", "order_id", "product_id", "quantity", "unit_price")
VALUES
    (1, 1, 1, 1, 900),
    (2, 2, 4, 1, 1400),
    (3, 3, 7, 1, 1700);

COMMIT;
