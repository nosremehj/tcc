Add-Type -AssemblyName System.IO.Compression.FileSystem
$path = Join-Path $PSScriptRoot "Projeto TCC Jhemerson (2) (1) (1).docx"
$zip = [IO.Compression.ZipFile]::OpenRead($path)
$ent = $zip.GetEntry("word/document.xml")
$sr = New-Object IO.StreamReader($ent.Open(), [Text.Encoding]::UTF8)
$x = $sr.ReadToEnd()
$sr.Close()
$zip.Dispose()

Write-Host "replica  : $([regex]::Matches($x, 'r\u00E9plica').Count)"
Write-Host "replicas : $([regex]::Matches($x, 'r\u00E9plicas').Count)"
Write-Host "if prod  : $([regex]::Matches($x, 'interface em produ\u00E7\u00E3o').Count)"
Write-Host "unitins  : $([regex]::Matches($x, 'unitins\.br').Count)"
