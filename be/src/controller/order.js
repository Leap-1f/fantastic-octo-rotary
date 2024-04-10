import { Order } from "../../model/order.model.js";

// this gets a specific order by id.
export const getOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const order = await Order.findone({ _id: id });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// this gets all orders.
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    } else {
      return res.status(200).json(orders);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// this creates a new order.
export const createOrder = async (req, res) => {
  const {
    user,
    phoneNumber,
    deliveryDate,
    OrderNumber,
    totalPrice,
    coupon,
    products,
    paymentMethod,
    paymentStatus,
    status,
    District,
    Khoroo,
    description,
  } = req.body;
  try {
    const order = await Order.create({
      user,
      phoneNumber,
      deliveryDate,
      OrderNumber,
      totalPrice,
      coupon,
      products,
      paymentMethod,
      paymentStatus,
      status,
      District,
      Khoroo,
      description,
    });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
