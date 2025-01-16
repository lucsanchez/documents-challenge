import semver from "semver";

export const compareVersions = (versionA: string, versionB: string): number => {
  if (semver.gt(versionA, versionB)) return 1;
  if (semver.lt(versionA, versionB)) return -1;
  return 0;
};
