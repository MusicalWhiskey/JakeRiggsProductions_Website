# 🚀 GitHub Pages Deployment Checklist

## ✅ Already Completed

- ✅ GitHub Actions workflow configured (`deploy.yml`)
- ✅ Package.json has homepage and deploy scripts
- ✅ Vite config has correct base path
- ✅ Config file properly set up with TypeScript
- ✅ TypeScript environment variable definitions added
- ✅ Contact form properly using config
- ✅ `.env` in `.gitignore`
- ✅ Duplicate workflow removed

## 🔴 Critical Steps Required Before Deployment

### 1. **Clean Up Git History (Remove Exposed Secrets)**

You previously committed a `.env` file with your Anthropic API key. You need to clean this from git history:

```bash
# Install git-filter-repo
pip install git-filter-repo

# Remove .env from entire git history
git filter-repo --path .env --invert-paths --force

# Force push to update remote
git push origin main --force
```

**⚠️ WARNING:** This rewrites git history. Coordinate with any collaborators first.

### 2. **Revoke and Regenerate Any Exposed API Keys**

If you had an Anthropic API key in your `.env` file that was pushed to GitHub:
- Go to https://console.anthropic.com/settings/keys
- Delete the exposed key
- Generate a new one
- Store it securely (never commit it)

### 3. **Add Secrets to GitHub Repository**

Go to: **Repository Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets (one at a time):

| Secret Name | Value (example) |
|-------------|-----------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_efas0rr` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_o83wnip` |
| `VITE_EMAILJS_PUBLIC_KEY` | `yq7pmqLOy3PaWJU9S` |

**Note:** Only enter the VALUE in the secret box, not the variable name.

### 4. **Configure GitHub Pages Settings**

1. Go to **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Save the settings

### 5. **Resolve Git Branch Divergence**

Your local and remote branches have diverged. You need to resolve this:

```bash
# Option A: Pull and merge (if you want to keep both histories)
git pull origin main --no-rebase

# Option B: Force push (if you're sure your local version is correct)
git push origin main --force
```

### 6. **Push to Deploy**

After resolving the divergence and adding GitHub secrets:

```bash
git push origin main
```

This will trigger the GitHub Actions workflow and deploy your site.

## 📋 Post-Deployment Checklist

After deployment, verify:

- [ ] Site is live at: https://musicalwhiskey.github.io/JakeRiggsProductions_Website/
- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Contact form works (sends emails via EmailJS)
- [ ] Navigation works properly
- [ ] No console errors

## 🔧 Useful Commands

```bash
# Build locally to test
npm run build

# Preview the production build
npm run preview

# Deploy manually (alternative to GitHub Actions)
npm run deploy

# Check git status
git status

# View commit history
git log --oneline
```

## 🆘 Troubleshooting

### If deployment fails:

1. Check **Actions** tab in GitHub to see error logs
2. Verify all secrets are added correctly
3. Ensure GitHub Pages is set to "GitHub Actions" source
4. Check that `deploy.yml` workflow file exists
5. Verify build succeeds locally: `npm run build`

### If site loads but pages are broken:

- Check browser console for errors
- Verify `base` path in `vite.config.ts` matches your repo name
- Check that all imports use relative paths

### If contact form doesn't work:

- Verify EmailJS secrets are added to GitHub
- Check EmailJS dashboard to ensure template exists
- Check browser console for EmailJS errors
- Test form field names match EmailJS template variables

## 📚 Documentation Links

- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [EmailJS Docs](https://www.emailjs.com/docs/)

---

**Current Status:** Configuration complete, awaiting git history cleanup and secret setup.
