// model users {
//     id Int @id @default(autoincrement())
//     email String @db.VarChar(50)
//     otp String @db.VarChar(50) @default("0")

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }

//   model brands {
//     id Int @id @default(autoincrement())
//     brandName String @db.VarChar(50)
//     brandImg String @db.VarChar(50)

//     products products[]

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }

//   model categories {
//     id Int @id @default(autoincrement())
//     categoryName String @db.VarChar(50)
//     categoryImg String @db.VarChar(50)

//     products products[]

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }

//   enum productType {
//     New
//     Existing
//   }

//   model products {
//     id Int @id @default(autoincrement())
//     title String @db.VarChar(50)
//     short_des String @db.VarChar(50)
//     price String @db.VarChar(50)
//     discount Int @db.TinyInt
//     discount_price String @db.VarChar(50)
//     image String @db.VarChar(50)
//     stock Int @db.TinyInt
//     star Float
//     remark productType

//     product_sliders product_sliders[]
//     product_details product_details?

//     brand_id Int
//     brands brands @relation(fields: [brand_id], references: [id], onDelete: Restrict, onUpdate: Cascade)

//     category_id Int
//     categories categories @relation(fields: [category_id], references: [id], onDelete: Restrict, onUpdate: Cascade)

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }

//   model product_sliders {
//     id Int @id @default(autoincrement())
//     title String @db.VarChar(50)
//     short_des String @db.VarChar(100)
//     price String @db.VarChar(20)
//     image String @db.VarChar(50)

//     product_id Int
//     products products @relation(fields: [product_id], references: [id], onDelete: Restrict, onUpdate: Cascade)

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }

//   model product_details {
//     id Int @id @default(autoincrement())
//     img1 String @db.VarChar(100)
//     img2 String @db.VarChar(100)
//     img3 String @db.VarChar(100)
//     img4 String @db.VarChar(100)
//     des String @db.LongText
//     color String @db.VarChar(20)
//     size String @db.VarChar(50)

//     product_id Int @unique
//     products products @relation(fields: [product_id], references: [id], onDelete: Restrict, onUpdate: Cascade)

//     createdAt DateTime @default(now()) @db.Timestamp(0)
//     updatedAt DateTime @default(now()) @db.Timestamp(0) @updatedAt
//   }
