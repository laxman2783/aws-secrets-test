const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

exports.handler = async () => {
  const secretsManagerClient = new SecretsManagerClient({
    region: 'us-east-2'
  });
  
  const params = {
    secretId: 'test-secret-manager'
  }
  const command = new GetSecretValueCommand(params);
  
  try {
    const data = await secretsManagerClient.send(command);
    console.log(data);
  } catch (error) {
    console.log(error, error.stack);
  } finally {
    console.log("Done getting");
  }
}