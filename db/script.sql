CREATE SCHEMA IF NOT EXISTS "jobs" ;

CREATE TABLE "jobs"."applications" (
  "id" SERIAL PRIMARY KEY,
  "stateId" int NOT NULL,
  "position" int NOT NULL,
  "company" int NOT NULL,
  "created_at" date DEFAULT (now()),
  "updated_at" date,
  "coverLetter" varchar(255),
  "resume" varchar(255)
);

CREATE TABLE "jobs"."app_status" (
  "id" SERIAL PRIMARY KEY,
  "state" varchar(25) UNIQUE NOT NULL,
  "active" Boolean NOT NULL DEFAULT false,
  "pending" Boolean NOT NULL DEFAULT false,
  "rejected" Boolean NOT NULL DEFAULT false
);

create table "jobs"."jobs" (
  "id" SERIAL primary key,
  "type" varchar(25) unique not null,
  "backend" Boolean not null default false,
  "frontend" Boolean not null default false,
  "fullstack" Boolean not null default false,
  "webdevelop" Boolean not null default false,
  "intership" Boolean not null default false,
  "trainee" Boolean not null default false,
  "marketing" Boolean not null default false,
  "others" Boolean not null default false
);

CREATE TABLE "jobs"."company" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(50),
  "sector" varchar(100),
  "contact" varchar(100),
  "web" varchar(100),
  "email" varchar(100),
  "phone" Int,
  "description" varchar(250)
);

ALTER TABLE "jobs"."applications" ADD FOREIGN KEY ("stateId") REFERENCES "jobs"."app_status" ("id");

ALTER TABLE "jobs"."applications" ADD FOREIGN KEY ("position") REFERENCES "jobs"."jobs" ("id");

ALTER TABLE "jobs"."applications" ADD FOREIGN KEY ("company") REFERENCES "jobs"."company" ("id");