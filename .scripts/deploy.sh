set -e
echo "start ok"

git stash clear
git stash
git pull origin main

echo "pull ok"

yarn install

echo "install ok"


yarn build

echo "build ok"
