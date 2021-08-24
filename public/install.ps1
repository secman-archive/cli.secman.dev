# iwr -useb https://cli.secman.dev/install.ps1 | iex

if ((Get-Command git -errorAction SilentlyContinue) -or (Get-Command npm -errorAction SilentlyContinue)) {
  # get latest release
  $release_url = "https://api.github.com/repos/scmn-dev/secman/releases"
  $tag = (Invoke-WebRequest -Uri $release_url -UseBasicParsing | ConvertFrom-Json)[0].tag_name

  $loc = "$HOME\AppData\Local\secman"

  if (Test-Path -path $loc) {
    Remove-Item $loc -Recurse -Force
  }

  Write-Host "Installing secman version $tag" -ForegroundColor DarkCyan

  Invoke-WebRequest https://github.com/scmn-dev/secman/releases/download/$tag/secman_windows_${tag}_amd64.zip -outfile secman_windows.zip

  Expand-Archive secman_windows.zip

  New-Item -ItemType "directory" -Path $loc

  Move-Item -Path secman_windows\bin -Destination $loc

  Remove-Item secman_windows* -Recurse -Force

  [System.Environment]::SetEnvironmentVariable("Path", $Env:Path + ";$loc\bin", [System.EnvironmentVariableTarget]::User)

  npm i -g @secman/sm-win

  if (Test-Path -path $loc) {
    Write-Host "🙏 Thanks for installing the Secman CLI! If this is your first time using the CLI, be sure to run `secman --help` first." -ForegroundColor DarkGreen
  } else {
    Write-Host "Download failed 😔"
  }
} else {
  Write-Host "Some of these apps must be installed: git, or npm"
  Write-Host "git: https://git-scm.com"
  Write-Host "npm & nodejs: https://nodejs.org"
}
