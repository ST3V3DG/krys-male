"use client";

import { Check, X as XIcon } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type SpecsGroupsType = { title: string; specs: ProductSpec[] }[];

type ProductSpec = {
  name: string;
  values: (string | boolean)[];
};

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  badge?: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Basic Tier",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: 85,
    rating: 4.2,
  },
  {
    id: "2",
    name: "Premium Tier",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Sleek-Black-Headphones-1.jpeg",
    price: 600,
    originalPrice: 750,
    rating: 4.9,
    badge: "Best Value",
  },
  {
    id: "3",
    name: "Luxury Tier",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-Headphones-1.jpeg",
    price: 800,
    rating: 5.0,
  },
];

export function ComparePricesSection({ className, specsGroups }: { className?: string, specsGroups: { title: string; specs: ProductSpec[] }[]}) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="size-5 text-emerald-600" />
      ) : (
        <XIcon className="size-5 text-muted-foreground" />
      );
    }
    return value;
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold text-primary">Compare Products</h2>
          <p className="mt-2 text-muted-foreground">
            See how our products stack up against each other
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-0 hover:bg-transparent">
                <TableHead className="w-48 border-r" />
                {products.map((product, index) => (
                  <TableHead
                    key={product.id}
                    className={cn(
                      "min-w-50 text-center",
                      index < products.length - 1 && "border-r",
                    )}
                  >
                    <div className="pb-4">
                      <div className="mx-auto size-48 overflow-hidden rounded-lg bg-muted">
                        <AspectRatio ratio={1}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="size-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                      <div className="-mt-3 flex h-6 items-center justify-center">
                        {product.badge && (
                          <Badge className="mx-auto z-1">{product.badge}</Badge>
                        )}
                      </div>
                      <h3 className="mt-2 text-lg leading-tight font-semibold">
                        {product.name}
                      </h3>
                      <div className="flex min-h-6 items-center justify-center gap-2">
                        <span className="text-lg">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-amber-500">★</span>
                        <span className="text-sm">{product.rating}</span>
                      </div>
                      <Button className="mt-4 w-full rounded-full" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {specsGroups.map((specGroup, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell aria-hidden={true}></TableCell>
                    <TableCell className="text-center font-bold" colSpan={3}>
                      {specGroup.title}
                    </TableCell>
                  </TableRow>
                  {specGroup.specs.map((spec, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="border-r font-medium">
                        {spec.name}
                      </TableCell>
                      {spec.values.map((value, vIndex) => (
                        <TableCell
                          key={vIndex}
                          className={cn(
                            "text-center",
                            vIndex < spec.values.length - 1 && "border-r",
                          )}
                        >
                          <div className="flex items-center justify-center">
                            {renderValue(value)}
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
