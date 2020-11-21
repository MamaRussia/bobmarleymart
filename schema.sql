DROP database if exists bobmarleymart;
create database bobmarleymart;
use bobmarleymart;
create table products (
    item_id INT AUTO_INCREMENT not null,
    strain_name Varchar(45) not null,
    strain_type varchar(45) not null,
    strain_genetics varchar(45) not null,
    price decimal(10, 2) not null,
    stock_quantity int(10) not null,
    primary key(item_id)
);
select *
from products;
insert into products(
        strain_name,
        strain_type,
        strain_genetics,
        price,
        stock_quantity
    )
values(
        "Larry OG",
        "Indica",
        "OG Kush & SFV OG Kush",
        54.33,
        125
    ),
    ("Pure OG", "Indica", "SFV OG Kush", 54.33, 56),
    ("OG Kush", "Hybrid", "Hindu Kush", 54.33, 225),
    (
        "Jack Herer",
        "Sativa",
        "Shiva Skunk & Haze",
        54.33,
        75
    ),
    (
        "Cherry Pie",
        "Hybrid",
        "Granddaddy Purple & Durban Poison",
        54.33,
        5
    ),
    (
        "Durban Poison",
        "Sativa",
        "Durban Poison",
        54.33,
        186
    ),
    (
        "Runtz",
        "Hybrid",
        "Zkittlez & Gelato",
        54.33,
        35
    ),
    (
        "Snowcap",
        "Hybrid",
        "Snow White & Cat Piss",
        54.33,
        9
    ),
    (
        "MAC",
        "Hybrid",
        "Alien Cookies & Starfighter",
        54.33,
        300
    ),
    (
        "Blue Dream",
        "Sativa",
        "Blueberry & Haze",
        54.33,
        11
    );