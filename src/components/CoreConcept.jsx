function CoreConcept({title, description, image}){
    return(
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }

export default CoreConcept;

/* O componente CoreConcept recebe três props: title, description e image, 
e retorna um item de lista (<li>) que inclui uma imagem (<img>) com a fonte e 
o texto alternativo definidos pela prop image e title, respectivamente, um título
(<h3>) com o conteúdo da prop title, e um parágrafo (<p>) contendo o texto da prop
 description. Em seguida, o componente é exportado para ser usado em outras partes
da aplicação.*/