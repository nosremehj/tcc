# Atualiza o .docx do TCC: troca "réplica" por redação centrada no portal em produção (unitins.br).
# Requer Microsoft Word instalado. Faz backup .docx antes de alterar.
$ErrorActionPreference = "Stop"
$docPath = Join-Path $PSScriptRoot "Projeto TCC Jhemerson (2) (1) (1).docx"
if (-not (Test-Path -LiteralPath $docPath)) { throw "Arquivo nao encontrado: $docPath" }

$stamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backup = Join-Path $PSScriptRoot ("Projeto TCC Jhemerson (2) (1) (1)_antes_vocabulario_portal_" + $stamp + ".docx")
Copy-Item -LiteralPath $docPath -Destination $backup -Force
Write-Host "Backup: $backup"

# Pares em UTF-8 (acentos preservados). Ordem: frases longas primeiro.
$jsonPath = Join-Path $PSScriptRoot "_tcc_vocab_replacements.json"
if (-not (Test-Path -LiteralPath $jsonPath)) { throw "Nao encontrado: $jsonPath" }
$pairsObj = [IO.File]::ReadAllText($jsonPath, [Text.Encoding]::UTF8) | ConvertFrom-Json
if (-not ($pairsObj -is [System.Collections.IEnumerable])) { $pairsObj = @($pairsObj) }

$wdFindContinue = 1
$wdReplaceAll = 2

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
$doc = $word.Documents.Open($docPath)

foreach ($item in $pairsObj) {
    $findText = [string]$item.find
    $replText = [string]$item.replace
    $mww = [bool]$item.wholeWord
    $rng = $doc.Content
    $f = $rng.Find
    $f.ClearFormatting()
    $f.Replacement.ClearFormatting()
    $f.Text = $findText
    $f.Replacement.Text = $replText
    $f.Forward = $true
    $f.Wrap = $wdFindContinue
    $f.Format = $false
    $f.MatchCase = $true
    $f.MatchWholeWord = $mww
    $f.MatchWildcards = $false
    $f.MatchSoundsLike = $false
    $f.MatchAllWordForms = $false
    # FindText, MatchCase, MatchWholeWord, MatchWildcards, MatchSoundsLike, MatchAllWordForms, Forward, Wrap, Format, ReplaceWith, Replace
    $done = $f.Execute($findText, $true, $mww, $false, $false, $false, $true, $wdFindContinue, $false, $replText, $wdReplaceAll)
    if ($done) { Write-Host "OK: $findText" } else { Write-Host "--: $findText (0 ocorrencias)" }
}

$doc.Save()
$doc.Close()
$word.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Host "OK: documento salvo. Backup em: $backup"
