/*
  Warnings:

  - You are about to drop the column `creationAt` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `creationAt` on the `SafetyNotes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "creationAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SafetyNotes" DROP COLUMN "creationAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
