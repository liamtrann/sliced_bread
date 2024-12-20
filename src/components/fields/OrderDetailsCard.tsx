import React from "react";
import InfoRow from "./InfoRow";

const OrderDetailsCard: React.FC<{ order: any }> = ({ order }) => (
  <div className="p-4 shadow rounded space-y-2">
    <InfoRow label="Order ID" value={order.id} />
    <InfoRow label="Name" value={order.name} />
    <InfoRow label="Quantity" value={order.quantity} />
    <InfoRow label="City" value={order.city} />
    <InfoRow label="State/Province" value={order.state} />
    <InfoRow label="Country" value={order.country} />
    <InfoRow label="Date" value={new Date(order.date).toLocaleString()} />
  </div>
);

export default OrderDetailsCard;
