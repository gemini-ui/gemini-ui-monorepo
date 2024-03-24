import { Octokit } from "@octokit/core";

async function fetchCollaborators() {
  const githubToken = process.env.GITHUB_TOKEN_RETRIEVE_CONTRIBUTORS;

  if (!githubToken) {
    return [];
  }

  const octokit = new Octokit({
    auth: githubToken,
  });

  return await octokit
    .request("GET /repos/{owner}/{repo}/collaborators", {
      owner: "gemini-ui",
      repo: "gemini-ui-monorepo",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((response) => response.data);
}

export const collaborators = await fetchCollaborators();

export const maintainers = collaborators.filter(
  (collaborator) => collaborator.permissions?.maintain,
);
export const contributors = collaborators.filter(
  (collaborator) => !collaborator.permissions?.maintain,
);
