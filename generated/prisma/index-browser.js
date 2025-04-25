
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.ImagesScalarFieldEnum = {
  id: 'id',
  file_id: 'file_id',
  url: 'url',
  shopId: 'shopId',
  userId: 'userId',
  productsId: 'productsId'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  following: 'following',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopReviewsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  rating: 'rating',
  reviews: 'reviews',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  shopsId: 'shopsId'
};

exports.Prisma.ShopsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  bio: 'bio',
  category: 'category',
  coverBanner: 'coverBanner',
  address: 'address',
  opening_hours: 'opening_hours',
  website: 'website',
  socialLinks: 'socialLinks',
  rating: 'rating',
  sellerId: 'sellerId',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.SellersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone_number: 'phone_number',
  country: 'country',
  password: 'password',
  stripeId: 'stripeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Site_configScalarFieldEnum = {
  id: 'id',
  categories: 'categories',
  subCategories: 'subCategories'
};

exports.Prisma.Discount_codesScalarFieldEnum = {
  id: 'id',
  public_name: 'public_name',
  discountType: 'discountType',
  discountValue: 'discountValue',
  discountCode: 'discountCode',
  sellerId: 'sellerId',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  category: 'category',
  subCategory: 'subCategory',
  short_description: 'short_description',
  detailed_description: 'detailed_description',
  video_url: 'video_url',
  tags: 'tags',
  brand: 'brand',
  colors: 'colors',
  sizes: 'sizes',
  starting_date: 'starting_date',
  ending_date: 'ending_date',
  stock: 'stock',
  sale_price: 'sale_price',
  regular_price: 'regular_price',
  ratings: 'ratings',
  warranty: 'warranty',
  custom_specifications: 'custom_specifications',
  custom_properties: 'custom_properties',
  isDeleted: 'isDeleted',
  deletedAt: 'deletedAt',
  cash_on_delivery: 'cash_on_delivery',
  discount_codes: 'discount_codes',
  status: 'status',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  shopId: 'shopId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.productStatus = exports.$Enums.productStatus = {
  Active: 'Active',
  Pending: 'Pending',
  Draft: 'Draft'
};

exports.Prisma.ModelName = {
  images: 'images',
  users: 'users',
  shopReviews: 'shopReviews',
  shops: 'shops',
  sellers: 'sellers',
  site_config: 'site_config',
  discount_codes: 'discount_codes',
  products: 'products'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
