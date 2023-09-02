-- Insert into product_category
INSERT INTO "ProductCategories"(name, "createdAt", "updatedAt") VALUES
('Coffee', NOW(), NOW()),
('Tea', NOW(), NOW());

-- Insert in2to products
INSERT INTO "Products"(name, category_id, description, quantity, unit, price, "createdAt", "updatedAt") VALUES
('Espresso', 1, 'Strong coffee', '100', 'grams', 2.50, NOW(), NOW()),
('Green Tea', 2, 'Refreshing tea', '50', 'grams', 1.50, NOW(), NOW());

-- Insert into coffee_shop
INSERT INTO "CoffeeShops"(user_contact_id, name, address, city, country, phone_number, "createdAt", "updatedAt") VALUES
(1, 'Johns Coffee', '123 Coffee St', 'Coffee City', 'CoffeeLand', '123-456-7890', NOW(), NOW());

-- Insert into address
INSERT INTO "Addresses"("userId", name, address, neighborhood, city, country, department, zip_code, "createdAt", "updatedAt") VALUES
(1, 'John Home', '123 Coffee St', 'Downtown', 'Coffee City', 'CoffeeLand', 'Coffee Dept.', '12345', NOW(), NOW());

-- Insert into orders
INSERT INTO "Orders"(user_id, shopping_address_id, payment_address_id, total_price, order_status, "createdAt", "updatedAt") VALUES
(1, 1, 1, 5.00, 'Shipped', NOW(), NOW());

-- Insert into product_orders
INSERT INTO "ProductOrders"(product_id, order_id, quantity, "createdAt", "updatedAt") VALUES
(1, 1, 1, NOW(), NOW());

-- Insert into product_reviews
INSERT INTO "ProductReviews"(user_id, product_id, comment, stars, "createdAt", "updatedAt") VALUES
(1, 1, 'Is a strong coffee!!!', 5, NOW(), NOW());

-- Insert into suscriptions
INSERT INTO "Subscriptions"(user_id, name, discount, discount_unit, start_date, end_date, "createdAt", "updatedAt") VALUES
(1, 'Coffee Monthly', 10.0, '%', NOW(), NOW() + INTERVAL '1 MONTH', NOW(), NOW());


-- Insert into product_suscriptions
INSERT INTO "ProductSubscriptions"(product_id, subscription_id, "createdAt", "updatedAt") VALUES
(1, 1, NOW(), NOW());
