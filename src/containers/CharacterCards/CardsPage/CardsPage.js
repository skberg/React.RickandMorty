import React from "react";
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import SearchBar from '../../characterSearch/SuchComp';
import "./CardsPage.css"
class CardsPage extends React.Component{


    state = { 
        reickMorty:[],
        characterCards:[]
    }


   getdata = () => {
       fetch('https://rickandmortyapi.com/api/character/')
       .then(response => response.json()) 
        .then( data =>{ 
            this.setState({
                reickMorty: data.results,
                characterCards: [...data.results]
            })
            })
     
   }
   

   componentDidMount (){
       this.getdata();
   }

   handleSearch = (searchTerm) => {
       this.filterCharacterCard(searchTerm);
   }
   filterCharacterCard = (Term)=>{
    const character = this.state.reickMorty.filter(character =>
        character.name.toLowerCase().includes(Term.trim().toLowerCase()));

        this.setState({
            characterCards: character
        });
   }
    render(){

        let characters = null;
        if (this.state.characterCards.length > 0){
            characters = this.state.characterCards.map(character =>(
                <CharacterCard

                    key={character.id}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    gender={character.gender}
                    location={character.location.name}
                    origin={character.origin.name}
                    showLink={true}>
                </CharacterCard>
            ));
        }
        else{
            characters =  <div class="lds-hourglass"></div>
        }



        return(
            <React.Fragment>
                <h2 className="heding">CharacterCard </h2>

               <SearchBar onSearchTerm={this.handleSearch}/>
                        <div className='row'>
                        {characters}
                        </div>
                        
                        

            </React.Fragment>
        )
    }
}



export default CardsPage;
