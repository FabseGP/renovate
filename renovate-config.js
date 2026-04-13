module.exports = {
  branchPrefix: 'renovate/',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
	persistRepoData: true,
	optimizeForDisabled: true,
  platform: 'github',
  extends: ["config:recommended"],
  onboardingRebaseCheckbox: true,
  repositories: [
    'FabseGP/aur-packages',
  ]
};
