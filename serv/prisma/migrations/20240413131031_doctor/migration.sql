-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `UserType` VARCHAR(191) NOT NULL,
    `Speciality` VARCHAR(191) NOT NULL,
    `PhoneNumber` VARCHAR(191) NOT NULL,
    `ImageUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Username_key`(`Username`),
    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `PhoneNumber` VARCHAR(191) NULL,
    `ImageUrl` VARCHAR(191) NOT NULL DEFAULT '',
    `Speciality` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Doctor_Username_key`(`Username`),
    UNIQUE INDEX `Doctor_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `AppointmentTime` DATETIME(3) NOT NULL,
    `AppointmentDepartment` VARCHAR(191) NULL,
    `doctor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RatingsComments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `review` VARCHAR(191) NULL,
    `imageSrc` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_Username_key`(`Username`),
    UNIQUE INDEX `Admin_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Amount` DECIMAL(65, 30) NOT NULL,
    `PaymentDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(191) NOT NULL,
    `Text` VARCHAR(191) NOT NULL,
    `ImageUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `blogId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `ImageUrl` VARCHAR(191) NULL,
    `Category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
