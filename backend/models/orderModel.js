const knex = require("knex")(require("../knexfile").development);

async function createOrder(order) {
  const { date, id, items, time, totalPrice } = order;

  const itemsJson = JSON.stringify(items);

  return knex("orders").insert({
    date,
    id,
    items: itemsJson,
    time,
    totalPrice,
  });
}

async function getAllOrders() {
  return knex("orders").select("*");
}

async function getOrderById(id) {
  return await knex("orders").where({ id }).first();
}

module.exports = { createOrder, getAllOrders, getOrderById };
