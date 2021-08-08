/*
  Warnings:

  - You are about to drop the `job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_roleId_fkey";

-- DropTable
DROP TABLE "job";

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "backend" BOOLEAN NOT NULL DEFAULT false,
    "frontend" BOOLEAN NOT NULL DEFAULT false,
    "fullstack" BOOLEAN NOT NULL DEFAULT false,
    "webdevelop" BOOLEAN NOT NULL DEFAULT false,
    "internship" BOOLEAN NOT NULL DEFAULT false,
    "trainee" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "others" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "applications" ADD FOREIGN KEY ("roleId") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
