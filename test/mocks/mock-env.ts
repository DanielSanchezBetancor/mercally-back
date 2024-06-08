function mockEnv() {
  const originalEnv = process.env;
  return {
    ...process,
    env: {
      ...originalEnv,
      MYSQL_HOST_PORT: 'localhost',
      MYSQL_USER: 'root',
      MYSQL_PASS: 'root',
      MYSQL_DB: 'mercallytest',
    },
  };
}

export { mockEnv };