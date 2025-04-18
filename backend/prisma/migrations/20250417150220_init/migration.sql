/*
  Warnings:

  - Added the required column `postId` to the `complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `complaint` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `complainType` on the `complaint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "complaint" ADD COLUMN     "postId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "complainType",
ADD COLUMN     "complainType" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "complaintType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "complaintType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_complainType_fkey" FOREIGN KEY ("complainType") REFERENCES "complaintType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
