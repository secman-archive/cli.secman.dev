#!/bin/bash

# curl -fsSL https://cli.secman.dev/install.sh | bash

smLocLD=/usr/local/bin
UNAME=$(uname)

rmOldFiles() {
    if [ -f $smLocLD/secman ]; then
        sudo rm -rf $smLocLD/secman*
    fi
}

v=$(curl --silent "https://api.github.com/repos/scmn-dev/secman/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

releases_api_url=https://github.com/scmn-dev/secman/releases/download

successInstall() {
    echo "🙏 Thanks for installing the Secman CLI! If this is your first time using the CLI, be sure to run `secman --help` first."
}

installSecman() {
    echo "Installing secman version $v"

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
    echo "Please try again."
fi
