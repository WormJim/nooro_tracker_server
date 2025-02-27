-- AlterTable
ALTER TABLE `Task` ADD COLUMN `completedAt` DATETIME(3) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL;
