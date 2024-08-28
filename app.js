        function validarTexto(texto) {
            // Verifica se o texto contém apenas letras minúsculas e números
            let regex = /^[a-z0-9]+$/;
            return regex.test(texto);
        }

        function criptografarTexto() {
            let texto = document.getElementById("texto").value;
            if (!validarTexto(texto)) {
                alert("O texto deve conter apenas letras minúsculas e números.");
                return;
            }
            let textoCodificado = btoa(texto);
            document.getElementById("resultado").innerText = textoCodificado;
        }

        function descriptografarTexto() {
            let textoCodificado = document.getElementById("texto").value;
            if (!validarTexto(textoCodificado)) {
                alert("O texto deve conter apenas letras minúsculas e números.");
                return;
            }
            let textoDecodificado = atob(textoCodificado);
            document.getElementById("resultado").innerText = textoDecodificado;
        }

        function copiarTexto() {
            let textoParaCopiar = document.getElementById("resultado").innerText;
            navigator.clipboard.writeText(textoParaCopiar).then(() => {
                alert("Texto copiado para a área de transferência!");
            }).catch(err => {
                alert("Erro ao copiar o texto: " + err);
            });
        }
