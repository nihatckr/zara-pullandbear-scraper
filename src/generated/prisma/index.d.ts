
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
 * Model CategoryData
 * 
 */
export type CategoryData = $Result.DefaultSelection<Prisma.$CategoryDataPayload>
/**
 * Model SubcategoryData
 * 
 */
export type SubcategoryData = $Result.DefaultSelection<Prisma.$SubcategoryDataPayload>
/**
 * Model NestedSubcategory
 * 
 */
export type NestedSubcategory = $Result.DefaultSelection<Prisma.$NestedSubcategoryPayload>
/**
 * Model ProductId
 * 
 */
export type ProductId = $Result.DefaultSelection<Prisma.$ProductIdPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductColor
 * 
 */
export type ProductColor = $Result.DefaultSelection<Prisma.$ProductColorPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CategoryData
 * const categoryData = await prisma.categoryData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more CategoryData
   * const categoryData = await prisma.categoryData.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoryData`: Exposes CRUD operations for the **CategoryData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryData
    * const categoryData = await prisma.categoryData.findMany()
    * ```
    */
  get categoryData(): Prisma.CategoryDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategoryData`: Exposes CRUD operations for the **SubcategoryData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubcategoryData
    * const subcategoryData = await prisma.subcategoryData.findMany()
    * ```
    */
  get subcategoryData(): Prisma.SubcategoryDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nestedSubcategory`: Exposes CRUD operations for the **NestedSubcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NestedSubcategories
    * const nestedSubcategories = await prisma.nestedSubcategory.findMany()
    * ```
    */
  get nestedSubcategory(): Prisma.NestedSubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productId`: Exposes CRUD operations for the **ProductId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductIds
    * const productIds = await prisma.productId.findMany()
    * ```
    */
  get productId(): Prisma.ProductIdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productColor`: Exposes CRUD operations for the **ProductColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductColors
    * const productColors = await prisma.productColor.findMany()
    * ```
    */
  get productColor(): Prisma.ProductColorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSize`: Exposes CRUD operations for the **ProductSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSizes
    * const productSizes = await prisma.productSize.findMany()
    * ```
    */
  get productSize(): Prisma.ProductSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    CategoryData: 'CategoryData',
    SubcategoryData: 'SubcategoryData',
    NestedSubcategory: 'NestedSubcategory',
    ProductId: 'ProductId',
    Product: 'Product',
    ProductColor: 'ProductColor',
    ProductSize: 'ProductSize',
    ProductImage: 'ProductImage'
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
      modelProps: "categoryData" | "subcategoryData" | "nestedSubcategory" | "productId" | "product" | "productColor" | "productSize" | "productImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CategoryData: {
        payload: Prisma.$CategoryDataPayload<ExtArgs>
        fields: Prisma.CategoryDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          findFirst: {
            args: Prisma.CategoryDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          findMany: {
            args: Prisma.CategoryDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>[]
          }
          create: {
            args: Prisma.CategoryDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          createMany: {
            args: Prisma.CategoryDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          update: {
            args: Prisma.CategoryDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDataPayload>
          }
          aggregate: {
            args: Prisma.CategoryDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryData>
          }
          groupBy: {
            args: Prisma.CategoryDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryDataCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryDataCountAggregateOutputType> | number
          }
        }
      }
      SubcategoryData: {
        payload: Prisma.$SubcategoryDataPayload<ExtArgs>
        fields: Prisma.SubcategoryDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          findMany: {
            args: Prisma.SubcategoryDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>[]
          }
          create: {
            args: Prisma.SubcategoryDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          createMany: {
            args: Prisma.SubcategoryDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubcategoryDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          update: {
            args: Prisma.SubcategoryDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubcategoryDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryDataPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategoryData>
          }
          groupBy: {
            args: Prisma.SubcategoryDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryDataCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryDataCountAggregateOutputType> | number
          }
        }
      }
      NestedSubcategory: {
        payload: Prisma.$NestedSubcategoryPayload<ExtArgs>
        fields: Prisma.NestedSubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NestedSubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NestedSubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          findFirst: {
            args: Prisma.NestedSubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NestedSubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          findMany: {
            args: Prisma.NestedSubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>[]
          }
          create: {
            args: Prisma.NestedSubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          createMany: {
            args: Prisma.NestedSubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NestedSubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          update: {
            args: Prisma.NestedSubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.NestedSubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NestedSubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NestedSubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NestedSubcategoryPayload>
          }
          aggregate: {
            args: Prisma.NestedSubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNestedSubcategory>
          }
          groupBy: {
            args: Prisma.NestedSubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NestedSubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NestedSubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NestedSubcategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductId: {
        payload: Prisma.$ProductIdPayload<ExtArgs>
        fields: Prisma.ProductIdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductIdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductIdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          findFirst: {
            args: Prisma.ProductIdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductIdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          findMany: {
            args: Prisma.ProductIdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>[]
          }
          create: {
            args: Prisma.ProductIdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          createMany: {
            args: Prisma.ProductIdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductIdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          update: {
            args: Prisma.ProductIdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          deleteMany: {
            args: Prisma.ProductIdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductIdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductIdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductIdPayload>
          }
          aggregate: {
            args: Prisma.ProductIdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductId>
          }
          groupBy: {
            args: Prisma.ProductIdGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductIdGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductIdCountArgs<ExtArgs>
            result: $Utils.Optional<ProductIdCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductColor: {
        payload: Prisma.$ProductColorPayload<ExtArgs>
        fields: Prisma.ProductColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          findFirst: {
            args: Prisma.ProductColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          findMany: {
            args: Prisma.ProductColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>[]
          }
          create: {
            args: Prisma.ProductColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          createMany: {
            args: Prisma.ProductColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          update: {
            args: Prisma.ProductColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          deleteMany: {
            args: Prisma.ProductColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductColorPayload>
          }
          aggregate: {
            args: Prisma.ProductColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductColor>
          }
          groupBy: {
            args: Prisma.ProductColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductColorCountArgs<ExtArgs>
            result: $Utils.Optional<ProductColorCountAggregateOutputType> | number
          }
        }
      }
      ProductSize: {
        payload: Prisma.$ProductSizePayload<ExtArgs>
        fields: Prisma.ProductSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findFirst: {
            args: Prisma.ProductSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findMany: {
            args: Prisma.ProductSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          create: {
            args: Prisma.ProductSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          createMany: {
            args: Prisma.ProductSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          update: {
            args: Prisma.ProductSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          aggregate: {
            args: Prisma.ProductSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSize>
          }
          groupBy: {
            args: Prisma.ProductSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    categoryData?: CategoryDataOmit
    subcategoryData?: SubcategoryDataOmit
    nestedSubcategory?: NestedSubcategoryOmit
    productId?: ProductIdOmit
    product?: ProductOmit
    productColor?: ProductColorOmit
    productSize?: ProductSizeOmit
    productImage?: ProductImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoryDataCountOutputType
   */

  export type CategoryDataCountOutputType = {
    subcategories: number
  }

  export type CategoryDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryDataCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryDataCountOutputType without action
   */
  export type CategoryDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDataCountOutputType
     */
    select?: CategoryDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryDataCountOutputType without action
   */
  export type CategoryDataCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryDataWhereInput
  }


  /**
   * Count Type SubcategoryDataCountOutputType
   */

  export type SubcategoryDataCountOutputType = {
    subcategories: number
    productIds: number
  }

  export type SubcategoryDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | SubcategoryDataCountOutputTypeCountSubcategoriesArgs
    productIds?: boolean | SubcategoryDataCountOutputTypeCountProductIdsArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryDataCountOutputType without action
   */
  export type SubcategoryDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryDataCountOutputType
     */
    select?: SubcategoryDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryDataCountOutputType without action
   */
  export type SubcategoryDataCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NestedSubcategoryWhereInput
  }

  /**
   * SubcategoryDataCountOutputType without action
   */
  export type SubcategoryDataCountOutputTypeCountProductIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIdWhereInput
  }


  /**
   * Count Type NestedSubcategoryCountOutputType
   */

  export type NestedSubcategoryCountOutputType = {
    productIds: number
  }

  export type NestedSubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productIds?: boolean | NestedSubcategoryCountOutputTypeCountProductIdsArgs
  }

  // Custom InputTypes
  /**
   * NestedSubcategoryCountOutputType without action
   */
  export type NestedSubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategoryCountOutputType
     */
    select?: NestedSubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NestedSubcategoryCountOutputType without action
   */
  export type NestedSubcategoryCountOutputTypeCountProductIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIdWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    colors: number
    images: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | ProductCountOutputTypeCountColorsArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductColorWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }


  /**
   * Count Type ProductColorCountOutputType
   */

  export type ProductColorCountOutputType = {
    sizes: number
  }

  export type ProductColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | ProductColorCountOutputTypeCountSizesArgs
  }

  // Custom InputTypes
  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColorCountOutputType
     */
    select?: ProductColorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductColorCountOutputType without action
   */
  export type ProductColorCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CategoryData
   */

  export type AggregateCategoryData = {
    _count: CategoryDataCountAggregateOutputType | null
    _avg: CategoryDataAvgAggregateOutputType | null
    _sum: CategoryDataSumAggregateOutputType | null
    _min: CategoryDataMinAggregateOutputType | null
    _max: CategoryDataMaxAggregateOutputType | null
  }

  export type CategoryDataAvgAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
  }

  export type CategoryDataSumAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
  }

  export type CategoryDataMinAggregateOutputType = {
    id: number | null
    brand: string | null
    gender: string | null
    mainCategoryId: number | null
    mainCategoryName: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryDataMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    gender: string | null
    mainCategoryId: number | null
    mainCategoryName: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryDataCountAggregateOutputType = {
    id: number
    brand: number
    gender: number
    mainCategoryId: number
    mainCategoryName: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryDataAvgAggregateInputType = {
    id?: true
    mainCategoryId?: true
  }

  export type CategoryDataSumAggregateInputType = {
    id?: true
    mainCategoryId?: true
  }

  export type CategoryDataMinAggregateInputType = {
    id?: true
    brand?: true
    gender?: true
    mainCategoryId?: true
    mainCategoryName?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryDataMaxAggregateInputType = {
    id?: true
    brand?: true
    gender?: true
    mainCategoryId?: true
    mainCategoryName?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryDataCountAggregateInputType = {
    id?: true
    brand?: true
    gender?: true
    mainCategoryId?: true
    mainCategoryName?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryData to aggregate.
     */
    where?: CategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryData to fetch.
     */
    orderBy?: CategoryDataOrderByWithRelationInput | CategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryData
    **/
    _count?: true | CategoryDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryDataMaxAggregateInputType
  }

  export type GetCategoryDataAggregateType<T extends CategoryDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryData[P]>
      : GetScalarType<T[P], AggregateCategoryData[P]>
  }




  export type CategoryDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryDataWhereInput
    orderBy?: CategoryDataOrderByWithAggregationInput | CategoryDataOrderByWithAggregationInput[]
    by: CategoryDataScalarFieldEnum[] | CategoryDataScalarFieldEnum
    having?: CategoryDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryDataCountAggregateInputType | true
    _avg?: CategoryDataAvgAggregateInputType
    _sum?: CategoryDataSumAggregateInputType
    _min?: CategoryDataMinAggregateInputType
    _max?: CategoryDataMaxAggregateInputType
  }

  export type CategoryDataGroupByOutputType = {
    id: number
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    _count: CategoryDataCountAggregateOutputType | null
    _avg: CategoryDataAvgAggregateOutputType | null
    _sum: CategoryDataSumAggregateOutputType | null
    _min: CategoryDataMinAggregateOutputType | null
    _max: CategoryDataMaxAggregateOutputType | null
  }

  type GetCategoryDataGroupByPayload<T extends CategoryDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryDataGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryDataGroupByOutputType[P]>
        }
      >
    >


  export type CategoryDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    gender?: boolean
    mainCategoryId?: boolean
    mainCategoryName?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategories?: boolean | CategoryData$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoryDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryData"]>



  export type CategoryDataSelectScalar = {
    id?: boolean
    brand?: boolean
    gender?: boolean
    mainCategoryId?: boolean
    mainCategoryName?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "gender" | "mainCategoryId" | "mainCategoryName" | "timestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["categoryData"]>
  export type CategoryDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryData$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoryDataCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryData"
    objects: {
      subcategories: Prisma.$SubcategoryDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      gender: string
      mainCategoryId: number
      mainCategoryName: string
      timestamp: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoryData"]>
    composites: {}
  }

  type CategoryDataGetPayload<S extends boolean | null | undefined | CategoryDataDefaultArgs> = $Result.GetResult<Prisma.$CategoryDataPayload, S>

  type CategoryDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryDataCountAggregateInputType | true
    }

  export interface CategoryDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryData'], meta: { name: 'CategoryData' } }
    /**
     * Find zero or one CategoryData that matches the filter.
     * @param {CategoryDataFindUniqueArgs} args - Arguments to find a CategoryData
     * @example
     * // Get one CategoryData
     * const categoryData = await prisma.categoryData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryDataFindUniqueArgs>(args: SelectSubset<T, CategoryDataFindUniqueArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryDataFindUniqueOrThrowArgs} args - Arguments to find a CategoryData
     * @example
     * // Get one CategoryData
     * const categoryData = await prisma.categoryData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryDataFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataFindFirstArgs} args - Arguments to find a CategoryData
     * @example
     * // Get one CategoryData
     * const categoryData = await prisma.categoryData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryDataFindFirstArgs>(args?: SelectSubset<T, CategoryDataFindFirstArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataFindFirstOrThrowArgs} args - Arguments to find a CategoryData
     * @example
     * // Get one CategoryData
     * const categoryData = await prisma.categoryData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryDataFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryData
     * const categoryData = await prisma.categoryData.findMany()
     * 
     * // Get first 10 CategoryData
     * const categoryData = await prisma.categoryData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryDataWithIdOnly = await prisma.categoryData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryDataFindManyArgs>(args?: SelectSubset<T, CategoryDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryData.
     * @param {CategoryDataCreateArgs} args - Arguments to create a CategoryData.
     * @example
     * // Create one CategoryData
     * const CategoryData = await prisma.categoryData.create({
     *   data: {
     *     // ... data to create a CategoryData
     *   }
     * })
     * 
     */
    create<T extends CategoryDataCreateArgs>(args: SelectSubset<T, CategoryDataCreateArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryData.
     * @param {CategoryDataCreateManyArgs} args - Arguments to create many CategoryData.
     * @example
     * // Create many CategoryData
     * const categoryData = await prisma.categoryData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryDataCreateManyArgs>(args?: SelectSubset<T, CategoryDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryData.
     * @param {CategoryDataDeleteArgs} args - Arguments to delete one CategoryData.
     * @example
     * // Delete one CategoryData
     * const CategoryData = await prisma.categoryData.delete({
     *   where: {
     *     // ... filter to delete one CategoryData
     *   }
     * })
     * 
     */
    delete<T extends CategoryDataDeleteArgs>(args: SelectSubset<T, CategoryDataDeleteArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryData.
     * @param {CategoryDataUpdateArgs} args - Arguments to update one CategoryData.
     * @example
     * // Update one CategoryData
     * const categoryData = await prisma.categoryData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryDataUpdateArgs>(args: SelectSubset<T, CategoryDataUpdateArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryData.
     * @param {CategoryDataDeleteManyArgs} args - Arguments to filter CategoryData to delete.
     * @example
     * // Delete a few CategoryData
     * const { count } = await prisma.categoryData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDataDeleteManyArgs>(args?: SelectSubset<T, CategoryDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryData
     * const categoryData = await prisma.categoryData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryDataUpdateManyArgs>(args: SelectSubset<T, CategoryDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryData.
     * @param {CategoryDataUpsertArgs} args - Arguments to update or create a CategoryData.
     * @example
     * // Update or create a CategoryData
     * const categoryData = await prisma.categoryData.upsert({
     *   create: {
     *     // ... data to create a CategoryData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryData we want to update
     *   }
     * })
     */
    upsert<T extends CategoryDataUpsertArgs>(args: SelectSubset<T, CategoryDataUpsertArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataCountArgs} args - Arguments to filter CategoryData to count.
     * @example
     * // Count the number of CategoryData
     * const count = await prisma.categoryData.count({
     *   where: {
     *     // ... the filter for the CategoryData we want to count
     *   }
     * })
    **/
    count<T extends CategoryDataCountArgs>(
      args?: Subset<T, CategoryDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryDataAggregateArgs>(args: Subset<T, CategoryDataAggregateArgs>): Prisma.PrismaPromise<GetCategoryDataAggregateType<T>>

    /**
     * Group by CategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDataGroupByArgs} args - Group by arguments.
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
      T extends CategoryDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryDataGroupByArgs['orderBy'] }
        : { orderBy?: CategoryDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryData model
   */
  readonly fields: CategoryDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategories<T extends CategoryData$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, CategoryData$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoryData model
   */
  interface CategoryDataFieldRefs {
    readonly id: FieldRef<"CategoryData", 'Int'>
    readonly brand: FieldRef<"CategoryData", 'String'>
    readonly gender: FieldRef<"CategoryData", 'String'>
    readonly mainCategoryId: FieldRef<"CategoryData", 'Int'>
    readonly mainCategoryName: FieldRef<"CategoryData", 'String'>
    readonly timestamp: FieldRef<"CategoryData", 'DateTime'>
    readonly createdAt: FieldRef<"CategoryData", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryData findUnique
   */
  export type CategoryDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryData to fetch.
     */
    where: CategoryDataWhereUniqueInput
  }

  /**
   * CategoryData findUniqueOrThrow
   */
  export type CategoryDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryData to fetch.
     */
    where: CategoryDataWhereUniqueInput
  }

  /**
   * CategoryData findFirst
   */
  export type CategoryDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryData to fetch.
     */
    where?: CategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryData to fetch.
     */
    orderBy?: CategoryDataOrderByWithRelationInput | CategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryData.
     */
    cursor?: CategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryData.
     */
    distinct?: CategoryDataScalarFieldEnum | CategoryDataScalarFieldEnum[]
  }

  /**
   * CategoryData findFirstOrThrow
   */
  export type CategoryDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryData to fetch.
     */
    where?: CategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryData to fetch.
     */
    orderBy?: CategoryDataOrderByWithRelationInput | CategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryData.
     */
    cursor?: CategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryData.
     */
    distinct?: CategoryDataScalarFieldEnum | CategoryDataScalarFieldEnum[]
  }

  /**
   * CategoryData findMany
   */
  export type CategoryDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryData to fetch.
     */
    where?: CategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryData to fetch.
     */
    orderBy?: CategoryDataOrderByWithRelationInput | CategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryData.
     */
    cursor?: CategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryData.
     */
    skip?: number
    distinct?: CategoryDataScalarFieldEnum | CategoryDataScalarFieldEnum[]
  }

  /**
   * CategoryData create
   */
  export type CategoryDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryData.
     */
    data: XOR<CategoryDataCreateInput, CategoryDataUncheckedCreateInput>
  }

  /**
   * CategoryData createMany
   */
  export type CategoryDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryData.
     */
    data: CategoryDataCreateManyInput | CategoryDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryData update
   */
  export type CategoryDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryData.
     */
    data: XOR<CategoryDataUpdateInput, CategoryDataUncheckedUpdateInput>
    /**
     * Choose, which CategoryData to update.
     */
    where: CategoryDataWhereUniqueInput
  }

  /**
   * CategoryData updateMany
   */
  export type CategoryDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryData.
     */
    data: XOR<CategoryDataUpdateManyMutationInput, CategoryDataUncheckedUpdateManyInput>
    /**
     * Filter which CategoryData to update
     */
    where?: CategoryDataWhereInput
    /**
     * Limit how many CategoryData to update.
     */
    limit?: number
  }

  /**
   * CategoryData upsert
   */
  export type CategoryDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryData to update in case it exists.
     */
    where: CategoryDataWhereUniqueInput
    /**
     * In case the CategoryData found by the `where` argument doesn't exist, create a new CategoryData with this data.
     */
    create: XOR<CategoryDataCreateInput, CategoryDataUncheckedCreateInput>
    /**
     * In case the CategoryData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryDataUpdateInput, CategoryDataUncheckedUpdateInput>
  }

  /**
   * CategoryData delete
   */
  export type CategoryDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
    /**
     * Filter which CategoryData to delete.
     */
    where: CategoryDataWhereUniqueInput
  }

  /**
   * CategoryData deleteMany
   */
  export type CategoryDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryData to delete
     */
    where?: CategoryDataWhereInput
    /**
     * Limit how many CategoryData to delete.
     */
    limit?: number
  }

  /**
   * CategoryData.subcategories
   */
  export type CategoryData$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    where?: SubcategoryDataWhereInput
    orderBy?: SubcategoryDataOrderByWithRelationInput | SubcategoryDataOrderByWithRelationInput[]
    cursor?: SubcategoryDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryDataScalarFieldEnum | SubcategoryDataScalarFieldEnum[]
  }

  /**
   * CategoryData without action
   */
  export type CategoryDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryData
     */
    select?: CategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryData
     */
    omit?: CategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDataInclude<ExtArgs> | null
  }


  /**
   * Model SubcategoryData
   */

  export type AggregateSubcategoryData = {
    _count: SubcategoryDataCountAggregateOutputType | null
    _avg: SubcategoryDataAvgAggregateOutputType | null
    _sum: SubcategoryDataSumAggregateOutputType | null
    _min: SubcategoryDataMinAggregateOutputType | null
    _max: SubcategoryDataMaxAggregateOutputType | null
  }

  export type SubcategoryDataAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    matchingId: number | null
    productCount: number | null
    categoryDataId: number | null
  }

  export type SubcategoryDataSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    matchingId: number | null
    productCount: number | null
    categoryDataId: number | null
  }

  export type SubcategoryDataMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    categoryName: string | null
    isLeaf: boolean | null
    matchingId: number | null
    matchingCategoryName: string | null
    productCount: number | null
    categoryDataId: number | null
  }

  export type SubcategoryDataMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    categoryName: string | null
    isLeaf: boolean | null
    matchingId: number | null
    matchingCategoryName: string | null
    productCount: number | null
    categoryDataId: number | null
  }

  export type SubcategoryDataCountAggregateOutputType = {
    id: number
    categoryId: number
    categoryName: number
    isLeaf: number
    matchingId: number
    matchingCategoryName: number
    productCount: number
    categoryDataId: number
    _all: number
  }


  export type SubcategoryDataAvgAggregateInputType = {
    id?: true
    categoryId?: true
    matchingId?: true
    productCount?: true
    categoryDataId?: true
  }

  export type SubcategoryDataSumAggregateInputType = {
    id?: true
    categoryId?: true
    matchingId?: true
    productCount?: true
    categoryDataId?: true
  }

  export type SubcategoryDataMinAggregateInputType = {
    id?: true
    categoryId?: true
    categoryName?: true
    isLeaf?: true
    matchingId?: true
    matchingCategoryName?: true
    productCount?: true
    categoryDataId?: true
  }

  export type SubcategoryDataMaxAggregateInputType = {
    id?: true
    categoryId?: true
    categoryName?: true
    isLeaf?: true
    matchingId?: true
    matchingCategoryName?: true
    productCount?: true
    categoryDataId?: true
  }

  export type SubcategoryDataCountAggregateInputType = {
    id?: true
    categoryId?: true
    categoryName?: true
    isLeaf?: true
    matchingId?: true
    matchingCategoryName?: true
    productCount?: true
    categoryDataId?: true
    _all?: true
  }

  export type SubcategoryDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubcategoryData to aggregate.
     */
    where?: SubcategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubcategoryData to fetch.
     */
    orderBy?: SubcategoryDataOrderByWithRelationInput | SubcategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubcategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubcategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubcategoryData
    **/
    _count?: true | SubcategoryDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoryDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategoryDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryDataMaxAggregateInputType
  }

  export type GetSubcategoryDataAggregateType<T extends SubcategoryDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategoryData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategoryData[P]>
      : GetScalarType<T[P], AggregateSubcategoryData[P]>
  }




  export type SubcategoryDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryDataWhereInput
    orderBy?: SubcategoryDataOrderByWithAggregationInput | SubcategoryDataOrderByWithAggregationInput[]
    by: SubcategoryDataScalarFieldEnum[] | SubcategoryDataScalarFieldEnum
    having?: SubcategoryDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryDataCountAggregateInputType | true
    _avg?: SubcategoryDataAvgAggregateInputType
    _sum?: SubcategoryDataSumAggregateInputType
    _min?: SubcategoryDataMinAggregateInputType
    _max?: SubcategoryDataMaxAggregateInputType
  }

  export type SubcategoryDataGroupByOutputType = {
    id: number
    categoryId: number
    categoryName: string
    isLeaf: boolean
    matchingId: number | null
    matchingCategoryName: string | null
    productCount: number
    categoryDataId: number
    _count: SubcategoryDataCountAggregateOutputType | null
    _avg: SubcategoryDataAvgAggregateOutputType | null
    _sum: SubcategoryDataSumAggregateOutputType | null
    _min: SubcategoryDataMinAggregateOutputType | null
    _max: SubcategoryDataMaxAggregateOutputType | null
  }

  type GetSubcategoryDataGroupByPayload<T extends SubcategoryDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryDataGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryDataGroupByOutputType[P]>
        }
      >
    >


  export type SubcategoryDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    categoryName?: boolean
    isLeaf?: boolean
    matchingId?: boolean
    matchingCategoryName?: boolean
    productCount?: boolean
    categoryDataId?: boolean
    categoryData?: boolean | CategoryDataDefaultArgs<ExtArgs>
    subcategories?: boolean | SubcategoryData$subcategoriesArgs<ExtArgs>
    productIds?: boolean | SubcategoryData$productIdsArgs<ExtArgs>
    _count?: boolean | SubcategoryDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategoryData"]>



  export type SubcategoryDataSelectScalar = {
    id?: boolean
    categoryId?: boolean
    categoryName?: boolean
    isLeaf?: boolean
    matchingId?: boolean
    matchingCategoryName?: boolean
    productCount?: boolean
    categoryDataId?: boolean
  }

  export type SubcategoryDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "categoryName" | "isLeaf" | "matchingId" | "matchingCategoryName" | "productCount" | "categoryDataId", ExtArgs["result"]["subcategoryData"]>
  export type SubcategoryDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryData?: boolean | CategoryDataDefaultArgs<ExtArgs>
    subcategories?: boolean | SubcategoryData$subcategoriesArgs<ExtArgs>
    productIds?: boolean | SubcategoryData$productIdsArgs<ExtArgs>
    _count?: boolean | SubcategoryDataCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubcategoryDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubcategoryData"
    objects: {
      categoryData: Prisma.$CategoryDataPayload<ExtArgs>
      subcategories: Prisma.$NestedSubcategoryPayload<ExtArgs>[]
      productIds: Prisma.$ProductIdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      categoryName: string
      isLeaf: boolean
      matchingId: number | null
      matchingCategoryName: string | null
      productCount: number
      categoryDataId: number
    }, ExtArgs["result"]["subcategoryData"]>
    composites: {}
  }

  type SubcategoryDataGetPayload<S extends boolean | null | undefined | SubcategoryDataDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryDataPayload, S>

  type SubcategoryDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryDataCountAggregateInputType | true
    }

  export interface SubcategoryDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubcategoryData'], meta: { name: 'SubcategoryData' } }
    /**
     * Find zero or one SubcategoryData that matches the filter.
     * @param {SubcategoryDataFindUniqueArgs} args - Arguments to find a SubcategoryData
     * @example
     * // Get one SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryDataFindUniqueArgs>(args: SelectSubset<T, SubcategoryDataFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubcategoryData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryDataFindUniqueOrThrowArgs} args - Arguments to find a SubcategoryData
     * @example
     * // Get one SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubcategoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataFindFirstArgs} args - Arguments to find a SubcategoryData
     * @example
     * // Get one SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryDataFindFirstArgs>(args?: SelectSubset<T, SubcategoryDataFindFirstArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubcategoryData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataFindFirstOrThrowArgs} args - Arguments to find a SubcategoryData
     * @example
     * // Get one SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubcategoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findMany()
     * 
     * // Get first 10 SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryDataWithIdOnly = await prisma.subcategoryData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryDataFindManyArgs>(args?: SelectSubset<T, SubcategoryDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubcategoryData.
     * @param {SubcategoryDataCreateArgs} args - Arguments to create a SubcategoryData.
     * @example
     * // Create one SubcategoryData
     * const SubcategoryData = await prisma.subcategoryData.create({
     *   data: {
     *     // ... data to create a SubcategoryData
     *   }
     * })
     * 
     */
    create<T extends SubcategoryDataCreateArgs>(args: SelectSubset<T, SubcategoryDataCreateArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubcategoryData.
     * @param {SubcategoryDataCreateManyArgs} args - Arguments to create many SubcategoryData.
     * @example
     * // Create many SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryDataCreateManyArgs>(args?: SelectSubset<T, SubcategoryDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubcategoryData.
     * @param {SubcategoryDataDeleteArgs} args - Arguments to delete one SubcategoryData.
     * @example
     * // Delete one SubcategoryData
     * const SubcategoryData = await prisma.subcategoryData.delete({
     *   where: {
     *     // ... filter to delete one SubcategoryData
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDataDeleteArgs>(args: SelectSubset<T, SubcategoryDataDeleteArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubcategoryData.
     * @param {SubcategoryDataUpdateArgs} args - Arguments to update one SubcategoryData.
     * @example
     * // Update one SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryDataUpdateArgs>(args: SelectSubset<T, SubcategoryDataUpdateArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubcategoryData.
     * @param {SubcategoryDataDeleteManyArgs} args - Arguments to filter SubcategoryData to delete.
     * @example
     * // Delete a few SubcategoryData
     * const { count } = await prisma.subcategoryData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDataDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubcategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryDataUpdateManyArgs>(args: SelectSubset<T, SubcategoryDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubcategoryData.
     * @param {SubcategoryDataUpsertArgs} args - Arguments to update or create a SubcategoryData.
     * @example
     * // Update or create a SubcategoryData
     * const subcategoryData = await prisma.subcategoryData.upsert({
     *   create: {
     *     // ... data to create a SubcategoryData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubcategoryData we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryDataUpsertArgs>(args: SelectSubset<T, SubcategoryDataUpsertArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubcategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataCountArgs} args - Arguments to filter SubcategoryData to count.
     * @example
     * // Count the number of SubcategoryData
     * const count = await prisma.subcategoryData.count({
     *   where: {
     *     // ... the filter for the SubcategoryData we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryDataCountArgs>(
      args?: Subset<T, SubcategoryDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubcategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoryDataAggregateArgs>(args: Subset<T, SubcategoryDataAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryDataAggregateType<T>>

    /**
     * Group by SubcategoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryDataGroupByArgs} args - Group by arguments.
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
      T extends SubcategoryDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryDataGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcategoryDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubcategoryData model
   */
  readonly fields: SubcategoryDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubcategoryData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryData<T extends CategoryDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDataDefaultArgs<ExtArgs>>): Prisma__CategoryDataClient<$Result.GetResult<Prisma.$CategoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends SubcategoryData$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryData$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productIds<T extends SubcategoryData$productIdsArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryData$productIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubcategoryData model
   */
  interface SubcategoryDataFieldRefs {
    readonly id: FieldRef<"SubcategoryData", 'Int'>
    readonly categoryId: FieldRef<"SubcategoryData", 'Int'>
    readonly categoryName: FieldRef<"SubcategoryData", 'String'>
    readonly isLeaf: FieldRef<"SubcategoryData", 'Boolean'>
    readonly matchingId: FieldRef<"SubcategoryData", 'Int'>
    readonly matchingCategoryName: FieldRef<"SubcategoryData", 'String'>
    readonly productCount: FieldRef<"SubcategoryData", 'Int'>
    readonly categoryDataId: FieldRef<"SubcategoryData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubcategoryData findUnique
   */
  export type SubcategoryDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which SubcategoryData to fetch.
     */
    where: SubcategoryDataWhereUniqueInput
  }

  /**
   * SubcategoryData findUniqueOrThrow
   */
  export type SubcategoryDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which SubcategoryData to fetch.
     */
    where: SubcategoryDataWhereUniqueInput
  }

  /**
   * SubcategoryData findFirst
   */
  export type SubcategoryDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which SubcategoryData to fetch.
     */
    where?: SubcategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubcategoryData to fetch.
     */
    orderBy?: SubcategoryDataOrderByWithRelationInput | SubcategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubcategoryData.
     */
    cursor?: SubcategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubcategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubcategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubcategoryData.
     */
    distinct?: SubcategoryDataScalarFieldEnum | SubcategoryDataScalarFieldEnum[]
  }

  /**
   * SubcategoryData findFirstOrThrow
   */
  export type SubcategoryDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which SubcategoryData to fetch.
     */
    where?: SubcategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubcategoryData to fetch.
     */
    orderBy?: SubcategoryDataOrderByWithRelationInput | SubcategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubcategoryData.
     */
    cursor?: SubcategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubcategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubcategoryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubcategoryData.
     */
    distinct?: SubcategoryDataScalarFieldEnum | SubcategoryDataScalarFieldEnum[]
  }

  /**
   * SubcategoryData findMany
   */
  export type SubcategoryDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter, which SubcategoryData to fetch.
     */
    where?: SubcategoryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubcategoryData to fetch.
     */
    orderBy?: SubcategoryDataOrderByWithRelationInput | SubcategoryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubcategoryData.
     */
    cursor?: SubcategoryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubcategoryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubcategoryData.
     */
    skip?: number
    distinct?: SubcategoryDataScalarFieldEnum | SubcategoryDataScalarFieldEnum[]
  }

  /**
   * SubcategoryData create
   */
  export type SubcategoryDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SubcategoryData.
     */
    data: XOR<SubcategoryDataCreateInput, SubcategoryDataUncheckedCreateInput>
  }

  /**
   * SubcategoryData createMany
   */
  export type SubcategoryDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubcategoryData.
     */
    data: SubcategoryDataCreateManyInput | SubcategoryDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubcategoryData update
   */
  export type SubcategoryDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SubcategoryData.
     */
    data: XOR<SubcategoryDataUpdateInput, SubcategoryDataUncheckedUpdateInput>
    /**
     * Choose, which SubcategoryData to update.
     */
    where: SubcategoryDataWhereUniqueInput
  }

  /**
   * SubcategoryData updateMany
   */
  export type SubcategoryDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubcategoryData.
     */
    data: XOR<SubcategoryDataUpdateManyMutationInput, SubcategoryDataUncheckedUpdateManyInput>
    /**
     * Filter which SubcategoryData to update
     */
    where?: SubcategoryDataWhereInput
    /**
     * Limit how many SubcategoryData to update.
     */
    limit?: number
  }

  /**
   * SubcategoryData upsert
   */
  export type SubcategoryDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SubcategoryData to update in case it exists.
     */
    where: SubcategoryDataWhereUniqueInput
    /**
     * In case the SubcategoryData found by the `where` argument doesn't exist, create a new SubcategoryData with this data.
     */
    create: XOR<SubcategoryDataCreateInput, SubcategoryDataUncheckedCreateInput>
    /**
     * In case the SubcategoryData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryDataUpdateInput, SubcategoryDataUncheckedUpdateInput>
  }

  /**
   * SubcategoryData delete
   */
  export type SubcategoryDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    /**
     * Filter which SubcategoryData to delete.
     */
    where: SubcategoryDataWhereUniqueInput
  }

  /**
   * SubcategoryData deleteMany
   */
  export type SubcategoryDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubcategoryData to delete
     */
    where?: SubcategoryDataWhereInput
    /**
     * Limit how many SubcategoryData to delete.
     */
    limit?: number
  }

  /**
   * SubcategoryData.subcategories
   */
  export type SubcategoryData$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    where?: NestedSubcategoryWhereInput
    orderBy?: NestedSubcategoryOrderByWithRelationInput | NestedSubcategoryOrderByWithRelationInput[]
    cursor?: NestedSubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NestedSubcategoryScalarFieldEnum | NestedSubcategoryScalarFieldEnum[]
  }

  /**
   * SubcategoryData.productIds
   */
  export type SubcategoryData$productIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    where?: ProductIdWhereInput
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    cursor?: ProductIdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductIdScalarFieldEnum | ProductIdScalarFieldEnum[]
  }

  /**
   * SubcategoryData without action
   */
  export type SubcategoryDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
  }


  /**
   * Model NestedSubcategory
   */

  export type AggregateNestedSubcategory = {
    _count: NestedSubcategoryCountAggregateOutputType | null
    _avg: NestedSubcategoryAvgAggregateOutputType | null
    _sum: NestedSubcategorySumAggregateOutputType | null
    _min: NestedSubcategoryMinAggregateOutputType | null
    _max: NestedSubcategoryMaxAggregateOutputType | null
  }

  export type NestedSubcategoryAvgAggregateOutputType = {
    id: number | null
    productCount: number | null
    subcategoryDataId: number | null
  }

  export type NestedSubcategorySumAggregateOutputType = {
    id: number | null
    productCount: number | null
    subcategoryDataId: number | null
  }

  export type NestedSubcategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    isLeaf: boolean | null
    productCount: number | null
    subcategoryDataId: number | null
  }

  export type NestedSubcategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isLeaf: boolean | null
    productCount: number | null
    subcategoryDataId: number | null
  }

  export type NestedSubcategoryCountAggregateOutputType = {
    id: number
    name: number
    isLeaf: number
    productCount: number
    subcategoryDataId: number
    _all: number
  }


  export type NestedSubcategoryAvgAggregateInputType = {
    id?: true
    productCount?: true
    subcategoryDataId?: true
  }

  export type NestedSubcategorySumAggregateInputType = {
    id?: true
    productCount?: true
    subcategoryDataId?: true
  }

  export type NestedSubcategoryMinAggregateInputType = {
    id?: true
    name?: true
    isLeaf?: true
    productCount?: true
    subcategoryDataId?: true
  }

  export type NestedSubcategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isLeaf?: true
    productCount?: true
    subcategoryDataId?: true
  }

  export type NestedSubcategoryCountAggregateInputType = {
    id?: true
    name?: true
    isLeaf?: true
    productCount?: true
    subcategoryDataId?: true
    _all?: true
  }

  export type NestedSubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NestedSubcategory to aggregate.
     */
    where?: NestedSubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NestedSubcategories to fetch.
     */
    orderBy?: NestedSubcategoryOrderByWithRelationInput | NestedSubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NestedSubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NestedSubcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NestedSubcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NestedSubcategories
    **/
    _count?: true | NestedSubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NestedSubcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NestedSubcategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NestedSubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NestedSubcategoryMaxAggregateInputType
  }

  export type GetNestedSubcategoryAggregateType<T extends NestedSubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNestedSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNestedSubcategory[P]>
      : GetScalarType<T[P], AggregateNestedSubcategory[P]>
  }




  export type NestedSubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NestedSubcategoryWhereInput
    orderBy?: NestedSubcategoryOrderByWithAggregationInput | NestedSubcategoryOrderByWithAggregationInput[]
    by: NestedSubcategoryScalarFieldEnum[] | NestedSubcategoryScalarFieldEnum
    having?: NestedSubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NestedSubcategoryCountAggregateInputType | true
    _avg?: NestedSubcategoryAvgAggregateInputType
    _sum?: NestedSubcategorySumAggregateInputType
    _min?: NestedSubcategoryMinAggregateInputType
    _max?: NestedSubcategoryMaxAggregateInputType
  }

  export type NestedSubcategoryGroupByOutputType = {
    id: number
    name: string
    isLeaf: boolean
    productCount: number
    subcategoryDataId: number
    _count: NestedSubcategoryCountAggregateOutputType | null
    _avg: NestedSubcategoryAvgAggregateOutputType | null
    _sum: NestedSubcategorySumAggregateOutputType | null
    _min: NestedSubcategoryMinAggregateOutputType | null
    _max: NestedSubcategoryMaxAggregateOutputType | null
  }

  type GetNestedSubcategoryGroupByPayload<T extends NestedSubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NestedSubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NestedSubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NestedSubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NestedSubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type NestedSubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isLeaf?: boolean
    productCount?: boolean
    subcategoryDataId?: boolean
    subcategoryData?: boolean | SubcategoryDataDefaultArgs<ExtArgs>
    productIds?: boolean | NestedSubcategory$productIdsArgs<ExtArgs>
    _count?: boolean | NestedSubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nestedSubcategory"]>



  export type NestedSubcategorySelectScalar = {
    id?: boolean
    name?: boolean
    isLeaf?: boolean
    productCount?: boolean
    subcategoryDataId?: boolean
  }

  export type NestedSubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isLeaf" | "productCount" | "subcategoryDataId", ExtArgs["result"]["nestedSubcategory"]>
  export type NestedSubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategoryData?: boolean | SubcategoryDataDefaultArgs<ExtArgs>
    productIds?: boolean | NestedSubcategory$productIdsArgs<ExtArgs>
    _count?: boolean | NestedSubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NestedSubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NestedSubcategory"
    objects: {
      subcategoryData: Prisma.$SubcategoryDataPayload<ExtArgs>
      productIds: Prisma.$ProductIdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isLeaf: boolean
      productCount: number
      subcategoryDataId: number
    }, ExtArgs["result"]["nestedSubcategory"]>
    composites: {}
  }

  type NestedSubcategoryGetPayload<S extends boolean | null | undefined | NestedSubcategoryDefaultArgs> = $Result.GetResult<Prisma.$NestedSubcategoryPayload, S>

  type NestedSubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NestedSubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NestedSubcategoryCountAggregateInputType | true
    }

  export interface NestedSubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NestedSubcategory'], meta: { name: 'NestedSubcategory' } }
    /**
     * Find zero or one NestedSubcategory that matches the filter.
     * @param {NestedSubcategoryFindUniqueArgs} args - Arguments to find a NestedSubcategory
     * @example
     * // Get one NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NestedSubcategoryFindUniqueArgs>(args: SelectSubset<T, NestedSubcategoryFindUniqueArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NestedSubcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NestedSubcategoryFindUniqueOrThrowArgs} args - Arguments to find a NestedSubcategory
     * @example
     * // Get one NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NestedSubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NestedSubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NestedSubcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryFindFirstArgs} args - Arguments to find a NestedSubcategory
     * @example
     * // Get one NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NestedSubcategoryFindFirstArgs>(args?: SelectSubset<T, NestedSubcategoryFindFirstArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NestedSubcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryFindFirstOrThrowArgs} args - Arguments to find a NestedSubcategory
     * @example
     * // Get one NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NestedSubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NestedSubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NestedSubcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NestedSubcategories
     * const nestedSubcategories = await prisma.nestedSubcategory.findMany()
     * 
     * // Get first 10 NestedSubcategories
     * const nestedSubcategories = await prisma.nestedSubcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nestedSubcategoryWithIdOnly = await prisma.nestedSubcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NestedSubcategoryFindManyArgs>(args?: SelectSubset<T, NestedSubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NestedSubcategory.
     * @param {NestedSubcategoryCreateArgs} args - Arguments to create a NestedSubcategory.
     * @example
     * // Create one NestedSubcategory
     * const NestedSubcategory = await prisma.nestedSubcategory.create({
     *   data: {
     *     // ... data to create a NestedSubcategory
     *   }
     * })
     * 
     */
    create<T extends NestedSubcategoryCreateArgs>(args: SelectSubset<T, NestedSubcategoryCreateArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NestedSubcategories.
     * @param {NestedSubcategoryCreateManyArgs} args - Arguments to create many NestedSubcategories.
     * @example
     * // Create many NestedSubcategories
     * const nestedSubcategory = await prisma.nestedSubcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NestedSubcategoryCreateManyArgs>(args?: SelectSubset<T, NestedSubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NestedSubcategory.
     * @param {NestedSubcategoryDeleteArgs} args - Arguments to delete one NestedSubcategory.
     * @example
     * // Delete one NestedSubcategory
     * const NestedSubcategory = await prisma.nestedSubcategory.delete({
     *   where: {
     *     // ... filter to delete one NestedSubcategory
     *   }
     * })
     * 
     */
    delete<T extends NestedSubcategoryDeleteArgs>(args: SelectSubset<T, NestedSubcategoryDeleteArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NestedSubcategory.
     * @param {NestedSubcategoryUpdateArgs} args - Arguments to update one NestedSubcategory.
     * @example
     * // Update one NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NestedSubcategoryUpdateArgs>(args: SelectSubset<T, NestedSubcategoryUpdateArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NestedSubcategories.
     * @param {NestedSubcategoryDeleteManyArgs} args - Arguments to filter NestedSubcategories to delete.
     * @example
     * // Delete a few NestedSubcategories
     * const { count } = await prisma.nestedSubcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NestedSubcategoryDeleteManyArgs>(args?: SelectSubset<T, NestedSubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NestedSubcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NestedSubcategories
     * const nestedSubcategory = await prisma.nestedSubcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NestedSubcategoryUpdateManyArgs>(args: SelectSubset<T, NestedSubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NestedSubcategory.
     * @param {NestedSubcategoryUpsertArgs} args - Arguments to update or create a NestedSubcategory.
     * @example
     * // Update or create a NestedSubcategory
     * const nestedSubcategory = await prisma.nestedSubcategory.upsert({
     *   create: {
     *     // ... data to create a NestedSubcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NestedSubcategory we want to update
     *   }
     * })
     */
    upsert<T extends NestedSubcategoryUpsertArgs>(args: SelectSubset<T, NestedSubcategoryUpsertArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NestedSubcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryCountArgs} args - Arguments to filter NestedSubcategories to count.
     * @example
     * // Count the number of NestedSubcategories
     * const count = await prisma.nestedSubcategory.count({
     *   where: {
     *     // ... the filter for the NestedSubcategories we want to count
     *   }
     * })
    **/
    count<T extends NestedSubcategoryCountArgs>(
      args?: Subset<T, NestedSubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NestedSubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NestedSubcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NestedSubcategoryAggregateArgs>(args: Subset<T, NestedSubcategoryAggregateArgs>): Prisma.PrismaPromise<GetNestedSubcategoryAggregateType<T>>

    /**
     * Group by NestedSubcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NestedSubcategoryGroupByArgs} args - Group by arguments.
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
      T extends NestedSubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NestedSubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: NestedSubcategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NestedSubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNestedSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NestedSubcategory model
   */
  readonly fields: NestedSubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NestedSubcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NestedSubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategoryData<T extends SubcategoryDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDataDefaultArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productIds<T extends NestedSubcategory$productIdsArgs<ExtArgs> = {}>(args?: Subset<T, NestedSubcategory$productIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NestedSubcategory model
   */
  interface NestedSubcategoryFieldRefs {
    readonly id: FieldRef<"NestedSubcategory", 'Int'>
    readonly name: FieldRef<"NestedSubcategory", 'String'>
    readonly isLeaf: FieldRef<"NestedSubcategory", 'Boolean'>
    readonly productCount: FieldRef<"NestedSubcategory", 'Int'>
    readonly subcategoryDataId: FieldRef<"NestedSubcategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NestedSubcategory findUnique
   */
  export type NestedSubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which NestedSubcategory to fetch.
     */
    where: NestedSubcategoryWhereUniqueInput
  }

  /**
   * NestedSubcategory findUniqueOrThrow
   */
  export type NestedSubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which NestedSubcategory to fetch.
     */
    where: NestedSubcategoryWhereUniqueInput
  }

  /**
   * NestedSubcategory findFirst
   */
  export type NestedSubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which NestedSubcategory to fetch.
     */
    where?: NestedSubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NestedSubcategories to fetch.
     */
    orderBy?: NestedSubcategoryOrderByWithRelationInput | NestedSubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NestedSubcategories.
     */
    cursor?: NestedSubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NestedSubcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NestedSubcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NestedSubcategories.
     */
    distinct?: NestedSubcategoryScalarFieldEnum | NestedSubcategoryScalarFieldEnum[]
  }

  /**
   * NestedSubcategory findFirstOrThrow
   */
  export type NestedSubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which NestedSubcategory to fetch.
     */
    where?: NestedSubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NestedSubcategories to fetch.
     */
    orderBy?: NestedSubcategoryOrderByWithRelationInput | NestedSubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NestedSubcategories.
     */
    cursor?: NestedSubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NestedSubcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NestedSubcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NestedSubcategories.
     */
    distinct?: NestedSubcategoryScalarFieldEnum | NestedSubcategoryScalarFieldEnum[]
  }

  /**
   * NestedSubcategory findMany
   */
  export type NestedSubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which NestedSubcategories to fetch.
     */
    where?: NestedSubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NestedSubcategories to fetch.
     */
    orderBy?: NestedSubcategoryOrderByWithRelationInput | NestedSubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NestedSubcategories.
     */
    cursor?: NestedSubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NestedSubcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NestedSubcategories.
     */
    skip?: number
    distinct?: NestedSubcategoryScalarFieldEnum | NestedSubcategoryScalarFieldEnum[]
  }

  /**
   * NestedSubcategory create
   */
  export type NestedSubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NestedSubcategory.
     */
    data: XOR<NestedSubcategoryCreateInput, NestedSubcategoryUncheckedCreateInput>
  }

  /**
   * NestedSubcategory createMany
   */
  export type NestedSubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NestedSubcategories.
     */
    data: NestedSubcategoryCreateManyInput | NestedSubcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NestedSubcategory update
   */
  export type NestedSubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NestedSubcategory.
     */
    data: XOR<NestedSubcategoryUpdateInput, NestedSubcategoryUncheckedUpdateInput>
    /**
     * Choose, which NestedSubcategory to update.
     */
    where: NestedSubcategoryWhereUniqueInput
  }

  /**
   * NestedSubcategory updateMany
   */
  export type NestedSubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NestedSubcategories.
     */
    data: XOR<NestedSubcategoryUpdateManyMutationInput, NestedSubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which NestedSubcategories to update
     */
    where?: NestedSubcategoryWhereInput
    /**
     * Limit how many NestedSubcategories to update.
     */
    limit?: number
  }

  /**
   * NestedSubcategory upsert
   */
  export type NestedSubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NestedSubcategory to update in case it exists.
     */
    where: NestedSubcategoryWhereUniqueInput
    /**
     * In case the NestedSubcategory found by the `where` argument doesn't exist, create a new NestedSubcategory with this data.
     */
    create: XOR<NestedSubcategoryCreateInput, NestedSubcategoryUncheckedCreateInput>
    /**
     * In case the NestedSubcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NestedSubcategoryUpdateInput, NestedSubcategoryUncheckedUpdateInput>
  }

  /**
   * NestedSubcategory delete
   */
  export type NestedSubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    /**
     * Filter which NestedSubcategory to delete.
     */
    where: NestedSubcategoryWhereUniqueInput
  }

  /**
   * NestedSubcategory deleteMany
   */
  export type NestedSubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NestedSubcategories to delete
     */
    where?: NestedSubcategoryWhereInput
    /**
     * Limit how many NestedSubcategories to delete.
     */
    limit?: number
  }

  /**
   * NestedSubcategory.productIds
   */
  export type NestedSubcategory$productIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    where?: ProductIdWhereInput
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    cursor?: ProductIdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductIdScalarFieldEnum | ProductIdScalarFieldEnum[]
  }

  /**
   * NestedSubcategory without action
   */
  export type NestedSubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductId
   */

  export type AggregateProductId = {
    _count: ProductIdCountAggregateOutputType | null
    _avg: ProductIdAvgAggregateOutputType | null
    _sum: ProductIdSumAggregateOutputType | null
    _min: ProductIdMinAggregateOutputType | null
    _max: ProductIdMaxAggregateOutputType | null
  }

  export type ProductIdAvgAggregateOutputType = {
    id: number | null
    subcategoryDataId: number | null
    nestedSubcategoryId: number | null
  }

  export type ProductIdSumAggregateOutputType = {
    id: number | null
    subcategoryDataId: number | null
    nestedSubcategoryId: number | null
  }

  export type ProductIdMinAggregateOutputType = {
    id: number | null
    productId: string | null
    subcategoryDataId: number | null
    nestedSubcategoryId: number | null
  }

  export type ProductIdMaxAggregateOutputType = {
    id: number | null
    productId: string | null
    subcategoryDataId: number | null
    nestedSubcategoryId: number | null
  }

  export type ProductIdCountAggregateOutputType = {
    id: number
    productId: number
    subcategoryDataId: number
    nestedSubcategoryId: number
    _all: number
  }


  export type ProductIdAvgAggregateInputType = {
    id?: true
    subcategoryDataId?: true
    nestedSubcategoryId?: true
  }

  export type ProductIdSumAggregateInputType = {
    id?: true
    subcategoryDataId?: true
    nestedSubcategoryId?: true
  }

  export type ProductIdMinAggregateInputType = {
    id?: true
    productId?: true
    subcategoryDataId?: true
    nestedSubcategoryId?: true
  }

  export type ProductIdMaxAggregateInputType = {
    id?: true
    productId?: true
    subcategoryDataId?: true
    nestedSubcategoryId?: true
  }

  export type ProductIdCountAggregateInputType = {
    id?: true
    productId?: true
    subcategoryDataId?: true
    nestedSubcategoryId?: true
    _all?: true
  }

  export type ProductIdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductId to aggregate.
     */
    where?: ProductIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIds to fetch.
     */
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductIds
    **/
    _count?: true | ProductIdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductIdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductIdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductIdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductIdMaxAggregateInputType
  }

  export type GetProductIdAggregateType<T extends ProductIdAggregateArgs> = {
        [P in keyof T & keyof AggregateProductId]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductId[P]>
      : GetScalarType<T[P], AggregateProductId[P]>
  }




  export type ProductIdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductIdWhereInput
    orderBy?: ProductIdOrderByWithAggregationInput | ProductIdOrderByWithAggregationInput[]
    by: ProductIdScalarFieldEnum[] | ProductIdScalarFieldEnum
    having?: ProductIdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductIdCountAggregateInputType | true
    _avg?: ProductIdAvgAggregateInputType
    _sum?: ProductIdSumAggregateInputType
    _min?: ProductIdMinAggregateInputType
    _max?: ProductIdMaxAggregateInputType
  }

  export type ProductIdGroupByOutputType = {
    id: number
    productId: string
    subcategoryDataId: number | null
    nestedSubcategoryId: number | null
    _count: ProductIdCountAggregateOutputType | null
    _avg: ProductIdAvgAggregateOutputType | null
    _sum: ProductIdSumAggregateOutputType | null
    _min: ProductIdMinAggregateOutputType | null
    _max: ProductIdMaxAggregateOutputType | null
  }

  type GetProductIdGroupByPayload<T extends ProductIdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductIdGroupByOutputType[P]>
            : GetScalarType<T[P], ProductIdGroupByOutputType[P]>
        }
      >
    >


  export type ProductIdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    subcategoryDataId?: boolean
    nestedSubcategoryId?: boolean
    subcategoryData?: boolean | ProductId$subcategoryDataArgs<ExtArgs>
    nestedSubcategory?: boolean | ProductId$nestedSubcategoryArgs<ExtArgs>
  }, ExtArgs["result"]["productId"]>



  export type ProductIdSelectScalar = {
    id?: boolean
    productId?: boolean
    subcategoryDataId?: boolean
    nestedSubcategoryId?: boolean
  }

  export type ProductIdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "subcategoryDataId" | "nestedSubcategoryId", ExtArgs["result"]["productId"]>
  export type ProductIdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategoryData?: boolean | ProductId$subcategoryDataArgs<ExtArgs>
    nestedSubcategory?: boolean | ProductId$nestedSubcategoryArgs<ExtArgs>
  }

  export type $ProductIdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductId"
    objects: {
      subcategoryData: Prisma.$SubcategoryDataPayload<ExtArgs> | null
      nestedSubcategory: Prisma.$NestedSubcategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: string
      subcategoryDataId: number | null
      nestedSubcategoryId: number | null
    }, ExtArgs["result"]["productId"]>
    composites: {}
  }

  type ProductIdGetPayload<S extends boolean | null | undefined | ProductIdDefaultArgs> = $Result.GetResult<Prisma.$ProductIdPayload, S>

  type ProductIdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductIdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductIdCountAggregateInputType | true
    }

  export interface ProductIdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductId'], meta: { name: 'ProductId' } }
    /**
     * Find zero or one ProductId that matches the filter.
     * @param {ProductIdFindUniqueArgs} args - Arguments to find a ProductId
     * @example
     * // Get one ProductId
     * const productId = await prisma.productId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductIdFindUniqueArgs>(args: SelectSubset<T, ProductIdFindUniqueArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductId that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductIdFindUniqueOrThrowArgs} args - Arguments to find a ProductId
     * @example
     * // Get one ProductId
     * const productId = await prisma.productId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductIdFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductIdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdFindFirstArgs} args - Arguments to find a ProductId
     * @example
     * // Get one ProductId
     * const productId = await prisma.productId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductIdFindFirstArgs>(args?: SelectSubset<T, ProductIdFindFirstArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdFindFirstOrThrowArgs} args - Arguments to find a ProductId
     * @example
     * // Get one ProductId
     * const productId = await prisma.productId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductIdFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductIdFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductIds
     * const productIds = await prisma.productId.findMany()
     * 
     * // Get first 10 ProductIds
     * const productIds = await prisma.productId.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productIdWithIdOnly = await prisma.productId.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductIdFindManyArgs>(args?: SelectSubset<T, ProductIdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductId.
     * @param {ProductIdCreateArgs} args - Arguments to create a ProductId.
     * @example
     * // Create one ProductId
     * const ProductId = await prisma.productId.create({
     *   data: {
     *     // ... data to create a ProductId
     *   }
     * })
     * 
     */
    create<T extends ProductIdCreateArgs>(args: SelectSubset<T, ProductIdCreateArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductIds.
     * @param {ProductIdCreateManyArgs} args - Arguments to create many ProductIds.
     * @example
     * // Create many ProductIds
     * const productId = await prisma.productId.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductIdCreateManyArgs>(args?: SelectSubset<T, ProductIdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductId.
     * @param {ProductIdDeleteArgs} args - Arguments to delete one ProductId.
     * @example
     * // Delete one ProductId
     * const ProductId = await prisma.productId.delete({
     *   where: {
     *     // ... filter to delete one ProductId
     *   }
     * })
     * 
     */
    delete<T extends ProductIdDeleteArgs>(args: SelectSubset<T, ProductIdDeleteArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductId.
     * @param {ProductIdUpdateArgs} args - Arguments to update one ProductId.
     * @example
     * // Update one ProductId
     * const productId = await prisma.productId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductIdUpdateArgs>(args: SelectSubset<T, ProductIdUpdateArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductIds.
     * @param {ProductIdDeleteManyArgs} args - Arguments to filter ProductIds to delete.
     * @example
     * // Delete a few ProductIds
     * const { count } = await prisma.productId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductIdDeleteManyArgs>(args?: SelectSubset<T, ProductIdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductIds
     * const productId = await prisma.productId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductIdUpdateManyArgs>(args: SelectSubset<T, ProductIdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductId.
     * @param {ProductIdUpsertArgs} args - Arguments to update or create a ProductId.
     * @example
     * // Update or create a ProductId
     * const productId = await prisma.productId.upsert({
     *   create: {
     *     // ... data to create a ProductId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductId we want to update
     *   }
     * })
     */
    upsert<T extends ProductIdUpsertArgs>(args: SelectSubset<T, ProductIdUpsertArgs<ExtArgs>>): Prisma__ProductIdClient<$Result.GetResult<Prisma.$ProductIdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdCountArgs} args - Arguments to filter ProductIds to count.
     * @example
     * // Count the number of ProductIds
     * const count = await prisma.productId.count({
     *   where: {
     *     // ... the filter for the ProductIds we want to count
     *   }
     * })
    **/
    count<T extends ProductIdCountArgs>(
      args?: Subset<T, ProductIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductIdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductIdAggregateArgs>(args: Subset<T, ProductIdAggregateArgs>): Prisma.PrismaPromise<GetProductIdAggregateType<T>>

    /**
     * Group by ProductId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductIdGroupByArgs} args - Group by arguments.
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
      T extends ProductIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductIdGroupByArgs['orderBy'] }
        : { orderBy?: ProductIdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductId model
   */
  readonly fields: ProductIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductIdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategoryData<T extends ProductId$subcategoryDataArgs<ExtArgs> = {}>(args?: Subset<T, ProductId$subcategoryDataArgs<ExtArgs>>): Prisma__SubcategoryDataClient<$Result.GetResult<Prisma.$SubcategoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nestedSubcategory<T extends ProductId$nestedSubcategoryArgs<ExtArgs> = {}>(args?: Subset<T, ProductId$nestedSubcategoryArgs<ExtArgs>>): Prisma__NestedSubcategoryClient<$Result.GetResult<Prisma.$NestedSubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductId model
   */
  interface ProductIdFieldRefs {
    readonly id: FieldRef<"ProductId", 'Int'>
    readonly productId: FieldRef<"ProductId", 'String'>
    readonly subcategoryDataId: FieldRef<"ProductId", 'Int'>
    readonly nestedSubcategoryId: FieldRef<"ProductId", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductId findUnique
   */
  export type ProductIdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter, which ProductId to fetch.
     */
    where: ProductIdWhereUniqueInput
  }

  /**
   * ProductId findUniqueOrThrow
   */
  export type ProductIdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter, which ProductId to fetch.
     */
    where: ProductIdWhereUniqueInput
  }

  /**
   * ProductId findFirst
   */
  export type ProductIdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter, which ProductId to fetch.
     */
    where?: ProductIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIds to fetch.
     */
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIds.
     */
    cursor?: ProductIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIds.
     */
    distinct?: ProductIdScalarFieldEnum | ProductIdScalarFieldEnum[]
  }

  /**
   * ProductId findFirstOrThrow
   */
  export type ProductIdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter, which ProductId to fetch.
     */
    where?: ProductIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIds to fetch.
     */
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductIds.
     */
    cursor?: ProductIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductIds.
     */
    distinct?: ProductIdScalarFieldEnum | ProductIdScalarFieldEnum[]
  }

  /**
   * ProductId findMany
   */
  export type ProductIdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter, which ProductIds to fetch.
     */
    where?: ProductIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductIds to fetch.
     */
    orderBy?: ProductIdOrderByWithRelationInput | ProductIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductIds.
     */
    cursor?: ProductIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductIds.
     */
    skip?: number
    distinct?: ProductIdScalarFieldEnum | ProductIdScalarFieldEnum[]
  }

  /**
   * ProductId create
   */
  export type ProductIdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductId.
     */
    data: XOR<ProductIdCreateInput, ProductIdUncheckedCreateInput>
  }

  /**
   * ProductId createMany
   */
  export type ProductIdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductIds.
     */
    data: ProductIdCreateManyInput | ProductIdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductId update
   */
  export type ProductIdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductId.
     */
    data: XOR<ProductIdUpdateInput, ProductIdUncheckedUpdateInput>
    /**
     * Choose, which ProductId to update.
     */
    where: ProductIdWhereUniqueInput
  }

  /**
   * ProductId updateMany
   */
  export type ProductIdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductIds.
     */
    data: XOR<ProductIdUpdateManyMutationInput, ProductIdUncheckedUpdateManyInput>
    /**
     * Filter which ProductIds to update
     */
    where?: ProductIdWhereInput
    /**
     * Limit how many ProductIds to update.
     */
    limit?: number
  }

  /**
   * ProductId upsert
   */
  export type ProductIdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductId to update in case it exists.
     */
    where: ProductIdWhereUniqueInput
    /**
     * In case the ProductId found by the `where` argument doesn't exist, create a new ProductId with this data.
     */
    create: XOR<ProductIdCreateInput, ProductIdUncheckedCreateInput>
    /**
     * In case the ProductId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductIdUpdateInput, ProductIdUncheckedUpdateInput>
  }

  /**
   * ProductId delete
   */
  export type ProductIdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
    /**
     * Filter which ProductId to delete.
     */
    where: ProductIdWhereUniqueInput
  }

  /**
   * ProductId deleteMany
   */
  export type ProductIdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductIds to delete
     */
    where?: ProductIdWhereInput
    /**
     * Limit how many ProductIds to delete.
     */
    limit?: number
  }

  /**
   * ProductId.subcategoryData
   */
  export type ProductId$subcategoryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryData
     */
    select?: SubcategoryDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubcategoryData
     */
    omit?: SubcategoryDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryDataInclude<ExtArgs> | null
    where?: SubcategoryDataWhereInput
  }

  /**
   * ProductId.nestedSubcategory
   */
  export type ProductId$nestedSubcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NestedSubcategory
     */
    select?: NestedSubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NestedSubcategory
     */
    omit?: NestedSubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NestedSubcategoryInclude<ExtArgs> | null
    where?: NestedSubcategoryWhereInput
  }

  /**
   * ProductId without action
   */
  export type ProductIdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductId
     */
    select?: ProductIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductId
     */
    omit?: ProductIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIdInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    currency: string | null
    brand: string | null
    scrapedAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    currency: string | null
    brand: string | null
    scrapedAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    currency: number
    brand: number
    scrapedAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    currency?: true
    brand?: true
    scrapedAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    currency?: true
    brand?: true
    scrapedAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    currency?: true
    brand?: true
    scrapedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    brand?: boolean
    scrapedAt?: boolean
    updatedAt?: boolean
    colors?: boolean | Product$colorsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    brand?: boolean
    scrapedAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "currency" | "brand" | "scrapedAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | Product$colorsArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      colors: Prisma.$ProductColorPayload<ExtArgs>[]
      images: Prisma.$ProductImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      currency: string
      brand: string
      scrapedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colors<T extends Product$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Product$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly currency: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly scrapedAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.colors
   */
  export type Product$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    where?: ProductColorWhereInput
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    cursor?: ProductColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductColor
   */

  export type AggregateProductColor = {
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  export type ProductColorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductColorSumAggregateOutputType = {
    id: number | null
  }

  export type ProductColorMinAggregateOutputType = {
    id: number | null
    colorId: string | null
    name: string | null
    productId: string | null
  }

  export type ProductColorMaxAggregateOutputType = {
    id: number | null
    colorId: string | null
    name: string | null
    productId: string | null
  }

  export type ProductColorCountAggregateOutputType = {
    id: number
    colorId: number
    name: number
    productId: number
    _all: number
  }


  export type ProductColorAvgAggregateInputType = {
    id?: true
  }

  export type ProductColorSumAggregateInputType = {
    id?: true
  }

  export type ProductColorMinAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    productId?: true
  }

  export type ProductColorMaxAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    productId?: true
  }

  export type ProductColorCountAggregateInputType = {
    id?: true
    colorId?: true
    name?: true
    productId?: true
    _all?: true
  }

  export type ProductColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductColor to aggregate.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductColors
    **/
    _count?: true | ProductColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductColorMaxAggregateInputType
  }

  export type GetProductColorAggregateType<T extends ProductColorAggregateArgs> = {
        [P in keyof T & keyof AggregateProductColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductColor[P]>
      : GetScalarType<T[P], AggregateProductColor[P]>
  }




  export type ProductColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductColorWhereInput
    orderBy?: ProductColorOrderByWithAggregationInput | ProductColorOrderByWithAggregationInput[]
    by: ProductColorScalarFieldEnum[] | ProductColorScalarFieldEnum
    having?: ProductColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductColorCountAggregateInputType | true
    _avg?: ProductColorAvgAggregateInputType
    _sum?: ProductColorSumAggregateInputType
    _min?: ProductColorMinAggregateInputType
    _max?: ProductColorMaxAggregateInputType
  }

  export type ProductColorGroupByOutputType = {
    id: number
    colorId: string
    name: string
    productId: string
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  type GetProductColorGroupByPayload<T extends ProductColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
            : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
        }
      >
    >


  export type ProductColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorId?: boolean
    name?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sizes?: boolean | ProductColor$sizesArgs<ExtArgs>
    _count?: boolean | ProductColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productColor"]>



  export type ProductColorSelectScalar = {
    id?: boolean
    colorId?: boolean
    name?: boolean
    productId?: boolean
  }

  export type ProductColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colorId" | "name" | "productId", ExtArgs["result"]["productColor"]>
  export type ProductColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sizes?: boolean | ProductColor$sizesArgs<ExtArgs>
    _count?: boolean | ProductColorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductColor"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      colorId: string
      name: string
      productId: string
    }, ExtArgs["result"]["productColor"]>
    composites: {}
  }

  type ProductColorGetPayload<S extends boolean | null | undefined | ProductColorDefaultArgs> = $Result.GetResult<Prisma.$ProductColorPayload, S>

  type ProductColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductColorCountAggregateInputType | true
    }

  export interface ProductColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductColor'], meta: { name: 'ProductColor' } }
    /**
     * Find zero or one ProductColor that matches the filter.
     * @param {ProductColorFindUniqueArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductColorFindUniqueArgs>(args: SelectSubset<T, ProductColorFindUniqueArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductColor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductColorFindUniqueOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductColorFindFirstArgs>(args?: SelectSubset<T, ProductColorFindFirstArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductColor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductColors
     * const productColors = await prisma.productColor.findMany()
     * 
     * // Get first 10 ProductColors
     * const productColors = await prisma.productColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productColorWithIdOnly = await prisma.productColor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductColorFindManyArgs>(args?: SelectSubset<T, ProductColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductColor.
     * @param {ProductColorCreateArgs} args - Arguments to create a ProductColor.
     * @example
     * // Create one ProductColor
     * const ProductColor = await prisma.productColor.create({
     *   data: {
     *     // ... data to create a ProductColor
     *   }
     * })
     * 
     */
    create<T extends ProductColorCreateArgs>(args: SelectSubset<T, ProductColorCreateArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductColors.
     * @param {ProductColorCreateManyArgs} args - Arguments to create many ProductColors.
     * @example
     * // Create many ProductColors
     * const productColor = await prisma.productColor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductColorCreateManyArgs>(args?: SelectSubset<T, ProductColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductColor.
     * @param {ProductColorDeleteArgs} args - Arguments to delete one ProductColor.
     * @example
     * // Delete one ProductColor
     * const ProductColor = await prisma.productColor.delete({
     *   where: {
     *     // ... filter to delete one ProductColor
     *   }
     * })
     * 
     */
    delete<T extends ProductColorDeleteArgs>(args: SelectSubset<T, ProductColorDeleteArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductColor.
     * @param {ProductColorUpdateArgs} args - Arguments to update one ProductColor.
     * @example
     * // Update one ProductColor
     * const productColor = await prisma.productColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductColorUpdateArgs>(args: SelectSubset<T, ProductColorUpdateArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductColors.
     * @param {ProductColorDeleteManyArgs} args - Arguments to filter ProductColors to delete.
     * @example
     * // Delete a few ProductColors
     * const { count } = await prisma.productColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductColorDeleteManyArgs>(args?: SelectSubset<T, ProductColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductColors
     * const productColor = await prisma.productColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductColorUpdateManyArgs>(args: SelectSubset<T, ProductColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductColor.
     * @param {ProductColorUpsertArgs} args - Arguments to update or create a ProductColor.
     * @example
     * // Update or create a ProductColor
     * const productColor = await prisma.productColor.upsert({
     *   create: {
     *     // ... data to create a ProductColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductColor we want to update
     *   }
     * })
     */
    upsert<T extends ProductColorUpsertArgs>(args: SelectSubset<T, ProductColorUpsertArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorCountArgs} args - Arguments to filter ProductColors to count.
     * @example
     * // Count the number of ProductColors
     * const count = await prisma.productColor.count({
     *   where: {
     *     // ... the filter for the ProductColors we want to count
     *   }
     * })
    **/
    count<T extends ProductColorCountArgs>(
      args?: Subset<T, ProductColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductColorAggregateArgs>(args: Subset<T, ProductColorAggregateArgs>): Prisma.PrismaPromise<GetProductColorAggregateType<T>>

    /**
     * Group by ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorGroupByArgs} args - Group by arguments.
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
      T extends ProductColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductColorGroupByArgs['orderBy'] }
        : { orderBy?: ProductColorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductColor model
   */
  readonly fields: ProductColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sizes<T extends ProductColor$sizesArgs<ExtArgs> = {}>(args?: Subset<T, ProductColor$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductColor model
   */
  interface ProductColorFieldRefs {
    readonly id: FieldRef<"ProductColor", 'Int'>
    readonly colorId: FieldRef<"ProductColor", 'String'>
    readonly name: FieldRef<"ProductColor", 'String'>
    readonly productId: FieldRef<"ProductColor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductColor findUnique
   */
  export type ProductColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor findUniqueOrThrow
   */
  export type ProductColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor findFirst
   */
  export type ProductColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     */
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor findFirstOrThrow
   */
  export type ProductColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColor to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     */
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor findMany
   */
  export type ProductColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter, which ProductColors to fetch.
     */
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     */
    orderBy?: ProductColorOrderByWithRelationInput | ProductColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductColors.
     */
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     */
    skip?: number
    distinct?: ProductColorScalarFieldEnum | ProductColorScalarFieldEnum[]
  }

  /**
   * ProductColor create
   */
  export type ProductColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductColor.
     */
    data: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
  }

  /**
   * ProductColor createMany
   */
  export type ProductColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductColors.
     */
    data: ProductColorCreateManyInput | ProductColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductColor update
   */
  export type ProductColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductColor.
     */
    data: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
    /**
     * Choose, which ProductColor to update.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor updateMany
   */
  export type ProductColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductColors.
     */
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyInput>
    /**
     * Filter which ProductColors to update
     */
    where?: ProductColorWhereInput
    /**
     * Limit how many ProductColors to update.
     */
    limit?: number
  }

  /**
   * ProductColor upsert
   */
  export type ProductColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductColor to update in case it exists.
     */
    where: ProductColorWhereUniqueInput
    /**
     * In case the ProductColor found by the `where` argument doesn't exist, create a new ProductColor with this data.
     */
    create: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
    /**
     * In case the ProductColor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
  }

  /**
   * ProductColor delete
   */
  export type ProductColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
    /**
     * Filter which ProductColor to delete.
     */
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor deleteMany
   */
  export type ProductColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductColors to delete
     */
    where?: ProductColorWhereInput
    /**
     * Limit how many ProductColors to delete.
     */
    limit?: number
  }

  /**
   * ProductColor.sizes
   */
  export type ProductColor$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductColor without action
   */
  export type ProductColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductColorInclude<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */

  export type AggregateProductSize = {
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  export type ProductSizeAvgAggregateOutputType = {
    id: number | null
    sku: number | null
    price: number | null
    colorId: number | null
  }

  export type ProductSizeSumAggregateOutputType = {
    id: number | null
    sku: number | null
    price: number | null
    colorId: number | null
  }

  export type ProductSizeMinAggregateOutputType = {
    id: number | null
    name: string | null
    sku: number | null
    availability: string | null
    price: number | null
    colorId: number | null
  }

  export type ProductSizeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sku: number | null
    availability: string | null
    price: number | null
    colorId: number | null
  }

  export type ProductSizeCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    availability: number
    price: number
    colorId: number
    _all: number
  }


  export type ProductSizeAvgAggregateInputType = {
    id?: true
    sku?: true
    price?: true
    colorId?: true
  }

  export type ProductSizeSumAggregateInputType = {
    id?: true
    sku?: true
    price?: true
    colorId?: true
  }

  export type ProductSizeMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    availability?: true
    price?: true
    colorId?: true
  }

  export type ProductSizeMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    availability?: true
    price?: true
    colorId?: true
  }

  export type ProductSizeCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    availability?: true
    price?: true
    colorId?: true
    _all?: true
  }

  export type ProductSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSize to aggregate.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSizes
    **/
    _count?: true | ProductSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSizeMaxAggregateInputType
  }

  export type GetProductSizeAggregateType<T extends ProductSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSize[P]>
      : GetScalarType<T[P], AggregateProductSize[P]>
  }




  export type ProductSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithAggregationInput | ProductSizeOrderByWithAggregationInput[]
    by: ProductSizeScalarFieldEnum[] | ProductSizeScalarFieldEnum
    having?: ProductSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSizeCountAggregateInputType | true
    _avg?: ProductSizeAvgAggregateInputType
    _sum?: ProductSizeSumAggregateInputType
    _min?: ProductSizeMinAggregateInputType
    _max?: ProductSizeMaxAggregateInputType
  }

  export type ProductSizeGroupByOutputType = {
    id: number
    name: string
    sku: number
    availability: string
    price: number
    colorId: number
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  type GetProductSizeGroupByPayload<T extends ProductSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    availability?: boolean
    price?: boolean
    colorId?: boolean
    color?: boolean | ProductColorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>



  export type ProductSizeSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    availability?: boolean
    price?: boolean
    colorId?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "availability" | "price" | "colorId", ExtArgs["result"]["productSize"]>
  export type ProductSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    color?: boolean | ProductColorDefaultArgs<ExtArgs>
  }

  export type $ProductSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSize"
    objects: {
      color: Prisma.$ProductColorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sku: number
      availability: string
      price: number
      colorId: number
    }, ExtArgs["result"]["productSize"]>
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>

  type ProductSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSizeCountAggregateInputType | true
    }

  export interface ProductSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSize'], meta: { name: 'ProductSize' } }
    /**
     * Find zero or one ProductSize that matches the filter.
     * @param {ProductSizeFindUniqueArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSizeFindUniqueArgs>(args: SelectSubset<T, ProductSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSizeFindFirstArgs>(args?: SelectSubset<T, ProductSizeFindFirstArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSizes
     * const productSizes = await prisma.productSize.findMany()
     * 
     * // Get first 10 ProductSizes
     * const productSizes = await prisma.productSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSizeWithIdOnly = await prisma.productSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSizeFindManyArgs>(args?: SelectSubset<T, ProductSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSize.
     * @param {ProductSizeCreateArgs} args - Arguments to create a ProductSize.
     * @example
     * // Create one ProductSize
     * const ProductSize = await prisma.productSize.create({
     *   data: {
     *     // ... data to create a ProductSize
     *   }
     * })
     * 
     */
    create<T extends ProductSizeCreateArgs>(args: SelectSubset<T, ProductSizeCreateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSizes.
     * @param {ProductSizeCreateManyArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSizeCreateManyArgs>(args?: SelectSubset<T, ProductSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductSize.
     * @param {ProductSizeDeleteArgs} args - Arguments to delete one ProductSize.
     * @example
     * // Delete one ProductSize
     * const ProductSize = await prisma.productSize.delete({
     *   where: {
     *     // ... filter to delete one ProductSize
     *   }
     * })
     * 
     */
    delete<T extends ProductSizeDeleteArgs>(args: SelectSubset<T, ProductSizeDeleteArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSize.
     * @param {ProductSizeUpdateArgs} args - Arguments to update one ProductSize.
     * @example
     * // Update one ProductSize
     * const productSize = await prisma.productSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSizeUpdateArgs>(args: SelectSubset<T, ProductSizeUpdateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSizes.
     * @param {ProductSizeDeleteManyArgs} args - Arguments to filter ProductSizes to delete.
     * @example
     * // Delete a few ProductSizes
     * const { count } = await prisma.productSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSizeDeleteManyArgs>(args?: SelectSubset<T, ProductSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSizeUpdateManyArgs>(args: SelectSubset<T, ProductSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSize.
     * @param {ProductSizeUpsertArgs} args - Arguments to update or create a ProductSize.
     * @example
     * // Update or create a ProductSize
     * const productSize = await prisma.productSize.upsert({
     *   create: {
     *     // ... data to create a ProductSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductSizeUpsertArgs>(args: SelectSubset<T, ProductSizeUpsertArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeCountArgs} args - Arguments to filter ProductSizes to count.
     * @example
     * // Count the number of ProductSizes
     * const count = await prisma.productSize.count({
     *   where: {
     *     // ... the filter for the ProductSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductSizeCountArgs>(
      args?: Subset<T, ProductSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSizeAggregateArgs>(args: Subset<T, ProductSizeAggregateArgs>): Prisma.PrismaPromise<GetProductSizeAggregateType<T>>

    /**
     * Group by ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeGroupByArgs} args - Group by arguments.
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
      T extends ProductSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductSizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSize model
   */
  readonly fields: ProductSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    color<T extends ProductColorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductColorDefaultArgs<ExtArgs>>): Prisma__ProductColorClient<$Result.GetResult<Prisma.$ProductColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly id: FieldRef<"ProductSize", 'Int'>
    readonly name: FieldRef<"ProductSize", 'String'>
    readonly sku: FieldRef<"ProductSize", 'Int'>
    readonly availability: FieldRef<"ProductSize", 'String'>
    readonly price: FieldRef<"ProductSize", 'Int'>
    readonly colorId: FieldRef<"ProductSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize findUnique
   */
  export type ProductSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findUniqueOrThrow
   */
  export type ProductSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findFirst
   */
  export type ProductSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findFirstOrThrow
   */
  export type ProductSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findMany
   */
  export type ProductSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSizes to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize create
   */
  export type ProductSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSize.
     */
    data: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
  }

  /**
   * ProductSize createMany
   */
  export type ProductSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSize update
   */
  export type ProductSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSize.
     */
    data: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductSize to update.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize updateMany
   */
  export type ProductSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
  }

  /**
   * ProductSize upsert
   */
  export type ProductSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSize to update in case it exists.
     */
    where: ProductSizeWhereUniqueInput
    /**
     * In case the ProductSize found by the `where` argument doesn't exist, create a new ProductSize with this data.
     */
    create: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
    /**
     * In case the ProductSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
  }

  /**
   * ProductSize delete
   */
  export type ProductSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductSize to delete.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize deleteMany
   */
  export type ProductSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSizes to delete
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    order: number | null
    productId: string | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    order: number | null
    productId: string | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    url: number
    order: number
    productId: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    url?: true
    order?: true
    productId?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    url?: true
    order?: true
    productId?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    url?: true
    order?: true
    productId?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    url: string
    order: number
    productId: string
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>



  export type ProductImageSelectScalar = {
    id?: boolean
    url?: boolean
    order?: boolean
    productId?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "order" | "productId", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      order: number
      productId: string
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly order: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryDataScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    gender: 'gender',
    mainCategoryId: 'mainCategoryId',
    mainCategoryName: 'mainCategoryName',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryDataScalarFieldEnum = (typeof CategoryDataScalarFieldEnum)[keyof typeof CategoryDataScalarFieldEnum]


  export const SubcategoryDataScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    categoryName: 'categoryName',
    isLeaf: 'isLeaf',
    matchingId: 'matchingId',
    matchingCategoryName: 'matchingCategoryName',
    productCount: 'productCount',
    categoryDataId: 'categoryDataId'
  };

  export type SubcategoryDataScalarFieldEnum = (typeof SubcategoryDataScalarFieldEnum)[keyof typeof SubcategoryDataScalarFieldEnum]


  export const NestedSubcategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isLeaf: 'isLeaf',
    productCount: 'productCount',
    subcategoryDataId: 'subcategoryDataId'
  };

  export type NestedSubcategoryScalarFieldEnum = (typeof NestedSubcategoryScalarFieldEnum)[keyof typeof NestedSubcategoryScalarFieldEnum]


  export const ProductIdScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    subcategoryDataId: 'subcategoryDataId',
    nestedSubcategoryId: 'nestedSubcategoryId'
  };

  export type ProductIdScalarFieldEnum = (typeof ProductIdScalarFieldEnum)[keyof typeof ProductIdScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    currency: 'currency',
    brand: 'brand',
    scrapedAt: 'scrapedAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductColorScalarFieldEnum: {
    id: 'id',
    colorId: 'colorId',
    name: 'name',
    productId: 'productId'
  };

  export type ProductColorScalarFieldEnum = (typeof ProductColorScalarFieldEnum)[keyof typeof ProductColorScalarFieldEnum]


  export const ProductSizeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    availability: 'availability',
    price: 'price',
    colorId: 'colorId'
  };

  export type ProductSizeScalarFieldEnum = (typeof ProductSizeScalarFieldEnum)[keyof typeof ProductSizeScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    order: 'order',
    productId: 'productId'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CategoryDataOrderByRelevanceFieldEnum: {
    brand: 'brand',
    gender: 'gender',
    mainCategoryName: 'mainCategoryName'
  };

  export type CategoryDataOrderByRelevanceFieldEnum = (typeof CategoryDataOrderByRelevanceFieldEnum)[keyof typeof CategoryDataOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SubcategoryDataOrderByRelevanceFieldEnum: {
    categoryName: 'categoryName',
    matchingCategoryName: 'matchingCategoryName'
  };

  export type SubcategoryDataOrderByRelevanceFieldEnum = (typeof SubcategoryDataOrderByRelevanceFieldEnum)[keyof typeof SubcategoryDataOrderByRelevanceFieldEnum]


  export const NestedSubcategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type NestedSubcategoryOrderByRelevanceFieldEnum = (typeof NestedSubcategoryOrderByRelevanceFieldEnum)[keyof typeof NestedSubcategoryOrderByRelevanceFieldEnum]


  export const ProductIdOrderByRelevanceFieldEnum: {
    productId: 'productId'
  };

  export type ProductIdOrderByRelevanceFieldEnum = (typeof ProductIdOrderByRelevanceFieldEnum)[keyof typeof ProductIdOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    currency: 'currency',
    brand: 'brand'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductColorOrderByRelevanceFieldEnum: {
    colorId: 'colorId',
    name: 'name',
    productId: 'productId'
  };

  export type ProductColorOrderByRelevanceFieldEnum = (typeof ProductColorOrderByRelevanceFieldEnum)[keyof typeof ProductColorOrderByRelevanceFieldEnum]


  export const ProductSizeOrderByRelevanceFieldEnum: {
    name: 'name',
    availability: 'availability'
  };

  export type ProductSizeOrderByRelevanceFieldEnum = (typeof ProductSizeOrderByRelevanceFieldEnum)[keyof typeof ProductSizeOrderByRelevanceFieldEnum]


  export const ProductImageOrderByRelevanceFieldEnum: {
    url: 'url',
    productId: 'productId'
  };

  export type ProductImageOrderByRelevanceFieldEnum = (typeof ProductImageOrderByRelevanceFieldEnum)[keyof typeof ProductImageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CategoryDataWhereInput = {
    AND?: CategoryDataWhereInput | CategoryDataWhereInput[]
    OR?: CategoryDataWhereInput[]
    NOT?: CategoryDataWhereInput | CategoryDataWhereInput[]
    id?: IntFilter<"CategoryData"> | number
    brand?: StringFilter<"CategoryData"> | string
    gender?: StringFilter<"CategoryData"> | string
    mainCategoryId?: IntFilter<"CategoryData"> | number
    mainCategoryName?: StringFilter<"CategoryData"> | string
    timestamp?: DateTimeFilter<"CategoryData"> | Date | string
    createdAt?: DateTimeFilter<"CategoryData"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryData"> | Date | string
    subcategories?: SubcategoryDataListRelationFilter
  }

  export type CategoryDataOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    mainCategoryId?: SortOrder
    mainCategoryName?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategories?: SubcategoryDataOrderByRelationAggregateInput
    _relevance?: CategoryDataOrderByRelevanceInput
  }

  export type CategoryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryDataWhereInput | CategoryDataWhereInput[]
    OR?: CategoryDataWhereInput[]
    NOT?: CategoryDataWhereInput | CategoryDataWhereInput[]
    brand?: StringFilter<"CategoryData"> | string
    gender?: StringFilter<"CategoryData"> | string
    mainCategoryId?: IntFilter<"CategoryData"> | number
    mainCategoryName?: StringFilter<"CategoryData"> | string
    timestamp?: DateTimeFilter<"CategoryData"> | Date | string
    createdAt?: DateTimeFilter<"CategoryData"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryData"> | Date | string
    subcategories?: SubcategoryDataListRelationFilter
  }, "id">

  export type CategoryDataOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    mainCategoryId?: SortOrder
    mainCategoryName?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryDataCountOrderByAggregateInput
    _avg?: CategoryDataAvgOrderByAggregateInput
    _max?: CategoryDataMaxOrderByAggregateInput
    _min?: CategoryDataMinOrderByAggregateInput
    _sum?: CategoryDataSumOrderByAggregateInput
  }

  export type CategoryDataScalarWhereWithAggregatesInput = {
    AND?: CategoryDataScalarWhereWithAggregatesInput | CategoryDataScalarWhereWithAggregatesInput[]
    OR?: CategoryDataScalarWhereWithAggregatesInput[]
    NOT?: CategoryDataScalarWhereWithAggregatesInput | CategoryDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryData"> | number
    brand?: StringWithAggregatesFilter<"CategoryData"> | string
    gender?: StringWithAggregatesFilter<"CategoryData"> | string
    mainCategoryId?: IntWithAggregatesFilter<"CategoryData"> | number
    mainCategoryName?: StringWithAggregatesFilter<"CategoryData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"CategoryData"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CategoryData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CategoryData"> | Date | string
  }

  export type SubcategoryDataWhereInput = {
    AND?: SubcategoryDataWhereInput | SubcategoryDataWhereInput[]
    OR?: SubcategoryDataWhereInput[]
    NOT?: SubcategoryDataWhereInput | SubcategoryDataWhereInput[]
    id?: IntFilter<"SubcategoryData"> | number
    categoryId?: IntFilter<"SubcategoryData"> | number
    categoryName?: StringFilter<"SubcategoryData"> | string
    isLeaf?: BoolFilter<"SubcategoryData"> | boolean
    matchingId?: IntNullableFilter<"SubcategoryData"> | number | null
    matchingCategoryName?: StringNullableFilter<"SubcategoryData"> | string | null
    productCount?: IntFilter<"SubcategoryData"> | number
    categoryDataId?: IntFilter<"SubcategoryData"> | number
    categoryData?: XOR<CategoryDataScalarRelationFilter, CategoryDataWhereInput>
    subcategories?: NestedSubcategoryListRelationFilter
    productIds?: ProductIdListRelationFilter
  }

  export type SubcategoryDataOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrderInput | SortOrder
    matchingCategoryName?: SortOrderInput | SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
    categoryData?: CategoryDataOrderByWithRelationInput
    subcategories?: NestedSubcategoryOrderByRelationAggregateInput
    productIds?: ProductIdOrderByRelationAggregateInput
    _relevance?: SubcategoryDataOrderByRelevanceInput
  }

  export type SubcategoryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubcategoryDataWhereInput | SubcategoryDataWhereInput[]
    OR?: SubcategoryDataWhereInput[]
    NOT?: SubcategoryDataWhereInput | SubcategoryDataWhereInput[]
    categoryId?: IntFilter<"SubcategoryData"> | number
    categoryName?: StringFilter<"SubcategoryData"> | string
    isLeaf?: BoolFilter<"SubcategoryData"> | boolean
    matchingId?: IntNullableFilter<"SubcategoryData"> | number | null
    matchingCategoryName?: StringNullableFilter<"SubcategoryData"> | string | null
    productCount?: IntFilter<"SubcategoryData"> | number
    categoryDataId?: IntFilter<"SubcategoryData"> | number
    categoryData?: XOR<CategoryDataScalarRelationFilter, CategoryDataWhereInput>
    subcategories?: NestedSubcategoryListRelationFilter
    productIds?: ProductIdListRelationFilter
  }, "id">

  export type SubcategoryDataOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrderInput | SortOrder
    matchingCategoryName?: SortOrderInput | SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
    _count?: SubcategoryDataCountOrderByAggregateInput
    _avg?: SubcategoryDataAvgOrderByAggregateInput
    _max?: SubcategoryDataMaxOrderByAggregateInput
    _min?: SubcategoryDataMinOrderByAggregateInput
    _sum?: SubcategoryDataSumOrderByAggregateInput
  }

  export type SubcategoryDataScalarWhereWithAggregatesInput = {
    AND?: SubcategoryDataScalarWhereWithAggregatesInput | SubcategoryDataScalarWhereWithAggregatesInput[]
    OR?: SubcategoryDataScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryDataScalarWhereWithAggregatesInput | SubcategoryDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubcategoryData"> | number
    categoryId?: IntWithAggregatesFilter<"SubcategoryData"> | number
    categoryName?: StringWithAggregatesFilter<"SubcategoryData"> | string
    isLeaf?: BoolWithAggregatesFilter<"SubcategoryData"> | boolean
    matchingId?: IntNullableWithAggregatesFilter<"SubcategoryData"> | number | null
    matchingCategoryName?: StringNullableWithAggregatesFilter<"SubcategoryData"> | string | null
    productCount?: IntWithAggregatesFilter<"SubcategoryData"> | number
    categoryDataId?: IntWithAggregatesFilter<"SubcategoryData"> | number
  }

  export type NestedSubcategoryWhereInput = {
    AND?: NestedSubcategoryWhereInput | NestedSubcategoryWhereInput[]
    OR?: NestedSubcategoryWhereInput[]
    NOT?: NestedSubcategoryWhereInput | NestedSubcategoryWhereInput[]
    id?: IntFilter<"NestedSubcategory"> | number
    name?: StringFilter<"NestedSubcategory"> | string
    isLeaf?: BoolFilter<"NestedSubcategory"> | boolean
    productCount?: IntFilter<"NestedSubcategory"> | number
    subcategoryDataId?: IntFilter<"NestedSubcategory"> | number
    subcategoryData?: XOR<SubcategoryDataScalarRelationFilter, SubcategoryDataWhereInput>
    productIds?: ProductIdListRelationFilter
  }

  export type NestedSubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeaf?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
    subcategoryData?: SubcategoryDataOrderByWithRelationInput
    productIds?: ProductIdOrderByRelationAggregateInput
    _relevance?: NestedSubcategoryOrderByRelevanceInput
  }

  export type NestedSubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NestedSubcategoryWhereInput | NestedSubcategoryWhereInput[]
    OR?: NestedSubcategoryWhereInput[]
    NOT?: NestedSubcategoryWhereInput | NestedSubcategoryWhereInput[]
    name?: StringFilter<"NestedSubcategory"> | string
    isLeaf?: BoolFilter<"NestedSubcategory"> | boolean
    productCount?: IntFilter<"NestedSubcategory"> | number
    subcategoryDataId?: IntFilter<"NestedSubcategory"> | number
    subcategoryData?: XOR<SubcategoryDataScalarRelationFilter, SubcategoryDataWhereInput>
    productIds?: ProductIdListRelationFilter
  }, "id">

  export type NestedSubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeaf?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
    _count?: NestedSubcategoryCountOrderByAggregateInput
    _avg?: NestedSubcategoryAvgOrderByAggregateInput
    _max?: NestedSubcategoryMaxOrderByAggregateInput
    _min?: NestedSubcategoryMinOrderByAggregateInput
    _sum?: NestedSubcategorySumOrderByAggregateInput
  }

  export type NestedSubcategoryScalarWhereWithAggregatesInput = {
    AND?: NestedSubcategoryScalarWhereWithAggregatesInput | NestedSubcategoryScalarWhereWithAggregatesInput[]
    OR?: NestedSubcategoryScalarWhereWithAggregatesInput[]
    NOT?: NestedSubcategoryScalarWhereWithAggregatesInput | NestedSubcategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NestedSubcategory"> | number
    name?: StringWithAggregatesFilter<"NestedSubcategory"> | string
    isLeaf?: BoolWithAggregatesFilter<"NestedSubcategory"> | boolean
    productCount?: IntWithAggregatesFilter<"NestedSubcategory"> | number
    subcategoryDataId?: IntWithAggregatesFilter<"NestedSubcategory"> | number
  }

  export type ProductIdWhereInput = {
    AND?: ProductIdWhereInput | ProductIdWhereInput[]
    OR?: ProductIdWhereInput[]
    NOT?: ProductIdWhereInput | ProductIdWhereInput[]
    id?: IntFilter<"ProductId"> | number
    productId?: StringFilter<"ProductId"> | string
    subcategoryDataId?: IntNullableFilter<"ProductId"> | number | null
    nestedSubcategoryId?: IntNullableFilter<"ProductId"> | number | null
    subcategoryData?: XOR<SubcategoryDataNullableScalarRelationFilter, SubcategoryDataWhereInput> | null
    nestedSubcategory?: XOR<NestedSubcategoryNullableScalarRelationFilter, NestedSubcategoryWhereInput> | null
  }

  export type ProductIdOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    subcategoryDataId?: SortOrderInput | SortOrder
    nestedSubcategoryId?: SortOrderInput | SortOrder
    subcategoryData?: SubcategoryDataOrderByWithRelationInput
    nestedSubcategory?: NestedSubcategoryOrderByWithRelationInput
    _relevance?: ProductIdOrderByRelevanceInput
  }

  export type ProductIdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductIdWhereInput | ProductIdWhereInput[]
    OR?: ProductIdWhereInput[]
    NOT?: ProductIdWhereInput | ProductIdWhereInput[]
    productId?: StringFilter<"ProductId"> | string
    subcategoryDataId?: IntNullableFilter<"ProductId"> | number | null
    nestedSubcategoryId?: IntNullableFilter<"ProductId"> | number | null
    subcategoryData?: XOR<SubcategoryDataNullableScalarRelationFilter, SubcategoryDataWhereInput> | null
    nestedSubcategory?: XOR<NestedSubcategoryNullableScalarRelationFilter, NestedSubcategoryWhereInput> | null
  }, "id">

  export type ProductIdOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    subcategoryDataId?: SortOrderInput | SortOrder
    nestedSubcategoryId?: SortOrderInput | SortOrder
    _count?: ProductIdCountOrderByAggregateInput
    _avg?: ProductIdAvgOrderByAggregateInput
    _max?: ProductIdMaxOrderByAggregateInput
    _min?: ProductIdMinOrderByAggregateInput
    _sum?: ProductIdSumOrderByAggregateInput
  }

  export type ProductIdScalarWhereWithAggregatesInput = {
    AND?: ProductIdScalarWhereWithAggregatesInput | ProductIdScalarWhereWithAggregatesInput[]
    OR?: ProductIdScalarWhereWithAggregatesInput[]
    NOT?: ProductIdScalarWhereWithAggregatesInput | ProductIdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductId"> | number
    productId?: StringWithAggregatesFilter<"ProductId"> | string
    subcategoryDataId?: IntNullableWithAggregatesFilter<"ProductId"> | number | null
    nestedSubcategoryId?: IntNullableWithAggregatesFilter<"ProductId"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    currency?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    scrapedAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    colors?: ProductColorListRelationFilter
    images?: ProductImageListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    brand?: SortOrder
    scrapedAt?: SortOrder
    updatedAt?: SortOrder
    colors?: ProductColorOrderByRelationAggregateInput
    images?: ProductImageOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    currency?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    scrapedAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    colors?: ProductColorListRelationFilter
    images?: ProductImageListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    brand?: SortOrder
    scrapedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    currency?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    scrapedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductColorWhereInput = {
    AND?: ProductColorWhereInput | ProductColorWhereInput[]
    OR?: ProductColorWhereInput[]
    NOT?: ProductColorWhereInput | ProductColorWhereInput[]
    id?: IntFilter<"ProductColor"> | number
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    productId?: StringFilter<"ProductColor"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sizes?: ProductSizeListRelationFilter
  }

  export type ProductColorOrderByWithRelationInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    sizes?: ProductSizeOrderByRelationAggregateInput
    _relevance?: ProductColorOrderByRelevanceInput
  }

  export type ProductColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductColorWhereInput | ProductColorWhereInput[]
    OR?: ProductColorWhereInput[]
    NOT?: ProductColorWhereInput | ProductColorWhereInput[]
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    productId?: StringFilter<"ProductColor"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sizes?: ProductSizeListRelationFilter
  }, "id">

  export type ProductColorOrderByWithAggregationInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    productId?: SortOrder
    _count?: ProductColorCountOrderByAggregateInput
    _avg?: ProductColorAvgOrderByAggregateInput
    _max?: ProductColorMaxOrderByAggregateInput
    _min?: ProductColorMinOrderByAggregateInput
    _sum?: ProductColorSumOrderByAggregateInput
  }

  export type ProductColorScalarWhereWithAggregatesInput = {
    AND?: ProductColorScalarWhereWithAggregatesInput | ProductColorScalarWhereWithAggregatesInput[]
    OR?: ProductColorScalarWhereWithAggregatesInput[]
    NOT?: ProductColorScalarWhereWithAggregatesInput | ProductColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductColor"> | number
    colorId?: StringWithAggregatesFilter<"ProductColor"> | string
    name?: StringWithAggregatesFilter<"ProductColor"> | string
    productId?: StringWithAggregatesFilter<"ProductColor"> | string
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    sku?: IntFilter<"ProductSize"> | number
    availability?: StringFilter<"ProductSize"> | string
    price?: IntFilter<"ProductSize"> | number
    colorId?: IntFilter<"ProductSize"> | number
    color?: XOR<ProductColorScalarRelationFilter, ProductColorWhereInput>
  }

  export type ProductSizeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
    color?: ProductColorOrderByWithRelationInput
    _relevance?: ProductSizeOrderByRelevanceInput
  }

  export type ProductSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    name?: StringFilter<"ProductSize"> | string
    sku?: IntFilter<"ProductSize"> | number
    availability?: StringFilter<"ProductSize"> | string
    price?: IntFilter<"ProductSize"> | number
    colorId?: IntFilter<"ProductSize"> | number
    color?: XOR<ProductColorScalarRelationFilter, ProductColorWhereInput>
  }, "id">

  export type ProductSizeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
    _count?: ProductSizeCountOrderByAggregateInput
    _avg?: ProductSizeAvgOrderByAggregateInput
    _max?: ProductSizeMaxOrderByAggregateInput
    _min?: ProductSizeMinOrderByAggregateInput
    _sum?: ProductSizeSumOrderByAggregateInput
  }

  export type ProductSizeScalarWhereWithAggregatesInput = {
    AND?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    OR?: ProductSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductSize"> | number
    name?: StringWithAggregatesFilter<"ProductSize"> | string
    sku?: IntWithAggregatesFilter<"ProductSize"> | number
    availability?: StringWithAggregatesFilter<"ProductSize"> | string
    price?: IntWithAggregatesFilter<"ProductSize"> | number
    colorId?: IntWithAggregatesFilter<"ProductSize"> | number
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    _relevance?: ProductImageOrderByRelevanceInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    url?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: StringFilter<"ProductImage"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    productId?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    order?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: StringWithAggregatesFilter<"ProductImage"> | string
  }

  export type CategoryDataCreateInput = {
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubcategoryDataCreateNestedManyWithoutCategoryDataInput
  }

  export type CategoryDataUncheckedCreateInput = {
    id?: number
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategories?: SubcategoryDataUncheckedCreateNestedManyWithoutCategoryDataInput
  }

  export type CategoryDataUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubcategoryDataUpdateManyWithoutCategoryDataNestedInput
  }

  export type CategoryDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategories?: SubcategoryDataUncheckedUpdateManyWithoutCategoryDataNestedInput
  }

  export type CategoryDataCreateManyInput = {
    id?: number
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryDataUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubcategoryDataCreateInput = {
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryData: CategoryDataCreateNestedOneWithoutSubcategoriesInput
    subcategories?: NestedSubcategoryCreateNestedManyWithoutSubcategoryDataInput
    productIds?: ProductIdCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataUncheckedCreateInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryDataId: number
    subcategories?: NestedSubcategoryUncheckedCreateNestedManyWithoutSubcategoryDataInput
    productIds?: ProductIdUncheckedCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryData?: CategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput
    subcategories?: NestedSubcategoryUpdateManyWithoutSubcategoryDataNestedInput
    productIds?: ProductIdUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryDataId?: IntFieldUpdateOperationsInput | number
    subcategories?: NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataNestedInput
    productIds?: ProductIdUncheckedUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataCreateManyInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryDataId: number
  }

  export type SubcategoryDataUpdateManyMutationInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
  }

  export type SubcategoryDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryDataId?: IntFieldUpdateOperationsInput | number
  }

  export type NestedSubcategoryCreateInput = {
    name: string
    isLeaf?: boolean
    productCount?: number
    subcategoryData: SubcategoryDataCreateNestedOneWithoutSubcategoriesInput
    productIds?: ProductIdCreateNestedManyWithoutNestedSubcategoryInput
  }

  export type NestedSubcategoryUncheckedCreateInput = {
    id?: number
    name: string
    isLeaf?: boolean
    productCount?: number
    subcategoryDataId: number
    productIds?: ProductIdUncheckedCreateNestedManyWithoutNestedSubcategoryInput
  }

  export type NestedSubcategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    subcategoryData?: SubcategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput
    productIds?: ProductIdUpdateManyWithoutNestedSubcategoryNestedInput
  }

  export type NestedSubcategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    subcategoryDataId?: IntFieldUpdateOperationsInput | number
    productIds?: ProductIdUncheckedUpdateManyWithoutNestedSubcategoryNestedInput
  }

  export type NestedSubcategoryCreateManyInput = {
    id?: number
    name: string
    isLeaf?: boolean
    productCount?: number
    subcategoryDataId: number
  }

  export type NestedSubcategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
  }

  export type NestedSubcategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    subcategoryDataId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductIdCreateInput = {
    productId: string
    subcategoryData?: SubcategoryDataCreateNestedOneWithoutProductIdsInput
    nestedSubcategory?: NestedSubcategoryCreateNestedOneWithoutProductIdsInput
  }

  export type ProductIdUncheckedCreateInput = {
    id?: number
    productId: string
    subcategoryDataId?: number | null
    nestedSubcategoryId?: number | null
  }

  export type ProductIdUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryData?: SubcategoryDataUpdateOneWithoutProductIdsNestedInput
    nestedSubcategory?: NestedSubcategoryUpdateOneWithoutProductIdsNestedInput
  }

  export type ProductIdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryDataId?: NullableIntFieldUpdateOperationsInput | number | null
    nestedSubcategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductIdCreateManyInput = {
    id?: number
    productId: string
    subcategoryDataId?: number | null
    nestedSubcategoryId?: number | null
  }

  export type ProductIdUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductIdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryDataId?: NullableIntFieldUpdateOperationsInput | number | null
    nestedSubcategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorCreateNestedManyWithoutProductInput
    images?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    images?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateInput = {
    colorId: string
    name: string
    product: ProductCreateNestedOneWithoutColorsInput
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateInput = {
    id?: number
    colorId: string
    name: string
    productId: string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorUpdateInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductColorCreateManyInput = {
    id?: number
    colorId: string
    name: string
    productId: string
  }

  export type ProductColorUpdateManyMutationInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSizeCreateInput = {
    name: string
    sku: number
    availability: string
    price: number
    color: ProductColorCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateInput = {
    id?: number
    name: string
    sku: number
    availability: string
    price: number
    colorId: number
  }

  export type ProductSizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    color?: ProductColorUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateManyInput = {
    id?: number
    name: string
    sku: number
    availability: string
    price: number
    colorId: number
  }

  export type ProductSizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageCreateInput = {
    url: string
    order?: number
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    url: string
    order?: number
    productId: string
  }

  export type ProductImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageCreateManyInput = {
    id?: number
    url: string
    order?: number
    productId: string
  }

  export type ProductImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubcategoryDataListRelationFilter = {
    every?: SubcategoryDataWhereInput
    some?: SubcategoryDataWhereInput
    none?: SubcategoryDataWhereInput
  }

  export type SubcategoryDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryDataOrderByRelevanceInput = {
    fields: CategoryDataOrderByRelevanceFieldEnum | CategoryDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryDataCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    mainCategoryId?: SortOrder
    mainCategoryName?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryDataAvgOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type CategoryDataMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    mainCategoryId?: SortOrder
    mainCategoryName?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryDataMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    mainCategoryId?: SortOrder
    mainCategoryName?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryDataSumOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryDataScalarRelationFilter = {
    is?: CategoryDataWhereInput
    isNot?: CategoryDataWhereInput
  }

  export type NestedSubcategoryListRelationFilter = {
    every?: NestedSubcategoryWhereInput
    some?: NestedSubcategoryWhereInput
    none?: NestedSubcategoryWhereInput
  }

  export type ProductIdListRelationFilter = {
    every?: ProductIdWhereInput
    some?: ProductIdWhereInput
    none?: ProductIdWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NestedSubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductIdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubcategoryDataOrderByRelevanceInput = {
    fields: SubcategoryDataOrderByRelevanceFieldEnum | SubcategoryDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubcategoryDataCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    matchingCategoryName?: SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
  }

  export type SubcategoryDataAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
  }

  export type SubcategoryDataMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    matchingCategoryName?: SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
  }

  export type SubcategoryDataMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isLeaf?: SortOrder
    matchingId?: SortOrder
    matchingCategoryName?: SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
  }

  export type SubcategoryDataSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    matchingId?: SortOrder
    productCount?: SortOrder
    categoryDataId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SubcategoryDataScalarRelationFilter = {
    is?: SubcategoryDataWhereInput
    isNot?: SubcategoryDataWhereInput
  }

  export type NestedSubcategoryOrderByRelevanceInput = {
    fields: NestedSubcategoryOrderByRelevanceFieldEnum | NestedSubcategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NestedSubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeaf?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
  }

  export type NestedSubcategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
  }

  export type NestedSubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeaf?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
  }

  export type NestedSubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeaf?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
  }

  export type NestedSubcategorySumOrderByAggregateInput = {
    id?: SortOrder
    productCount?: SortOrder
    subcategoryDataId?: SortOrder
  }

  export type SubcategoryDataNullableScalarRelationFilter = {
    is?: SubcategoryDataWhereInput | null
    isNot?: SubcategoryDataWhereInput | null
  }

  export type NestedSubcategoryNullableScalarRelationFilter = {
    is?: NestedSubcategoryWhereInput | null
    isNot?: NestedSubcategoryWhereInput | null
  }

  export type ProductIdOrderByRelevanceInput = {
    fields: ProductIdOrderByRelevanceFieldEnum | ProductIdOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductIdCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subcategoryDataId?: SortOrder
    nestedSubcategoryId?: SortOrder
  }

  export type ProductIdAvgOrderByAggregateInput = {
    id?: SortOrder
    subcategoryDataId?: SortOrder
    nestedSubcategoryId?: SortOrder
  }

  export type ProductIdMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subcategoryDataId?: SortOrder
    nestedSubcategoryId?: SortOrder
  }

  export type ProductIdMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subcategoryDataId?: SortOrder
    nestedSubcategoryId?: SortOrder
  }

  export type ProductIdSumOrderByAggregateInput = {
    id?: SortOrder
    subcategoryDataId?: SortOrder
    nestedSubcategoryId?: SortOrder
  }

  export type ProductColorListRelationFilter = {
    every?: ProductColorWhereInput
    some?: ProductColorWhereInput
    none?: ProductColorWhereInput
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    brand?: SortOrder
    scrapedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    brand?: SortOrder
    scrapedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    brand?: SortOrder
    scrapedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSizeListRelationFilter = {
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
  }

  export type ProductSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductColorOrderByRelevanceInput = {
    fields: ProductColorOrderByRelevanceFieldEnum | ProductColorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductColorCountOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductColorMaxOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorMinOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    name?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductColorScalarRelationFilter = {
    is?: ProductColorWhereInput
    isNot?: ProductColorWhereInput
  }

  export type ProductSizeOrderByRelevanceInput = {
    fields: ProductSizeOrderByRelevanceFieldEnum | ProductSizeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductSizeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type ProductSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type ProductSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type ProductSizeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    availability?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type ProductSizeSumOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    colorId?: SortOrder
  }

  export type ProductImageOrderByRelevanceInput = {
    fields: ProductImageOrderByRelevanceFieldEnum | ProductImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type SubcategoryDataCreateNestedManyWithoutCategoryDataInput = {
    create?: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput> | SubcategoryDataCreateWithoutCategoryDataInput[] | SubcategoryDataUncheckedCreateWithoutCategoryDataInput[]
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutCategoryDataInput | SubcategoryDataCreateOrConnectWithoutCategoryDataInput[]
    createMany?: SubcategoryDataCreateManyCategoryDataInputEnvelope
    connect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
  }

  export type SubcategoryDataUncheckedCreateNestedManyWithoutCategoryDataInput = {
    create?: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput> | SubcategoryDataCreateWithoutCategoryDataInput[] | SubcategoryDataUncheckedCreateWithoutCategoryDataInput[]
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutCategoryDataInput | SubcategoryDataCreateOrConnectWithoutCategoryDataInput[]
    createMany?: SubcategoryDataCreateManyCategoryDataInputEnvelope
    connect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubcategoryDataUpdateManyWithoutCategoryDataNestedInput = {
    create?: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput> | SubcategoryDataCreateWithoutCategoryDataInput[] | SubcategoryDataUncheckedCreateWithoutCategoryDataInput[]
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutCategoryDataInput | SubcategoryDataCreateOrConnectWithoutCategoryDataInput[]
    upsert?: SubcategoryDataUpsertWithWhereUniqueWithoutCategoryDataInput | SubcategoryDataUpsertWithWhereUniqueWithoutCategoryDataInput[]
    createMany?: SubcategoryDataCreateManyCategoryDataInputEnvelope
    set?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    disconnect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    delete?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    connect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    update?: SubcategoryDataUpdateWithWhereUniqueWithoutCategoryDataInput | SubcategoryDataUpdateWithWhereUniqueWithoutCategoryDataInput[]
    updateMany?: SubcategoryDataUpdateManyWithWhereWithoutCategoryDataInput | SubcategoryDataUpdateManyWithWhereWithoutCategoryDataInput[]
    deleteMany?: SubcategoryDataScalarWhereInput | SubcategoryDataScalarWhereInput[]
  }

  export type SubcategoryDataUncheckedUpdateManyWithoutCategoryDataNestedInput = {
    create?: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput> | SubcategoryDataCreateWithoutCategoryDataInput[] | SubcategoryDataUncheckedCreateWithoutCategoryDataInput[]
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutCategoryDataInput | SubcategoryDataCreateOrConnectWithoutCategoryDataInput[]
    upsert?: SubcategoryDataUpsertWithWhereUniqueWithoutCategoryDataInput | SubcategoryDataUpsertWithWhereUniqueWithoutCategoryDataInput[]
    createMany?: SubcategoryDataCreateManyCategoryDataInputEnvelope
    set?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    disconnect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    delete?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    connect?: SubcategoryDataWhereUniqueInput | SubcategoryDataWhereUniqueInput[]
    update?: SubcategoryDataUpdateWithWhereUniqueWithoutCategoryDataInput | SubcategoryDataUpdateWithWhereUniqueWithoutCategoryDataInput[]
    updateMany?: SubcategoryDataUpdateManyWithWhereWithoutCategoryDataInput | SubcategoryDataUpdateManyWithWhereWithoutCategoryDataInput[]
    deleteMany?: SubcategoryDataScalarWhereInput | SubcategoryDataScalarWhereInput[]
  }

  export type CategoryDataCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryDataCreateWithoutSubcategoriesInput, CategoryDataUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryDataCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryDataWhereUniqueInput
  }

  export type NestedSubcategoryCreateNestedManyWithoutSubcategoryDataInput = {
    create?: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput> | NestedSubcategoryCreateWithoutSubcategoryDataInput[] | NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput | NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput[]
    createMany?: NestedSubcategoryCreateManySubcategoryDataInputEnvelope
    connect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
  }

  export type ProductIdCreateNestedManyWithoutSubcategoryDataInput = {
    create?: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput> | ProductIdCreateWithoutSubcategoryDataInput[] | ProductIdUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutSubcategoryDataInput | ProductIdCreateOrConnectWithoutSubcategoryDataInput[]
    createMany?: ProductIdCreateManySubcategoryDataInputEnvelope
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
  }

  export type NestedSubcategoryUncheckedCreateNestedManyWithoutSubcategoryDataInput = {
    create?: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput> | NestedSubcategoryCreateWithoutSubcategoryDataInput[] | NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput | NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput[]
    createMany?: NestedSubcategoryCreateManySubcategoryDataInputEnvelope
    connect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
  }

  export type ProductIdUncheckedCreateNestedManyWithoutSubcategoryDataInput = {
    create?: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput> | ProductIdCreateWithoutSubcategoryDataInput[] | ProductIdUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutSubcategoryDataInput | ProductIdCreateOrConnectWithoutSubcategoryDataInput[]
    createMany?: ProductIdCreateManySubcategoryDataInputEnvelope
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryDataCreateWithoutSubcategoriesInput, CategoryDataUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryDataCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryDataUpsertWithoutSubcategoriesInput
    connect?: CategoryDataWhereUniqueInput
    update?: XOR<XOR<CategoryDataUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryDataUpdateWithoutSubcategoriesInput>, CategoryDataUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type NestedSubcategoryUpdateManyWithoutSubcategoryDataNestedInput = {
    create?: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput> | NestedSubcategoryCreateWithoutSubcategoryDataInput[] | NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput | NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput[]
    upsert?: NestedSubcategoryUpsertWithWhereUniqueWithoutSubcategoryDataInput | NestedSubcategoryUpsertWithWhereUniqueWithoutSubcategoryDataInput[]
    createMany?: NestedSubcategoryCreateManySubcategoryDataInputEnvelope
    set?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    disconnect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    delete?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    connect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    update?: NestedSubcategoryUpdateWithWhereUniqueWithoutSubcategoryDataInput | NestedSubcategoryUpdateWithWhereUniqueWithoutSubcategoryDataInput[]
    updateMany?: NestedSubcategoryUpdateManyWithWhereWithoutSubcategoryDataInput | NestedSubcategoryUpdateManyWithWhereWithoutSubcategoryDataInput[]
    deleteMany?: NestedSubcategoryScalarWhereInput | NestedSubcategoryScalarWhereInput[]
  }

  export type ProductIdUpdateManyWithoutSubcategoryDataNestedInput = {
    create?: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput> | ProductIdCreateWithoutSubcategoryDataInput[] | ProductIdUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutSubcategoryDataInput | ProductIdCreateOrConnectWithoutSubcategoryDataInput[]
    upsert?: ProductIdUpsertWithWhereUniqueWithoutSubcategoryDataInput | ProductIdUpsertWithWhereUniqueWithoutSubcategoryDataInput[]
    createMany?: ProductIdCreateManySubcategoryDataInputEnvelope
    set?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    disconnect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    delete?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    update?: ProductIdUpdateWithWhereUniqueWithoutSubcategoryDataInput | ProductIdUpdateWithWhereUniqueWithoutSubcategoryDataInput[]
    updateMany?: ProductIdUpdateManyWithWhereWithoutSubcategoryDataInput | ProductIdUpdateManyWithWhereWithoutSubcategoryDataInput[]
    deleteMany?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
  }

  export type NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataNestedInput = {
    create?: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput> | NestedSubcategoryCreateWithoutSubcategoryDataInput[] | NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput | NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput[]
    upsert?: NestedSubcategoryUpsertWithWhereUniqueWithoutSubcategoryDataInput | NestedSubcategoryUpsertWithWhereUniqueWithoutSubcategoryDataInput[]
    createMany?: NestedSubcategoryCreateManySubcategoryDataInputEnvelope
    set?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    disconnect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    delete?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    connect?: NestedSubcategoryWhereUniqueInput | NestedSubcategoryWhereUniqueInput[]
    update?: NestedSubcategoryUpdateWithWhereUniqueWithoutSubcategoryDataInput | NestedSubcategoryUpdateWithWhereUniqueWithoutSubcategoryDataInput[]
    updateMany?: NestedSubcategoryUpdateManyWithWhereWithoutSubcategoryDataInput | NestedSubcategoryUpdateManyWithWhereWithoutSubcategoryDataInput[]
    deleteMany?: NestedSubcategoryScalarWhereInput | NestedSubcategoryScalarWhereInput[]
  }

  export type ProductIdUncheckedUpdateManyWithoutSubcategoryDataNestedInput = {
    create?: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput> | ProductIdCreateWithoutSubcategoryDataInput[] | ProductIdUncheckedCreateWithoutSubcategoryDataInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutSubcategoryDataInput | ProductIdCreateOrConnectWithoutSubcategoryDataInput[]
    upsert?: ProductIdUpsertWithWhereUniqueWithoutSubcategoryDataInput | ProductIdUpsertWithWhereUniqueWithoutSubcategoryDataInput[]
    createMany?: ProductIdCreateManySubcategoryDataInputEnvelope
    set?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    disconnect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    delete?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    update?: ProductIdUpdateWithWhereUniqueWithoutSubcategoryDataInput | ProductIdUpdateWithWhereUniqueWithoutSubcategoryDataInput[]
    updateMany?: ProductIdUpdateManyWithWhereWithoutSubcategoryDataInput | ProductIdUpdateManyWithWhereWithoutSubcategoryDataInput[]
    deleteMany?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
  }

  export type SubcategoryDataCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<SubcategoryDataCreateWithoutSubcategoriesInput, SubcategoryDataUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutSubcategoriesInput
    connect?: SubcategoryDataWhereUniqueInput
  }

  export type ProductIdCreateNestedManyWithoutNestedSubcategoryInput = {
    create?: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput> | ProductIdCreateWithoutNestedSubcategoryInput[] | ProductIdUncheckedCreateWithoutNestedSubcategoryInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutNestedSubcategoryInput | ProductIdCreateOrConnectWithoutNestedSubcategoryInput[]
    createMany?: ProductIdCreateManyNestedSubcategoryInputEnvelope
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
  }

  export type ProductIdUncheckedCreateNestedManyWithoutNestedSubcategoryInput = {
    create?: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput> | ProductIdCreateWithoutNestedSubcategoryInput[] | ProductIdUncheckedCreateWithoutNestedSubcategoryInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutNestedSubcategoryInput | ProductIdCreateOrConnectWithoutNestedSubcategoryInput[]
    createMany?: ProductIdCreateManyNestedSubcategoryInputEnvelope
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
  }

  export type SubcategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<SubcategoryDataCreateWithoutSubcategoriesInput, SubcategoryDataUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutSubcategoriesInput
    upsert?: SubcategoryDataUpsertWithoutSubcategoriesInput
    connect?: SubcategoryDataWhereUniqueInput
    update?: XOR<XOR<SubcategoryDataUpdateToOneWithWhereWithoutSubcategoriesInput, SubcategoryDataUpdateWithoutSubcategoriesInput>, SubcategoryDataUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type ProductIdUpdateManyWithoutNestedSubcategoryNestedInput = {
    create?: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput> | ProductIdCreateWithoutNestedSubcategoryInput[] | ProductIdUncheckedCreateWithoutNestedSubcategoryInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutNestedSubcategoryInput | ProductIdCreateOrConnectWithoutNestedSubcategoryInput[]
    upsert?: ProductIdUpsertWithWhereUniqueWithoutNestedSubcategoryInput | ProductIdUpsertWithWhereUniqueWithoutNestedSubcategoryInput[]
    createMany?: ProductIdCreateManyNestedSubcategoryInputEnvelope
    set?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    disconnect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    delete?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    update?: ProductIdUpdateWithWhereUniqueWithoutNestedSubcategoryInput | ProductIdUpdateWithWhereUniqueWithoutNestedSubcategoryInput[]
    updateMany?: ProductIdUpdateManyWithWhereWithoutNestedSubcategoryInput | ProductIdUpdateManyWithWhereWithoutNestedSubcategoryInput[]
    deleteMany?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
  }

  export type ProductIdUncheckedUpdateManyWithoutNestedSubcategoryNestedInput = {
    create?: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput> | ProductIdCreateWithoutNestedSubcategoryInput[] | ProductIdUncheckedCreateWithoutNestedSubcategoryInput[]
    connectOrCreate?: ProductIdCreateOrConnectWithoutNestedSubcategoryInput | ProductIdCreateOrConnectWithoutNestedSubcategoryInput[]
    upsert?: ProductIdUpsertWithWhereUniqueWithoutNestedSubcategoryInput | ProductIdUpsertWithWhereUniqueWithoutNestedSubcategoryInput[]
    createMany?: ProductIdCreateManyNestedSubcategoryInputEnvelope
    set?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    disconnect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    delete?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    connect?: ProductIdWhereUniqueInput | ProductIdWhereUniqueInput[]
    update?: ProductIdUpdateWithWhereUniqueWithoutNestedSubcategoryInput | ProductIdUpdateWithWhereUniqueWithoutNestedSubcategoryInput[]
    updateMany?: ProductIdUpdateManyWithWhereWithoutNestedSubcategoryInput | ProductIdUpdateManyWithWhereWithoutNestedSubcategoryInput[]
    deleteMany?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
  }

  export type SubcategoryDataCreateNestedOneWithoutProductIdsInput = {
    create?: XOR<SubcategoryDataCreateWithoutProductIdsInput, SubcategoryDataUncheckedCreateWithoutProductIdsInput>
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutProductIdsInput
    connect?: SubcategoryDataWhereUniqueInput
  }

  export type NestedSubcategoryCreateNestedOneWithoutProductIdsInput = {
    create?: XOR<NestedSubcategoryCreateWithoutProductIdsInput, NestedSubcategoryUncheckedCreateWithoutProductIdsInput>
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutProductIdsInput
    connect?: NestedSubcategoryWhereUniqueInput
  }

  export type SubcategoryDataUpdateOneWithoutProductIdsNestedInput = {
    create?: XOR<SubcategoryDataCreateWithoutProductIdsInput, SubcategoryDataUncheckedCreateWithoutProductIdsInput>
    connectOrCreate?: SubcategoryDataCreateOrConnectWithoutProductIdsInput
    upsert?: SubcategoryDataUpsertWithoutProductIdsInput
    disconnect?: SubcategoryDataWhereInput | boolean
    delete?: SubcategoryDataWhereInput | boolean
    connect?: SubcategoryDataWhereUniqueInput
    update?: XOR<XOR<SubcategoryDataUpdateToOneWithWhereWithoutProductIdsInput, SubcategoryDataUpdateWithoutProductIdsInput>, SubcategoryDataUncheckedUpdateWithoutProductIdsInput>
  }

  export type NestedSubcategoryUpdateOneWithoutProductIdsNestedInput = {
    create?: XOR<NestedSubcategoryCreateWithoutProductIdsInput, NestedSubcategoryUncheckedCreateWithoutProductIdsInput>
    connectOrCreate?: NestedSubcategoryCreateOrConnectWithoutProductIdsInput
    upsert?: NestedSubcategoryUpsertWithoutProductIdsInput
    disconnect?: NestedSubcategoryWhereInput | boolean
    delete?: NestedSubcategoryWhereInput | boolean
    connect?: NestedSubcategoryWhereUniqueInput
    update?: XOR<XOR<NestedSubcategoryUpdateToOneWithWhereWithoutProductIdsInput, NestedSubcategoryUpdateWithoutProductIdsInput>, NestedSubcategoryUncheckedUpdateWithoutProductIdsInput>
  }

  export type ProductColorCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductColorUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductColorUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductColorUpsertWithWhereUniqueWithoutProductInput | ProductColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    disconnect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    delete?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    update?: ProductColorUpdateWithWhereUniqueWithoutProductInput | ProductColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductColorUpdateManyWithWhereWithoutProductInput | ProductColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductColorUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput> | ProductColorCreateWithoutProductInput[] | ProductColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductColorCreateOrConnectWithoutProductInput | ProductColorCreateOrConnectWithoutProductInput[]
    upsert?: ProductColorUpsertWithWhereUniqueWithoutProductInput | ProductColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    disconnect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    delete?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    connect?: ProductColorWhereUniqueInput | ProductColorWhereUniqueInput[]
    update?: ProductColorUpdateWithWhereUniqueWithoutProductInput | ProductColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductColorUpdateManyWithWhereWithoutProductInput | ProductColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSizeCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutColorsInput, ProductUpdateWithoutColorsInput>, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductSizeUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutColorInput | ProductSizeUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutColorInput | ProductSizeUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutColorInput | ProductSizeUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductSizeUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput> | ProductSizeCreateWithoutColorInput[] | ProductSizeUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutColorInput | ProductSizeCreateOrConnectWithoutColorInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutColorInput | ProductSizeUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductSizeCreateManyColorInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutColorInput | ProductSizeUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutColorInput | ProductSizeUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductColorCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutSizesInput
    connect?: ProductColorWhereUniqueInput
  }

  export type ProductColorUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductColorCreateOrConnectWithoutSizesInput
    upsert?: ProductColorUpsertWithoutSizesInput
    connect?: ProductColorWhereUniqueInput
    update?: XOR<XOR<ProductColorUpdateToOneWithWhereWithoutSizesInput, ProductColorUpdateWithoutSizesInput>, ProductColorUncheckedUpdateWithoutSizesInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SubcategoryDataCreateWithoutCategoryDataInput = {
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    subcategories?: NestedSubcategoryCreateNestedManyWithoutSubcategoryDataInput
    productIds?: ProductIdCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataUncheckedCreateWithoutCategoryDataInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    subcategories?: NestedSubcategoryUncheckedCreateNestedManyWithoutSubcategoryDataInput
    productIds?: ProductIdUncheckedCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataCreateOrConnectWithoutCategoryDataInput = {
    where: SubcategoryDataWhereUniqueInput
    create: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput>
  }

  export type SubcategoryDataCreateManyCategoryDataInputEnvelope = {
    data: SubcategoryDataCreateManyCategoryDataInput | SubcategoryDataCreateManyCategoryDataInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryDataUpsertWithWhereUniqueWithoutCategoryDataInput = {
    where: SubcategoryDataWhereUniqueInput
    update: XOR<SubcategoryDataUpdateWithoutCategoryDataInput, SubcategoryDataUncheckedUpdateWithoutCategoryDataInput>
    create: XOR<SubcategoryDataCreateWithoutCategoryDataInput, SubcategoryDataUncheckedCreateWithoutCategoryDataInput>
  }

  export type SubcategoryDataUpdateWithWhereUniqueWithoutCategoryDataInput = {
    where: SubcategoryDataWhereUniqueInput
    data: XOR<SubcategoryDataUpdateWithoutCategoryDataInput, SubcategoryDataUncheckedUpdateWithoutCategoryDataInput>
  }

  export type SubcategoryDataUpdateManyWithWhereWithoutCategoryDataInput = {
    where: SubcategoryDataScalarWhereInput
    data: XOR<SubcategoryDataUpdateManyMutationInput, SubcategoryDataUncheckedUpdateManyWithoutCategoryDataInput>
  }

  export type SubcategoryDataScalarWhereInput = {
    AND?: SubcategoryDataScalarWhereInput | SubcategoryDataScalarWhereInput[]
    OR?: SubcategoryDataScalarWhereInput[]
    NOT?: SubcategoryDataScalarWhereInput | SubcategoryDataScalarWhereInput[]
    id?: IntFilter<"SubcategoryData"> | number
    categoryId?: IntFilter<"SubcategoryData"> | number
    categoryName?: StringFilter<"SubcategoryData"> | string
    isLeaf?: BoolFilter<"SubcategoryData"> | boolean
    matchingId?: IntNullableFilter<"SubcategoryData"> | number | null
    matchingCategoryName?: StringNullableFilter<"SubcategoryData"> | string | null
    productCount?: IntFilter<"SubcategoryData"> | number
    categoryDataId?: IntFilter<"SubcategoryData"> | number
  }

  export type CategoryDataCreateWithoutSubcategoriesInput = {
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryDataUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    brand: string
    gender: string
    mainCategoryId: number
    mainCategoryName: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryDataCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryDataWhereUniqueInput
    create: XOR<CategoryDataCreateWithoutSubcategoriesInput, CategoryDataUncheckedCreateWithoutSubcategoriesInput>
  }

  export type NestedSubcategoryCreateWithoutSubcategoryDataInput = {
    name: string
    isLeaf?: boolean
    productCount?: number
    productIds?: ProductIdCreateNestedManyWithoutNestedSubcategoryInput
  }

  export type NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput = {
    id?: number
    name: string
    isLeaf?: boolean
    productCount?: number
    productIds?: ProductIdUncheckedCreateNestedManyWithoutNestedSubcategoryInput
  }

  export type NestedSubcategoryCreateOrConnectWithoutSubcategoryDataInput = {
    where: NestedSubcategoryWhereUniqueInput
    create: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput>
  }

  export type NestedSubcategoryCreateManySubcategoryDataInputEnvelope = {
    data: NestedSubcategoryCreateManySubcategoryDataInput | NestedSubcategoryCreateManySubcategoryDataInput[]
    skipDuplicates?: boolean
  }

  export type ProductIdCreateWithoutSubcategoryDataInput = {
    productId: string
    nestedSubcategory?: NestedSubcategoryCreateNestedOneWithoutProductIdsInput
  }

  export type ProductIdUncheckedCreateWithoutSubcategoryDataInput = {
    id?: number
    productId: string
    nestedSubcategoryId?: number | null
  }

  export type ProductIdCreateOrConnectWithoutSubcategoryDataInput = {
    where: ProductIdWhereUniqueInput
    create: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput>
  }

  export type ProductIdCreateManySubcategoryDataInputEnvelope = {
    data: ProductIdCreateManySubcategoryDataInput | ProductIdCreateManySubcategoryDataInput[]
    skipDuplicates?: boolean
  }

  export type CategoryDataUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryDataUpdateWithoutSubcategoriesInput, CategoryDataUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryDataCreateWithoutSubcategoriesInput, CategoryDataUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryDataWhereInput
  }

  export type CategoryDataUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryDataWhereInput
    data: XOR<CategoryDataUpdateWithoutSubcategoriesInput, CategoryDataUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryDataUpdateWithoutSubcategoriesInput = {
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryDataUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    mainCategoryName?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NestedSubcategoryUpsertWithWhereUniqueWithoutSubcategoryDataInput = {
    where: NestedSubcategoryWhereUniqueInput
    update: XOR<NestedSubcategoryUpdateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedUpdateWithoutSubcategoryDataInput>
    create: XOR<NestedSubcategoryCreateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedCreateWithoutSubcategoryDataInput>
  }

  export type NestedSubcategoryUpdateWithWhereUniqueWithoutSubcategoryDataInput = {
    where: NestedSubcategoryWhereUniqueInput
    data: XOR<NestedSubcategoryUpdateWithoutSubcategoryDataInput, NestedSubcategoryUncheckedUpdateWithoutSubcategoryDataInput>
  }

  export type NestedSubcategoryUpdateManyWithWhereWithoutSubcategoryDataInput = {
    where: NestedSubcategoryScalarWhereInput
    data: XOR<NestedSubcategoryUpdateManyMutationInput, NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataInput>
  }

  export type NestedSubcategoryScalarWhereInput = {
    AND?: NestedSubcategoryScalarWhereInput | NestedSubcategoryScalarWhereInput[]
    OR?: NestedSubcategoryScalarWhereInput[]
    NOT?: NestedSubcategoryScalarWhereInput | NestedSubcategoryScalarWhereInput[]
    id?: IntFilter<"NestedSubcategory"> | number
    name?: StringFilter<"NestedSubcategory"> | string
    isLeaf?: BoolFilter<"NestedSubcategory"> | boolean
    productCount?: IntFilter<"NestedSubcategory"> | number
    subcategoryDataId?: IntFilter<"NestedSubcategory"> | number
  }

  export type ProductIdUpsertWithWhereUniqueWithoutSubcategoryDataInput = {
    where: ProductIdWhereUniqueInput
    update: XOR<ProductIdUpdateWithoutSubcategoryDataInput, ProductIdUncheckedUpdateWithoutSubcategoryDataInput>
    create: XOR<ProductIdCreateWithoutSubcategoryDataInput, ProductIdUncheckedCreateWithoutSubcategoryDataInput>
  }

  export type ProductIdUpdateWithWhereUniqueWithoutSubcategoryDataInput = {
    where: ProductIdWhereUniqueInput
    data: XOR<ProductIdUpdateWithoutSubcategoryDataInput, ProductIdUncheckedUpdateWithoutSubcategoryDataInput>
  }

  export type ProductIdUpdateManyWithWhereWithoutSubcategoryDataInput = {
    where: ProductIdScalarWhereInput
    data: XOR<ProductIdUpdateManyMutationInput, ProductIdUncheckedUpdateManyWithoutSubcategoryDataInput>
  }

  export type ProductIdScalarWhereInput = {
    AND?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
    OR?: ProductIdScalarWhereInput[]
    NOT?: ProductIdScalarWhereInput | ProductIdScalarWhereInput[]
    id?: IntFilter<"ProductId"> | number
    productId?: StringFilter<"ProductId"> | string
    subcategoryDataId?: IntNullableFilter<"ProductId"> | number | null
    nestedSubcategoryId?: IntNullableFilter<"ProductId"> | number | null
  }

  export type SubcategoryDataCreateWithoutSubcategoriesInput = {
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryData: CategoryDataCreateNestedOneWithoutSubcategoriesInput
    productIds?: ProductIdCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryDataId: number
    productIds?: ProductIdUncheckedCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataCreateOrConnectWithoutSubcategoriesInput = {
    where: SubcategoryDataWhereUniqueInput
    create: XOR<SubcategoryDataCreateWithoutSubcategoriesInput, SubcategoryDataUncheckedCreateWithoutSubcategoriesInput>
  }

  export type ProductIdCreateWithoutNestedSubcategoryInput = {
    productId: string
    subcategoryData?: SubcategoryDataCreateNestedOneWithoutProductIdsInput
  }

  export type ProductIdUncheckedCreateWithoutNestedSubcategoryInput = {
    id?: number
    productId: string
    subcategoryDataId?: number | null
  }

  export type ProductIdCreateOrConnectWithoutNestedSubcategoryInput = {
    where: ProductIdWhereUniqueInput
    create: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput>
  }

  export type ProductIdCreateManyNestedSubcategoryInputEnvelope = {
    data: ProductIdCreateManyNestedSubcategoryInput | ProductIdCreateManyNestedSubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryDataUpsertWithoutSubcategoriesInput = {
    update: XOR<SubcategoryDataUpdateWithoutSubcategoriesInput, SubcategoryDataUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<SubcategoryDataCreateWithoutSubcategoriesInput, SubcategoryDataUncheckedCreateWithoutSubcategoriesInput>
    where?: SubcategoryDataWhereInput
  }

  export type SubcategoryDataUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: SubcategoryDataWhereInput
    data: XOR<SubcategoryDataUpdateWithoutSubcategoriesInput, SubcategoryDataUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type SubcategoryDataUpdateWithoutSubcategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryData?: CategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput
    productIds?: ProductIdUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryDataId?: IntFieldUpdateOperationsInput | number
    productIds?: ProductIdUncheckedUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type ProductIdUpsertWithWhereUniqueWithoutNestedSubcategoryInput = {
    where: ProductIdWhereUniqueInput
    update: XOR<ProductIdUpdateWithoutNestedSubcategoryInput, ProductIdUncheckedUpdateWithoutNestedSubcategoryInput>
    create: XOR<ProductIdCreateWithoutNestedSubcategoryInput, ProductIdUncheckedCreateWithoutNestedSubcategoryInput>
  }

  export type ProductIdUpdateWithWhereUniqueWithoutNestedSubcategoryInput = {
    where: ProductIdWhereUniqueInput
    data: XOR<ProductIdUpdateWithoutNestedSubcategoryInput, ProductIdUncheckedUpdateWithoutNestedSubcategoryInput>
  }

  export type ProductIdUpdateManyWithWhereWithoutNestedSubcategoryInput = {
    where: ProductIdScalarWhereInput
    data: XOR<ProductIdUpdateManyMutationInput, ProductIdUncheckedUpdateManyWithoutNestedSubcategoryInput>
  }

  export type SubcategoryDataCreateWithoutProductIdsInput = {
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryData: CategoryDataCreateNestedOneWithoutSubcategoriesInput
    subcategories?: NestedSubcategoryCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataUncheckedCreateWithoutProductIdsInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
    categoryDataId: number
    subcategories?: NestedSubcategoryUncheckedCreateNestedManyWithoutSubcategoryDataInput
  }

  export type SubcategoryDataCreateOrConnectWithoutProductIdsInput = {
    where: SubcategoryDataWhereUniqueInput
    create: XOR<SubcategoryDataCreateWithoutProductIdsInput, SubcategoryDataUncheckedCreateWithoutProductIdsInput>
  }

  export type NestedSubcategoryCreateWithoutProductIdsInput = {
    name: string
    isLeaf?: boolean
    productCount?: number
    subcategoryData: SubcategoryDataCreateNestedOneWithoutSubcategoriesInput
  }

  export type NestedSubcategoryUncheckedCreateWithoutProductIdsInput = {
    id?: number
    name: string
    isLeaf?: boolean
    productCount?: number
    subcategoryDataId: number
  }

  export type NestedSubcategoryCreateOrConnectWithoutProductIdsInput = {
    where: NestedSubcategoryWhereUniqueInput
    create: XOR<NestedSubcategoryCreateWithoutProductIdsInput, NestedSubcategoryUncheckedCreateWithoutProductIdsInput>
  }

  export type SubcategoryDataUpsertWithoutProductIdsInput = {
    update: XOR<SubcategoryDataUpdateWithoutProductIdsInput, SubcategoryDataUncheckedUpdateWithoutProductIdsInput>
    create: XOR<SubcategoryDataCreateWithoutProductIdsInput, SubcategoryDataUncheckedCreateWithoutProductIdsInput>
    where?: SubcategoryDataWhereInput
  }

  export type SubcategoryDataUpdateToOneWithWhereWithoutProductIdsInput = {
    where?: SubcategoryDataWhereInput
    data: XOR<SubcategoryDataUpdateWithoutProductIdsInput, SubcategoryDataUncheckedUpdateWithoutProductIdsInput>
  }

  export type SubcategoryDataUpdateWithoutProductIdsInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryData?: CategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput
    subcategories?: NestedSubcategoryUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataUncheckedUpdateWithoutProductIdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    categoryDataId?: IntFieldUpdateOperationsInput | number
    subcategories?: NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type NestedSubcategoryUpsertWithoutProductIdsInput = {
    update: XOR<NestedSubcategoryUpdateWithoutProductIdsInput, NestedSubcategoryUncheckedUpdateWithoutProductIdsInput>
    create: XOR<NestedSubcategoryCreateWithoutProductIdsInput, NestedSubcategoryUncheckedCreateWithoutProductIdsInput>
    where?: NestedSubcategoryWhereInput
  }

  export type NestedSubcategoryUpdateToOneWithWhereWithoutProductIdsInput = {
    where?: NestedSubcategoryWhereInput
    data: XOR<NestedSubcategoryUpdateWithoutProductIdsInput, NestedSubcategoryUncheckedUpdateWithoutProductIdsInput>
  }

  export type NestedSubcategoryUpdateWithoutProductIdsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    subcategoryData?: SubcategoryDataUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type NestedSubcategoryUncheckedUpdateWithoutProductIdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    subcategoryDataId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductColorCreateWithoutProductInput = {
    colorId: string
    name: string
    sizes?: ProductSizeCreateNestedManyWithoutColorInput
  }

  export type ProductColorUncheckedCreateWithoutProductInput = {
    id?: number
    colorId: string
    name: string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutColorInput
  }

  export type ProductColorCreateOrConnectWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorCreateManyProductInputEnvelope = {
    data: ProductColorCreateManyProductInput | ProductColorCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageCreateWithoutProductInput = {
    url: string
    order?: number
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
    order?: number
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductColorUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    update: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    data: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
  }

  export type ProductColorUpdateManyWithWhereWithoutProductInput = {
    where: ProductColorScalarWhereInput
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductColorScalarWhereInput = {
    AND?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
    OR?: ProductColorScalarWhereInput[]
    NOT?: ProductColorScalarWhereInput | ProductColorScalarWhereInput[]
    id?: IntFilter<"ProductColor"> | number
    colorId?: StringFilter<"ProductColor"> | string
    name?: StringFilter<"ProductColor"> | string
    productId?: StringFilter<"ProductColor"> | string
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    order?: IntFilter<"ProductImage"> | number
    productId?: StringFilter<"ProductImage"> | string
  }

  export type ProductCreateWithoutColorsInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductSizeCreateWithoutColorInput = {
    name: string
    sku: number
    availability: string
    price: number
  }

  export type ProductSizeUncheckedCreateWithoutColorInput = {
    id?: number
    name: string
    sku: number
    availability: string
    price: number
  }

  export type ProductSizeCreateOrConnectWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput>
  }

  export type ProductSizeCreateManyColorInputEnvelope = {
    data: ProductSizeCreateManyColorInput | ProductSizeCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutColorsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutColorInput, ProductSizeUncheckedUpdateWithoutColorInput>
    create: XOR<ProductSizeCreateWithoutColorInput, ProductSizeUncheckedCreateWithoutColorInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutColorInput, ProductSizeUncheckedUpdateWithoutColorInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutColorInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutColorInput>
  }

  export type ProductSizeScalarWhereInput = {
    AND?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    OR?: ProductSizeScalarWhereInput[]
    NOT?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    id?: IntFilter<"ProductSize"> | number
    name?: StringFilter<"ProductSize"> | string
    sku?: IntFilter<"ProductSize"> | number
    availability?: StringFilter<"ProductSize"> | string
    price?: IntFilter<"ProductSize"> | number
    colorId?: IntFilter<"ProductSize"> | number
  }

  export type ProductColorCreateWithoutSizesInput = {
    colorId: string
    name: string
    product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ProductColorUncheckedCreateWithoutSizesInput = {
    id?: number
    colorId: string
    name: string
    productId: string
  }

  export type ProductColorCreateOrConnectWithoutSizesInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
  }

  export type ProductColorUpsertWithoutSizesInput = {
    update: XOR<ProductColorUpdateWithoutSizesInput, ProductColorUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductColorCreateWithoutSizesInput, ProductColorUncheckedCreateWithoutSizesInput>
    where?: ProductColorWhereInput
  }

  export type ProductColorUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductColorWhereInput
    data: XOR<ProductColorUpdateWithoutSizesInput, ProductColorUncheckedUpdateWithoutSizesInput>
  }

  export type ProductColorUpdateWithoutSizesInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutImagesInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id: string
    name: string
    description: string
    price: number
    currency: string
    brand: string
    scrapedAt?: Date | string
    updatedAt?: Date | string
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SubcategoryDataCreateManyCategoryDataInput = {
    id?: number
    categoryId: number
    categoryName: string
    isLeaf?: boolean
    matchingId?: number | null
    matchingCategoryName?: string | null
    productCount?: number
  }

  export type SubcategoryDataUpdateWithoutCategoryDataInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    subcategories?: NestedSubcategoryUpdateManyWithoutSubcategoryDataNestedInput
    productIds?: ProductIdUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataUncheckedUpdateWithoutCategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
    subcategories?: NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataNestedInput
    productIds?: ProductIdUncheckedUpdateManyWithoutSubcategoryDataNestedInput
  }

  export type SubcategoryDataUncheckedUpdateManyWithoutCategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    matchingId?: NullableIntFieldUpdateOperationsInput | number | null
    matchingCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    productCount?: IntFieldUpdateOperationsInput | number
  }

  export type NestedSubcategoryCreateManySubcategoryDataInput = {
    id?: number
    name: string
    isLeaf?: boolean
    productCount?: number
  }

  export type ProductIdCreateManySubcategoryDataInput = {
    id?: number
    productId: string
    nestedSubcategoryId?: number | null
  }

  export type NestedSubcategoryUpdateWithoutSubcategoryDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    productIds?: ProductIdUpdateManyWithoutNestedSubcategoryNestedInput
  }

  export type NestedSubcategoryUncheckedUpdateWithoutSubcategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
    productIds?: ProductIdUncheckedUpdateManyWithoutNestedSubcategoryNestedInput
  }

  export type NestedSubcategoryUncheckedUpdateManyWithoutSubcategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeaf?: BoolFieldUpdateOperationsInput | boolean
    productCount?: IntFieldUpdateOperationsInput | number
  }

  export type ProductIdUpdateWithoutSubcategoryDataInput = {
    productId?: StringFieldUpdateOperationsInput | string
    nestedSubcategory?: NestedSubcategoryUpdateOneWithoutProductIdsNestedInput
  }

  export type ProductIdUncheckedUpdateWithoutSubcategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    nestedSubcategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductIdUncheckedUpdateManyWithoutSubcategoryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    nestedSubcategoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductIdCreateManyNestedSubcategoryInput = {
    id?: number
    productId: string
    subcategoryDataId?: number | null
  }

  export type ProductIdUpdateWithoutNestedSubcategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryData?: SubcategoryDataUpdateOneWithoutProductIdsNestedInput
  }

  export type ProductIdUncheckedUpdateWithoutNestedSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryDataId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductIdUncheckedUpdateManyWithoutNestedSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    subcategoryDataId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductColorCreateManyProductInput = {
    id?: number
    colorId: string
    name: string
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    url: string
    order?: number
  }

  export type ProductColorUpdateWithoutProductInput = {
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: ProductSizeUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ProductColorUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateManyColorInput = {
    id?: number
    name: string
    sku: number
    availability: string
    price: number
  }

  export type ProductSizeUpdateWithoutColorInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: IntFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
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