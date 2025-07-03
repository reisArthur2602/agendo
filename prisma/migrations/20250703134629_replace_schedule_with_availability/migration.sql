/*
  Warnings:

  - You are about to drop the `TimeSlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeeklySchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TimeSlot" DROP CONSTRAINT "TimeSlot_weeklyScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "WeeklySchedule" DROP CONSTRAINT "WeeklySchedule_businessId_fkey";

-- DropTable
DROP TABLE "TimeSlot";

-- DropTable
DROP TABLE "WeeklySchedule";

-- CreateTable
CREATE TABLE "Availability" (
    "id" TEXT NOT NULL,
    "day" "Day" NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "businessId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Availability_businessId_idx" ON "Availability"("businessId");

-- CreateIndex
CREATE UNIQUE INDEX "Availability_businessId_day_key" ON "Availability"("businessId", "day");

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;
