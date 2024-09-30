import React from 'react';
import './App.css'; 

function App() {
  return (
    <div>
      <header>
        <h1>Elizandro Junior</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>
          Sou um programador web apaixonado por desenvolver soluções criativas e eficientes para a web. 
          Também sou Desenvolvedor de automação, profissional dedicado e qualificado. 
          Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. 
          Meu objetivo é criar aplicações web responsivas e amigáveis que proporcionem uma excelente experiência ao usuário. 
          Estou aberto a colaborar em projetos desafiadores e a contribuir para o crescimento da equipe.
        </p>
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Flask</li>
          <li>React</li>
          {/* Adicionar outras habilidades */}
        </ul>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
        <div className="projeto">
          <h3>Automatização de planilha 1</h3>
          <p>Automatização de planilha em Python 1.</p>
          <a href="https://github.com/rackiand/aotomo-ao-de-planilha">Ver Projeto</a>
        </div>
        <div className="projeto">
          <h3>Primeira API 1</h3>
          <p>API de criação e gerenciamento de tarefas, usando um servidor interno. Ela permite adicionar, remover e mudar o status de uma tarefa. Novas tarefas são categorizadas por 'nome da tarefa', 'prioridade' e 'data'.</p>
          <a href="https://github.com/rackiand/Lista-de-tarefa">Ver Projeto</a>
        </div>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>Email: elizandroestevamjunior67@gmail.com</p>
      </section>

      <footer>
        <p>&copy; 2024 Elizandro Junior. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
