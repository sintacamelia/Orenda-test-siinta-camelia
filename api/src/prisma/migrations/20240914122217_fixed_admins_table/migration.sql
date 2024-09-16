/*
  Warnings:

  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `order_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `phone` on table `admins` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `admins` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `customers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_ibfk_1`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_ibfk_2`;

-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `order_items_product_id_fkey`;

-- AlterTable
ALTER TABLE `admins` MODIFY `phone` VARCHAR(16) NOT NULL,
    MODIFY `address` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `customers` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(16) NOT NULL,
    MODIFY `address` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `order_items` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `product_id` VARCHAR(191) NOT NULL,
    MODIFY `customer_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
