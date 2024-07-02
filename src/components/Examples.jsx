// Importa os componentes necessários
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js'; 
import { useState } from 'react'; 
import Section from './Section.jsx'; 
import Tabs from './Tabs.jsx'; 

function Examples() {
    // Define um estado para armazenar qual tópico de exemplo está selecionado
    const [selectedTopic, setSelectedTopic] = useState();

    // Função para lidar com a seleção de um botão 
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton); // Atualiza o estado com o tópico selecionado
    }

    // Define o conteúdo padrão das abas
    let tabContent = <p>Please select a topic.</p>;

    // Verifica se um tópico foi selecionado e atualiza o conteúdo da aba com base nisso
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id='examples' title='Examples'> {/* Renderiza uma seção com ID e título */}
            <Tabs // Renderiza o componente Tabs para gerenciar abas
                buttons={ // Passa os botões das abas como children do componente Tabs
                    <>
                        {/* Cada TabButton representa uma aba com um nome e a função de seleção associada */}
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                    </>
                }
            >
                {tabContent} {/* Renderiza o conteúdo da aba selecionada dentro do componente Tabs */}
            </Tabs>
        </Section>
    );
}

export default Examples; 
