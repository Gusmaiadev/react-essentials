import {CORE_CONCEPTS} from '../data.js'
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

function CoreConcepts(){
    return(
            // Renderiza o componente Section com o título 'Core Concepts' e o ID 'core-concepts'.
        <Section title='Core Concepts' id="core-concepts">
        <ul>
            {/* Mapeia o array CORE_CONCEPTS para criar uma lista de componentes CoreConcept. */}
            {CORE_CONCEPTS.map((conceptItem) => (
                // Renderiza o componente CoreConcept para cada item em CORE_CONCEPTS.
                // Atribui uma chave única baseada no título do conceito e espalha as props do objeto conceptItem.
                <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
        </ul>
    </Section>
    )
}

export default CoreConcepts;

/*O componente CoreConcepts em React importa um conjunto de conceitos centrais (CORE_CONCEPTS)
 de um arquivo de dados e os componentes CoreConcept e Section. Ele retorna uma seção (<Section>)
 com o título "Core Concepts" e um ID "core-concepts". Dentro dessa seção, ele mapeia o array
CORE_CONCEPTS para renderizar uma lista (<ul>) de itens, onde cada item é um componente
CoreConcept preenchido com as propriedades de cada objeto de CORE_CONCEPTS. Cada CoreConcept
recebe uma chave (key) única baseada no título do conceito. Por fim, o componente é exportado
para ser utilizado em outras partes da aplicação. */

