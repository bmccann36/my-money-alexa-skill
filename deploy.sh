bac
echo "
deleting old zip...
"
rm dist/deploy-package.zip
echo "
packaging function, creating new zip...
"
zip -r dist/deploy-package.zip src node_modules package.json -x *aws-sdk*
echo "
uploading new zip to lambda...
"
aws lambda update-function-code --function-name myMoneyAlexaSkill --zip-file fileb://dist/deploy-package.zip
