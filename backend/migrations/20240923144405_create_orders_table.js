exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.string("id").primary();
    table.date("date");
    table.time("time");
    table.jsonb("items");
    table.decimal("totalPrice", 10, 2);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
