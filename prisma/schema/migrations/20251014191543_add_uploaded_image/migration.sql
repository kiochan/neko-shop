-- CreateTable
CREATE TABLE "UploadedImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hashedFilename" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "domain" TEXT NOT NULL,
    "uploadDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "path" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadedImage_hashedFilename_key" ON "UploadedImage"("hashedFilename");

-- CreateIndex
CREATE INDEX "UploadedImage_domain_idx" ON "UploadedImage"("domain");

-- CreateIndex
CREATE INDEX "UploadedImage_uploadDate_idx" ON "UploadedImage"("uploadDate");
