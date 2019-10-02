
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cohorts').insert([
        {title: '2019 June Houston Flex', 
        slug: '2019-06-houston-flex',
        isACtive: true,
        startDate: '2019-06-18',
        endDate: '2020-01-07'},
        {title: '2018 September Houston Flex', 
        slug: '2018-09-houston-flex',
        isACtive: false,
        startDate: '2019-06-18',
        endDate: '2019-06-18'}
      ]);
    });
};
