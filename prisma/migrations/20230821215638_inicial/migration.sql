-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT,
    "clave" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "precioCompra" DOUBLE PRECISION NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "noDocumento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT,
    "nota" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidosItems" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "prodId" INTEGER NOT NULL,
    "fech_crea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fech_act" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidosItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_correo_key" ON "clientes"("correo");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidosItems" ADD CONSTRAINT "pedidosItems_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidosItems" ADD CONSTRAINT "pedidosItems_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
