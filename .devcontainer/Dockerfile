# Usa Debian como base
FROM debian:bookworm-slim

# Define variável de ambiente para evitar perguntas do apt-get
ENV DEBIAN_FRONTEND=noninteractive

# Resolvendo um problema de dependencia
# Atualiza repositórios e instala dependências básicas (sem upgrade)
RUN apt-get update && apt-get upgrade -y \
  && apt-get install ca-certificates curl git bash nano -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Define diretório de trabalho
WORKDIR /workspace/Web

# Copia arquivos de configuração para o container
COPY ../.devcontainer /workspace/.devcontainer

# Da permissão de execução
RUN chmod +x /workspace/.devcontainer/*.sh

# Cria o usuario 'workspace' e usa ele para prevenir erro ao executar: npm --version
# Esse erro acontece quando usando o usuario root, mas ele por padrão ta definindo o root
RUN useradd -m -s /bin/bash workspace && echo "workspace ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER workspace

# Instala o NVM e Node
# Instala as dependencias e executa a aplicação
RUN /workspace/.devcontainer/install_nvm.sh

# Mantem a sessão
CMD [ "/bin/bash" ]
