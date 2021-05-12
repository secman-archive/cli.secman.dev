# iwr -useb https://cli.secman.dev/install.ps1 | iex

if ((Get-Command git -errorAction SilentlyContinue) -or (Get-Command npm -errorAction SilentlyContinue)) {
  # get latest release
  $release_url = "https://api.github.com/repos/secman-team/secman/releases"
  $tag = (Invoke-WebRequest -Uri $release_url -UseBasicParsing | ConvertFrom-Json)[0].tag_name

  $loc = "$HOME\AppData\Local\secman"

  if (Test-Path -path $loc) {
    Remove-Item $loc -Recurse -Force
  }

  Write-Host "Installing secman..." -ForegroundColor DarkCyan

  Invoke-WebRequest https://github.com/secman-team/secman/releases/download/$tag/secman_windows_${tag}_x64.zip -outfile secman_windows.zip

  Expand-Archive secman_windows.zip

  New-Item -ItemType "directory" -Path $loc

  Move-Item -Path secman_windows\bin -Destination $loc

  Remove-Item secman_windows* -Recurse -Force

  [System.Environment]::SetEnvironmentVariable("Path", $Env:Path + ";$loc\bin", [System.EnvironmentVariableTarget]::User)

  npm i -g @secman/sm-upg

  if (Test-Path -path $loc) {
    Write-Host "Yessss, secman was installed successfully, run secman --help" -ForegroundColor DarkGreen
  } else {
    Write-Host "Download failed 😔"
  }
} else {
  Write-Host "Some of these apps must be installed: git, or npm"
  Write-Host "git: https://git-scm.com"
  Write-Host "npm & nodejs: https://nodejs.org"
}
