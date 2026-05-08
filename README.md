# Projeto DevCard

O app funciona como um cartão de visita digital para desenvolvedores mobile. O usuário preenche seus dados e o sistema gera um cartão personalizado, aplicando lógica condicional para definir a cor de fundo e a badge de nível (Júnior, Pleno ou Sênior) baseada no tempo de experiência.

## Tecnologias Utilizadas
- **React Native / Expo**
- **Expo Router:** Navegação entre telas (`push`, `back` e `replace`) centralizada na pasta `src/app/`.
- **TypeScript:** Tipagem estática, garantindo segurança na passagem de parâmetros entre rotas.
- **StyleSheet (Flexbox):** Estilização nativa e responsiva.

## Telas e Funcionalidades
1. **Boas-vindas:** Tela inicial de apresentação.
2. **Cadastro:** Formulário com validação de campos obrigatórios e teclado numérico para anos de experiência.
3. **Preview do Cartão:** Renderização dinâmica dos dados (passados via `params`), incluindo cálculo do nível de senioridade e cor escolhida.
4. **Sucesso:** Tela de confirmação final com opção de reiniciar o fluxo.

## Capturas de Tela

<div style="display: flex; gap: 10px;">
  <img src="https://github.com/arthurmacedoo/Devcard---App/blob/main/assets/images/WhatsApp%20Image%202026-05-08%20at%2016.11.43.jpeg?raw=true" width="200" alt="Tela de Boas Vindas">
  <img src="https://github.com/arthurmacedoo/Devcard---App/blob/main/assets/images/WhatsApp%20Image%202026-05-08%20at%2016.11.44.jpeg?raw=true" width="200" alt="Tela de Cadastro">
  <img src="https://github.com/arthurmacedoo/Devcard---App/blob/main/assets/images/WhatsApp%20Image%202026-05-08%20at%2016.11.44%20(1).jpeg?raw=true" width="200" alt="Tela de Preview">
  <img src="https://github.com/arthurmacedoo/Devcard---App/blob/main/assets/images/WhatsApp%20Image%202026-05-08%20at%2016.11.44%20(2).jpeg?raw=true" width="200" alt="Tela de Sucesso">
</div>

## Como rodar o projeto
1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
