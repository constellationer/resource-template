fx_version "cerulean"
game "gta5"

client_script "client/index.lua"
server_script "server/index.lua"

ui_page "web-build/index.html"

files {
  "web-build/**",
  "web-build/**/*",
  "web-build/**/**"
}
