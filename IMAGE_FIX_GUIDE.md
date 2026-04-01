# Vercel Image Fix Guide

## Problem Identified

**Root Cause**: Vercel Linux servers are **case-sensitive**, but Windows is **case-insensitive**.

### Issue Details:
- **Local folder**: `public/assets/Project/` (capital P)
- **Code references**: `/assets/project/` (lowercase p)
- **Result**: Works on Windows, fails on Vercel Linux

## Fixes Applied

### 1. ✅ Fixed Image Path Case-Sensitivity
Changed all image paths from `/assets/project/` to `/assets/Project/` in:
- `components/sections/ProjectsNew.tsx` (all 6 projects)

### 2. ✅ Fixed Module Type Warning
Added `"type": "module"` to `package.json` to support ES6 imports in `scripts/build-info.js`

### 3. ✅ Simplified vercel.json
Removed custom buildCommand - let Vercel use default Next.js build

### 4. ✅ Added postinstall Hook
Added `postinstall` script to ensure `build-info.json` is generated

## Files Modified

1. ✅ `components/sections/ProjectsNew.tsx` - Fixed 3 image paths
2. ✅ `package.json` - Added `"type": "module"` and `postinstall` script
3. ✅ `vercel.json` - Simplified config

## Next Steps

1. Commit and push changes
2. Vercel will auto-deploy
3. All images should load correctly
4. build-info.json should be available

## Testing Checklist

After deployment:
- [ ] Chess Web App image loads
- [ ] E-Commerce image loads
- [ ] Portfolio image loads
- [ ] Homepage/Scraping image loads
- [ ] Nutrihealth image loads
- [ ] Web-IOT image loads
- [ ] build-info.json returns 200 (not 404)
- [ ] No console errors
