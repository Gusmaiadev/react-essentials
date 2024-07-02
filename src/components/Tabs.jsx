function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // Recebe uma prop opcional 'ButtonsContainer' para renderizar os botões das abas (padrão é 'menu').

    return (
        <>
            {/* Renderiza o container dos botões ('ButtonsContainer'), 
                utilizando o valor da prop 'ButtonsContainer' (padrão é 'menu').
                Renderiza os botões ('buttons') dentro deste container.
            */}
            <ButtonsContainer>{buttons}</ButtonsContainer>
            
            {/* Renderiza o conteúdo das abas ('children'). */}
            {children}
        </>
    );
}

export default Tabs; 
