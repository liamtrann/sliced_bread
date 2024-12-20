"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, FormWrapper } from "@/components";
import { OrderFormData, orderFormSchema } from "@/types/type";

const OrderForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  });

  const onSubmit = async (data: OrderFormData) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const { error } = await response.json();
        alert(error || "Failed to create order.");
        return;
      }

      const { orderId } = await response.json();
      router.push(`/order/${orderId}`);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <FormWrapper
      title="Place Your Order"
      onSubmit={handleSubmit(onSubmit)}
      formClassName="space-y-4"
    >
      <Input
        label="Name"
        type="text"
        placeholder="Name"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="Quantity"
        type="number"
        placeholder="Quantity"
        {...register("quantity", { valueAsNumber: true })}
        error={errors.quantity}
      />
      <Input
        label="City"
        type="text"
        placeholder="City"
        {...register("city")}
        error={errors.city}
      />
      <Input
        label="State/Province"
        type="text"
        placeholder="State/Province"
        {...register("state")}
        error={errors.state}
      />
      <Input
        label="Country"
        type="text"
        placeholder="Country"
        {...register("country")}
        error={errors.country}
      />
      <Button type="submit">Place Order</Button>
    </FormWrapper>
  );
};

export default OrderForm;
