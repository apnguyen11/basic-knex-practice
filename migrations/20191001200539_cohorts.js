exports.up = function(knex) {
    return knex.schema.createTable('Cohorts', (table) => {
        table.increments('track')
        table.string('song')
        table.string('time')
    })
};

exports.down = function(knex) {
  
};
