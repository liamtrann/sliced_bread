"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, FormWrapper, Input } from "@/components";

const OrderForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    city: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <FormWrapper title="Place Your Order">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full max-w-md"
      >
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full"
        />
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className="w-full"
          required
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          required
          value={formData.city}
          onChange={handleInputChange}
          className="w-full"
        />
        <Input
          type="text"
          name="state"
          placeholder="State/Province"
          required
          value={formData.state}
          onChange={handleInputChange}
          className="w-full"
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          required
          value={formData.country}
          onChange={handleInputChange}
          className="w-full"
        />
        <Button type="submit">Place Order</Button>
      </form>
    </FormWrapper>
  );
};

export default OrderForm;
