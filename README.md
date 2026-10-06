# CodeMentor AI Frontend

This repository contains the frontend for CodeMentor AI, a web application designed to help engineering teams understand large codebases faster using AI-powered onboarding flows.

## What this project does

The app provides a polished dashboard experience for:

- viewing a landing page and authentication flows
- exploring repository-related features through a sidebar-based layout
- navigating to pages such as Dashboard, Upload, Chat Assistant, Documentation, Analytics, and Settings
- presenting a modern dark-themed UI built with React and Tailwind CSS

## Tech stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React
- React Hot Toast

## Project structure

```text
src/
  App.jsx                # Main route definitions
  components/
    Layout.jsx           # Shared sidebar/header layout
  pages/
    LandingPage.jsx      # Marketing / welcome page
    LoginPage.jsx
    RegisterPage.jsx
    DashboardPage.jsx
    UploadPage.jsx
    ChatPage.jsx
    ExplorerPage.jsx
    DocumentationPage.jsx
    AnalyticsPage.jsx
    SettingsPage.jsx
```

## Getting started

If you are new to coding, follow these steps carefully.

### 1. Install Node.js

Node.js is required to run this project.

- Go to https://nodejs.org/
- Download the LTS version
- Install it on your computer
- After installation, open a terminal and verify it works:

```bash
node -v
npm -v
```

If both commands show version numbers, you are ready.

### 2. Open the project folder

Open your terminal and go to the project folder:

```bash
cd c:\code mentor
```

If you are on Mac or Linux, the path will look different, but the idea is the same.

### 3. Install the project dependencies

This step installs all packages needed for the app to work.

```bash
npm install
```

This may take a few minutes. Wait until it finishes.

### 4. Start the development server

Run:

```bash
npm run dev
```

After a short moment, Vite will show a local address such as:

```text
http://localhost:5173
```

Open that address in your browser.

## App flow and interface

This project is built as a complete onboarding workspace with the following flow and pages:

- Click `Get Started` on the landing page to open the login page.
- Sign in using the email/password form on `/login`.
- After signing in, you are redirected to the dashboard at `/dashboard`.
- Use the sidebar to navigate between pages:
  - `Dashboard` — overview cards, charts, and recent activity.
  - `Upload` — repository ingestion UI with file upload/GitHub URL input, progress state, toast notifications, and repository summary cards.
  - `Chat` — chat assistant UI with message bubbles, history, suggested prompts, and controls for attach, voice, send, copy, and download.
  - `Explorer` — repository tree and file preview.
  - `Documentation` — searchable project docs hub.
  - `Analytics` — usage and accuracy charts.
  - `Settings` — user preferences.

### 5. Stop the server when you are done

In the terminal, press:

```text
Ctrl + C
```

This stops the app.

## Common beginner tips

- If you see an error about missing packages, run `npm install` again.
- If the app does not open, make sure the server is still running in the terminal.
- If a port is already in use, Vite may choose a different port automatically.
- Keep the terminal open while the app is running.

## Available scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run preview  # preview production build locally
```

## Available scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run preview  # preview production build locally
```




