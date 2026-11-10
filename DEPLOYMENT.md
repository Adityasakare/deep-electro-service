# Deployment guide

See [README.md](README.md) for full setup instructions.

1. Edit `config/deployment.config.json` with the actual GitHub username and repository.
2. Run `npm install` and commit the resolved `package-lock.json`.
3. Push the project to the `main` branch.
4. In GitHub, open Settings → Pages and select GitHub Actions.
5. Check Actions → Build and deploy Angular website.
6. For a custom domain, configure `domains.customDomain` and `domains.useCustomDomain`, then configure DNS:
   - `www` host: CNAME → `USERNAME.github.io`
   - Apex domain: GitHub Pages A/AAAA records or DNS-provider ALIAS/ANAME as documented by GitHub.
7. Wait for DNS and certificate provisioning, then enable Enforce HTTPS.

The GitHub Actions workflow uses the configured repository base path and adds a `CNAME` file when the custom domain toggle is enabled. No GitHub credentials are stored in the source.
