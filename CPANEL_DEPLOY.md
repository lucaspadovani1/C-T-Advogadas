# 🚀 Guia de Publicação no cPanel (public_html)

Este projeto está pré-configurado para publicação em hospedagens cPanel/Apache (`public_html`) com suporte completo para Single Page Application (SPA) e caminhos relativos.

---

## 📋 Passo a Passo para gerar a pasta `dist` no VSCode e publicar no cPanel

### 1. No VSCode (Seu Computador)

1. Abra o terminal no VSCode na pasta do projeto executando:
   ```bash
   npm install
   ```
2. Em seguida, rode o comando para gerar a versão de produção (otimizada):
   ```bash
   npm run build
   ```
3. O comando irá criar a pasta **`dist/`** na raiz do projeto contendo:
   - `index.html` (com caminhos relativos configurados via `base: './'`)
   - `assets/` (arquivos CSS, JavaScript e imagens otimizados e com hash)
   - `.htaccess` (configuração do servidor Apache/cPanel para rotas, cache e segurança)

---

### 2. No cPanel (Hospedagem)

1. Acesse o seu painel **cPanel** e abra o **Gerenciador de Arquivos (File Manager)**.
2. Navegue até a pasta **`public_html/`** (ou a pasta do domínio/subdomínio desejado).
3. **Importante:** Se houver arquivos antigos de teste, remova-os ou faça um backup.
4. Clique em **Configurações (Settings)** no canto superior direito do Gerenciador de Arquivos e certifique-se de que a opção **"Mostrar arquivos ocultos (dotfiles)"** está marcada (para garantir que o arquivo `.htaccess` seja visto).
5. Você pode publicar de duas formas:
   - **Opção A (Mais rápida):** Compacte o conteúdo **INTERNO** da pasta `dist/` (selecione `index.html`, pasta `assets` e arquivo `.htaccess`, clique com o botão direito -> Enviar para ZIP) e faça o **Upload** desse `.zip` no cPanel dentro de `public_html/`. Depois, clique com o botão direito no arquivo enviado no cPanel e selecione **Extract (Extrair)**.
   - **Opção B (FTP/FileZilla):** Conecte via FTP e arraste todo o **conteúdo de dentro da pasta `dist`** diretamente para dentro de `public_html/`.

---

## ⚙️ O que foi configurado automaticamente para você?

- **`vite.config.ts` (`base: './'`)**: Garante que o site funcione independentemente de estar na raiz (`public_html/`) ou em uma subpasta (`public_html/advocacia/`).
- **`public/.htaccess`**:
  - Redirecionamento de rotas SPA (evita erro `404 Not Found` ao recarregar a página ou navegar por âncoras).
  - Cache HTTP otimizado de 1 ano para arquivos estáticos (`.js`, `.css`, imagens).
  - Charset UTF-8 padrão e proteção contra listagem de diretórios.
