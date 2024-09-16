-- Create Table
CREATE TABLE `admins` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(16),
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100),
    PRIMARY KEY (`id`)
);

-- Create Table
CREATE TABLE `customers` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(16),
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `address` VARCHAR(100),
    PRIMARY KEY (`id`)
);

-- Create Table
CREATE TABLE `products` (
    `id` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `unit` INT NOT NULL,
    `price` INT NOT NULL,
    PRIMARY KEY (`id`)
);

-- Create Table
CREATE TABLE `order_items` (
    `id` VARCHAR(36) NOT NULL,
    `product_id` VARCHAR(36) NOT NULL,
    `customer_id` VARCHAR(36) NOT NULL,
    `unit` INT NOT NULL,
    `price` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`)
);

-- Create Unique Indexes
CREATE UNIQUE INDEX `admins_email_key` ON `admins`(`email`);
CREATE UNIQUE INDEX `customers_email_key` ON `customers`(`email`);

-- Add Foreign Key Constraints
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
