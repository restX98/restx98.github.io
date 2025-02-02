# Portfolio Website

This is my personal portfolio website built with [Next.js](https://nextjs.org/) and hosted on [GitHub Pages](https://pages.github.com/).

## 🌍 Live Demo

🔗 [**Visit My Portfolio**](https://restx98.github.io/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**

   ```sh
   git clone git@github.com:restX98/restx98.github.io.git
   cd restx98.github.io
   ```

2. **Authenticate with GitHub NPM Registry** Some dependencies require authentication with a GitHub token. The repository already includes a `.npmrc` file with the following content:

   ```sh
   @restx98:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${TOKEN}
   always-auth=true
   ```

   You need to replace `${TOKEN}` with your actual GitHub token manually or set it as an environment variable:

   ```sh
   export TOKEN=your_github_personal_access_token
   ```

   **Note:** Ensure that your GitHub token has the `read:packages` permission to access the required dependencies.

3. **Install dependencies**

   ```sh
   pnpm install
   ```

4. **Run the development server**

   ```sh
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📦 Making Changes

To modify the project, follow these steps:

1. **Create a new branch**

   ```sh
   git checkout -b [feature|bugfix]/branch-name
   ```

2. **Commit your changes**

   ```sh
   git add .
   git commit -m "Your commit message"
   ```

3. **Generate a changeset**

   ```sh
   pnpm changeset
   ```

   This will create a file inside the `.changeset` that needs to be committed.

4. **Commit the changeset file**

   ```sh
   git add .changeset/
   git commit -m "Changeset"
   ```

5. **Open a Pull Request** on GitHub.

6. **Merge the PR** once it has been reviewed and approved.


## 🎨 Technologies Used

- Next.js
- React
- Tailwind CSS
- GitHub Pages

---

🚀 **Happy coding!**
