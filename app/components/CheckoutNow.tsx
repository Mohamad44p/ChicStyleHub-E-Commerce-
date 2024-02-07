'use client';
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToBag";
import { urlFor } from "@/lib/sanity";
import { useUser } from "@clerk/nextjs";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const { user } = useUser();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const handleCheckout = () => {
    if (user) {
      buyNow(product.price_id);
    } else {
      window.location.href = "/sign-up";
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleCheckout}
    >
      Checkout Now
    </Button>
  );
}
