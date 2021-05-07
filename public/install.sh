#!/bin/bash

smLocLD=/usr/local/bin
UNAME=$(uname)

rmOldFiles() {
    if [ -f $smLocLD/secman ]; then
        sudo rm -rf $smLocLD/secman*
    fi
}

v=$(curl --silent "https://api.github.com/repos/secman-team/secman/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

releases_page=https://github.com/secman-team/secman/releases/download

successInstall() {
    echo "yesss, secman was installed successfully 😎, you can type secman --help"
}

installSecman() {
    echo "installing secman..."

    if [ "$UNAME" == "Linux" ]; then
        smUrl=$releases_page/$v/secman_deb_${v}_x64.zip

        wget $smUrl
        sudo chmod 755 secman_deb_${v}_x64.zip
        unzip secman_deb_${v}_x64.zip
        rm secman_deb_${v}_x64.zip

    elif [ "$UNAME" == "Darwin" ]; then
        smUrl=$releases_page/$v/secman_macos_${v}_x64.zip

        wget $smUrl
        sudo chmod 755 secman_macos_${v}_x64.zip
        unzip secman_macos_${v}_x64.zip
        rm secman_macos_${v}_x64.zip
    fi

    # secman
    sudo mv secman_bin/secman $smLocLD
    sudo mv secman_share/man/man1/secman*.1.gz /usr/share/man/man1

    # chmod
    sudo chmod 755 $smLocLD/secman*

    rm -rf secman_bin secman_share LICENSE
}

mainCheck() {
    if [ -x "$(command -v git)" ]; then
        installSecman
    else
        echo "You Should Install Git"
    fi
}

rmOldFiles
mainCheck

if [ -x "$(command -v secman)" ]; then
    successInstall
else
    echo "Download failed 😔"
fi
