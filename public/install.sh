#!/bin/bash

GH_RAW_URL=https://raw.githubusercontent.com
GH_RAW_URL_SMTEAM=$GH_RAW_URL/secman-team
SM_DIR=~/sm
smLocLD=/usr/local/bin
UNAME=$(uname)

BLUE="\e[36m"
YELLOW="\e[33m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

rmOldFiles() {
    if [ -f $smLocLD/secman ]; then
        sudo rm -rf $smLocLD/secman*
        sudo rm -rf $smLocLD/verx*
        sudo rm -rf $smLocLD/cgit*

        if [ -d $SM_DIR ]; then
            sudo rm -rf $SM_DIR
        fi
    fi
}

# install deps
echo "${YELLOW}installing deps 📦...${ENDCOLOR}"

curl -fsSL $GH_RAW_URL_SMTEAM/corgit/main/setup | bash
curl -fsSL $GH_RAW_URL_SMTEAM/verx/HEAD/install.sh | bash

sudo gem install colorize

v=$(curl --silent "https://api.github.com/repos/secman-team/secman/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

sudo git clone https://github.com/secman-team/sm $SM_DIR

sm_unUrl=$GH_RAW_URL_SMTEAM/secman/HEAD/packages/secman-un
sm_syUrl=$GH_RAW_URL_SMTEAM/secman/HEAD/api/sync/secman-sync
releases_page=https://github.com/secman-team/secman/releases/download

successInstall() {
    echo "${GREEN}yesss, secman was installed successfully 😎, you can type secman --help${ENDCOLOR}"
}

installSecman() {
    echo "${BLUE}installing secman...${ENDCOLOR}"

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

    # secman-sync
    sudo wget -P $smLocLD $sm_syUrl

    # secman-un
    sudo wget -P $SM_DIR $sm_unUrl

    # chmod
    sudo chmod 755 $SM_DIR/sync.sh
    sudo chmod 755 $SM_DIR/secman-un
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