# Author: Dinh Trong Nghia - 1994
# Email: dtnghia47@gmail.com


# Start time: 10/11/2018
# Readme for react native in here

# All step build app (beginer and more :D)
    + install Xcode
    + install homebrew
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


    sudo chown -R $(whoami) /usr/local/lib/python3.7/site-packages /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var/homebrew/locks

    brew install node
    brew install watchman

    sudo npm install -g react-native-cli
    react-native init App
    + run:
    react-native run-ios
    react-native run-android


    + Approve loive load
        *cmd D* in ios simulator (cmd M)
    + debugger
        ** https://facebook.github.io/react-native/docs/debugging.html
        sudo npm install -g react-devtools
        npm install --save-dev react-devtools
        ** if you have problem with electon module
            sudo npm install -g react-devtools --unsafe-perm=true --allow-root
            ----
            sudo npm install -g electron --unsafe-perm=true --allow-root
        ** add "react-devtools": "react-devtools" to the scripts
        ** npm run react-devtools

# cmd more
    react-native log-ios

# Structure project

# Feature

# document
    https://facebook.github.io/react-native/docs/getting-started
# project with X-code and Android studio so that I will pause coding this App