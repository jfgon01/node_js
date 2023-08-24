/*
  Warnings:

  - You are about to drop the column `nombres` on the `categorias` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `categorias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteId` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productoId` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "nombres",
ADD COLUMN     "nombre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "clienteId" INTEGER NOT NULL,
ADD COLUMN     "productoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
