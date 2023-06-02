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

CREATE TABLE shoes(
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    weather TEXT
);

CREATE TABLE collections(
    id SERIAL PRIMARY KEY,
    name TEXT,
    weather TEXT,
    user_id INT,
    top_id INT,
    bottom_id INT,
    shoe_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
    FOREIGN KEY(top_id) REFERENCES users(id)
    FOREIGN KEY(bottom_id) REFERENCES users(id)
    FOREIGN KEY(shoe_id) REFERENCES users(id)
);

INSERT INTO TABLE tops (name, image_url, weather)
VALUES
    ('T-shirt','https://t4.ftcdn.net/jpg/05/22/48/13/240_F_522481379_o8We8BUuVJpFC7EWUTMsUB7VrulXjnDt.jpg','summer'),
    ('Black shirt','https://t3.ftcdn.net/jpg/05/81/80/94/240_F_581809479_X1mN2kMAaUDE6BAx1SZtgsqHed1DhA8s.jpg','summer'),
    ('Shirt','https://t4.ftcdn.net/jpg/05/40/32/87/240_F_540328785_wykQ4Jl9Vr6Fz88keNTOJ4Bt2lgyYt4q.jpg','moderate'),
    ('Shirt','https://t4.ftcdn.net/jpg/01/09/82/13/240_F_109821352_VdbmmMIOZioGlX3RkD4gh0WDlT28oCRA.jpg','moderate'),
    ('Jumper','https://t4.ftcdn.net/jpg/04/70/94/19/240_F_470941998_NKV7Wv9JT0IiwzUhxqT9pqn1Xr9oi7WX.jpg', 'winter'),
    ('Sweater','https://t4.ftcdn.net/jpg/02/32/17/05/240_F_232170598_2jokGKCxP4t4qbu8IWvF7d19eT0S7GV0.jpg','winter'),
    ('Jacket','https://t4.ftcdn.net/jpg/01/97/31/63/240_F_197316393_pwjvuoJrMY1dvYAhjuvHCuTbnteeQ9j6.jpg','winter'),
    ('Puffer','https://t4.ftcdn.net/jpg/02/36/49/63/240_F_236496348_Pejh1LNDLjsmyDYngfli9n8SNRAARevg.jpg','winter'),
    ('Denim Jacket','https://t4.ftcdn.net/jpg/00/93/71/37/240_F_93713755_cO7yC331gdqbPImq7T2Nnw9P2BRs8xDb.jpg','winter');
    
INSERT INTO TABLE bottoms (name, image_url, weather)
VALUES
    ('shorts','https://t4.ftcdn.net/jpg/02/04/86/01/240_F_204860118_JLol6JHaf1K8YiRTrxrl3Zdtac1YzLx9.jpg','summer'),
    ('Pants','https://t3.ftcdn.net/jpg/01/31/00/60/240_F_131006084_xvDsbZtMf9jOqWNd8OEVeaMtmzB5ziFm.jpg','moderate'),
    ('Jeans','https://t3.ftcdn.net/jpg/04/83/25/50/240_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg','winter');

INSERT INTO TABLE shoes (name, image_url, weather)
VALUES
    ('sandals','https://t4.ftcdn.net/jpg/04/23/36/11/240_F_423361167_Z26DgSr9YYRRondPHAu26DU0o1nfvwSL.jpg','summer'),
    ('sandals','https://t4.ftcdn.net/jpg/00/86/74/55/240_F_86745578_yl5Izr6gsXD3cDFU4jk27rZGFg5zK9T8.jpg','summer'),
    ('shoes','https://t4.ftcdn.net/jpg/00/65/48/11/240_F_65481195_VbssfvvCCR5LuuSRrpHw9JWMjZrFf2m1.jpg','moderate'),
    ('shoes','https://t3.ftcdn.net/jpg/01/55/37/98/240_F_155379822_DoDNtUFgHIePu4CqqTiOjVivJDx6eQMi.jpg','moderate'),
    ('Boots','https://t3.ftcdn.net/jpg/03/83/46/62/240_F_383466261_LfLyDV1qlBVI80wOLF4MxJH0HPXlLu4X.jpg','winter');
    ('Boots','https://t3.ftcdn.net/jpg/00/98/33/16/240_F_98331626_bkP5clniyUjIL4eoAtZoh1bIIe6XxnGP.jpg','winter');
    

