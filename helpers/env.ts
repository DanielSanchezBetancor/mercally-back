function getEnvVar(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Did you really forget to set the ${name}?`);
  }

  return value;
}