/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `creationDate` on the `SafetyNotes` table. All the data in the column will be lost.
  - You are about to drop the column `createDate` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,title]` on the table `SafetyNotes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noteTitle` to the `SafetyNotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SafetyNotes_title_key";

-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "creationDate",
ADD COLUMN     "creationAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SafetyNotes" DROP COLUMN "creationDate",
ADD COLUMN     "creationAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "noteTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "createDate",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "SafetyNotes_userId_title_key" ON "SafetyNotes"("userId", "title");
