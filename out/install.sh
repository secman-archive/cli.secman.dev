#!/bin/bash

# Installation
# 1- rm old files
# 2- check if curl command is exist

GH_RAW_URL=https://raw.githubusercontent.com
GH_RAW_URL_SMTEAM=$GH_RAW_URL/secman-team
SM_DIR=/home/sm
smLocLD=/usr/local/bin
UNAME=$(uname)

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
echo "installing deps..."

curl -fsSL $GH_RAW_URL_SMTEAM/corgit/main/setup | bash
curl -fsSL $GH_RAW_URL_SMTEAM/verx/HEAD/install.sh | bash

sudo gem install colorize optparse

v=$(verx secman-team/secman -l)

sudo git clone https://github.com/secman-team/sm /home/sm

sm_unUrl=$GH_RAW_URL_SMTEAM/secman/HEAD/packages/secman-un
sm_syUrl=$GH_RAW_URL_SMTEAM/secman/HEAD/api/sync/secman-sync
releases_page=https://github.com/secman-team/secman/releases/download

successInstall() {
    echo "yesss, secman was installed successfully 😎, you can type secman --help"
}

installSecman_Tools() {
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

    # secman-un
    sudo wget -P $smLocLD $sm_unUrl

    # secman-sync
    sudo wget -P $smLocLD $sm_syUrl

    sudo chmod 755 $smLocLD/secman*
    
    # sm folder
    sudo chmod 755 /home/sm

    rm -rf secman_bin secman_share LICENSE
}

mainCheck() {
    if [ -x "$(command -v git)" ]; then
        installSecman_Tools
    else
        echo "You Should Install Git"
    fi
}

if [ -x "$(command -v curl)" ]; then
    rmOldFiles
    mainCheck

    if [ -x "$(command -v secman)" ]; then
        successInstall
    else
        echo "Download failed 😔"
    fi

else
    echo "You should install curl"
    exit 0
fi
