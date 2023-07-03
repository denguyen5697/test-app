set -e
echo "start ok"

git pull origin main

echo "pull ok"

yarn install

echo "install ok"


yarn build

echo "build ok"



