FROM clojure:boot
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs libnotify-bin
COPY . /usr/src/app
WORKDIR /usr/src/app
CMD ["boot", "dev"]