-- RenameIndex
ALTER TABLE `admin` RENAME INDEX `Admin_Email_key` TO `admin_Email_key`;

-- RenameIndex
ALTER TABLE `admin` RENAME INDEX `Admin_Username_key` TO `admin_Username_key`;

-- RenameIndex
ALTER TABLE `doctor` RENAME INDEX `Doctor_Email_key` TO `doctor_Email_key`;

-- RenameIndex
ALTER TABLE `doctor` RENAME INDEX `Doctor_Username_key` TO `doctor_Username_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_Email_key` TO `user_Email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_Username_key` TO `user_Username_key`;
