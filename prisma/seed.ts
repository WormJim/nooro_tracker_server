import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      {
        title: "Task 1",
        color: "red",
        completed: false,
      },
      {
        title: "Task 2",
        color: "green",
        completed: true,
        completedAt: new Date(),
      },

      {
        title: "Task 3",
        color: "blue",
        completed: false,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
