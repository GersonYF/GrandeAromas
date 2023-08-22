-- Insert into rol
INSERT INTO rol(name, created_at, updated_at) VALUES 
('Admin', NOW(), NOW()),
('User', NOW(), NOW());

-- Insert into product_category
INSERT INTO product_category(name, created_at, updated_at) VALUES
('Coffee', NOW(), NOW()),
('Tea', NOW(), NOW());

-- Insert into products
INSERT INTO products(name, category_id, description, quantity, unit, price, created_at, updated_at) VALUES
('Espresso', 1, 'Strong coffee', '100', 'grams', 2.50, NOW(), NOW()),
('Green Tea', 2, 'Refreshing tea', '50', 'grams', 1.50, NOW(), NOW());

-- Insert into coffee_shop
INSERT INTO coffee_shop(user_contact_id, name, address, city, country, phone_number, created_at, updated_at) VALUES
(1, 'Johns Coffee', '123 Coffee St', 'Coffee City', 'CoffeeLand', '123-456-7890', NOW(), NOW());

-- Insert into address
INSERT INTO address(user_id, name, address, neighborhood, city, country, department, zip_code, created_at, updated_at) VALUES
(1, 'John Home', '123 Coffee St', 'Downtown', 'Coffee City', 'CoffeeLand', 'Coffee Dept.', '12345', NOW(), NOW());

-- Insert into orders
INSERT INTO orders(user_id, shopping_address_id, payment_address_id, total_price, order_status, created_at, updated_at) VALUES
(1, 1, 1, 5.00, 'Shipped', NOW(), NOW());

-- Insert into product_orders
INSERT INTO product_orders(product_id, order_id, quantity, created_at, updated_at) VALUES
(1, 1, 1, NOW(), NOW());

-- Insert into product_reviews
INSERT INTO product_reviews(user_id, product_id, question, answer, stars, created_at, updated_at) VALUES
(1, 1, 'Is this coffee strong?', 'Yes, it is.', 5, NOW(), NOW());

-- Insert into suscriptions
INSERT INTO suscriptions(user_id, name, discount, discount_unit, start_date, end_date, created_at, updated_at) VALUES
(1, 'Coffee Monthly', 10.0, '%', NOW(), DATE_ADD(NOW(), INTERVAL 1 MONTH), NOW(), NOW());

-- Insert into product_suscriptions
INSERT INTO product_suscriptions(product_id, suscription_id) VALUES
(1, 1);
