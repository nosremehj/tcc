$files = @(
    "iprotocolo_modern.html",
    "iprotocolo_light.html",
    "sibuni_modern.html",
    "sibuni_light.html",
    "portal_aluno_login_modern.html",
    "portal_aluno_login_light.html"
)

$navBrand = @"
<div class="nav-brand-group" style="display: flex; align-items: center; gap: 15px;">
            <a href="#" class="nav-brand" style="text-decoration:none;">
                <h1 style="margin:0; display:flex; align-items:center; gap:8px;"><i class="fas fa-graduation-cap" style="color: var(--primary-yellow);"></i> UNITINS</h1>
            </a>
            <div style="height: 30px; width: 1px; background: rgba(128,128,128,0.3);"></div>
            <img src="https://www.unitins.br/nPortal/Content/v3/assets/logo-gov.png" alt="Governo do Tocantins" style="height: 28px; object-fit: contain;">
        </div>
"@

$footer = @"
<footer class="footer" style="background: var(--secondary-blue); color: white; padding: 4rem 3rem 1.5rem; margin-top: auto;">
        <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem; max-width: 1200px; margin: 0 auto;">
            <div class="footer-col">
                <h4 style="font-family: 'Outfit', sans-serif; color: var(--primary-yellow); font-size: 1.2rem; margin-bottom: 1.5rem;">Atendimento ao Acadêmico</h4>
                <div class="footer-links" style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="#" style="color: rgba(255,255,255,0.8); text-decoration: none; display: flex; align-items: center; gap: 8px;"><i class="ph ph-chat-circle" style="font-size: 1.2rem;"></i> Ouvidoria Institucional</a>
                    <a href="#" style="color: rgba(255,255,255,0.8); text-decoration: none; display: flex; align-items: center; gap: 8px;"><i class="ph ph-phone" style="font-size: 1.2rem;"></i> Central 162 Ouvidoria Geral</a>
                    <a href="#" style="color: rgba(255,255,255,0.8); text-decoration: none; display: flex; align-items: center; gap: 8px;"><i class="ph ph-envelope-simple" style="font-size: 1.2rem;"></i> Fale Conosco Online</a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4 style="font-family: 'Outfit', sans-serif; color: var(--primary-yellow); font-size: 1.2rem; margin-bottom: 1.5rem;">Certificação Acadêmica</h4>
                <div class="seal" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 15px; border-radius: 12px; display: flex; align-items: center; gap: 15px;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Unitins_eMEC&color=1A3C65&bgcolor=FFF" alt="QR Code MEC" style="width: 50px; height: 50px; background: white; border-radius: 6px; padding: 2px;">
                    <div style="display: flex; flex-direction: column;">
                        <strong style="color: white; font-size: 1rem;">Sistema e-MEC</strong>
                        <span style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">Instituição Credenciada Ativa</span>
                    </div>
                </div>
            </div>

            <div class="footer-col" style="text-align: right;">
                <img src="https://www.unitins.br/nPortal/Content/v3/assets/logo-gov.png" alt="Governo do Tocantins - Rodapé" style="height: 40px; opacity: 0.8; filter: brightness(0) invert(1); margin-bottom: 15px;">
                <h4 style="font-family: 'Outfit', sans-serif; color: var(--primary-yellow); font-size: 1.2rem; margin-bottom: 10px;">Sede Administrativa</h4>
                <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                    108 sul Alameda 11 Lote 03<br>
                    Palmas-TO, CEP: 77020-122
                </p>
                <strong style="color: white; font-family: 'Outfit', sans-serif; font-size: 1.2rem; display: block; margin-top: 10px;">
                    (63) 3901-4000
                </strong>
            </div>
        </div>
        <div class="copyright" style="text-align: center; padding-top: 3rem; margin-top: 3rem; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 0.85rem;">
            <p>&copy; 2026 Universidade Estadual do Tocantins - UNITINS. Todos os direitos reservados. Projeto Acadêmico TCC.</p>
        </div>
    </footer>
"@

foreach ($file in $files) {
    if (Test-Path $file) {
        $path = (Resolve-Path $file).Path
        $content = [System.IO.File]::ReadAllText($path)
        
        $content = [regex]::Replace($content, '(?s)<a href="#" class="nav-brand".*?</a>', $navBrand, 1)
        $content = [regex]::Replace($content, '(?s)<footer class="footer">.*?</footer>', $footer)
        
        [System.IO.File]::WriteAllText($path, $content)
    }
}
