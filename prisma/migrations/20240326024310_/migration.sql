-- AlterTable
ALTER TABLE `Company` MODIFY `typeIntern` ENUM('MSIB', 'REGULAR') NOT NULL DEFAULT 'REGULAR',
    MODIFY `typeActivity` ENUM('ONSITE', 'REMOTE', 'HYBRID') NOT NULL DEFAULT 'ONSITE';