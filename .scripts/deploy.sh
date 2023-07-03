set -e
echo "start ok"

git pull origin master

echo "pull ok"

yarn install

echo "install ok"


yarn build

echo "build ok"



