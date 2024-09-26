exports.up = function (knex) {
  return knex.schema.table("users", function (table) {
    table.timestamp("token_expiry"); // Add token_expiry column
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (table) {
    table.dropColumn("token_expiry"); // Remove token_expiry column if rolling back
  });
};
