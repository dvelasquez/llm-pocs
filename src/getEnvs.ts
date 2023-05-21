export interface EnvironmentVariables {
  OPENAI_API_KEY: string
  OPENAI_ORG_ID: string
}

export const getEnvs = (): EnvironmentVariables => {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? ''
  const OPENAI_ORG_ID = process.env.OPENAI_ORG_ID ?? ''

  return {
    OPENAI_API_KEY,
    OPENAI_ORG_ID
  }
}
