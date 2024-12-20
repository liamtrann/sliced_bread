"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ErrorMessage, LayoutWrapper, LoadingMessage, OrderDetailsCard } from "@/components";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders?id=${id}`);
        if (!response.ok) {
          const { error } = await response.json();
          setError(error || "Failed to fetch order details.");
          return;
        }

        const data = await response.json();
        setOrder(data);
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Something went wrong.");
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!order) {
    return <LoadingMessage message="Loading..." />;
  }

  return (
    <LayoutWrapper>
      <h1 className="text-2xl font-bold">Order Confirmation</h1>
      <p className="text-lg">
        Thank you for your order! Here are your details:
      </p>
      <OrderDetailsCard order={order} />
    </LayoutWrapper>
  );
};

export default OrderDetails;
