CREATE DATABASE weather_app;
\c weather_app

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE tops(
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    weather TEXT
);

CREATE TABLE bottoms(
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    weather TEXT
);

CREATE TABLE accessories(
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    weather TEXT
);

CREATE TABLE shoes(
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    weather TEXT
);

CREATE TABLE collections(
    id SERIAL PRIMARY KEY,
    user_id INT,
    top_id INT,
    bottom_id INT,
    accessory_id INT,
    shoe_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
)