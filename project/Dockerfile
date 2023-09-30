# ベースイメージをUbuntu 22.04に設定
FROM ubuntu:22.04

# パッケージの更新と必要なパッケージのインストール
RUN apt-get update && \
    apt-get install -y \
        libwebkit2gtk-4.0-dev \
        build-essential \
        curl \
        wget \
        file \
        libssl-dev \
        libgtk-3-dev \
        libayatana-appindicator3-dev \
        librsvg2-dev \
        openjdk-11-jdk  # Java 11のOpenJDKをインストール

# Rustのインストール
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Bunのインストール
RUN curl https://bun.sh/install | bash && \
    echo "source ~/.bashrc" >> ~/.bashrc

# Rustのターゲットを追加
RUN /bin/bash -c "source $HOME/.cargo/env && \
    rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android"

# Android SDKとNDKのインストール
# 以下のコマンドでAndroid SDKとNDKをインストールします。必要なファイルパスを設定してください。

RUN wget https://dl.google.com/android/repository/commandlinetools-linux-6858069_latest.zip -O sdk-tools.zip && \
    unzip sdk-tools.zip -d /path/to/android/sdk && \
    rm sdk-tools.zip
RUN /path/to/android/sdk/tools/bin/sdkmanager --install "platform-tools" "platforms;android-30" "build-tools;30.0.3" "ndk;23.0.7599858"

# 環境変数の設定
ENV ANDROID_HOME=/path/to/android/sdk
ENV NDK_HOME=/path/to/android/ndk
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64  # OpenJDK 11のパスを指定
ENV PATH=$PATH:$HOME/.cargo/bin  # rustupとcargoのパスを追加

# その他の設定やコマンドを追加する場合、ここに記述

# コンテナが起動した際にTauriを実行
CMD ["/bin/bash"]
