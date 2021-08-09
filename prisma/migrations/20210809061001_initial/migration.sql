/*
  Warnings:

  - A unique constraint covering the columns `[subject]` on the table `applications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subject` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "applications" ADD COLUMN     "subject" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "applications.subject_unique" ON "applications"("subject");
