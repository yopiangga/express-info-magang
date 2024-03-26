/*
  Warnings:

  - You are about to drop the column `reatedAt` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Company` DROP FOREIGN KEY `Company_roleInternId_fkey`;

-- AlterTable
ALTER TABLE `Company` DROP COLUMN `reatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `roleInternId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_roleInternId_fkey` FOREIGN KEY (`roleInternId`) REFERENCES `RoleIntern`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
