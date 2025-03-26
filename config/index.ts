const config = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL || 'postgres://tibber:password@localhost:5432/tibber',
}

export default config
