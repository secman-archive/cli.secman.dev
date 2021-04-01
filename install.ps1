# iwr -useb https://secman-team.github.io/install/install.ps1 | iex

# get latest release
$release_url = "https://api.github.com/repos/secman-team/secman/releases"
$tag = (Invoke-WebRequest -Uri $release_url -UseBasicParsing | ConvertFrom-Json)[0].tag_name

$loc = "$HOME\AppData\Local\secman"
$smPS1URL = "https://raw.githubusercontent.com/secman-team/tools/HEAD/sm.ps1"
$sm_winLoc = "$HOME\sm"

if (Test-Path -path $loc) {
  Remove-Item $loc -Recurse -Force
} elseif (Test-Path -path $sm_winLoc) {
  Remove-Item $sm_winLoc -Recurse -Force
}

Write-Host "Installing secman..." -ForegroundColor DarkCyan

Invoke-WebRequest https://github.com/secman-team/secman/releases/download/$tag/secman_windows_${tag}_x64.zip -outfile secman_windows.zip

Expand-Archive secman_windows.zip

New-Item -ItemType "directory" -Path $loc

Move-Item -Path secman_windows\bin -Destination $loc

git clone https://github.com/secman-team/sm-win $sm_winLoc

Invoke-WebRequest $smPS1URL -outfile $sm_winLoc\sm.ps1

Write-Host "Installing ruby deps..." -ForegroundColor DarkYellow

gem install colorize optparse

Remove-Item secman_windows* -Recurse -Force

[System.Environment]::SetEnvironmentVariable("Path", $Env:Path + ";$loc\bin", [System.EnvironmentVariableTarget]::User)

if (Test-Path -path $loc) {
  Write-Host "Yessss, secman was installed successfully, run secman --help"  -ForegroundColor DarkGreen
} else {
  Write-Host "Download failed 😔"
}
