#!/bin/bash

smLocLD=/usr/local/bin
UNAME=$(uname)

rmOldFiles() {
    if [ -f $smLocLD/secman ]; then
        sudo rm -rf $smLocLD/secman*
    fi
}

v=$(curl --silent "https://api.github.com/repos/secman-team/secman/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

releases_api_url=https://github.com/secman-team/secman/releases/download

successInstall() {
    echo "yesss, secman was installed successfully 😎, you can type secman --help"
}

installSecman() {
    echo "installing secman..."

    if [ "$UNAME" == "Linux" ]; then
        name="secman_linux_${v}_amd64"
        smUrl=$releases_api_url/$v/$name.zip

        wget $smUrl
        sudo chmod 755 $name.zip
        unzip $name.zip
        rm $name.zip

        # secman
        sudo mv $name/bin/secman $smLocLD
        sudo mv $name/share/man/man1/secman.1 /usr/share/man/man1

        rm $name

    elif [ "$UNAME" == "Darwin" ]; then
        name="secman_macos_${v}_amd64"
        smUrl=$releases_api_url/$v/$name.zip

        wget $smUrl
        sudo chmod 755 $name.zip
        unzip $name.zip
        rm $name.zip

        # secman
        sudo mv $name/bin/secman $smLocLD
        sudo mv $name/share/man/man1/secman.1 /usr/share/man/man1

        rm $name
    fi

    # chmod
    sudo chmod 755 $smLocLD/secman
}

mainCheck() {
    if [ -x "$(command -v git)" ]; then
        installSecman
    else
        echo "You Need to Install Git"
    fi
}

rmOldFiles
mainCheck

if [ -x "$(command -v secman)" ]; then
    successInstall
else
    echo "Download failed 😔"
fi
