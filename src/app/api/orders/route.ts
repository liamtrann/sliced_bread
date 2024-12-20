let orders: Record<string, any> = {}; 

// Handle POST request to create an order
export async function POST(req: Request) {
  const body = await req.json(); 

  const { name, quantity, city, state, country } = body;

  // Validate request body
  if (!city || !state || !country) {
    return new Response(
      JSON.stringify({ error: "City, state, and country are required." }),
      { status: 400 }
    );
  }

  const orderId = `${Date.now()}`;
  const orderDetails = {
    id: orderId,
    name: name || "Guest",
    quantity: quantity || "1",
    city,
    state,
    country,
    date: new Date().toISOString(),
  };

  // Store order in the mock database
  orders[orderId] = orderDetails;

  return new Response(JSON.stringify({ orderId }), { status: 201 });
}

// Handle GET request to retrieve an order by ID
export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id || !orders[id]) {
    return new Response(JSON.stringify({ error: "Order not found." }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(orders[id]), { status: 200 });
}
