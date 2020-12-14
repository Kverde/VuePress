cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Kverde/VuePress.git master:gh-pages

pause

