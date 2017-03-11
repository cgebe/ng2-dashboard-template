# Editor Setup

## Atom (Suggestion)
1. Install Atom Editor
    * Windows
        * https://atom.io/
    * Ubuntu/Debian
        * `sudo apt-get install atom `

2. When Atom is installed, go to File > Settings > Editor
    * Under Invsibles set the Tab Length from default (2) to 4

3. When Atom is installed, go to File > Settings > Install
    * Search and install the following packages:
        * atom-typescript
        * atom-beautify (Shortcut for formatting: Ctrl-Alt-b)


# Node and npm Setup

1. Install Node Js and npm
    * Windows
        * https://nodejs.org/en/download/
    * Ubuntu/Debian
        * `curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -`
        * `sudo apt-get install -y nodejs`
        * `sudo apt-get install -y build-essential`

2. Clone this project:
    ```
    git clone git@gitlab.lrz.de:tum-ent/donut-frontend.git
    ```

3. Uninstall old versions of the cli and Install latest version of angular-cli
    ```
    npm uninstall -g angular-cli @angular/cli
    npm cache clean
    npm install -g @angular/cli@latest
    ```

3. Install node modules for the project
    ```
    npm install
    ```

4. Start Webpack Server

    ```
    ng serve
    ```

5. Navigate with your browser to localhost:4200 to see the UI
