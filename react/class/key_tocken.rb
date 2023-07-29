require "oauth2"
UID = "u-s4t2ud-977ad9bafe3e3762a97d57c6c4914aad67cf3bed866e1a332bb95d6991843033"
SECRET = "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"
# Create the client with your credentials
client = OAuth2::Client.new(UID, SECRET, site: "https://api.intra.42.fr")
# Get an access token
token = client.client_credentials.get_token