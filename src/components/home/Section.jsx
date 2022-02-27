import SectionCard from "./SectionCard";


export default function Section(props) {
    console.log(props);

  


  return (
    <section>
        <h1>{ props.heading}</h1>
        {
            props.cards.map((card, index) => {
                return <SectionCard key={index} card={card} />
            })
        }
      
     
    




    </section>
  )
}
