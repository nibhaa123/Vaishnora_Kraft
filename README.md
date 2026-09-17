# Vaishnora Kraft
Set `MONGODB_URI` in the root `.env` file before starting the backend. Optionally set `MONGODB_DATABASE`; it defaults to `vaishnora_kraft`.
Use the root `.env.example` as the template. Do not commit real database credentials.
Set `ADMIN_IDENTIFIER` and `ADMIN_PASSWORD` in `.env` for the separate administrator account. Admin credentials must never be committed to source control.

## Endpoints

- `GET /api/health`
- `POST /api/auth/register` with JSON fields: `name`, `identifier` (email or 10-digit mobile), and `password`; returns a customer and bearer token
- `POST /api/auth/login` with JSON fields: `identifier` and `password`; returns a customer and bearer token
- `GET /api/products/:id/reviews`
- `POST /api/products/:id/reviews` with JSON fields: `customerId`, `customerName`, `rating` (1-5), and `comment`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders` with bearer authentication and JSON fields: `items` (`productId`, `quantity`) and `delivery`
- `GET /api/orders` with customer bearer authentication; returns only the signed-in customer's orders
- `GET /api/admin/orders` with admin bearer authentication
- `PATCH /api/admin/orders/:id/status` with admin bearer authentication and JSON field `status` (`placed`, `processing`, `shipped`, `delivered`, or `cancelled`)
- `POST /api/products` with admin bearer authentication and multipart fields: `name`, `description`, `price`, `category`, `subCategory`, `sizes`, `bestseller`, and `image`
- `PUT /api/products/:id` with admin bearer authentication and the same multipart fields; image is optional when editing
- `DELETE /api/products/:id` with admin bearer authentication

Products are persisted in `data/products.json`, orders and customers in MongoDB, and uploaded images in `uploads/`. Set `AUTH_SECRET` in `.env` for a stable signing secret; a development fallback is used only when it is absent. The frontend admin page is available at `/admin`.
