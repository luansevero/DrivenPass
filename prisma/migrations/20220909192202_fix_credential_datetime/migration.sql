-- AlterTable
ALTER TABLE "Credentials" ALTER COLUMN "creationDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "creationDate" SET DATA TYPE TIMESTAMP(3);
