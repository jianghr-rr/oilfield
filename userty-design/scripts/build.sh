#!/bin/sh
set -x

export WORKSPACE=$(readlink -f $(dirname $0))

export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

# 设置编译机群上的npm变量
npm config set registry http://114.115.139.136:4873/

# 如果NODE_ENV为production, npm5以上版本就不会安装devDependencies.
NODE_ENV=development npm install

# 为pages生产环境构建，增加NODE_ENV_PRO=pages.
NODE_ENV=production NODE_ENV_PRO=pages npm run site

mkdir output
cp -rf _site/* output/

# 发布到https://pages.baidu-int.com/
# zip pages.zip -r ./output 按照文档这样写似乎本地测试没问题，但流水线上内容会不对
cd output
zip ../pages.zip -r *
cd ..

curl https://baidu-int-pages.bj.bcebos.com/scripts/publish-legacy.sh | PAGES_PHRASE=aipd-react-ui-components sh

# 为云舍生产环境构建
rm -rf output
rm -rf _site

NODE_ENV=production npm run site

mkdir output
cp -rf _site/* output/
