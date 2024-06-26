export const ORDER_PROCESS = {
  PENDING: "Ordered",
  PROCESSING: "PreparingToShip",
  DELIVERED: "Shipped",
  CONFIRMED: "Delivered",
  // Don't know how to do this one but maybe it can be changed from the admin dashboard.
};
export const ORDER_PAYMENT = {
  PAID: "Paid",
  UNPAID: "Unpaid",
  // Self-explanatory.
};
export const ORDER_PAYMENT_METHOD = {
  CASH: "Cash",
  CREDIT_CARD: "Credit Card",
  QPAY: "QPay",
  SocialPay: "SocialPay",
  // Maybe delete cash. As it was not seen in the figma app.
};
export const Districts = {
  BAGA: "Багахангай",
  BAG: "Багануур",
  BAYN: "Баянгол",
  BAYNZ: "Баянзүрх",
  CHIN: "Чингэлтэй",
  KHAN: "Хан Уул",
  NALA: "Налайх",
  SON: "Сонгино хайрхан",
  SUKH: "Сүхбаатар",
  // refer to this when making the frontend and assigning the values to the dropdown.
  // Can cut down if needed. But it's a good idea to have a list of all the districts.
  // Maybe depending on the choice of district then change the khoroo's available to the user.
  // https://en.wikipedia.org/wiki/Khoroo will be useful for making the list of khoroo's.
  // I can also make a enum of all the khoroo's all the way down to 43 and have that but its the choice of the fe team. IMO.
};
