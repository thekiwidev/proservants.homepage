# Copilot Instructions for project (Website)

## Operator Interaction

- When asked to fix code, first explain the problems found.
- When asked to generate tests, first explain what tests will be created.
- When making multiple changes, provide a step-by-step overview first.

## Environment Variables

- If a `.env` file exists, load it for local environment variables.
- Document any new environment variables in `README.md`.
- Provide example values in `.env.example`.

## Version Control

- Keep commits atomic and focused on a single change.
- Follow conventional commit message format (e.g., `feat:`, `fix:`, `todo:`, `chore:`).
- Use the current `CHANGELOG.md` title for commit messages (including the version number).
- When pushing changes, use the following multi-repository strategy:
  - Push to the `new-website` branch on the `origin` remote.
  - Push to the `master` branch on the `secondary` remote.
- Update `.gitignore` for new build artifacts or dependencies.

## Code Style

- Follow the existing project code style and conventions.
- Use JSDoc comments for all new functions and components.
- Include inline comments for complex or non-obvious logic.
- **Component-based Styling**:
  - Always use shared components from the `shared` folder (e.g., `Paragraph`, `SectionHeading`, `Button`) instead of styling base HTML elements like `<p>` or `<button>` directly.
  - To introduce a new style variation, update the corresponding shared component to accept new props (e.g., a `variant` prop) rather than creating a new one-off component. This ensures a single source of truth for styling.
- **Color Usage**:
  - Prioritize using the custom theme colors (`primary`, `accent`, `dark` with shades from 50-950) defined in `global.css`.
  - Standard Tailwind CSS colors may be used only if the required colors are not available in the custom theme.

## Change Logging

- Before committing any changes, you **must** update the `CHANGELOG.md` file.
- The title of the latest entry in `CHANGELOG.md` should be used as the commit message.
- Every time code is modified, append an entry to `CHANGELOG.md`:

  - Use [Semantic Versioning](https://semver.org/) principles.
  - Include the date and a concise description of each change.
  - Group changes by version and type (Added, Changed, Fixed, etc.).
  - New changes should be added to the top of the changelog, after the header.

- Follow the example below to log the changes:

  ```markdown
  ## [0.2.3] - Title (short descriptive title of the changes made and should be unique per change log entry)

  - Fixed email validation regex to accept all valid email formats
  - Updated pattern from `\\S+@\\S+\\.\\S+` to `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Improved support for all mail providers and standard email formats

  ## [0.1.0] - Initial Authentication Implementation

  - Added authentication screen with login and register functionality
  - Implemented form validation for username, email, and password fields
  - Integrated with backend JWT authentication system
  ```

## Testing Requirements

- Include unit tests for all new functionality.
- Maintain at least 80% code coverage.
- Add integration or end-to-end tests for critical flows.

## Command Execution

- Always run commands in the current working directory, unless explicitly navigating elsewhere.
- If directory changes are required, explicitly check or request confirmation.

## Package Management

- Use `bun` as the default package manager for scripts and installing packages:

  ```bash
  bun install <package>
  bun add <package>
  bun run <script>
  bunx <command>
  ```

- **Do not switch to `npm` or `yarn` without asking**.

## Project Setup & Structure

- Follow the existing project structure. Do not introduce new folders or files without prior approval.
- **Shared Components**: Any component intended for use across multiple pages or sections of the website must be placed in the `shared` components folder. Components specific to a single page should reside with that page's files.

## Import Conventions

- Use the root alias `@` to import modules from the project root (e.g., `import Component from '@/components/Component'`).
