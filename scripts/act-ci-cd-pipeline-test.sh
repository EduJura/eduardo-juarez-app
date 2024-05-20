# To test the Github actions from local environment it's needed to install act from nektos
# List jobs to be executed
echo "Listing jobs to be executed..."
act --graph
# Create a temporal directory to perform to simulate uploading/downloading artifacts
mkdir -p ./tmp/artifacts
echo "Created temporal artifacts directory"
# Execute the workflow by setting the artifact-server-path, the workflow path and the ACT_LOCAL environment variable
# Note: Create a Github Personal Access Token and set it as the GITHUB_TOKEN environment variable.
# The GITHUB_TOKEN (Personal Access Token) environment variable is required to authenticate with Github.
echo "Executing workflow..."
act --artifact-server-path tmp/artifacts -W .github/workflows/ci-cd.yml --env ACT_LOCAL=true --secret-file .secrets
# Cleanup the temporal directory
echo "Cleaning up temporal artifacts directory..."
rm -rf ./tmp
echo "Complete it successfully!"