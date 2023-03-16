FROM debian:bullseye-slim

RUN \
  apt-get update && \
  apt-get -y install ca-certificates && \
  apt-get clean

RUN groupadd -r caido && useradd --no-log-init -m -r -g caido caido

COPY caido /usr/bin/caido

USER caido

EXPOSE 8080

ENTRYPOINT ["caido"]
CMD ["--no-renderer-sandbox", "--listen", "0.0.0.0:8080"]