# FOXTOW PROJECT

## Setting Up The Development Environment

### Step 0 (if necessary): Install the required resources

- [Git](https://git-scm.com/downloads)
- [Node v20.9.0](https://nodejs.org/en/blog/release/v20.9.0)

### Step 1: Download the repository in your frontend folder

```bash
> git clone https://github.com/FoxTow/ui2.git
```

### Step 2: Setup the Frontend

**Step 2.1**: Move into frontend folder, install the packages

```bash
> cd ./frontend/ && npm install
```

or

```bash
> cd ./frontend/ && yarn
```

**Step 2.2**: Setup Environment variables

**Step 2.3**: Run the Frontend Code

```bash
> npm run dev
```

or

```bash
> yarn dev
```

### Step 3: Open in the browser

```bash
> http://localhost:3000
```

### Step 4: Deploy the Frontend to Vercel

**Step 4.1**: Log in to Vercel with Github, Gitlab or Bitbucket account
```bash
Navigate to the link as https://vercel.com/ and follow the instructions to log in Vercel.
```

**Step 4.2**: Import the project to the Vercel
```bash
Click the `Add New Project` button then  import FoxTow project to vercel.
```
**Step 4.3**: Configure project with settings
```bash
Type the Project name, Root Directory and Environment Variables.
After that, click the Deploy button.
```
**Step 4.4**: Open the deployed the Foxtow
```bash
Navigate to the https://{projectname}.vercel.com/ in your browser
```
