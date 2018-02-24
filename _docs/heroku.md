Add to package.json
{
"engines": {
"node": "8.9.4",
"npm": "5.6.0"
},
"private": true,
}

and also:

"scripts": {
"dev": "next -p 4300",
"start": "next start -p $PORT",
"build": "next build",
"postinstall": "npm run build"
},

On heroku, change this to false NPM_CONFIG_PRODUCTION

Check logs:
heroku logs -a danny-pule-portfolio-staging
