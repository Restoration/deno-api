FROM debian:stable-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y curl zip unzip git \
  && apt-get clean \
  && curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

COPY . /app

EXPOSE 8080

CMD ["denon", "run", "-A", "main.ts"]