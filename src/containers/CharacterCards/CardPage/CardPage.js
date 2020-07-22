import React from 'react';
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import './Cardpage.css';
class CardPage extends React.Component{
    state = {
        character:{}
    }
    componentDidMount(){
        this.getCharacterData()
    }


    getCharacterData = () => {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(response => response.json()) 
        .then( data => {
            this.setState({
                character: data
            })
         })
        
    }
    render(){
        let characterCard = null;
        if(this.state.character.id){
            characterCard =(<CharacterCard
                    key={this.state.character.id}
                    id={this.state.character.id}
                    image={this.state.character.image}
                    name={this.state.character.name}
                    species={this.state.character.species}
                    status={this.state.character.status}
                    gender={this.state.character.gender}
                    location={this.state.character.location.name}
                    origin={this.state.character.origin.name}
                    showLink={true}>


            </CharacterCard>)
        }
        else{
            characterCard =<p>Loding...</p>
        }



        return(

            <React.Fragment>
            <h1 className="hedign">{this.state.character.name}</h1>
            <div className="cardelement">{characterCard} </div>
      
            </React.Fragment>

        )
    }
}
export default CardPage;