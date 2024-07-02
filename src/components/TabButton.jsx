function TabButton({ children, isSelected, ...props }) { 
    // Define o componente TabButton, que recebe props 'children', 'isSelected' e quaisquer outras props adicionais, que neste caso 
    //será o valor de onClick usado no Example.jsx.
    
    return (
        <li>
            {/* Renderiza um botão ('button'). 
                - Aplica a classe 'active' se 'isSelected' for verdadeiro, caso contrário, não aplica nenhuma classe.
                - Espalha quaisquer outras props adicionais no botão.
                - Renderiza os filhos ('children') passados para o componente TabButton dentro do botão.
            */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}

export default TabButton; 
