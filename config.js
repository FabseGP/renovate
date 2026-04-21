module.exports = {
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  username: 'FabseGP',
	onboardingConfig: {
		$schema: 'https://docs.renovatebot.com/renovate-schema.json',
		extends: ['config:recommended'],
	},
	persistRepoData: true,
	optimizeForDisabled: true,
	automergeType: 'pr',
  platform: 'github',
  onboardingRebaseCheckbox: true,
  repositoryCache: "enabled",
  repositories: [
    'FabseGP/aur-packages',
    'Fabsegp/renovate',
  ]
};
