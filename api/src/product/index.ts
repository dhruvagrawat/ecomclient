import { ClassType, InputType, ObjectType, Field, Int, Float } from "type-graphql";
import { CategoryType } from "../category/enum";
import VariantType from "../variant";
import ImageType from "../image";

@ObjectType()
class collection {
  @Field((type) => String)
  collectionName: string;
}

@ObjectType()
export default class Product {
  @Field((type) => Int)
  id: Number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  type: CategoryType;

  @Field((type) => String)
  brand: string;

  @Field((type) => [collection!])
  collection: collection[];

  @Field((type) => String)
  category: string;

  @Field((type) => Float)
  price: string | number;

  @Field((type) => Boolean)
  new: boolean;

  @Field((type) => Boolean)
  sale: boolean;

  @Field((type) => Int)
  discount: string | number;

  @Field((type) => Int)
  stock: string | number;

  @Field((type) => [VariantType])
  variants: VariantType[];

  @Field((type) => [ImageType])
  images: ImageType[];

  @Field({ nullable: true })
  createdAt: Date;
}

@ObjectType()
export class Brand {
  @Field(() => [String!])
  brand?: string[];
}

@ObjectType()
export class Color {
  @Field(() => [String!])
  colors?: string[];
}

export function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field((type) => [TItemClass])
    items: TItem[];

    @Field((type) => Int)
    total: number;

    @Field()
    hasMore: boolean;
  }
  return PaginatedResponseClass;
}
