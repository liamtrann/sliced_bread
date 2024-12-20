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
    const { name, quantity, ...rest } = data;
    // Handle empty name field
    const customerName = data.name?.trim() === "" ? "Guest" : data.name;

    // Handle empty quantity field
    const orderQuantity = quantity || 1;

    const orderDetails = {
      name: customerName,
      quantity: orderQuantity,
      ...rest,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
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
        placeholder="Optional"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="Quantity"
        type="number"
        placeholder="Default by 1"
        {...register("quantity", {
          setValueAs: (v) => (v === "" ? undefined : parseInt(v)),
        })}
        error={errors.quantity}
      />
      <Input
        label="City"
        type="text"
        placeholder="Required"
        {...register("city")}
        error={errors.city}
      />
      <Input
        label="State/Province"
        type="text"
        placeholder="Required"
        {...register("state")}
        error={errors.state}
      />
      <Input
        label="Country"
        type="text"
        placeholder="Required"
        {...register("country")}
        error={errors.country}
      />
      <Button type="submit">Place Order</Button>
    </FormWrapper>
  );
};

export default OrderForm;
