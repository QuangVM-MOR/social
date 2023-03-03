-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "old" INTEGER NOT NULL DEFAULT 18,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
