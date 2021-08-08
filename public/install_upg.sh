#!/bin/bash

smLocLD=/usr/local/bin
UNAME=$(uname)

v=$(curl --silent "https://api.github.com/repos/scmn-dev/secman/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

releases_api_url=https://github.com/scmn-dev/secman/releases/download

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

    rm -rf $name

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

    rm -rf $name
fi

# chmod
sudo chmod 755 $smLocLD/secman
