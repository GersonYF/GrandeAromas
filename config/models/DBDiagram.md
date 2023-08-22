Table users {
  id integer [primary key]
  name varchar
  email varchar
  password varchar
  role_id integer
  created_at timestamp
  updated_at timestamp
}

Table rol {
  id integer [primary key]
  name varchar
  created_at timestamp
  updated_at timestamp
}

Ref: users.role_id > rol.id

Table coffee_shop {
  id integer [primary key]
  user_contact_id integer
  name varchar
  address varchar
  city varchar
  country varchar
  phone_number varchar
  created_at timestamp
  updated_at timestamp
}

Ref: coffee_shop.user_contact_id > users.id

Table product_category {
  id integer [primary key]
  name varchar
  created_at timestamp
  updated_at timestamp
}

Table products {
  id integer [primary key]
  name varchar
  category_id integer
  description varchar
  quantity varchar
  unit varchar
  price float
  created_at timestamp
  updated_at timestamp
}

Ref: products.category_id > product_category.id

Table product_reviews {
  id integer [primary key]
  user_id integer
  product_id integer
  question varchar
  answer varchar
  stars float
  created_at timestamp
  updated_at timestamp
}

Ref: product_reviews.user_id > users.id
Ref: product_reviews.product_id > products.id

Table product_orders {
  id integer [primary key]
  product_id integer
  order_id integer
  quantity float
  created_at timestamp
  updated_at timestamp
}

Table orders {
  id integer [primary key]
  user_id integer
  shopping_address_id integer
  payment_address_id integer
  total_price float
  order_status varchar
  created_at timestamp
  updated_at timestamp
}

Ref: product_orders.product_id > products.id
Ref: product_orders.order_id > orders.id

Table address {
  id integer [primary key]
  name varchar
  address varchar
  neighborhood varchar
  city varchar
  country varchar
  department varchar
  zip_code varchar
  created_at timestamp
  updated_at timestamp
}

Ref: orders.shopping_address_id > address.id
Ref: orders.payment_address_id > address.id

Table suscriptions {
  id integer [primary key]
  user_id integer
  name varchar
  discount float
  discount_unit varchar
  start_date timestamp
  end_date timestamp
  created_at timestamp
  updated_at timestamp
}

Table product_suscriptions {
  id integer [primary key]
  product_id integer
  suscription_id integer
}

Ref: product_suscriptions.product_id > products.id
Ref: product_suscriptions.suscription_id > suscriptions.id

