KIT_PROXY="http://wwwproxy.kanazawa-it.ac.jp:8080/"
export http_proxy="${KIT_PROXY}"
export https_proxy="${KIT_PROXY}"
# git settings
git config --global http.proxy "${KIT_PROXY}"
# npm settings
npm -g config set http-proxy "${KIT_PROXY}"
npm -g config set https-proxy "${KIT_PROXY}"
npm -g config set registry "http://registry.npmjs.org/"
# yarn settings
yarn config set proxy "${KIT_PROXY}"
yarn config set https-proxy "${KIT_PROXY}"