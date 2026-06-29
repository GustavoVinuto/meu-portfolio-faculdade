// Captura os elementos do formulário HTML usando o ID de cada um
const formulario = document.getElementById('formContato');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');

// Monitora quando o usuário tenta submeter o formulário clicando no botão
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); /* Impede que a página recarregue antes da validação */

    // Captura os valores digitados removendo espaços vazios extras das pontas
    const nomeTxt = campoNome.value.trim();
    const emailTxt = campoEmail.value.trim();
    const mensagemTxt = campoMensagem.value.trim();

    // Condicional que barra o envio se houver campos em branco
    if (nomeTxt === "" || emailTxt === "" || mensagemTxt === "") {
        alert("Erro: Preencha todos os campos obrigatórios.");
        return; /* Trava a execução do script aqui */
    }

    // Molde de texto padrão para conferir se o formato do e-mail está correto
    const modeloEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Alerta caso o formato do email falhe no teste de validação
    if (!modeloEmail.test(emailTxt)) {
        alert("Erro: Digite um e-mail válido contendo @ e ponto.");
        return; /* Trava o script e não envia */
    }

    // Exibe o aviso de sucesso exigido nos critérios se passar em tudo
    alert("Mensagem enviada com sucesso!");
    
    formulario.reset(); /* Limpa todas as caixas de texto automaticamente */
});