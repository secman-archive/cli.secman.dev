# iwr -useb https://cli.secman.dev/install.ps1 | iex

# get latest release
$release_url = "https://api.github.com/repos/secman-team/secman/releases"
$tag = (Invoke-WebRequest -Uri $release_url -UseBasicParsing | ConvertFrom-Json)[0].tag_name

$loc = "$HOME\AppData\Local\secman"

Invoke-WebRequest https://github.com/secman-team/secman/releases/download/$tag/secman_windows_${tag}_amd64.zip -outfile secman_windows.zip

Expand-Archive secman_windows.zip

New-Item -ItemType "directory" -Path $loc

Move-Item -Path secman_windows\bin -Destination $loc

Remove-Item secman_windows* -Recurse -Force

[System.Environment]::SetEnvironmentVariable("Path", $Env:Path + ";$loc\bin", [System.EnvironmentVariableTarget]::User)

npm i -g @secman/sm-win
