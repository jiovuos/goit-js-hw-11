# Vite clean template

### Quick guide:

#### Setup
1. Settings > Actions > General: section «Workflow permissions» choose «Read and write permissions» and tick the checkbox.
2. Open project in IDE, and write this in terminal to start wordking:
   - npm install
   - npm run dev
#### Deploy
1. Go to package.json and change "..." in this line:
   "build": "vite build --base=/<...>/",
   for your repository name.
2. Settings > Pages: in branch choose "gh-pages"
