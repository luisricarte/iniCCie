/*
  Warnings:

  - The primary key for the `AcademicOpportunities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descricao` on the `AcademicOpportunities` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `AcademicOpportunities` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `AcademicOpportunities` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `AcademicOpportunities` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Candidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `opportunitiesId` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `description` to the `AcademicOpportunities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `AcademicOpportunities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `AcademicOpportunities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AcademicOpportunities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "AcademicOpportunities_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AcademicOpportunities" ("id", "status", "type") SELECT "id", "status", "type" FROM "AcademicOpportunities";
DROP TABLE "AcademicOpportunities";
ALTER TABLE "new_AcademicOpportunities" RENAME TO "AcademicOpportunities";
CREATE TABLE "new_Candidate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "opportunitiesId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "data_candidatura" DATETIME NOT NULL,
    CONSTRAINT "Candidate_opportunitiesId_fkey" FOREIGN KEY ("opportunitiesId") REFERENCES "AcademicOpportunities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Candidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Candidate" ("data_candidatura", "id", "opportunitiesId", "userId") SELECT "data_candidatura", "id", "opportunitiesId", "userId" FROM "Candidate";
DROP TABLE "Candidate";
ALTER TABLE "new_Candidate" RENAME TO "Candidate";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name", "password", "type", "updatedAt") SELECT "createdAt", "email", "id", "name", "password", "type", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
