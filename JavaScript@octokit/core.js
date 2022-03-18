await octokit.request('PUT /repos/{owner}/{repo}/automated-security-fixes', {
  owner: 'octocat',
  repo: 'hello-world'
})
