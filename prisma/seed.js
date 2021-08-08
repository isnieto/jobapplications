const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app_status = [
  {
    id: 1,
    state: "active",
    active: true,
    pending: false,
    rejected: false,
  },
  {
    id: 2,
    state: "pending",
    active: false,
    pending: true,
    rejected: false,
  },
  {
    id: 3,
    state: "rejected",
    active: false,
    pending: false,
    rejected: true,
  },
];

const jobs = [
  {
    id: 1,
    type: "backend",
    backend: true,
    frontend: false,
    fullstack: false,
    webdevelop: false,
    intership: false,
    trainee: false,
    marketing: false,
    others: false,
  },
  {
    id: 2,
    type: "frontend",
    backend: false,
    frontend: true,
    fullstack: false,
    webdevelop: false,
    intership: false,
    trainee: false,
    marketing: false,
    others: false,
  },
  {
    id: 3,
    type: "fullstack",
    backend: false,
    frontend: false,
    fullstack: true,
    webdevelop: false,
    intership: false,
    trainee: false,
    marketing: false,
    others: false,
  },
  {
    id: 4,
    type: "webdevelop",
    backend: false,
    frontend: false,
    fullstack: false,
    webdevelop: true,
    intership: false,
    trainee: false,
    marketing: false,
    others: false,
  },
  {
    id: 5,
    type: "internship",
    backend: false,
    frontend: false,
    fullstack: false,
    webdevelop: false,
    internship: true,
    trainee: false,
    marketing: false,
    others: false,
  },
  {
    id: 6,
    type: "trainee",
    backend: false,
    frontend: false,
    fullstack: false,
    webdevelop: false,
    intership: false,
    trainee: true,
    marketing: false,
    others: false,
  },
  {
    id: 7,
    type: "marketing",
    backend: false,
    frontend: false,
    fullstack: false,
    webdevelop: false,
    intership: false,
    trainee: false,
    marketing: true,
    others: false,
  },
  {
    id: 8,
    type: "others",
    backend: false,
    frontend: false,
    fullstack: false,
    webdevelop: false,
    intership: false,
    trainee: false,
    marketing: false,
    others: true,
  },
];
async function main() {
  for (let i = 0; i < app_status.length; i++) {
    const status = app_status[i];
    await prisma.app_status.upsert({
      where: { id: status.id },
      update: {},
      create: {
        ...status,
      },
    });
  }
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    await prisma.jobs.upsert({
      where: { id: job.id },
      update: {},
      create: {
        ...job,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
