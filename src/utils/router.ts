import type { NextRouter } from 'next/router'

export function getParameter(
  router: NextRouter,
  parameterName: keyof NextRouter['query']
): string | undefined {
  const parameter = router.query[parameterName]
  return Array.isArray(parameter) ? parameter[0] : parameter
}
