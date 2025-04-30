#!/bin/bash

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Configure NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Use NVM
/bin/bash ~/.nvm/nvm.sh

# Install Node Version
nvm install 18.20
nvm alias default 18.20

nvm use 18.20

# Update SSH Keys Permission
chmod 600 /workspace/.ssh/*

echo "✅ NVM Installed!"
