-- CreateTable
CREATE TABLE "app_status" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "pending" BOOLEAN NOT NULL DEFAULT false,
    "rejected" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "backend" BOOLEAN NOT NULL DEFAULT false,
    "frontend" BOOLEAN NOT NULL DEFAULT false,
    "fullstack" BOOLEAN NOT NULL DEFAULT false,
    "webdevelop" BOOLEAN NOT NULL DEFAULT false,
    "intership" BOOLEAN NOT NULL DEFAULT false,
    "trainee" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "firmId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "cover_letter" TEXT NOT NULL,
    "resume" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "web" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "applications" ADD FOREIGN KEY ("stateId") REFERENCES "app_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD FOREIGN KEY ("roleId") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD FOREIGN KEY ("firmId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
