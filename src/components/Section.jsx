function Section({ title, children, ...props }) { 
    // Define o componente Section, que recebe props 'title', 'children' e qualquer outra prop adicional que neste caso será o id.
    return (
        // Renderiza um elemento 'section' e aplica nele todas as props adicionais recebidas.
        <section {...props}>
            {/* Renderiza um elemento 'h2' que exibe o título recebido via prop 'title'. */}
            <h2>{title}</h2>
            {/* Renderiza quaisquer filhos que foram passados para o componente Section. */}
            {children}
        </section>
    );
}

export default Section; 
