# Insere secoes 8-10, atualiza sumario e complementa resumo antes do ABSTRACT.
# Requer Microsoft Word. Texto longo: tcc_novas_secoes_corpo.txt (UTF-8).
$ErrorActionPreference = "Stop"
$docPath = Join-Path $PSScriptRoot "Projeto TCC Jhemerson (2) (1) (1).docx"
$txtPath = Join-Path $PSScriptRoot "tcc_novas_secoes_corpo.txt"
if (-not (Test-Path $docPath)) { throw "Arquivo nao encontrado: $docPath" }
if (-not (Test-Path $txtPath)) { throw "Arquivo nao encontrado: $txtPath" }

Copy-Item -LiteralPath $docPath -Destination ($docPath -replace '\.docx$','_antes_insercao_automatica.docx') -Force

$newSections = [IO.File]::ReadAllText($txtPath, [Text.Encoding]::UTF8)
$newSections = $newSections -replace "`r`n", "`n" -replace "`n", "`r"

# Sumario: titulos sem acentos problematicos no script (Word exibe UTF-8 do TXT nas secoes inseridas)
$sumarioLinhas = @(
    "8.`tANALISE COMPARATIVA ENTRE INTERFACES LEGADAS E PROTOTIPO COM DESIGN SYSTEM`t20",
    "9.`tCOMUNICACAO DO VALOR AGREGADO PARA PUBLICOS NAO ESPECIALISTAS`t20",
    "10.`tRESULTADOS PARCIAIS, VALIDACAO NO FIGMA E CONSIDERACOES PARA CONCLUSAO`t20"
)

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
$doc = $word.Documents.Open($docPath)

function Test-RefLine($s) {
    $t = ($s.Trim() -replace '\u0007','' -replace '\s+$','')
    if ($t.Length -gt 22) { return $false }
    return ($t -match '^REFER.?.?NCIAS')
}

$tocRefPara = $null
for ($i = 1; $i -le 100; $i++) {
    $txt = $doc.Paragraphs.Item($i).Range.Text
    if (Test-RefLine $txt) { $tocRefPara = $i; break }
}
if ($tocRefPara) {
    $rngToc = $doc.Paragraphs.Item($tocRefPara).Range
    $rngToc.Collapse(1)
    for ($k = $sumarioLinhas.Length - 1; $k -ge 0; $k--) {
        $rngToc.InsertBefore($sumarioLinhas[$k] + "`r")
    }
}

$bodyRefPara = $null
$n = $doc.Paragraphs.Count
for ($i = $n; $i -ge 1; $i--) {
    $txt = $doc.Paragraphs.Item($i).Range.Text
    if (Test-RefLine $txt) { $bodyRefPara = $i; break }
}
if (-not $bodyRefPara) {
    $doc.Close($false)
    $word.Quit()
    throw "REFERENCIAS (corpo) nao encontrada."
}

$rngBody = $doc.Paragraphs.Item($bodyRefPara).Range
$rngBody.InsertBefore("`r" + $newSections + "`r")

$find = $doc.Content.Find
$find.ClearFormatting()
$find.Text = "ABSTRACT"
$find.Forward = $true
$find.Wrap = 1
if ($find.Execute()) {
    $blocoResumo = "Adicionalmente, apresenta-se analise comparativa entre as interfaces em producao em unitins.br (IProtocolo, login do Portal do Aluno e SIBUNI), tomadas como linha de base documental, e prototipos orientados por Design System, com validacao exploratoria por docentes em ambiente Figma, explicitando ganhos perceptiveis de orientacao, clareza de tarefas e consistencia institucional, com mencao as limitacoes de validacao fora do ambiente integrado."
    $find.Parent.InsertBefore($blocoResumo + "`r`r")
}

$doc.Save()
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Host "OK: documento atualizado."
