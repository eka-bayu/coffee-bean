exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    table.string("reset_token");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", (table) => {
    table.dropColumn("reset_token");
  });
};
