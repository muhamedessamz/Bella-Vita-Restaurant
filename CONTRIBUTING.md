# Contributing to Bella Vita Restaurant

First off, thank you for considering contributing to Bella Vita Restaurant! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications**

### Pull Requests

- Fill in the required template
- Follow the coding standards
- Include appropriate test cases
- Update documentation as needed
- End all files with a newline

## 🛠️ Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Bella-Vita-Restaurant.git
   cd Bella-Vita-Restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**

## 🔄 Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Update the documentation** with any new features or changes
3. **Follow the coding standards** outlined below
4. **Ensure all tests pass** (if applicable)
5. **Request review** from maintainers
6. **Address any feedback** from reviewers
7. **Merge** will be done by maintainers once approved

## 📝 Coding Standards

### JavaScript/React

- Use **functional components** with hooks
- Use **meaningful variable names**
- Keep components **small and focused**
- Use **PropTypes** or TypeScript for type checking
- Follow **React best practices**
- Use **ES6+ features**

### File Structure

```
src/
├── components/
│   ├── layout/      # Layout components
│   ├── cart/        # Cart components
│   ├── common/      # Shared components
│   ├── home/        # Home page components
│   └── menu/        # Menu components
├── pages/           # Page components
├── context/         # React Context
├── data/            # Static data
├── styles/          # CSS files
├── utils/           # Utility functions
└── constants/       # Application constants
```

### CSS

- Use **meaningful class names**
- Follow **BEM methodology** when appropriate
- Keep styles **modular and reusable**
- Use **CSS variables** for theme colors
- Ensure **responsive design**

### Naming Conventions

- **Components**: PascalCase (e.g., `MenuCategory.js`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (e.g., `menuItems`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **CSS Classes**: kebab-case (e.g., `menu-item`)

## 💬 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(menu): add dietary filter functionality
fix(cart): resolve quantity update bug
docs(readme): update installation instructions
style(navbar): improve mobile responsiveness
refactor(context): optimize cart state management
```

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers
- Test responsive design on different screen sizes

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ❓ Questions?

Feel free to open an issue with the `question` label or reach out to the maintainers.

## 🙏 Thank You!

Your contributions make this project better. Thank you for taking the time to contribute! ❤️

---

**Happy Coding! 🚀**
