/**
 * Get externals from dependencies
 * @param {...Record<string, string>} [sources] Zero or more dependency sources
 * @returns {RegExp[]} Array of regular expressions created from dependency sources
 *
 * @example
 * import { getExternals } from '@peterekjs/rollup-externals'
 * import { dependencies, peerDependencies } from './package.json'
 * // returns array of regular expressions from all the dependencies and peerDependencies
 * // e.g. [/^vite/]
 * getExternals(dependencies, peerDependencies)
 */
export function getExternals(...sources: Record<string, string>[]) {
  return createRegularExpressions(getUniqueKeys(sources))
}

function getUniqueKeys(sources: Record<string, string>[]) {
  return [...new Set(sources.map(source => Object.keys(source)).flat())]
}

function createRegularExpressions(dependencies: string[]) {
  return dependencies.map(dependency => new RegExp('^' + dependency))
}
