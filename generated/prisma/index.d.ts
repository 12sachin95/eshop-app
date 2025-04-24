
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model shopReviews
 * 
 */
export type shopReviews = $Result.DefaultSelection<Prisma.$shopReviewsPayload>
/**
 * Model shops
 * 
 */
export type shops = $Result.DefaultSelection<Prisma.$shopsPayload>
/**
 * Model sellers
 * 
 */
export type sellers = $Result.DefaultSelection<Prisma.$sellersPayload>
/**
 * Model site_config
 * 
 */
export type site_config = $Result.DefaultSelection<Prisma.$site_configPayload>
/**
 * Model discount_codes
 * 
 */
export type discount_codes = $Result.DefaultSelection<Prisma.$discount_codesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopReviews`: Exposes CRUD operations for the **shopReviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopReviews
    * const shopReviews = await prisma.shopReviews.findMany()
    * ```
    */
  get shopReviews(): Prisma.shopReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shops`: Exposes CRUD operations for the **shops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shops.findMany()
    * ```
    */
  get shops(): Prisma.shopsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellers`: Exposes CRUD operations for the **sellers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.sellers.findMany()
    * ```
    */
  get sellers(): Prisma.sellersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site_config`: Exposes CRUD operations for the **site_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Site_configs
    * const site_configs = await prisma.site_config.findMany()
    * ```
    */
  get site_config(): Prisma.site_configDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount_codes`: Exposes CRUD operations for the **discount_codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discount_codes
    * const discount_codes = await prisma.discount_codes.findMany()
    * ```
    */
  get discount_codes(): Prisma.discount_codesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    images: 'images',
    users: 'users',
    shopReviews: 'shopReviews',
    shops: 'shops',
    sellers: 'sellers',
    site_config: 'site_config',
    discount_codes: 'discount_codes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "images" | "users" | "shopReviews" | "shops" | "sellers" | "site_config" | "discount_codes"
      txIsolationLevel: never
    }
    model: {
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.imagesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.imagesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.usersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.usersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      shopReviews: {
        payload: Prisma.$shopReviewsPayload<ExtArgs>
        fields: Prisma.shopReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shopReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shopReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          findFirst: {
            args: Prisma.shopReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shopReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          findMany: {
            args: Prisma.shopReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>[]
          }
          create: {
            args: Prisma.shopReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          createMany: {
            args: Prisma.shopReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.shopReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          update: {
            args: Prisma.shopReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          deleteMany: {
            args: Prisma.shopReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shopReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.shopReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopReviewsPayload>
          }
          aggregate: {
            args: Prisma.ShopReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopReviews>
          }
          groupBy: {
            args: Prisma.shopReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopReviewsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.shopReviewsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.shopReviewsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.shopReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ShopReviewsCountAggregateOutputType> | number
          }
        }
      }
      shops: {
        payload: Prisma.$shopsPayload<ExtArgs>
        fields: Prisma.shopsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shopsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shopsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          findFirst: {
            args: Prisma.shopsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shopsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          findMany: {
            args: Prisma.shopsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>[]
          }
          create: {
            args: Prisma.shopsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          createMany: {
            args: Prisma.shopsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.shopsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          update: {
            args: Prisma.shopsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          deleteMany: {
            args: Prisma.shopsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shopsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.shopsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopsPayload>
          }
          aggregate: {
            args: Prisma.ShopsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShops>
          }
          groupBy: {
            args: Prisma.shopsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.shopsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.shopsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.shopsCountArgs<ExtArgs>
            result: $Utils.Optional<ShopsCountAggregateOutputType> | number
          }
        }
      }
      sellers: {
        payload: Prisma.$sellersPayload<ExtArgs>
        fields: Prisma.sellersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findFirst: {
            args: Prisma.sellersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findMany: {
            args: Prisma.sellersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          create: {
            args: Prisma.sellersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          createMany: {
            args: Prisma.sellersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sellersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          update: {
            args: Prisma.sellersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          deleteMany: {
            args: Prisma.sellersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sellersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sellersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          aggregate: {
            args: Prisma.SellersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellers>
          }
          groupBy: {
            args: Prisma.sellersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.sellersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.sellersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.sellersCountArgs<ExtArgs>
            result: $Utils.Optional<SellersCountAggregateOutputType> | number
          }
        }
      }
      site_config: {
        payload: Prisma.$site_configPayload<ExtArgs>
        fields: Prisma.site_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.site_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.site_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          findFirst: {
            args: Prisma.site_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.site_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          findMany: {
            args: Prisma.site_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>[]
          }
          create: {
            args: Prisma.site_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          createMany: {
            args: Prisma.site_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.site_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          update: {
            args: Prisma.site_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          deleteMany: {
            args: Prisma.site_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.site_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.site_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$site_configPayload>
          }
          aggregate: {
            args: Prisma.Site_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite_config>
          }
          groupBy: {
            args: Prisma.site_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<Site_configGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.site_configFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.site_configAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.site_configCountArgs<ExtArgs>
            result: $Utils.Optional<Site_configCountAggregateOutputType> | number
          }
        }
      }
      discount_codes: {
        payload: Prisma.$discount_codesPayload<ExtArgs>
        fields: Prisma.discount_codesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discount_codesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discount_codesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          findFirst: {
            args: Prisma.discount_codesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discount_codesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          findMany: {
            args: Prisma.discount_codesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>[]
          }
          create: {
            args: Prisma.discount_codesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          createMany: {
            args: Prisma.discount_codesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.discount_codesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          update: {
            args: Prisma.discount_codesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          deleteMany: {
            args: Prisma.discount_codesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.discount_codesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.discount_codesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discount_codesPayload>
          }
          aggregate: {
            args: Prisma.Discount_codesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount_codes>
          }
          groupBy: {
            args: Prisma.discount_codesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Discount_codesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.discount_codesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.discount_codesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.discount_codesCountArgs<ExtArgs>
            result: $Utils.Optional<Discount_codesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    images?: imagesOmit
    users?: usersOmit
    shopReviews?: shopReviewsOmit
    shops?: shopsOmit
    sellers?: sellersOmit
    site_config?: site_configOmit
    discount_codes?: discount_codesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    shopReviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shopReviews?: boolean | UsersCountOutputTypeCountShopReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountShopReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopReviewsWhereInput
  }


  /**
   * Count Type ShopsCountOutputType
   */

  export type ShopsCountOutputType = {
    reviews: number
  }

  export type ShopsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ShopsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ShopsCountOutputType without action
   */
  export type ShopsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopsCountOutputType
     */
    select?: ShopsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopsCountOutputType without action
   */
  export type ShopsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    file_id: string | null
    url: string | null
    shopId: string | null
    userId: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    file_id: string | null
    url: string | null
    shopId: string | null
    userId: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    file_id: number
    url: number
    shopId: number
    userId: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    id?: true
    file_id?: true
    url?: true
    shopId?: true
    userId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    file_id?: true
    url?: true
    shopId?: true
    userId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    file_id?: true
    url?: true
    shopId?: true
    userId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    file_id: string
    url: string
    shopId: string | null
    userId: string
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_id?: boolean
    url?: boolean
    shopId?: boolean
    userId?: boolean
    users?: boolean | images$usersArgs<ExtArgs>
    shops?: boolean | images$shopsArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>



  export type imagesSelectScalar = {
    id?: boolean
    file_id?: boolean
    url?: boolean
    shopId?: boolean
    userId?: boolean
  }

  export type imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_id" | "url" | "shopId" | "userId", ExtArgs["result"]["images"]>
  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | images$usersArgs<ExtArgs>
    shops?: boolean | images$shopsArgs<ExtArgs>
  }

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      shops: Prisma.$shopsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      file_id: string
      url: string
      shopId: string | null
      userId: string
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * @param {imagesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const images = await prisma.images.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: imagesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Images.
     * @param {imagesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const images = await prisma.images.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: imagesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends images$usersArgs<ExtArgs> = {}>(args?: Subset<T, images$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shops<T extends images$shopsArgs<ExtArgs> = {}>(args?: Subset<T, images$shopsArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images model
   */
  interface imagesFieldRefs {
    readonly id: FieldRef<"images", 'String'>
    readonly file_id: FieldRef<"images", 'String'>
    readonly url: FieldRef<"images", 'String'>
    readonly shopId: FieldRef<"images", 'String'>
    readonly userId: FieldRef<"images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * images findRaw
   */
  export type imagesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * images aggregateRaw
   */
  export type imagesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * images.users
   */
  export type images$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * images.shops
   */
  export type images$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    where?: shopsWhereInput
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    following: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    following?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    following: string[]
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    following?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean | users$avatarArgs<ExtArgs>
    shopReviews?: boolean | users$shopReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    following?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "following" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | users$avatarArgs<ExtArgs>
    shopReviews?: boolean | users$shopReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      avatar: Prisma.$imagesPayload<ExtArgs> | null
      shopReviews: Prisma.$shopReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      following: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: usersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: usersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatar<T extends users$avatarArgs<ExtArgs> = {}>(args?: Subset<T, users$avatarArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shopReviews<T extends users$shopReviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$shopReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly following: FieldRef<"users", 'String[]'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users findRaw
   */
  export type usersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * users aggregateRaw
   */
  export type usersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * users.avatar
   */
  export type users$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
  }

  /**
   * users.shopReviews
   */
  export type users$shopReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    where?: shopReviewsWhereInput
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    cursor?: shopReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopReviewsScalarFieldEnum | ShopReviewsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model shopReviews
   */

  export type AggregateShopReviews = {
    _count: ShopReviewsCountAggregateOutputType | null
    _avg: ShopReviewsAvgAggregateOutputType | null
    _sum: ShopReviewsSumAggregateOutputType | null
    _min: ShopReviewsMinAggregateOutputType | null
    _max: ShopReviewsMaxAggregateOutputType | null
  }

  export type ShopReviewsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ShopReviewsSumAggregateOutputType = {
    rating: number | null
  }

  export type ShopReviewsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    reviews: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shopsId: string | null
  }

  export type ShopReviewsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    reviews: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shopsId: string | null
  }

  export type ShopReviewsCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    reviews: number
    createdAt: number
    updatedAt: number
    shopsId: number
    _all: number
  }


  export type ShopReviewsAvgAggregateInputType = {
    rating?: true
  }

  export type ShopReviewsSumAggregateInputType = {
    rating?: true
  }

  export type ShopReviewsMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    reviews?: true
    createdAt?: true
    updatedAt?: true
    shopsId?: true
  }

  export type ShopReviewsMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    reviews?: true
    createdAt?: true
    updatedAt?: true
    shopsId?: true
  }

  export type ShopReviewsCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    reviews?: true
    createdAt?: true
    updatedAt?: true
    shopsId?: true
    _all?: true
  }

  export type ShopReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shopReviews to aggregate.
     */
    where?: shopReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopReviews to fetch.
     */
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shopReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shopReviews
    **/
    _count?: true | ShopReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopReviewsMaxAggregateInputType
  }

  export type GetShopReviewsAggregateType<T extends ShopReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateShopReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopReviews[P]>
      : GetScalarType<T[P], AggregateShopReviews[P]>
  }




  export type shopReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopReviewsWhereInput
    orderBy?: shopReviewsOrderByWithAggregationInput | shopReviewsOrderByWithAggregationInput[]
    by: ShopReviewsScalarFieldEnum[] | ShopReviewsScalarFieldEnum
    having?: shopReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopReviewsCountAggregateInputType | true
    _avg?: ShopReviewsAvgAggregateInputType
    _sum?: ShopReviewsSumAggregateInputType
    _min?: ShopReviewsMinAggregateInputType
    _max?: ShopReviewsMaxAggregateInputType
  }

  export type ShopReviewsGroupByOutputType = {
    id: string
    userId: string
    rating: number
    reviews: string | null
    createdAt: Date
    updatedAt: Date
    shopsId: string | null
    _count: ShopReviewsCountAggregateOutputType | null
    _avg: ShopReviewsAvgAggregateOutputType | null
    _sum: ShopReviewsSumAggregateOutputType | null
    _min: ShopReviewsMinAggregateOutputType | null
    _max: ShopReviewsMaxAggregateOutputType | null
  }

  type GetShopReviewsGroupByPayload<T extends shopReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ShopReviewsGroupByOutputType[P]>
        }
      >
    >


  export type shopReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    reviews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shopsId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    shops?: boolean | shopReviews$shopsArgs<ExtArgs>
  }, ExtArgs["result"]["shopReviews"]>



  export type shopReviewsSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    reviews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shopsId?: boolean
  }

  export type shopReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "reviews" | "createdAt" | "updatedAt" | "shopsId", ExtArgs["result"]["shopReviews"]>
  export type shopReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    shops?: boolean | shopReviews$shopsArgs<ExtArgs>
  }

  export type $shopReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shopReviews"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      shops: Prisma.$shopsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: number
      reviews: string | null
      createdAt: Date
      updatedAt: Date
      shopsId: string | null
    }, ExtArgs["result"]["shopReviews"]>
    composites: {}
  }

  type shopReviewsGetPayload<S extends boolean | null | undefined | shopReviewsDefaultArgs> = $Result.GetResult<Prisma.$shopReviewsPayload, S>

  type shopReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shopReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopReviewsCountAggregateInputType | true
    }

  export interface shopReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shopReviews'], meta: { name: 'shopReviews' } }
    /**
     * Find zero or one ShopReviews that matches the filter.
     * @param {shopReviewsFindUniqueArgs} args - Arguments to find a ShopReviews
     * @example
     * // Get one ShopReviews
     * const shopReviews = await prisma.shopReviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shopReviewsFindUniqueArgs>(args: SelectSubset<T, shopReviewsFindUniqueArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopReviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shopReviewsFindUniqueOrThrowArgs} args - Arguments to find a ShopReviews
     * @example
     * // Get one ShopReviews
     * const shopReviews = await prisma.shopReviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shopReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, shopReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsFindFirstArgs} args - Arguments to find a ShopReviews
     * @example
     * // Get one ShopReviews
     * const shopReviews = await prisma.shopReviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shopReviewsFindFirstArgs>(args?: SelectSubset<T, shopReviewsFindFirstArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopReviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsFindFirstOrThrowArgs} args - Arguments to find a ShopReviews
     * @example
     * // Get one ShopReviews
     * const shopReviews = await prisma.shopReviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shopReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, shopReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopReviews
     * const shopReviews = await prisma.shopReviews.findMany()
     * 
     * // Get first 10 ShopReviews
     * const shopReviews = await prisma.shopReviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopReviewsWithIdOnly = await prisma.shopReviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shopReviewsFindManyArgs>(args?: SelectSubset<T, shopReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopReviews.
     * @param {shopReviewsCreateArgs} args - Arguments to create a ShopReviews.
     * @example
     * // Create one ShopReviews
     * const ShopReviews = await prisma.shopReviews.create({
     *   data: {
     *     // ... data to create a ShopReviews
     *   }
     * })
     * 
     */
    create<T extends shopReviewsCreateArgs>(args: SelectSubset<T, shopReviewsCreateArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopReviews.
     * @param {shopReviewsCreateManyArgs} args - Arguments to create many ShopReviews.
     * @example
     * // Create many ShopReviews
     * const shopReviews = await prisma.shopReviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shopReviewsCreateManyArgs>(args?: SelectSubset<T, shopReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopReviews.
     * @param {shopReviewsDeleteArgs} args - Arguments to delete one ShopReviews.
     * @example
     * // Delete one ShopReviews
     * const ShopReviews = await prisma.shopReviews.delete({
     *   where: {
     *     // ... filter to delete one ShopReviews
     *   }
     * })
     * 
     */
    delete<T extends shopReviewsDeleteArgs>(args: SelectSubset<T, shopReviewsDeleteArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopReviews.
     * @param {shopReviewsUpdateArgs} args - Arguments to update one ShopReviews.
     * @example
     * // Update one ShopReviews
     * const shopReviews = await prisma.shopReviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shopReviewsUpdateArgs>(args: SelectSubset<T, shopReviewsUpdateArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopReviews.
     * @param {shopReviewsDeleteManyArgs} args - Arguments to filter ShopReviews to delete.
     * @example
     * // Delete a few ShopReviews
     * const { count } = await prisma.shopReviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shopReviewsDeleteManyArgs>(args?: SelectSubset<T, shopReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopReviews
     * const shopReviews = await prisma.shopReviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shopReviewsUpdateManyArgs>(args: SelectSubset<T, shopReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopReviews.
     * @param {shopReviewsUpsertArgs} args - Arguments to update or create a ShopReviews.
     * @example
     * // Update or create a ShopReviews
     * const shopReviews = await prisma.shopReviews.upsert({
     *   create: {
     *     // ... data to create a ShopReviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopReviews we want to update
     *   }
     * })
     */
    upsert<T extends shopReviewsUpsertArgs>(args: SelectSubset<T, shopReviewsUpsertArgs<ExtArgs>>): Prisma__shopReviewsClient<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopReviews that matches the filter.
     * @param {shopReviewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shopReviews = await prisma.shopReviews.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: shopReviewsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ShopReviews.
     * @param {shopReviewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shopReviews = await prisma.shopReviews.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: shopReviewsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsCountArgs} args - Arguments to filter ShopReviews to count.
     * @example
     * // Count the number of ShopReviews
     * const count = await prisma.shopReviews.count({
     *   where: {
     *     // ... the filter for the ShopReviews we want to count
     *   }
     * })
    **/
    count<T extends shopReviewsCountArgs>(
      args?: Subset<T, shopReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopReviewsAggregateArgs>(args: Subset<T, ShopReviewsAggregateArgs>): Prisma.PrismaPromise<GetShopReviewsAggregateType<T>>

    /**
     * Group by ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shopReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shopReviewsGroupByArgs['orderBy'] }
        : { orderBy?: shopReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shopReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shopReviews model
   */
  readonly fields: shopReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shopReviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shopReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shops<T extends shopReviews$shopsArgs<ExtArgs> = {}>(args?: Subset<T, shopReviews$shopsArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shopReviews model
   */
  interface shopReviewsFieldRefs {
    readonly id: FieldRef<"shopReviews", 'String'>
    readonly userId: FieldRef<"shopReviews", 'String'>
    readonly rating: FieldRef<"shopReviews", 'Float'>
    readonly reviews: FieldRef<"shopReviews", 'String'>
    readonly createdAt: FieldRef<"shopReviews", 'DateTime'>
    readonly updatedAt: FieldRef<"shopReviews", 'DateTime'>
    readonly shopsId: FieldRef<"shopReviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * shopReviews findUnique
   */
  export type shopReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter, which shopReviews to fetch.
     */
    where: shopReviewsWhereUniqueInput
  }

  /**
   * shopReviews findUniqueOrThrow
   */
  export type shopReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter, which shopReviews to fetch.
     */
    where: shopReviewsWhereUniqueInput
  }

  /**
   * shopReviews findFirst
   */
  export type shopReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter, which shopReviews to fetch.
     */
    where?: shopReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopReviews to fetch.
     */
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shopReviews.
     */
    cursor?: shopReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shopReviews.
     */
    distinct?: ShopReviewsScalarFieldEnum | ShopReviewsScalarFieldEnum[]
  }

  /**
   * shopReviews findFirstOrThrow
   */
  export type shopReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter, which shopReviews to fetch.
     */
    where?: shopReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopReviews to fetch.
     */
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shopReviews.
     */
    cursor?: shopReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shopReviews.
     */
    distinct?: ShopReviewsScalarFieldEnum | ShopReviewsScalarFieldEnum[]
  }

  /**
   * shopReviews findMany
   */
  export type shopReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter, which shopReviews to fetch.
     */
    where?: shopReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopReviews to fetch.
     */
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shopReviews.
     */
    cursor?: shopReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopReviews.
     */
    skip?: number
    distinct?: ShopReviewsScalarFieldEnum | ShopReviewsScalarFieldEnum[]
  }

  /**
   * shopReviews create
   */
  export type shopReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a shopReviews.
     */
    data: XOR<shopReviewsCreateInput, shopReviewsUncheckedCreateInput>
  }

  /**
   * shopReviews createMany
   */
  export type shopReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shopReviews.
     */
    data: shopReviewsCreateManyInput | shopReviewsCreateManyInput[]
  }

  /**
   * shopReviews update
   */
  export type shopReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a shopReviews.
     */
    data: XOR<shopReviewsUpdateInput, shopReviewsUncheckedUpdateInput>
    /**
     * Choose, which shopReviews to update.
     */
    where: shopReviewsWhereUniqueInput
  }

  /**
   * shopReviews updateMany
   */
  export type shopReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shopReviews.
     */
    data: XOR<shopReviewsUpdateManyMutationInput, shopReviewsUncheckedUpdateManyInput>
    /**
     * Filter which shopReviews to update
     */
    where?: shopReviewsWhereInput
    /**
     * Limit how many shopReviews to update.
     */
    limit?: number
  }

  /**
   * shopReviews upsert
   */
  export type shopReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the shopReviews to update in case it exists.
     */
    where: shopReviewsWhereUniqueInput
    /**
     * In case the shopReviews found by the `where` argument doesn't exist, create a new shopReviews with this data.
     */
    create: XOR<shopReviewsCreateInput, shopReviewsUncheckedCreateInput>
    /**
     * In case the shopReviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shopReviewsUpdateInput, shopReviewsUncheckedUpdateInput>
  }

  /**
   * shopReviews delete
   */
  export type shopReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    /**
     * Filter which shopReviews to delete.
     */
    where: shopReviewsWhereUniqueInput
  }

  /**
   * shopReviews deleteMany
   */
  export type shopReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shopReviews to delete
     */
    where?: shopReviewsWhereInput
    /**
     * Limit how many shopReviews to delete.
     */
    limit?: number
  }

  /**
   * shopReviews findRaw
   */
  export type shopReviewsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * shopReviews aggregateRaw
   */
  export type shopReviewsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * shopReviews.shops
   */
  export type shopReviews$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    where?: shopsWhereInput
  }

  /**
   * shopReviews without action
   */
  export type shopReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
  }


  /**
   * Model shops
   */

  export type AggregateShops = {
    _count: ShopsCountAggregateOutputType | null
    _avg: ShopsAvgAggregateOutputType | null
    _sum: ShopsSumAggregateOutputType | null
    _min: ShopsMinAggregateOutputType | null
    _max: ShopsMaxAggregateOutputType | null
  }

  export type ShopsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ShopsSumAggregateOutputType = {
    rating: number | null
  }

  export type ShopsMinAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    category: string | null
    coverBanner: string | null
    address: string | null
    opening_hours: string | null
    website: string | null
    rating: number | null
    sellerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ShopsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    category: string | null
    coverBanner: string | null
    address: string | null
    opening_hours: string | null
    website: string | null
    rating: number | null
    sellerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ShopsCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    category: number
    coverBanner: number
    address: number
    opening_hours: number
    website: number
    socialLinks: number
    rating: number
    sellerId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ShopsAvgAggregateInputType = {
    rating?: true
  }

  export type ShopsSumAggregateInputType = {
    rating?: true
  }

  export type ShopsMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    category?: true
    coverBanner?: true
    address?: true
    opening_hours?: true
    website?: true
    rating?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type ShopsMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    category?: true
    coverBanner?: true
    address?: true
    opening_hours?: true
    website?: true
    rating?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type ShopsCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    category?: true
    coverBanner?: true
    address?: true
    opening_hours?: true
    website?: true
    socialLinks?: true
    rating?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ShopsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shops to aggregate.
     */
    where?: shopsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopsOrderByWithRelationInput | shopsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shopsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shops
    **/
    _count?: true | ShopsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopsMaxAggregateInputType
  }

  export type GetShopsAggregateType<T extends ShopsAggregateArgs> = {
        [P in keyof T & keyof AggregateShops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShops[P]>
      : GetScalarType<T[P], AggregateShops[P]>
  }




  export type shopsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopsWhereInput
    orderBy?: shopsOrderByWithAggregationInput | shopsOrderByWithAggregationInput[]
    by: ShopsScalarFieldEnum[] | ShopsScalarFieldEnum
    having?: shopsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopsCountAggregateInputType | true
    _avg?: ShopsAvgAggregateInputType
    _sum?: ShopsSumAggregateInputType
    _min?: ShopsMinAggregateInputType
    _max?: ShopsMaxAggregateInputType
  }

  export type ShopsGroupByOutputType = {
    id: string
    name: string
    bio: string | null
    category: string
    coverBanner: string | null
    address: string
    opening_hours: string | null
    website: string | null
    socialLinks: JsonValue[]
    rating: number
    sellerId: string
    createdAt: Date
    updateAt: Date
    _count: ShopsCountAggregateOutputType | null
    _avg: ShopsAvgAggregateOutputType | null
    _sum: ShopsSumAggregateOutputType | null
    _min: ShopsMinAggregateOutputType | null
    _max: ShopsMaxAggregateOutputType | null
  }

  type GetShopsGroupByPayload<T extends shopsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopsGroupByOutputType[P]>
            : GetScalarType<T[P], ShopsGroupByOutputType[P]>
        }
      >
    >


  export type shopsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    category?: boolean
    coverBanner?: boolean
    address?: boolean
    opening_hours?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    avatar?: boolean | shops$avatarArgs<ExtArgs>
    reviews?: boolean | shops$reviewsArgs<ExtArgs>
    sellers?: boolean | sellersDefaultArgs<ExtArgs>
    _count?: boolean | ShopsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shops"]>



  export type shopsSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    category?: boolean
    coverBanner?: boolean
    address?: boolean
    opening_hours?: boolean
    website?: boolean
    socialLinks?: boolean
    rating?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type shopsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "category" | "coverBanner" | "address" | "opening_hours" | "website" | "socialLinks" | "rating" | "sellerId" | "createdAt" | "updateAt", ExtArgs["result"]["shops"]>
  export type shopsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | shops$avatarArgs<ExtArgs>
    reviews?: boolean | shops$reviewsArgs<ExtArgs>
    sellers?: boolean | sellersDefaultArgs<ExtArgs>
    _count?: boolean | ShopsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $shopsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shops"
    objects: {
      avatar: Prisma.$imagesPayload<ExtArgs> | null
      reviews: Prisma.$shopReviewsPayload<ExtArgs>[]
      sellers: Prisma.$sellersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bio: string | null
      category: string
      coverBanner: string | null
      address: string
      opening_hours: string | null
      website: string | null
      socialLinks: Prisma.JsonValue[]
      rating: number
      sellerId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["shops"]>
    composites: {}
  }

  type shopsGetPayload<S extends boolean | null | undefined | shopsDefaultArgs> = $Result.GetResult<Prisma.$shopsPayload, S>

  type shopsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shopsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopsCountAggregateInputType | true
    }

  export interface shopsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shops'], meta: { name: 'shops' } }
    /**
     * Find zero or one Shops that matches the filter.
     * @param {shopsFindUniqueArgs} args - Arguments to find a Shops
     * @example
     * // Get one Shops
     * const shops = await prisma.shops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shopsFindUniqueArgs>(args: SelectSubset<T, shopsFindUniqueArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shops that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shopsFindUniqueOrThrowArgs} args - Arguments to find a Shops
     * @example
     * // Get one Shops
     * const shops = await prisma.shops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shopsFindUniqueOrThrowArgs>(args: SelectSubset<T, shopsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsFindFirstArgs} args - Arguments to find a Shops
     * @example
     * // Get one Shops
     * const shops = await prisma.shops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shopsFindFirstArgs>(args?: SelectSubset<T, shopsFindFirstArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsFindFirstOrThrowArgs} args - Arguments to find a Shops
     * @example
     * // Get one Shops
     * const shops = await prisma.shops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shopsFindFirstOrThrowArgs>(args?: SelectSubset<T, shopsFindFirstOrThrowArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shops.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shops.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopsWithIdOnly = await prisma.shops.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shopsFindManyArgs>(args?: SelectSubset<T, shopsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shops.
     * @param {shopsCreateArgs} args - Arguments to create a Shops.
     * @example
     * // Create one Shops
     * const Shops = await prisma.shops.create({
     *   data: {
     *     // ... data to create a Shops
     *   }
     * })
     * 
     */
    create<T extends shopsCreateArgs>(args: SelectSubset<T, shopsCreateArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {shopsCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shops = await prisma.shops.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shopsCreateManyArgs>(args?: SelectSubset<T, shopsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shops.
     * @param {shopsDeleteArgs} args - Arguments to delete one Shops.
     * @example
     * // Delete one Shops
     * const Shops = await prisma.shops.delete({
     *   where: {
     *     // ... filter to delete one Shops
     *   }
     * })
     * 
     */
    delete<T extends shopsDeleteArgs>(args: SelectSubset<T, shopsDeleteArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shops.
     * @param {shopsUpdateArgs} args - Arguments to update one Shops.
     * @example
     * // Update one Shops
     * const shops = await prisma.shops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shopsUpdateArgs>(args: SelectSubset<T, shopsUpdateArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {shopsDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shopsDeleteManyArgs>(args?: SelectSubset<T, shopsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shops = await prisma.shops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shopsUpdateManyArgs>(args: SelectSubset<T, shopsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shops.
     * @param {shopsUpsertArgs} args - Arguments to update or create a Shops.
     * @example
     * // Update or create a Shops
     * const shops = await prisma.shops.upsert({
     *   create: {
     *     // ... data to create a Shops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shops we want to update
     *   }
     * })
     */
    upsert<T extends shopsUpsertArgs>(args: SelectSubset<T, shopsUpsertArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * @param {shopsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shops = await prisma.shops.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: shopsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Shops.
     * @param {shopsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shops = await prisma.shops.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: shopsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shops.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends shopsCountArgs>(
      args?: Subset<T, shopsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopsAggregateArgs>(args: Subset<T, ShopsAggregateArgs>): Prisma.PrismaPromise<GetShopsAggregateType<T>>

    /**
     * Group by Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends shopsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shopsGroupByArgs['orderBy'] }
        : { orderBy?: shopsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, shopsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shops model
   */
  readonly fields: shopsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shopsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatar<T extends shops$avatarArgs<ExtArgs> = {}>(args?: Subset<T, shops$avatarArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends shops$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, shops$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellers<T extends sellersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sellersDefaultArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the shops model
   */
  interface shopsFieldRefs {
    readonly id: FieldRef<"shops", 'String'>
    readonly name: FieldRef<"shops", 'String'>
    readonly bio: FieldRef<"shops", 'String'>
    readonly category: FieldRef<"shops", 'String'>
    readonly coverBanner: FieldRef<"shops", 'String'>
    readonly address: FieldRef<"shops", 'String'>
    readonly opening_hours: FieldRef<"shops", 'String'>
    readonly website: FieldRef<"shops", 'String'>
    readonly socialLinks: FieldRef<"shops", 'Json[]'>
    readonly rating: FieldRef<"shops", 'Float'>
    readonly sellerId: FieldRef<"shops", 'String'>
    readonly createdAt: FieldRef<"shops", 'DateTime'>
    readonly updateAt: FieldRef<"shops", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * shops findUnique
   */
  export type shopsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where: shopsWhereUniqueInput
  }

  /**
   * shops findUniqueOrThrow
   */
  export type shopsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where: shopsWhereUniqueInput
  }

  /**
   * shops findFirst
   */
  export type shopsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where?: shopsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopsOrderByWithRelationInput | shopsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shops.
     */
    cursor?: shopsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shops.
     */
    distinct?: ShopsScalarFieldEnum | ShopsScalarFieldEnum[]
  }

  /**
   * shops findFirstOrThrow
   */
  export type shopsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where?: shopsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopsOrderByWithRelationInput | shopsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shops.
     */
    cursor?: shopsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shops.
     */
    distinct?: ShopsScalarFieldEnum | ShopsScalarFieldEnum[]
  }

  /**
   * shops findMany
   */
  export type shopsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter, which shops to fetch.
     */
    where?: shopsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shops to fetch.
     */
    orderBy?: shopsOrderByWithRelationInput | shopsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shops.
     */
    cursor?: shopsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shops.
     */
    skip?: number
    distinct?: ShopsScalarFieldEnum | ShopsScalarFieldEnum[]
  }

  /**
   * shops create
   */
  export type shopsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * The data needed to create a shops.
     */
    data: XOR<shopsCreateInput, shopsUncheckedCreateInput>
  }

  /**
   * shops createMany
   */
  export type shopsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shops.
     */
    data: shopsCreateManyInput | shopsCreateManyInput[]
  }

  /**
   * shops update
   */
  export type shopsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * The data needed to update a shops.
     */
    data: XOR<shopsUpdateInput, shopsUncheckedUpdateInput>
    /**
     * Choose, which shops to update.
     */
    where: shopsWhereUniqueInput
  }

  /**
   * shops updateMany
   */
  export type shopsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shops.
     */
    data: XOR<shopsUpdateManyMutationInput, shopsUncheckedUpdateManyInput>
    /**
     * Filter which shops to update
     */
    where?: shopsWhereInput
    /**
     * Limit how many shops to update.
     */
    limit?: number
  }

  /**
   * shops upsert
   */
  export type shopsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * The filter to search for the shops to update in case it exists.
     */
    where: shopsWhereUniqueInput
    /**
     * In case the shops found by the `where` argument doesn't exist, create a new shops with this data.
     */
    create: XOR<shopsCreateInput, shopsUncheckedCreateInput>
    /**
     * In case the shops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shopsUpdateInput, shopsUncheckedUpdateInput>
  }

  /**
   * shops delete
   */
  export type shopsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    /**
     * Filter which shops to delete.
     */
    where: shopsWhereUniqueInput
  }

  /**
   * shops deleteMany
   */
  export type shopsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shops to delete
     */
    where?: shopsWhereInput
    /**
     * Limit how many shops to delete.
     */
    limit?: number
  }

  /**
   * shops findRaw
   */
  export type shopsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * shops aggregateRaw
   */
  export type shopsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * shops.avatar
   */
  export type shops$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
  }

  /**
   * shops.reviews
   */
  export type shops$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopReviews
     */
    select?: shopReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopReviews
     */
    omit?: shopReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopReviewsInclude<ExtArgs> | null
    where?: shopReviewsWhereInput
    orderBy?: shopReviewsOrderByWithRelationInput | shopReviewsOrderByWithRelationInput[]
    cursor?: shopReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopReviewsScalarFieldEnum | ShopReviewsScalarFieldEnum[]
  }

  /**
   * shops without action
   */
  export type shopsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
  }


  /**
   * Model sellers
   */

  export type AggregateSellers = {
    _count: SellersCountAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  export type SellersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: string | null
    country: string | null
    password: string | null
    stripeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: string | null
    country: string | null
    password: string | null
    stripeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone_number: number
    country: number
    password: number
    stripeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SellersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    country?: true
    password?: true
    stripeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    country?: true
    password?: true
    stripeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    country?: true
    password?: true
    stripeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SellersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to aggregate.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellers
    **/
    _count?: true | SellersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellersMaxAggregateInputType
  }

  export type GetSellersAggregateType<T extends SellersAggregateArgs> = {
        [P in keyof T & keyof AggregateSellers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellers[P]>
      : GetScalarType<T[P], AggregateSellers[P]>
  }




  export type sellersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithAggregationInput | sellersOrderByWithAggregationInput[]
    by: SellersScalarFieldEnum[] | SellersScalarFieldEnum
    having?: sellersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellersCountAggregateInputType | true
    _min?: SellersMinAggregateInputType
    _max?: SellersMaxAggregateInputType
  }

  export type SellersGroupByOutputType = {
    id: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SellersCountAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  type GetSellersGroupByPayload<T extends sellersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellersGroupByOutputType[P]>
            : GetScalarType<T[P], SellersGroupByOutputType[P]>
        }
      >
    >


  export type sellersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    password?: boolean
    stripeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | sellers$shopArgs<ExtArgs>
  }, ExtArgs["result"]["sellers"]>



  export type sellersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    country?: boolean
    password?: boolean
    stripeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sellersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone_number" | "country" | "password" | "stripeId" | "createdAt" | "updatedAt", ExtArgs["result"]["sellers"]>
  export type sellersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | sellers$shopArgs<ExtArgs>
  }

  export type $sellersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sellers"
    objects: {
      shop: Prisma.$shopsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone_number: string
      country: string
      password: string
      stripeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sellers"]>
    composites: {}
  }

  type sellersGetPayload<S extends boolean | null | undefined | sellersDefaultArgs> = $Result.GetResult<Prisma.$sellersPayload, S>

  type sellersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sellersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellersCountAggregateInputType | true
    }

  export interface sellersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sellers'], meta: { name: 'sellers' } }
    /**
     * Find zero or one Sellers that matches the filter.
     * @param {sellersFindUniqueArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sellersFindUniqueArgs>(args: SelectSubset<T, sellersFindUniqueArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sellers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sellersFindUniqueOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sellersFindUniqueOrThrowArgs>(args: SelectSubset<T, sellersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sellersFindFirstArgs>(args?: SelectSubset<T, sellersFindFirstArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sellers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sellersFindFirstOrThrowArgs>(args?: SelectSubset<T, sellersFindFirstOrThrowArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.sellers.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.sellers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellersWithIdOnly = await prisma.sellers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sellersFindManyArgs>(args?: SelectSubset<T, sellersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sellers.
     * @param {sellersCreateArgs} args - Arguments to create a Sellers.
     * @example
     * // Create one Sellers
     * const Sellers = await prisma.sellers.create({
     *   data: {
     *     // ... data to create a Sellers
     *   }
     * })
     * 
     */
    create<T extends sellersCreateArgs>(args: SelectSubset<T, sellersCreateArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {sellersCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const sellers = await prisma.sellers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sellersCreateManyArgs>(args?: SelectSubset<T, sellersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sellers.
     * @param {sellersDeleteArgs} args - Arguments to delete one Sellers.
     * @example
     * // Delete one Sellers
     * const Sellers = await prisma.sellers.delete({
     *   where: {
     *     // ... filter to delete one Sellers
     *   }
     * })
     * 
     */
    delete<T extends sellersDeleteArgs>(args: SelectSubset<T, sellersDeleteArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sellers.
     * @param {sellersUpdateArgs} args - Arguments to update one Sellers.
     * @example
     * // Update one Sellers
     * const sellers = await prisma.sellers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sellersUpdateArgs>(args: SelectSubset<T, sellersUpdateArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {sellersDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.sellers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sellersDeleteManyArgs>(args?: SelectSubset<T, sellersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const sellers = await prisma.sellers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sellersUpdateManyArgs>(args: SelectSubset<T, sellersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sellers.
     * @param {sellersUpsertArgs} args - Arguments to update or create a Sellers.
     * @example
     * // Update or create a Sellers
     * const sellers = await prisma.sellers.upsert({
     *   create: {
     *     // ... data to create a Sellers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sellers we want to update
     *   }
     * })
     */
    upsert<T extends sellersUpsertArgs>(args: SelectSubset<T, sellersUpsertArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * @param {sellersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sellers = await prisma.sellers.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: sellersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sellers.
     * @param {sellersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sellers = await prisma.sellers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: sellersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.sellers.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends sellersCountArgs>(
      args?: Subset<T, sellersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellersAggregateArgs>(args: Subset<T, SellersAggregateArgs>): Prisma.PrismaPromise<GetSellersAggregateType<T>>

    /**
     * Group by Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sellersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellersGroupByArgs['orderBy'] }
        : { orderBy?: sellersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sellersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sellers model
   */
  readonly fields: sellersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sellers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends sellers$shopArgs<ExtArgs> = {}>(args?: Subset<T, sellers$shopArgs<ExtArgs>>): Prisma__shopsClient<$Result.GetResult<Prisma.$shopsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sellers model
   */
  interface sellersFieldRefs {
    readonly id: FieldRef<"sellers", 'String'>
    readonly name: FieldRef<"sellers", 'String'>
    readonly email: FieldRef<"sellers", 'String'>
    readonly phone_number: FieldRef<"sellers", 'String'>
    readonly country: FieldRef<"sellers", 'String'>
    readonly password: FieldRef<"sellers", 'String'>
    readonly stripeId: FieldRef<"sellers", 'String'>
    readonly createdAt: FieldRef<"sellers", 'DateTime'>
    readonly updatedAt: FieldRef<"sellers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sellers findUnique
   */
  export type sellersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers findUniqueOrThrow
   */
  export type sellersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers findFirst
   */
  export type sellersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers findFirstOrThrow
   */
  export type sellersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers findMany
   */
  export type sellersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }

  /**
   * sellers create
   */
  export type sellersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to create a sellers.
     */
    data: XOR<sellersCreateInput, sellersUncheckedCreateInput>
  }

  /**
   * sellers createMany
   */
  export type sellersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellers.
     */
    data: sellersCreateManyInput | sellersCreateManyInput[]
  }

  /**
   * sellers update
   */
  export type sellersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to update a sellers.
     */
    data: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
    /**
     * Choose, which sellers to update.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers updateMany
   */
  export type sellersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellers.
     */
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellersWhereInput
    /**
     * Limit how many sellers to update.
     */
    limit?: number
  }

  /**
   * sellers upsert
   */
  export type sellersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The filter to search for the sellers to update in case it exists.
     */
    where: sellersWhereUniqueInput
    /**
     * In case the sellers found by the `where` argument doesn't exist, create a new sellers with this data.
     */
    create: XOR<sellersCreateInput, sellersUncheckedCreateInput>
    /**
     * In case the sellers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
  }

  /**
   * sellers delete
   */
  export type sellersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter which sellers to delete.
     */
    where: sellersWhereUniqueInput
  }

  /**
   * sellers deleteMany
   */
  export type sellersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to delete
     */
    where?: sellersWhereInput
    /**
     * Limit how many sellers to delete.
     */
    limit?: number
  }

  /**
   * sellers findRaw
   */
  export type sellersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * sellers aggregateRaw
   */
  export type sellersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * sellers.shop
   */
  export type sellers$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shops
     */
    select?: shopsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shops
     */
    omit?: shopsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shopsInclude<ExtArgs> | null
    where?: shopsWhereInput
  }

  /**
   * sellers without action
   */
  export type sellersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sellers
     */
    omit?: sellersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sellersInclude<ExtArgs> | null
  }


  /**
   * Model site_config
   */

  export type AggregateSite_config = {
    _count: Site_configCountAggregateOutputType | null
    _min: Site_configMinAggregateOutputType | null
    _max: Site_configMaxAggregateOutputType | null
  }

  export type Site_configMinAggregateOutputType = {
    id: string | null
  }

  export type Site_configMaxAggregateOutputType = {
    id: string | null
  }

  export type Site_configCountAggregateOutputType = {
    id: number
    categories: number
    subCategories: number
    _all: number
  }


  export type Site_configMinAggregateInputType = {
    id?: true
  }

  export type Site_configMaxAggregateInputType = {
    id?: true
  }

  export type Site_configCountAggregateInputType = {
    id?: true
    categories?: true
    subCategories?: true
    _all?: true
  }

  export type Site_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which site_config to aggregate.
     */
    where?: site_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of site_configs to fetch.
     */
    orderBy?: site_configOrderByWithRelationInput | site_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: site_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` site_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` site_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned site_configs
    **/
    _count?: true | Site_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Site_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Site_configMaxAggregateInputType
  }

  export type GetSite_configAggregateType<T extends Site_configAggregateArgs> = {
        [P in keyof T & keyof AggregateSite_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite_config[P]>
      : GetScalarType<T[P], AggregateSite_config[P]>
  }




  export type site_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: site_configWhereInput
    orderBy?: site_configOrderByWithAggregationInput | site_configOrderByWithAggregationInput[]
    by: Site_configScalarFieldEnum[] | Site_configScalarFieldEnum
    having?: site_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Site_configCountAggregateInputType | true
    _min?: Site_configMinAggregateInputType
    _max?: Site_configMaxAggregateInputType
  }

  export type Site_configGroupByOutputType = {
    id: string
    categories: string[]
    subCategories: JsonValue
    _count: Site_configCountAggregateOutputType | null
    _min: Site_configMinAggregateOutputType | null
    _max: Site_configMaxAggregateOutputType | null
  }

  type GetSite_configGroupByPayload<T extends site_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Site_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Site_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Site_configGroupByOutputType[P]>
            : GetScalarType<T[P], Site_configGroupByOutputType[P]>
        }
      >
    >


  export type site_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categories?: boolean
    subCategories?: boolean
  }, ExtArgs["result"]["site_config"]>



  export type site_configSelectScalar = {
    id?: boolean
    categories?: boolean
    subCategories?: boolean
  }

  export type site_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categories" | "subCategories", ExtArgs["result"]["site_config"]>

  export type $site_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "site_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categories: string[]
      subCategories: Prisma.JsonValue
    }, ExtArgs["result"]["site_config"]>
    composites: {}
  }

  type site_configGetPayload<S extends boolean | null | undefined | site_configDefaultArgs> = $Result.GetResult<Prisma.$site_configPayload, S>

  type site_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<site_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Site_configCountAggregateInputType | true
    }

  export interface site_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['site_config'], meta: { name: 'site_config' } }
    /**
     * Find zero or one Site_config that matches the filter.
     * @param {site_configFindUniqueArgs} args - Arguments to find a Site_config
     * @example
     * // Get one Site_config
     * const site_config = await prisma.site_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends site_configFindUniqueArgs>(args: SelectSubset<T, site_configFindUniqueArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {site_configFindUniqueOrThrowArgs} args - Arguments to find a Site_config
     * @example
     * // Get one Site_config
     * const site_config = await prisma.site_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends site_configFindUniqueOrThrowArgs>(args: SelectSubset<T, site_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configFindFirstArgs} args - Arguments to find a Site_config
     * @example
     * // Get one Site_config
     * const site_config = await prisma.site_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends site_configFindFirstArgs>(args?: SelectSubset<T, site_configFindFirstArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configFindFirstOrThrowArgs} args - Arguments to find a Site_config
     * @example
     * // Get one Site_config
     * const site_config = await prisma.site_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends site_configFindFirstOrThrowArgs>(args?: SelectSubset<T, site_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Site_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Site_configs
     * const site_configs = await prisma.site_config.findMany()
     * 
     * // Get first 10 Site_configs
     * const site_configs = await prisma.site_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const site_configWithIdOnly = await prisma.site_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends site_configFindManyArgs>(args?: SelectSubset<T, site_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site_config.
     * @param {site_configCreateArgs} args - Arguments to create a Site_config.
     * @example
     * // Create one Site_config
     * const Site_config = await prisma.site_config.create({
     *   data: {
     *     // ... data to create a Site_config
     *   }
     * })
     * 
     */
    create<T extends site_configCreateArgs>(args: SelectSubset<T, site_configCreateArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Site_configs.
     * @param {site_configCreateManyArgs} args - Arguments to create many Site_configs.
     * @example
     * // Create many Site_configs
     * const site_config = await prisma.site_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends site_configCreateManyArgs>(args?: SelectSubset<T, site_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Site_config.
     * @param {site_configDeleteArgs} args - Arguments to delete one Site_config.
     * @example
     * // Delete one Site_config
     * const Site_config = await prisma.site_config.delete({
     *   where: {
     *     // ... filter to delete one Site_config
     *   }
     * })
     * 
     */
    delete<T extends site_configDeleteArgs>(args: SelectSubset<T, site_configDeleteArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site_config.
     * @param {site_configUpdateArgs} args - Arguments to update one Site_config.
     * @example
     * // Update one Site_config
     * const site_config = await prisma.site_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends site_configUpdateArgs>(args: SelectSubset<T, site_configUpdateArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Site_configs.
     * @param {site_configDeleteManyArgs} args - Arguments to filter Site_configs to delete.
     * @example
     * // Delete a few Site_configs
     * const { count } = await prisma.site_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends site_configDeleteManyArgs>(args?: SelectSubset<T, site_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Site_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Site_configs
     * const site_config = await prisma.site_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends site_configUpdateManyArgs>(args: SelectSubset<T, site_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Site_config.
     * @param {site_configUpsertArgs} args - Arguments to update or create a Site_config.
     * @example
     * // Update or create a Site_config
     * const site_config = await prisma.site_config.upsert({
     *   create: {
     *     // ... data to create a Site_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site_config we want to update
     *   }
     * })
     */
    upsert<T extends site_configUpsertArgs>(args: SelectSubset<T, site_configUpsertArgs<ExtArgs>>): Prisma__site_configClient<$Result.GetResult<Prisma.$site_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Site_configs that matches the filter.
     * @param {site_configFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const site_config = await prisma.site_config.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: site_configFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Site_config.
     * @param {site_configAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const site_config = await prisma.site_config.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: site_configAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Site_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configCountArgs} args - Arguments to filter Site_configs to count.
     * @example
     * // Count the number of Site_configs
     * const count = await prisma.site_config.count({
     *   where: {
     *     // ... the filter for the Site_configs we want to count
     *   }
     * })
    **/
    count<T extends site_configCountArgs>(
      args?: Subset<T, site_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Site_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Site_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Site_configAggregateArgs>(args: Subset<T, Site_configAggregateArgs>): Prisma.PrismaPromise<GetSite_configAggregateType<T>>

    /**
     * Group by Site_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {site_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends site_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: site_configGroupByArgs['orderBy'] }
        : { orderBy?: site_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, site_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSite_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the site_config model
   */
  readonly fields: site_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for site_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__site_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the site_config model
   */
  interface site_configFieldRefs {
    readonly id: FieldRef<"site_config", 'String'>
    readonly categories: FieldRef<"site_config", 'String[]'>
    readonly subCategories: FieldRef<"site_config", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * site_config findUnique
   */
  export type site_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter, which site_config to fetch.
     */
    where: site_configWhereUniqueInput
  }

  /**
   * site_config findUniqueOrThrow
   */
  export type site_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter, which site_config to fetch.
     */
    where: site_configWhereUniqueInput
  }

  /**
   * site_config findFirst
   */
  export type site_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter, which site_config to fetch.
     */
    where?: site_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of site_configs to fetch.
     */
    orderBy?: site_configOrderByWithRelationInput | site_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for site_configs.
     */
    cursor?: site_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` site_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` site_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of site_configs.
     */
    distinct?: Site_configScalarFieldEnum | Site_configScalarFieldEnum[]
  }

  /**
   * site_config findFirstOrThrow
   */
  export type site_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter, which site_config to fetch.
     */
    where?: site_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of site_configs to fetch.
     */
    orderBy?: site_configOrderByWithRelationInput | site_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for site_configs.
     */
    cursor?: site_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` site_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` site_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of site_configs.
     */
    distinct?: Site_configScalarFieldEnum | Site_configScalarFieldEnum[]
  }

  /**
   * site_config findMany
   */
  export type site_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter, which site_configs to fetch.
     */
    where?: site_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of site_configs to fetch.
     */
    orderBy?: site_configOrderByWithRelationInput | site_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing site_configs.
     */
    cursor?: site_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` site_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` site_configs.
     */
    skip?: number
    distinct?: Site_configScalarFieldEnum | Site_configScalarFieldEnum[]
  }

  /**
   * site_config create
   */
  export type site_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * The data needed to create a site_config.
     */
    data: XOR<site_configCreateInput, site_configUncheckedCreateInput>
  }

  /**
   * site_config createMany
   */
  export type site_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many site_configs.
     */
    data: site_configCreateManyInput | site_configCreateManyInput[]
  }

  /**
   * site_config update
   */
  export type site_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * The data needed to update a site_config.
     */
    data: XOR<site_configUpdateInput, site_configUncheckedUpdateInput>
    /**
     * Choose, which site_config to update.
     */
    where: site_configWhereUniqueInput
  }

  /**
   * site_config updateMany
   */
  export type site_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update site_configs.
     */
    data: XOR<site_configUpdateManyMutationInput, site_configUncheckedUpdateManyInput>
    /**
     * Filter which site_configs to update
     */
    where?: site_configWhereInput
    /**
     * Limit how many site_configs to update.
     */
    limit?: number
  }

  /**
   * site_config upsert
   */
  export type site_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * The filter to search for the site_config to update in case it exists.
     */
    where: site_configWhereUniqueInput
    /**
     * In case the site_config found by the `where` argument doesn't exist, create a new site_config with this data.
     */
    create: XOR<site_configCreateInput, site_configUncheckedCreateInput>
    /**
     * In case the site_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<site_configUpdateInput, site_configUncheckedUpdateInput>
  }

  /**
   * site_config delete
   */
  export type site_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
    /**
     * Filter which site_config to delete.
     */
    where: site_configWhereUniqueInput
  }

  /**
   * site_config deleteMany
   */
  export type site_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which site_configs to delete
     */
    where?: site_configWhereInput
    /**
     * Limit how many site_configs to delete.
     */
    limit?: number
  }

  /**
   * site_config findRaw
   */
  export type site_configFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * site_config aggregateRaw
   */
  export type site_configAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * site_config without action
   */
  export type site_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the site_config
     */
    select?: site_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the site_config
     */
    omit?: site_configOmit<ExtArgs> | null
  }


  /**
   * Model discount_codes
   */

  export type AggregateDiscount_codes = {
    _count: Discount_codesCountAggregateOutputType | null
    _avg: Discount_codesAvgAggregateOutputType | null
    _sum: Discount_codesSumAggregateOutputType | null
    _min: Discount_codesMinAggregateOutputType | null
    _max: Discount_codesMaxAggregateOutputType | null
  }

  export type Discount_codesAvgAggregateOutputType = {
    discountValue: number | null
  }

  export type Discount_codesSumAggregateOutputType = {
    discountValue: number | null
  }

  export type Discount_codesMinAggregateOutputType = {
    id: string | null
    public_name: string | null
    discountType: string | null
    discountValue: number | null
    discountCode: string | null
    sellerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type Discount_codesMaxAggregateOutputType = {
    id: string | null
    public_name: string | null
    discountType: string | null
    discountValue: number | null
    discountCode: string | null
    sellerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type Discount_codesCountAggregateOutputType = {
    id: number
    public_name: number
    discountType: number
    discountValue: number
    discountCode: number
    sellerId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type Discount_codesAvgAggregateInputType = {
    discountValue?: true
  }

  export type Discount_codesSumAggregateInputType = {
    discountValue?: true
  }

  export type Discount_codesMinAggregateInputType = {
    id?: true
    public_name?: true
    discountType?: true
    discountValue?: true
    discountCode?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type Discount_codesMaxAggregateInputType = {
    id?: true
    public_name?: true
    discountType?: true
    discountValue?: true
    discountCode?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type Discount_codesCountAggregateInputType = {
    id?: true
    public_name?: true
    discountType?: true
    discountValue?: true
    discountCode?: true
    sellerId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type Discount_codesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discount_codes to aggregate.
     */
    where?: discount_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discount_codes to fetch.
     */
    orderBy?: discount_codesOrderByWithRelationInput | discount_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discount_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discount_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discount_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discount_codes
    **/
    _count?: true | Discount_codesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Discount_codesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Discount_codesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Discount_codesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Discount_codesMaxAggregateInputType
  }

  export type GetDiscount_codesAggregateType<T extends Discount_codesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount_codes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount_codes[P]>
      : GetScalarType<T[P], AggregateDiscount_codes[P]>
  }




  export type discount_codesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discount_codesWhereInput
    orderBy?: discount_codesOrderByWithAggregationInput | discount_codesOrderByWithAggregationInput[]
    by: Discount_codesScalarFieldEnum[] | Discount_codesScalarFieldEnum
    having?: discount_codesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Discount_codesCountAggregateInputType | true
    _avg?: Discount_codesAvgAggregateInputType
    _sum?: Discount_codesSumAggregateInputType
    _min?: Discount_codesMinAggregateInputType
    _max?: Discount_codesMaxAggregateInputType
  }

  export type Discount_codesGroupByOutputType = {
    id: string
    public_name: string
    discountType: string
    discountValue: number
    discountCode: string
    sellerId: string
    createdAt: Date
    updateAt: Date
    _count: Discount_codesCountAggregateOutputType | null
    _avg: Discount_codesAvgAggregateOutputType | null
    _sum: Discount_codesSumAggregateOutputType | null
    _min: Discount_codesMinAggregateOutputType | null
    _max: Discount_codesMaxAggregateOutputType | null
  }

  type GetDiscount_codesGroupByPayload<T extends discount_codesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Discount_codesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Discount_codesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Discount_codesGroupByOutputType[P]>
            : GetScalarType<T[P], Discount_codesGroupByOutputType[P]>
        }
      >
    >


  export type discount_codesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_name?: boolean
    discountType?: boolean
    discountValue?: boolean
    discountCode?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["discount_codes"]>



  export type discount_codesSelectScalar = {
    id?: boolean
    public_name?: boolean
    discountType?: boolean
    discountValue?: boolean
    discountCode?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type discount_codesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "public_name" | "discountType" | "discountValue" | "discountCode" | "sellerId" | "createdAt" | "updateAt", ExtArgs["result"]["discount_codes"]>

  export type $discount_codesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discount_codes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      public_name: string
      discountType: string
      discountValue: number
      discountCode: string
      sellerId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["discount_codes"]>
    composites: {}
  }

  type discount_codesGetPayload<S extends boolean | null | undefined | discount_codesDefaultArgs> = $Result.GetResult<Prisma.$discount_codesPayload, S>

  type discount_codesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<discount_codesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Discount_codesCountAggregateInputType | true
    }

  export interface discount_codesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discount_codes'], meta: { name: 'discount_codes' } }
    /**
     * Find zero or one Discount_codes that matches the filter.
     * @param {discount_codesFindUniqueArgs} args - Arguments to find a Discount_codes
     * @example
     * // Get one Discount_codes
     * const discount_codes = await prisma.discount_codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends discount_codesFindUniqueArgs>(args: SelectSubset<T, discount_codesFindUniqueArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount_codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {discount_codesFindUniqueOrThrowArgs} args - Arguments to find a Discount_codes
     * @example
     * // Get one Discount_codes
     * const discount_codes = await prisma.discount_codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends discount_codesFindUniqueOrThrowArgs>(args: SelectSubset<T, discount_codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesFindFirstArgs} args - Arguments to find a Discount_codes
     * @example
     * // Get one Discount_codes
     * const discount_codes = await prisma.discount_codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends discount_codesFindFirstArgs>(args?: SelectSubset<T, discount_codesFindFirstArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount_codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesFindFirstOrThrowArgs} args - Arguments to find a Discount_codes
     * @example
     * // Get one Discount_codes
     * const discount_codes = await prisma.discount_codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends discount_codesFindFirstOrThrowArgs>(args?: SelectSubset<T, discount_codesFindFirstOrThrowArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discount_codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discount_codes
     * const discount_codes = await prisma.discount_codes.findMany()
     * 
     * // Get first 10 Discount_codes
     * const discount_codes = await prisma.discount_codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discount_codesWithIdOnly = await prisma.discount_codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends discount_codesFindManyArgs>(args?: SelectSubset<T, discount_codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount_codes.
     * @param {discount_codesCreateArgs} args - Arguments to create a Discount_codes.
     * @example
     * // Create one Discount_codes
     * const Discount_codes = await prisma.discount_codes.create({
     *   data: {
     *     // ... data to create a Discount_codes
     *   }
     * })
     * 
     */
    create<T extends discount_codesCreateArgs>(args: SelectSubset<T, discount_codesCreateArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discount_codes.
     * @param {discount_codesCreateManyArgs} args - Arguments to create many Discount_codes.
     * @example
     * // Create many Discount_codes
     * const discount_codes = await prisma.discount_codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends discount_codesCreateManyArgs>(args?: SelectSubset<T, discount_codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discount_codes.
     * @param {discount_codesDeleteArgs} args - Arguments to delete one Discount_codes.
     * @example
     * // Delete one Discount_codes
     * const Discount_codes = await prisma.discount_codes.delete({
     *   where: {
     *     // ... filter to delete one Discount_codes
     *   }
     * })
     * 
     */
    delete<T extends discount_codesDeleteArgs>(args: SelectSubset<T, discount_codesDeleteArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount_codes.
     * @param {discount_codesUpdateArgs} args - Arguments to update one Discount_codes.
     * @example
     * // Update one Discount_codes
     * const discount_codes = await prisma.discount_codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends discount_codesUpdateArgs>(args: SelectSubset<T, discount_codesUpdateArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discount_codes.
     * @param {discount_codesDeleteManyArgs} args - Arguments to filter Discount_codes to delete.
     * @example
     * // Delete a few Discount_codes
     * const { count } = await prisma.discount_codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends discount_codesDeleteManyArgs>(args?: SelectSubset<T, discount_codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discount_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discount_codes
     * const discount_codes = await prisma.discount_codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends discount_codesUpdateManyArgs>(args: SelectSubset<T, discount_codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discount_codes.
     * @param {discount_codesUpsertArgs} args - Arguments to update or create a Discount_codes.
     * @example
     * // Update or create a Discount_codes
     * const discount_codes = await prisma.discount_codes.upsert({
     *   create: {
     *     // ... data to create a Discount_codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount_codes we want to update
     *   }
     * })
     */
    upsert<T extends discount_codesUpsertArgs>(args: SelectSubset<T, discount_codesUpsertArgs<ExtArgs>>): Prisma__discount_codesClient<$Result.GetResult<Prisma.$discount_codesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discount_codes that matches the filter.
     * @param {discount_codesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const discount_codes = await prisma.discount_codes.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: discount_codesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Discount_codes.
     * @param {discount_codesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const discount_codes = await prisma.discount_codes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: discount_codesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Discount_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesCountArgs} args - Arguments to filter Discount_codes to count.
     * @example
     * // Count the number of Discount_codes
     * const count = await prisma.discount_codes.count({
     *   where: {
     *     // ... the filter for the Discount_codes we want to count
     *   }
     * })
    **/
    count<T extends discount_codesCountArgs>(
      args?: Subset<T, discount_codesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Discount_codesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discount_codesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Discount_codesAggregateArgs>(args: Subset<T, Discount_codesAggregateArgs>): Prisma.PrismaPromise<GetDiscount_codesAggregateType<T>>

    /**
     * Group by Discount_codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discount_codesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends discount_codesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discount_codesGroupByArgs['orderBy'] }
        : { orderBy?: discount_codesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, discount_codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscount_codesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discount_codes model
   */
  readonly fields: discount_codesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discount_codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discount_codesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the discount_codes model
   */
  interface discount_codesFieldRefs {
    readonly id: FieldRef<"discount_codes", 'String'>
    readonly public_name: FieldRef<"discount_codes", 'String'>
    readonly discountType: FieldRef<"discount_codes", 'String'>
    readonly discountValue: FieldRef<"discount_codes", 'Float'>
    readonly discountCode: FieldRef<"discount_codes", 'String'>
    readonly sellerId: FieldRef<"discount_codes", 'String'>
    readonly createdAt: FieldRef<"discount_codes", 'DateTime'>
    readonly updateAt: FieldRef<"discount_codes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * discount_codes findUnique
   */
  export type discount_codesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter, which discount_codes to fetch.
     */
    where: discount_codesWhereUniqueInput
  }

  /**
   * discount_codes findUniqueOrThrow
   */
  export type discount_codesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter, which discount_codes to fetch.
     */
    where: discount_codesWhereUniqueInput
  }

  /**
   * discount_codes findFirst
   */
  export type discount_codesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter, which discount_codes to fetch.
     */
    where?: discount_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discount_codes to fetch.
     */
    orderBy?: discount_codesOrderByWithRelationInput | discount_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discount_codes.
     */
    cursor?: discount_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discount_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discount_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discount_codes.
     */
    distinct?: Discount_codesScalarFieldEnum | Discount_codesScalarFieldEnum[]
  }

  /**
   * discount_codes findFirstOrThrow
   */
  export type discount_codesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter, which discount_codes to fetch.
     */
    where?: discount_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discount_codes to fetch.
     */
    orderBy?: discount_codesOrderByWithRelationInput | discount_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discount_codes.
     */
    cursor?: discount_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discount_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discount_codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discount_codes.
     */
    distinct?: Discount_codesScalarFieldEnum | Discount_codesScalarFieldEnum[]
  }

  /**
   * discount_codes findMany
   */
  export type discount_codesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter, which discount_codes to fetch.
     */
    where?: discount_codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discount_codes to fetch.
     */
    orderBy?: discount_codesOrderByWithRelationInput | discount_codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discount_codes.
     */
    cursor?: discount_codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discount_codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discount_codes.
     */
    skip?: number
    distinct?: Discount_codesScalarFieldEnum | Discount_codesScalarFieldEnum[]
  }

  /**
   * discount_codes create
   */
  export type discount_codesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * The data needed to create a discount_codes.
     */
    data: XOR<discount_codesCreateInput, discount_codesUncheckedCreateInput>
  }

  /**
   * discount_codes createMany
   */
  export type discount_codesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discount_codes.
     */
    data: discount_codesCreateManyInput | discount_codesCreateManyInput[]
  }

  /**
   * discount_codes update
   */
  export type discount_codesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * The data needed to update a discount_codes.
     */
    data: XOR<discount_codesUpdateInput, discount_codesUncheckedUpdateInput>
    /**
     * Choose, which discount_codes to update.
     */
    where: discount_codesWhereUniqueInput
  }

  /**
   * discount_codes updateMany
   */
  export type discount_codesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discount_codes.
     */
    data: XOR<discount_codesUpdateManyMutationInput, discount_codesUncheckedUpdateManyInput>
    /**
     * Filter which discount_codes to update
     */
    where?: discount_codesWhereInput
    /**
     * Limit how many discount_codes to update.
     */
    limit?: number
  }

  /**
   * discount_codes upsert
   */
  export type discount_codesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * The filter to search for the discount_codes to update in case it exists.
     */
    where: discount_codesWhereUniqueInput
    /**
     * In case the discount_codes found by the `where` argument doesn't exist, create a new discount_codes with this data.
     */
    create: XOR<discount_codesCreateInput, discount_codesUncheckedCreateInput>
    /**
     * In case the discount_codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discount_codesUpdateInput, discount_codesUncheckedUpdateInput>
  }

  /**
   * discount_codes delete
   */
  export type discount_codesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
    /**
     * Filter which discount_codes to delete.
     */
    where: discount_codesWhereUniqueInput
  }

  /**
   * discount_codes deleteMany
   */
  export type discount_codesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discount_codes to delete
     */
    where?: discount_codesWhereInput
    /**
     * Limit how many discount_codes to delete.
     */
    limit?: number
  }

  /**
   * discount_codes findRaw
   */
  export type discount_codesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * discount_codes aggregateRaw
   */
  export type discount_codesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * discount_codes without action
   */
  export type discount_codesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discount_codes
     */
    select?: discount_codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discount_codes
     */
    omit?: discount_codesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ImagesScalarFieldEnum: {
    id: 'id',
    file_id: 'file_id',
    url: 'url',
    shopId: 'shopId',
    userId: 'userId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    following: 'following',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ShopReviewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    reviews: 'reviews',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    shopsId: 'shopsId'
  };

  export type ShopReviewsScalarFieldEnum = (typeof ShopReviewsScalarFieldEnum)[keyof typeof ShopReviewsScalarFieldEnum]


  export const ShopsScalarFieldEnum: {
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

  export type ShopsScalarFieldEnum = (typeof ShopsScalarFieldEnum)[keyof typeof ShopsScalarFieldEnum]


  export const SellersScalarFieldEnum: {
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

  export type SellersScalarFieldEnum = (typeof SellersScalarFieldEnum)[keyof typeof SellersScalarFieldEnum]


  export const Site_configScalarFieldEnum: {
    id: 'id',
    categories: 'categories',
    subCategories: 'subCategories'
  };

  export type Site_configScalarFieldEnum = (typeof Site_configScalarFieldEnum)[keyof typeof Site_configScalarFieldEnum]


  export const Discount_codesScalarFieldEnum: {
    id: 'id',
    public_name: 'public_name',
    discountType: 'discountType',
    discountValue: 'discountValue',
    discountCode: 'discountCode',
    sellerId: 'sellerId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type Discount_codesScalarFieldEnum = (typeof Discount_codesScalarFieldEnum)[keyof typeof Discount_codesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    id?: StringFilter<"images"> | string
    file_id?: StringFilter<"images"> | string
    url?: StringFilter<"images"> | string
    shopId?: StringNullableFilter<"images"> | string | null
    userId?: StringFilter<"images"> | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    shops?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }

  export type imagesOrderByWithRelationInput = {
    id?: SortOrder
    file_id?: SortOrder
    url?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    users?: usersOrderByWithRelationInput
    shops?: shopsOrderByWithRelationInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId?: string
    userId?: string
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    file_id?: StringFilter<"images"> | string
    url?: StringFilter<"images"> | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    shops?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }, "id" | "shopId" | "userId">

  export type imagesOrderByWithAggregationInput = {
    id?: SortOrder
    file_id?: SortOrder
    url?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    _count?: imagesCountOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"images"> | string
    file_id?: StringWithAggregatesFilter<"images"> | string
    url?: StringWithAggregatesFilter<"images"> | string
    shopId?: StringNullableWithAggregatesFilter<"images"> | string | null
    userId?: StringWithAggregatesFilter<"images"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    following?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    avatar?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    shopReviews?: ShopReviewsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    following?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: imagesOrderByWithRelationInput
    shopReviews?: shopReviewsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    following?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    avatar?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    shopReviews?: ShopReviewsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    following?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    following?: StringNullableListFilter<"users">
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type shopReviewsWhereInput = {
    AND?: shopReviewsWhereInput | shopReviewsWhereInput[]
    OR?: shopReviewsWhereInput[]
    NOT?: shopReviewsWhereInput | shopReviewsWhereInput[]
    id?: StringFilter<"shopReviews"> | string
    userId?: StringFilter<"shopReviews"> | string
    rating?: FloatFilter<"shopReviews"> | number
    reviews?: StringNullableFilter<"shopReviews"> | string | null
    createdAt?: DateTimeFilter<"shopReviews"> | Date | string
    updatedAt?: DateTimeFilter<"shopReviews"> | Date | string
    shopsId?: StringNullableFilter<"shopReviews"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    shops?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }

  export type shopReviewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopsId?: SortOrder
    user?: usersOrderByWithRelationInput
    shops?: shopsOrderByWithRelationInput
  }

  export type shopReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: shopReviewsWhereInput | shopReviewsWhereInput[]
    OR?: shopReviewsWhereInput[]
    NOT?: shopReviewsWhereInput | shopReviewsWhereInput[]
    userId?: StringFilter<"shopReviews"> | string
    rating?: FloatFilter<"shopReviews"> | number
    reviews?: StringNullableFilter<"shopReviews"> | string | null
    createdAt?: DateTimeFilter<"shopReviews"> | Date | string
    updatedAt?: DateTimeFilter<"shopReviews"> | Date | string
    shopsId?: StringNullableFilter<"shopReviews"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    shops?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }, "id">

  export type shopReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopsId?: SortOrder
    _count?: shopReviewsCountOrderByAggregateInput
    _avg?: shopReviewsAvgOrderByAggregateInput
    _max?: shopReviewsMaxOrderByAggregateInput
    _min?: shopReviewsMinOrderByAggregateInput
    _sum?: shopReviewsSumOrderByAggregateInput
  }

  export type shopReviewsScalarWhereWithAggregatesInput = {
    AND?: shopReviewsScalarWhereWithAggregatesInput | shopReviewsScalarWhereWithAggregatesInput[]
    OR?: shopReviewsScalarWhereWithAggregatesInput[]
    NOT?: shopReviewsScalarWhereWithAggregatesInput | shopReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"shopReviews"> | string
    userId?: StringWithAggregatesFilter<"shopReviews"> | string
    rating?: FloatWithAggregatesFilter<"shopReviews"> | number
    reviews?: StringNullableWithAggregatesFilter<"shopReviews"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"shopReviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"shopReviews"> | Date | string
    shopsId?: StringNullableWithAggregatesFilter<"shopReviews"> | string | null
  }

  export type shopsWhereInput = {
    AND?: shopsWhereInput | shopsWhereInput[]
    OR?: shopsWhereInput[]
    NOT?: shopsWhereInput | shopsWhereInput[]
    id?: StringFilter<"shops"> | string
    name?: StringFilter<"shops"> | string
    bio?: StringNullableFilter<"shops"> | string | null
    category?: StringFilter<"shops"> | string
    coverBanner?: StringNullableFilter<"shops"> | string | null
    address?: StringFilter<"shops"> | string
    opening_hours?: StringNullableFilter<"shops"> | string | null
    website?: StringNullableFilter<"shops"> | string | null
    socialLinks?: JsonNullableListFilter<"shops">
    rating?: FloatFilter<"shops"> | number
    sellerId?: StringFilter<"shops"> | string
    createdAt?: DateTimeFilter<"shops"> | Date | string
    updateAt?: DateTimeFilter<"shops"> | Date | string
    avatar?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    reviews?: ShopReviewsListRelationFilter
    sellers?: XOR<SellersScalarRelationFilter, sellersWhereInput>
  }

  export type shopsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    category?: SortOrder
    coverBanner?: SortOrder
    address?: SortOrder
    opening_hours?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    rating?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    avatar?: imagesOrderByWithRelationInput
    reviews?: shopReviewsOrderByRelationAggregateInput
    sellers?: sellersOrderByWithRelationInput
  }

  export type shopsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sellerId?: string
    AND?: shopsWhereInput | shopsWhereInput[]
    OR?: shopsWhereInput[]
    NOT?: shopsWhereInput | shopsWhereInput[]
    name?: StringFilter<"shops"> | string
    bio?: StringNullableFilter<"shops"> | string | null
    category?: StringFilter<"shops"> | string
    coverBanner?: StringNullableFilter<"shops"> | string | null
    address?: StringFilter<"shops"> | string
    opening_hours?: StringNullableFilter<"shops"> | string | null
    website?: StringNullableFilter<"shops"> | string | null
    socialLinks?: JsonNullableListFilter<"shops">
    rating?: FloatFilter<"shops"> | number
    createdAt?: DateTimeFilter<"shops"> | Date | string
    updateAt?: DateTimeFilter<"shops"> | Date | string
    avatar?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    reviews?: ShopReviewsListRelationFilter
    sellers?: XOR<SellersScalarRelationFilter, sellersWhereInput>
  }, "id" | "sellerId">

  export type shopsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    category?: SortOrder
    coverBanner?: SortOrder
    address?: SortOrder
    opening_hours?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    rating?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: shopsCountOrderByAggregateInput
    _avg?: shopsAvgOrderByAggregateInput
    _max?: shopsMaxOrderByAggregateInput
    _min?: shopsMinOrderByAggregateInput
    _sum?: shopsSumOrderByAggregateInput
  }

  export type shopsScalarWhereWithAggregatesInput = {
    AND?: shopsScalarWhereWithAggregatesInput | shopsScalarWhereWithAggregatesInput[]
    OR?: shopsScalarWhereWithAggregatesInput[]
    NOT?: shopsScalarWhereWithAggregatesInput | shopsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"shops"> | string
    name?: StringWithAggregatesFilter<"shops"> | string
    bio?: StringNullableWithAggregatesFilter<"shops"> | string | null
    category?: StringWithAggregatesFilter<"shops"> | string
    coverBanner?: StringNullableWithAggregatesFilter<"shops"> | string | null
    address?: StringWithAggregatesFilter<"shops"> | string
    opening_hours?: StringNullableWithAggregatesFilter<"shops"> | string | null
    website?: StringNullableWithAggregatesFilter<"shops"> | string | null
    socialLinks?: JsonNullableListFilter<"shops">
    rating?: FloatWithAggregatesFilter<"shops"> | number
    sellerId?: StringWithAggregatesFilter<"shops"> | string
    createdAt?: DateTimeWithAggregatesFilter<"shops"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"shops"> | Date | string
  }

  export type sellersWhereInput = {
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    id?: StringFilter<"sellers"> | string
    name?: StringFilter<"sellers"> | string
    email?: StringFilter<"sellers"> | string
    phone_number?: StringFilter<"sellers"> | string
    country?: StringFilter<"sellers"> | string
    password?: StringFilter<"sellers"> | string
    stripeId?: StringNullableFilter<"sellers"> | string | null
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
    shop?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }

  export type sellersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    password?: SortOrder
    stripeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: shopsOrderByWithRelationInput
  }

  export type sellersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    name?: StringFilter<"sellers"> | string
    phone_number?: StringFilter<"sellers"> | string
    country?: StringFilter<"sellers"> | string
    password?: StringFilter<"sellers"> | string
    stripeId?: StringNullableFilter<"sellers"> | string | null
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
    shop?: XOR<ShopsNullableScalarRelationFilter, shopsWhereInput> | null
  }, "id" | "email">

  export type sellersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    password?: SortOrder
    stripeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sellersCountOrderByAggregateInput
    _max?: sellersMaxOrderByAggregateInput
    _min?: sellersMinOrderByAggregateInput
  }

  export type sellersScalarWhereWithAggregatesInput = {
    AND?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    OR?: sellersScalarWhereWithAggregatesInput[]
    NOT?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sellers"> | string
    name?: StringWithAggregatesFilter<"sellers"> | string
    email?: StringWithAggregatesFilter<"sellers"> | string
    phone_number?: StringWithAggregatesFilter<"sellers"> | string
    country?: StringWithAggregatesFilter<"sellers"> | string
    password?: StringWithAggregatesFilter<"sellers"> | string
    stripeId?: StringNullableWithAggregatesFilter<"sellers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
  }

  export type site_configWhereInput = {
    AND?: site_configWhereInput | site_configWhereInput[]
    OR?: site_configWhereInput[]
    NOT?: site_configWhereInput | site_configWhereInput[]
    id?: StringFilter<"site_config"> | string
    categories?: StringNullableListFilter<"site_config">
    subCategories?: JsonFilter<"site_config">
  }

  export type site_configOrderByWithRelationInput = {
    id?: SortOrder
    categories?: SortOrder
    subCategories?: SortOrder
  }

  export type site_configWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: site_configWhereInput | site_configWhereInput[]
    OR?: site_configWhereInput[]
    NOT?: site_configWhereInput | site_configWhereInput[]
    categories?: StringNullableListFilter<"site_config">
    subCategories?: JsonFilter<"site_config">
  }, "id">

  export type site_configOrderByWithAggregationInput = {
    id?: SortOrder
    categories?: SortOrder
    subCategories?: SortOrder
    _count?: site_configCountOrderByAggregateInput
    _max?: site_configMaxOrderByAggregateInput
    _min?: site_configMinOrderByAggregateInput
  }

  export type site_configScalarWhereWithAggregatesInput = {
    AND?: site_configScalarWhereWithAggregatesInput | site_configScalarWhereWithAggregatesInput[]
    OR?: site_configScalarWhereWithAggregatesInput[]
    NOT?: site_configScalarWhereWithAggregatesInput | site_configScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"site_config"> | string
    categories?: StringNullableListFilter<"site_config">
    subCategories?: JsonWithAggregatesFilter<"site_config">
  }

  export type discount_codesWhereInput = {
    AND?: discount_codesWhereInput | discount_codesWhereInput[]
    OR?: discount_codesWhereInput[]
    NOT?: discount_codesWhereInput | discount_codesWhereInput[]
    id?: StringFilter<"discount_codes"> | string
    public_name?: StringFilter<"discount_codes"> | string
    discountType?: StringFilter<"discount_codes"> | string
    discountValue?: FloatFilter<"discount_codes"> | number
    discountCode?: StringFilter<"discount_codes"> | string
    sellerId?: StringFilter<"discount_codes"> | string
    createdAt?: DateTimeFilter<"discount_codes"> | Date | string
    updateAt?: DateTimeFilter<"discount_codes"> | Date | string
  }

  export type discount_codesOrderByWithRelationInput = {
    id?: SortOrder
    public_name?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    discountCode?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type discount_codesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discountCode?: string
    AND?: discount_codesWhereInput | discount_codesWhereInput[]
    OR?: discount_codesWhereInput[]
    NOT?: discount_codesWhereInput | discount_codesWhereInput[]
    public_name?: StringFilter<"discount_codes"> | string
    discountType?: StringFilter<"discount_codes"> | string
    discountValue?: FloatFilter<"discount_codes"> | number
    sellerId?: StringFilter<"discount_codes"> | string
    createdAt?: DateTimeFilter<"discount_codes"> | Date | string
    updateAt?: DateTimeFilter<"discount_codes"> | Date | string
  }, "id" | "discountCode">

  export type discount_codesOrderByWithAggregationInput = {
    id?: SortOrder
    public_name?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    discountCode?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: discount_codesCountOrderByAggregateInput
    _avg?: discount_codesAvgOrderByAggregateInput
    _max?: discount_codesMaxOrderByAggregateInput
    _min?: discount_codesMinOrderByAggregateInput
    _sum?: discount_codesSumOrderByAggregateInput
  }

  export type discount_codesScalarWhereWithAggregatesInput = {
    AND?: discount_codesScalarWhereWithAggregatesInput | discount_codesScalarWhereWithAggregatesInput[]
    OR?: discount_codesScalarWhereWithAggregatesInput[]
    NOT?: discount_codesScalarWhereWithAggregatesInput | discount_codesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"discount_codes"> | string
    public_name?: StringWithAggregatesFilter<"discount_codes"> | string
    discountType?: StringWithAggregatesFilter<"discount_codes"> | string
    discountValue?: FloatWithAggregatesFilter<"discount_codes"> | number
    discountCode?: StringWithAggregatesFilter<"discount_codes"> | string
    sellerId?: StringWithAggregatesFilter<"discount_codes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"discount_codes"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"discount_codes"> | Date | string
  }

  export type imagesCreateInput = {
    id?: string
    file_id: string
    url: string
    users?: usersCreateNestedOneWithoutAvatarInput
    shops?: shopsCreateNestedOneWithoutAvatarInput
  }

  export type imagesUncheckedCreateInput = {
    id?: string
    file_id: string
    url: string
    shopId?: string | null
    userId: string
  }

  export type imagesUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutAvatarNestedInput
    shops?: shopsUpdateOneWithoutAvatarNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type imagesCreateManyInput = {
    id?: string
    file_id: string
    url: string
    shopId?: string | null
    userId: string
  }

  export type imagesUpdateManyMutationInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type imagesUncheckedUpdateManyInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: imagesCreateNestedOneWithoutUsersInput
    shopReviews?: shopReviewsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: imagesUncheckedCreateNestedOneWithoutUsersInput
    shopReviews?: shopReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUpdateOneWithoutUsersNestedInput
    shopReviews?: shopReviewsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUncheckedUpdateOneWithoutUsersNestedInput
    shopReviews?: shopReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopReviewsCreateInput = {
    id?: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutShopReviewsInput
    shops?: shopsCreateNestedOneWithoutReviewsInput
  }

  export type shopReviewsUncheckedCreateInput = {
    id?: string
    userId: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopsId?: string | null
  }

  export type shopReviewsUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutShopReviewsNestedInput
    shops?: shopsUpdateOneWithoutReviewsNestedInput
  }

  export type shopReviewsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopReviewsCreateManyInput = {
    id?: string
    userId: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopsId?: string | null
  }

  export type shopReviewsUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopReviewsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopsCreateInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesCreateNestedOneWithoutShopsInput
    reviews?: shopReviewsCreateNestedManyWithoutShopsInput
    sellers: sellersCreateNestedOneWithoutShopInput
  }

  export type shopsUncheckedCreateInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesUncheckedCreateNestedOneWithoutShopsInput
    reviews?: shopReviewsUncheckedCreateNestedManyWithoutShopsInput
  }

  export type shopsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUpdateOneWithoutShopsNestedInput
    reviews?: shopReviewsUpdateManyWithoutShopsNestedInput
    sellers?: sellersUpdateOneRequiredWithoutShopNestedInput
  }

  export type shopsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUncheckedUpdateOneWithoutShopsNestedInput
    reviews?: shopReviewsUncheckedUpdateManyWithoutShopsNestedInput
  }

  export type shopsCreateManyInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type shopsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersCreateInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: shopsCreateNestedOneWithoutSellersInput
  }

  export type sellersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: shopsUncheckedCreateNestedOneWithoutSellersInput
  }

  export type sellersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: shopsUpdateOneWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: shopsUncheckedUpdateOneWithoutSellersNestedInput
  }

  export type sellersCreateManyInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type site_configCreateInput = {
    id?: string
    categories?: site_configCreatecategoriesInput | string[]
    subCategories: InputJsonValue
  }

  export type site_configUncheckedCreateInput = {
    id?: string
    categories?: site_configCreatecategoriesInput | string[]
    subCategories: InputJsonValue
  }

  export type site_configUpdateInput = {
    categories?: site_configUpdatecategoriesInput | string[]
    subCategories?: InputJsonValue | InputJsonValue
  }

  export type site_configUncheckedUpdateInput = {
    categories?: site_configUpdatecategoriesInput | string[]
    subCategories?: InputJsonValue | InputJsonValue
  }

  export type site_configCreateManyInput = {
    id?: string
    categories?: site_configCreatecategoriesInput | string[]
    subCategories: InputJsonValue
  }

  export type site_configUpdateManyMutationInput = {
    categories?: site_configUpdatecategoriesInput | string[]
    subCategories?: InputJsonValue | InputJsonValue
  }

  export type site_configUncheckedUpdateManyInput = {
    categories?: site_configUpdatecategoriesInput | string[]
    subCategories?: InputJsonValue | InputJsonValue
  }

  export type discount_codesCreateInput = {
    id?: string
    public_name: string
    discountType: string
    discountValue: number
    discountCode: string
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type discount_codesUncheckedCreateInput = {
    id?: string
    public_name: string
    discountType: string
    discountValue: number
    discountCode: string
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type discount_codesUpdateInput = {
    public_name?: StringFieldUpdateOperationsInput | string
    discountType?: StringFieldUpdateOperationsInput | string
    discountValue?: FloatFieldUpdateOperationsInput | number
    discountCode?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type discount_codesUncheckedUpdateInput = {
    public_name?: StringFieldUpdateOperationsInput | string
    discountType?: StringFieldUpdateOperationsInput | string
    discountValue?: FloatFieldUpdateOperationsInput | number
    discountCode?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type discount_codesCreateManyInput = {
    id?: string
    public_name: string
    discountType: string
    discountValue: number
    discountCode: string
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type discount_codesUpdateManyMutationInput = {
    public_name?: StringFieldUpdateOperationsInput | string
    discountType?: StringFieldUpdateOperationsInput | string
    discountValue?: FloatFieldUpdateOperationsInput | number
    discountCode?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type discount_codesUncheckedUpdateManyInput = {
    public_name?: StringFieldUpdateOperationsInput | string
    discountType?: StringFieldUpdateOperationsInput | string
    discountValue?: FloatFieldUpdateOperationsInput | number
    discountCode?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ShopsNullableScalarRelationFilter = {
    is?: shopsWhereInput | null
    isNot?: shopsWhereInput | null
  }

  export type imagesCountOrderByAggregateInput = {
    id?: SortOrder
    file_id?: SortOrder
    url?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    file_id?: SortOrder
    url?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    id?: SortOrder
    file_id?: SortOrder
    url?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ImagesNullableScalarRelationFilter = {
    is?: imagesWhereInput | null
    isNot?: imagesWhereInput | null
  }

  export type ShopReviewsListRelationFilter = {
    every?: shopReviewsWhereInput
    some?: shopReviewsWhereInput
    none?: shopReviewsWhereInput
  }

  export type shopReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    following?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type shopReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopsId?: SortOrder
  }

  export type shopReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type shopReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopsId?: SortOrder
  }

  export type shopReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shopsId?: SortOrder
  }

  export type shopReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SellersScalarRelationFilter = {
    is?: sellersWhereInput
    isNot?: sellersWhereInput
  }

  export type shopsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    category?: SortOrder
    coverBanner?: SortOrder
    address?: SortOrder
    opening_hours?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    rating?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type shopsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type shopsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    category?: SortOrder
    coverBanner?: SortOrder
    address?: SortOrder
    opening_hours?: SortOrder
    website?: SortOrder
    rating?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type shopsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    category?: SortOrder
    coverBanner?: SortOrder
    address?: SortOrder
    opening_hours?: SortOrder
    website?: SortOrder
    rating?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type shopsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type sellersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    password?: SortOrder
    stripeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    password?: SortOrder
    stripeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    country?: SortOrder
    password?: SortOrder
    stripeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type site_configCountOrderByAggregateInput = {
    id?: SortOrder
    categories?: SortOrder
    subCategories?: SortOrder
  }

  export type site_configMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type site_configMinOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type discount_codesCountOrderByAggregateInput = {
    id?: SortOrder
    public_name?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    discountCode?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type discount_codesAvgOrderByAggregateInput = {
    discountValue?: SortOrder
  }

  export type discount_codesMaxOrderByAggregateInput = {
    id?: SortOrder
    public_name?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    discountCode?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type discount_codesMinOrderByAggregateInput = {
    id?: SortOrder
    public_name?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    discountCode?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type discount_codesSumOrderByAggregateInput = {
    discountValue?: SortOrder
  }

  export type usersCreateNestedOneWithoutAvatarInput = {
    create?: XOR<usersCreateWithoutAvatarInput, usersUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: usersCreateOrConnectWithoutAvatarInput
    connect?: usersWhereUniqueInput
  }

  export type shopsCreateNestedOneWithoutAvatarInput = {
    create?: XOR<shopsCreateWithoutAvatarInput, shopsUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: shopsCreateOrConnectWithoutAvatarInput
    connect?: shopsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateOneWithoutAvatarNestedInput = {
    create?: XOR<usersCreateWithoutAvatarInput, usersUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: usersCreateOrConnectWithoutAvatarInput
    upsert?: usersUpsertWithoutAvatarInput
    disconnect?: boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAvatarInput, usersUpdateWithoutAvatarInput>, usersUncheckedUpdateWithoutAvatarInput>
  }

  export type shopsUpdateOneWithoutAvatarNestedInput = {
    create?: XOR<shopsCreateWithoutAvatarInput, shopsUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: shopsCreateOrConnectWithoutAvatarInput
    upsert?: shopsUpsertWithoutAvatarInput
    disconnect?: boolean
    delete?: shopsWhereInput | boolean
    connect?: shopsWhereUniqueInput
    update?: XOR<XOR<shopsUpdateToOneWithWhereWithoutAvatarInput, shopsUpdateWithoutAvatarInput>, shopsUncheckedUpdateWithoutAvatarInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type usersCreatefollowingInput = {
    set: string[]
  }

  export type imagesCreateNestedOneWithoutUsersInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput
    connect?: imagesWhereUniqueInput
  }

  export type shopReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput> | shopReviewsCreateWithoutUserInput[] | shopReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutUserInput | shopReviewsCreateOrConnectWithoutUserInput[]
    createMany?: shopReviewsCreateManyUserInputEnvelope
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
  }

  export type imagesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput
    connect?: imagesWhereUniqueInput
  }

  export type shopReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput> | shopReviewsCreateWithoutUserInput[] | shopReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutUserInput | shopReviewsCreateOrConnectWithoutUserInput[]
    createMany?: shopReviewsCreateManyUserInputEnvelope
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
  }

  export type usersUpdatefollowingInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type imagesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput
    upsert?: imagesUpsertWithoutUsersInput
    disconnect?: imagesWhereInput | boolean
    delete?: imagesWhereInput | boolean
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutUsersInput, imagesUpdateWithoutUsersInput>, imagesUncheckedUpdateWithoutUsersInput>
  }

  export type shopReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput> | shopReviewsCreateWithoutUserInput[] | shopReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutUserInput | shopReviewsCreateOrConnectWithoutUserInput[]
    upsert?: shopReviewsUpsertWithWhereUniqueWithoutUserInput | shopReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shopReviewsCreateManyUserInputEnvelope
    set?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    disconnect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    delete?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    update?: shopReviewsUpdateWithWhereUniqueWithoutUserInput | shopReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shopReviewsUpdateManyWithWhereWithoutUserInput | shopReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
  }

  export type imagesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: imagesCreateOrConnectWithoutUsersInput
    upsert?: imagesUpsertWithoutUsersInput
    disconnect?: imagesWhereInput | boolean
    delete?: imagesWhereInput | boolean
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutUsersInput, imagesUpdateWithoutUsersInput>, imagesUncheckedUpdateWithoutUsersInput>
  }

  export type shopReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput> | shopReviewsCreateWithoutUserInput[] | shopReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutUserInput | shopReviewsCreateOrConnectWithoutUserInput[]
    upsert?: shopReviewsUpsertWithWhereUniqueWithoutUserInput | shopReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shopReviewsCreateManyUserInputEnvelope
    set?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    disconnect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    delete?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    update?: shopReviewsUpdateWithWhereUniqueWithoutUserInput | shopReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shopReviewsUpdateManyWithWhereWithoutUserInput | shopReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutShopReviewsInput = {
    create?: XOR<usersCreateWithoutShopReviewsInput, usersUncheckedCreateWithoutShopReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutShopReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type shopsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<shopsCreateWithoutReviewsInput, shopsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: shopsCreateOrConnectWithoutReviewsInput
    connect?: shopsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutShopReviewsNestedInput = {
    create?: XOR<usersCreateWithoutShopReviewsInput, usersUncheckedCreateWithoutShopReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutShopReviewsInput
    upsert?: usersUpsertWithoutShopReviewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutShopReviewsInput, usersUpdateWithoutShopReviewsInput>, usersUncheckedUpdateWithoutShopReviewsInput>
  }

  export type shopsUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<shopsCreateWithoutReviewsInput, shopsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: shopsCreateOrConnectWithoutReviewsInput
    upsert?: shopsUpsertWithoutReviewsInput
    disconnect?: boolean
    delete?: shopsWhereInput | boolean
    connect?: shopsWhereUniqueInput
    update?: XOR<XOR<shopsUpdateToOneWithWhereWithoutReviewsInput, shopsUpdateWithoutReviewsInput>, shopsUncheckedUpdateWithoutReviewsInput>
  }

  export type shopsCreatesocialLinksInput = {
    set: InputJsonValue[]
  }

  export type imagesCreateNestedOneWithoutShopsInput = {
    create?: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutShopsInput
    connect?: imagesWhereUniqueInput
  }

  export type shopReviewsCreateNestedManyWithoutShopsInput = {
    create?: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput> | shopReviewsCreateWithoutShopsInput[] | shopReviewsUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutShopsInput | shopReviewsCreateOrConnectWithoutShopsInput[]
    createMany?: shopReviewsCreateManyShopsInputEnvelope
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
  }

  export type sellersCreateNestedOneWithoutShopInput = {
    create?: XOR<sellersCreateWithoutShopInput, sellersUncheckedCreateWithoutShopInput>
    connectOrCreate?: sellersCreateOrConnectWithoutShopInput
    connect?: sellersWhereUniqueInput
  }

  export type imagesUncheckedCreateNestedOneWithoutShopsInput = {
    create?: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutShopsInput
    connect?: imagesWhereUniqueInput
  }

  export type shopReviewsUncheckedCreateNestedManyWithoutShopsInput = {
    create?: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput> | shopReviewsCreateWithoutShopsInput[] | shopReviewsUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutShopsInput | shopReviewsCreateOrConnectWithoutShopsInput[]
    createMany?: shopReviewsCreateManyShopsInputEnvelope
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
  }

  export type shopsUpdatesocialLinksInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type imagesUpdateOneWithoutShopsNestedInput = {
    create?: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutShopsInput
    upsert?: imagesUpsertWithoutShopsInput
    disconnect?: imagesWhereInput | boolean
    delete?: imagesWhereInput | boolean
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutShopsInput, imagesUpdateWithoutShopsInput>, imagesUncheckedUpdateWithoutShopsInput>
  }

  export type shopReviewsUpdateManyWithoutShopsNestedInput = {
    create?: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput> | shopReviewsCreateWithoutShopsInput[] | shopReviewsUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutShopsInput | shopReviewsCreateOrConnectWithoutShopsInput[]
    upsert?: shopReviewsUpsertWithWhereUniqueWithoutShopsInput | shopReviewsUpsertWithWhereUniqueWithoutShopsInput[]
    createMany?: shopReviewsCreateManyShopsInputEnvelope
    set?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    disconnect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    delete?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    update?: shopReviewsUpdateWithWhereUniqueWithoutShopsInput | shopReviewsUpdateWithWhereUniqueWithoutShopsInput[]
    updateMany?: shopReviewsUpdateManyWithWhereWithoutShopsInput | shopReviewsUpdateManyWithWhereWithoutShopsInput[]
    deleteMany?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
  }

  export type sellersUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<sellersCreateWithoutShopInput, sellersUncheckedCreateWithoutShopInput>
    connectOrCreate?: sellersCreateOrConnectWithoutShopInput
    upsert?: sellersUpsertWithoutShopInput
    connect?: sellersWhereUniqueInput
    update?: XOR<XOR<sellersUpdateToOneWithWhereWithoutShopInput, sellersUpdateWithoutShopInput>, sellersUncheckedUpdateWithoutShopInput>
  }

  export type imagesUncheckedUpdateOneWithoutShopsNestedInput = {
    create?: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
    connectOrCreate?: imagesCreateOrConnectWithoutShopsInput
    upsert?: imagesUpsertWithoutShopsInput
    disconnect?: imagesWhereInput | boolean
    delete?: imagesWhereInput | boolean
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutShopsInput, imagesUpdateWithoutShopsInput>, imagesUncheckedUpdateWithoutShopsInput>
  }

  export type shopReviewsUncheckedUpdateManyWithoutShopsNestedInput = {
    create?: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput> | shopReviewsCreateWithoutShopsInput[] | shopReviewsUncheckedCreateWithoutShopsInput[]
    connectOrCreate?: shopReviewsCreateOrConnectWithoutShopsInput | shopReviewsCreateOrConnectWithoutShopsInput[]
    upsert?: shopReviewsUpsertWithWhereUniqueWithoutShopsInput | shopReviewsUpsertWithWhereUniqueWithoutShopsInput[]
    createMany?: shopReviewsCreateManyShopsInputEnvelope
    set?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    disconnect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    delete?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    connect?: shopReviewsWhereUniqueInput | shopReviewsWhereUniqueInput[]
    update?: shopReviewsUpdateWithWhereUniqueWithoutShopsInput | shopReviewsUpdateWithWhereUniqueWithoutShopsInput[]
    updateMany?: shopReviewsUpdateManyWithWhereWithoutShopsInput | shopReviewsUpdateManyWithWhereWithoutShopsInput[]
    deleteMany?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
  }

  export type shopsCreateNestedOneWithoutSellersInput = {
    create?: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
    connectOrCreate?: shopsCreateOrConnectWithoutSellersInput
    connect?: shopsWhereUniqueInput
  }

  export type shopsUncheckedCreateNestedOneWithoutSellersInput = {
    create?: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
    connectOrCreate?: shopsCreateOrConnectWithoutSellersInput
    connect?: shopsWhereUniqueInput
  }

  export type shopsUpdateOneWithoutSellersNestedInput = {
    create?: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
    connectOrCreate?: shopsCreateOrConnectWithoutSellersInput
    upsert?: shopsUpsertWithoutSellersInput
    disconnect?: shopsWhereInput | boolean
    delete?: shopsWhereInput | boolean
    connect?: shopsWhereUniqueInput
    update?: XOR<XOR<shopsUpdateToOneWithWhereWithoutSellersInput, shopsUpdateWithoutSellersInput>, shopsUncheckedUpdateWithoutSellersInput>
  }

  export type shopsUncheckedUpdateOneWithoutSellersNestedInput = {
    create?: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
    connectOrCreate?: shopsCreateOrConnectWithoutSellersInput
    upsert?: shopsUpsertWithoutSellersInput
    disconnect?: shopsWhereInput | boolean
    delete?: shopsWhereInput | boolean
    connect?: shopsWhereUniqueInput
    update?: XOR<XOR<shopsUpdateToOneWithWhereWithoutSellersInput, shopsUpdateWithoutSellersInput>, shopsUncheckedUpdateWithoutSellersInput>
  }

  export type site_configCreatecategoriesInput = {
    set: string[]
  }

  export type site_configUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type usersCreateWithoutAvatarInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    shopReviews?: shopReviewsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAvatarInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    shopReviews?: shopReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAvatarInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAvatarInput, usersUncheckedCreateWithoutAvatarInput>
  }

  export type shopsCreateWithoutAvatarInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    createdAt?: Date | string
    updateAt?: Date | string
    reviews?: shopReviewsCreateNestedManyWithoutShopsInput
    sellers: sellersCreateNestedOneWithoutShopInput
  }

  export type shopsUncheckedCreateWithoutAvatarInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
    reviews?: shopReviewsUncheckedCreateNestedManyWithoutShopsInput
  }

  export type shopsCreateOrConnectWithoutAvatarInput = {
    where: shopsWhereUniqueInput
    create: XOR<shopsCreateWithoutAvatarInput, shopsUncheckedCreateWithoutAvatarInput>
  }

  export type usersUpsertWithoutAvatarInput = {
    update: XOR<usersUpdateWithoutAvatarInput, usersUncheckedUpdateWithoutAvatarInput>
    create: XOR<usersCreateWithoutAvatarInput, usersUncheckedCreateWithoutAvatarInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAvatarInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAvatarInput, usersUncheckedUpdateWithoutAvatarInput>
  }

  export type usersUpdateWithoutAvatarInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopReviews?: shopReviewsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAvatarInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopReviews?: shopReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type shopsUpsertWithoutAvatarInput = {
    update: XOR<shopsUpdateWithoutAvatarInput, shopsUncheckedUpdateWithoutAvatarInput>
    create: XOR<shopsCreateWithoutAvatarInput, shopsUncheckedCreateWithoutAvatarInput>
    where?: shopsWhereInput
  }

  export type shopsUpdateToOneWithWhereWithoutAvatarInput = {
    where?: shopsWhereInput
    data: XOR<shopsUpdateWithoutAvatarInput, shopsUncheckedUpdateWithoutAvatarInput>
  }

  export type shopsUpdateWithoutAvatarInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: shopReviewsUpdateManyWithoutShopsNestedInput
    sellers?: sellersUpdateOneRequiredWithoutShopNestedInput
  }

  export type shopsUncheckedUpdateWithoutAvatarInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: shopReviewsUncheckedUpdateManyWithoutShopsNestedInput
  }

  export type imagesCreateWithoutUsersInput = {
    id?: string
    file_id: string
    url: string
    shops?: shopsCreateNestedOneWithoutAvatarInput
  }

  export type imagesUncheckedCreateWithoutUsersInput = {
    id?: string
    file_id: string
    url: string
    shopId?: string | null
  }

  export type imagesCreateOrConnectWithoutUsersInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
  }

  export type shopReviewsCreateWithoutUserInput = {
    id?: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shops?: shopsCreateNestedOneWithoutReviewsInput
  }

  export type shopReviewsUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopsId?: string | null
  }

  export type shopReviewsCreateOrConnectWithoutUserInput = {
    where: shopReviewsWhereUniqueInput
    create: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput>
  }

  export type shopReviewsCreateManyUserInputEnvelope = {
    data: shopReviewsCreateManyUserInput | shopReviewsCreateManyUserInput[]
  }

  export type imagesUpsertWithoutUsersInput = {
    update: XOR<imagesUpdateWithoutUsersInput, imagesUncheckedUpdateWithoutUsersInput>
    create: XOR<imagesCreateWithoutUsersInput, imagesUncheckedCreateWithoutUsersInput>
    where?: imagesWhereInput
  }

  export type imagesUpdateToOneWithWhereWithoutUsersInput = {
    where?: imagesWhereInput
    data: XOR<imagesUpdateWithoutUsersInput, imagesUncheckedUpdateWithoutUsersInput>
  }

  export type imagesUpdateWithoutUsersInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shops?: shopsUpdateOneWithoutAvatarNestedInput
  }

  export type imagesUncheckedUpdateWithoutUsersInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: shopReviewsWhereUniqueInput
    update: XOR<shopReviewsUpdateWithoutUserInput, shopReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<shopReviewsCreateWithoutUserInput, shopReviewsUncheckedCreateWithoutUserInput>
  }

  export type shopReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: shopReviewsWhereUniqueInput
    data: XOR<shopReviewsUpdateWithoutUserInput, shopReviewsUncheckedUpdateWithoutUserInput>
  }

  export type shopReviewsUpdateManyWithWhereWithoutUserInput = {
    where: shopReviewsScalarWhereInput
    data: XOR<shopReviewsUpdateManyMutationInput, shopReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type shopReviewsScalarWhereInput = {
    AND?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
    OR?: shopReviewsScalarWhereInput[]
    NOT?: shopReviewsScalarWhereInput | shopReviewsScalarWhereInput[]
    id?: StringFilter<"shopReviews"> | string
    userId?: StringFilter<"shopReviews"> | string
    rating?: FloatFilter<"shopReviews"> | number
    reviews?: StringNullableFilter<"shopReviews"> | string | null
    createdAt?: DateTimeFilter<"shopReviews"> | Date | string
    updatedAt?: DateTimeFilter<"shopReviews"> | Date | string
    shopsId?: StringNullableFilter<"shopReviews"> | string | null
  }

  export type usersCreateWithoutShopReviewsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: imagesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutShopReviewsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    following?: usersCreatefollowingInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: imagesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutShopReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutShopReviewsInput, usersUncheckedCreateWithoutShopReviewsInput>
  }

  export type shopsCreateWithoutReviewsInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesCreateNestedOneWithoutShopsInput
    sellers: sellersCreateNestedOneWithoutShopInput
  }

  export type shopsUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    sellerId: string
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesUncheckedCreateNestedOneWithoutShopsInput
  }

  export type shopsCreateOrConnectWithoutReviewsInput = {
    where: shopsWhereUniqueInput
    create: XOR<shopsCreateWithoutReviewsInput, shopsUncheckedCreateWithoutReviewsInput>
  }

  export type usersUpsertWithoutShopReviewsInput = {
    update: XOR<usersUpdateWithoutShopReviewsInput, usersUncheckedUpdateWithoutShopReviewsInput>
    create: XOR<usersCreateWithoutShopReviewsInput, usersUncheckedCreateWithoutShopReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutShopReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutShopReviewsInput, usersUncheckedUpdateWithoutShopReviewsInput>
  }

  export type usersUpdateWithoutShopReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutShopReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    following?: usersUpdatefollowingInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type shopsUpsertWithoutReviewsInput = {
    update: XOR<shopsUpdateWithoutReviewsInput, shopsUncheckedUpdateWithoutReviewsInput>
    create: XOR<shopsCreateWithoutReviewsInput, shopsUncheckedCreateWithoutReviewsInput>
    where?: shopsWhereInput
  }

  export type shopsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: shopsWhereInput
    data: XOR<shopsUpdateWithoutReviewsInput, shopsUncheckedUpdateWithoutReviewsInput>
  }

  export type shopsUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUpdateOneWithoutShopsNestedInput
    sellers?: sellersUpdateOneRequiredWithoutShopNestedInput
  }

  export type shopsUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUncheckedUpdateOneWithoutShopsNestedInput
  }

  export type imagesCreateWithoutShopsInput = {
    id?: string
    file_id: string
    url: string
    users?: usersCreateNestedOneWithoutAvatarInput
  }

  export type imagesUncheckedCreateWithoutShopsInput = {
    id?: string
    file_id: string
    url: string
    userId: string
  }

  export type imagesCreateOrConnectWithoutShopsInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
  }

  export type shopReviewsCreateWithoutShopsInput = {
    id?: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutShopReviewsInput
  }

  export type shopReviewsUncheckedCreateWithoutShopsInput = {
    id?: string
    userId: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type shopReviewsCreateOrConnectWithoutShopsInput = {
    where: shopReviewsWhereUniqueInput
    create: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput>
  }

  export type shopReviewsCreateManyShopsInputEnvelope = {
    data: shopReviewsCreateManyShopsInput | shopReviewsCreateManyShopsInput[]
  }

  export type sellersCreateWithoutShopInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    country: string
    password: string
    stripeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersCreateOrConnectWithoutShopInput = {
    where: sellersWhereUniqueInput
    create: XOR<sellersCreateWithoutShopInput, sellersUncheckedCreateWithoutShopInput>
  }

  export type imagesUpsertWithoutShopsInput = {
    update: XOR<imagesUpdateWithoutShopsInput, imagesUncheckedUpdateWithoutShopsInput>
    create: XOR<imagesCreateWithoutShopsInput, imagesUncheckedCreateWithoutShopsInput>
    where?: imagesWhereInput
  }

  export type imagesUpdateToOneWithWhereWithoutShopsInput = {
    where?: imagesWhereInput
    data: XOR<imagesUpdateWithoutShopsInput, imagesUncheckedUpdateWithoutShopsInput>
  }

  export type imagesUpdateWithoutShopsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutAvatarNestedInput
  }

  export type imagesUncheckedUpdateWithoutShopsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type shopReviewsUpsertWithWhereUniqueWithoutShopsInput = {
    where: shopReviewsWhereUniqueInput
    update: XOR<shopReviewsUpdateWithoutShopsInput, shopReviewsUncheckedUpdateWithoutShopsInput>
    create: XOR<shopReviewsCreateWithoutShopsInput, shopReviewsUncheckedCreateWithoutShopsInput>
  }

  export type shopReviewsUpdateWithWhereUniqueWithoutShopsInput = {
    where: shopReviewsWhereUniqueInput
    data: XOR<shopReviewsUpdateWithoutShopsInput, shopReviewsUncheckedUpdateWithoutShopsInput>
  }

  export type shopReviewsUpdateManyWithWhereWithoutShopsInput = {
    where: shopReviewsScalarWhereInput
    data: XOR<shopReviewsUpdateManyMutationInput, shopReviewsUncheckedUpdateManyWithoutShopsInput>
  }

  export type sellersUpsertWithoutShopInput = {
    update: XOR<sellersUpdateWithoutShopInput, sellersUncheckedUpdateWithoutShopInput>
    create: XOR<sellersCreateWithoutShopInput, sellersUncheckedCreateWithoutShopInput>
    where?: sellersWhereInput
  }

  export type sellersUpdateToOneWithWhereWithoutShopInput = {
    where?: sellersWhereInput
    data: XOR<sellersUpdateWithoutShopInput, sellersUncheckedUpdateWithoutShopInput>
  }

  export type sellersUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersUncheckedUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopsCreateWithoutSellersInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesCreateNestedOneWithoutShopsInput
    reviews?: shopReviewsCreateNestedManyWithoutShopsInput
  }

  export type shopsUncheckedCreateWithoutSellersInput = {
    id?: string
    name: string
    bio?: string | null
    category: string
    coverBanner?: string | null
    address: string
    opening_hours?: string | null
    website?: string | null
    socialLinks?: shopsCreatesocialLinksInput | InputJsonValue[]
    rating?: number
    createdAt?: Date | string
    updateAt?: Date | string
    avatar?: imagesUncheckedCreateNestedOneWithoutShopsInput
    reviews?: shopReviewsUncheckedCreateNestedManyWithoutShopsInput
  }

  export type shopsCreateOrConnectWithoutSellersInput = {
    where: shopsWhereUniqueInput
    create: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
  }

  export type shopsUpsertWithoutSellersInput = {
    update: XOR<shopsUpdateWithoutSellersInput, shopsUncheckedUpdateWithoutSellersInput>
    create: XOR<shopsCreateWithoutSellersInput, shopsUncheckedCreateWithoutSellersInput>
    where?: shopsWhereInput
  }

  export type shopsUpdateToOneWithWhereWithoutSellersInput = {
    where?: shopsWhereInput
    data: XOR<shopsUpdateWithoutSellersInput, shopsUncheckedUpdateWithoutSellersInput>
  }

  export type shopsUpdateWithoutSellersInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUpdateOneWithoutShopsNestedInput
    reviews?: shopReviewsUpdateManyWithoutShopsNestedInput
  }

  export type shopsUncheckedUpdateWithoutSellersInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    coverBanner?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: shopsUpdatesocialLinksInput | InputJsonValue[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: imagesUncheckedUpdateOneWithoutShopsNestedInput
    reviews?: shopReviewsUncheckedUpdateManyWithoutShopsNestedInput
  }

  export type shopReviewsCreateManyUserInput = {
    id?: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopsId?: string | null
  }

  export type shopReviewsUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: shopsUpdateOneWithoutReviewsNestedInput
  }

  export type shopReviewsUncheckedUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopReviewsUncheckedUpdateManyWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shopReviewsCreateManyShopsInput = {
    id?: string
    userId: string
    rating: number
    reviews?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type shopReviewsUpdateWithoutShopsInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutShopReviewsNestedInput
  }

  export type shopReviewsUncheckedUpdateWithoutShopsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopReviewsUncheckedUpdateManyWithoutShopsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}