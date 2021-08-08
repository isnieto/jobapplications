/*
  Warnings:

  - You are about to drop the column `intership` on the `job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "job" DROP COLUMN "intership",
ADD COLUMN     "internship" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "others" BOOLEAN NOT NULL DEFAULT false;
