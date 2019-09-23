const { sequelize } = require('../graphql/db');

test('DB Connection Test', async () => {
  await expect(sequelize.authenticate())
    .rejects
    .not.toThrow('');
});
