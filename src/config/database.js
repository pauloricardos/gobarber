module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '6000',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
