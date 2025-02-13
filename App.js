import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Grandes oportunidades surgem para quem está preparado.',
      'A paciência é a chave para grandes conquistas.',
      'Seu esforço de hoje será sua vitória de amanhã.',
      'Um novo caminho se abrirá diante de você.',
      'Confie em si mesmo, você está no caminho certo.',
      'Pequenos passos levam a grandes destinos.',
      'Sua sorte muda quando sua atitude muda.',
      'O sucesso começa com um simples primeiro passo.',
      'Algo incrível está prestes a acontecer com você.',
      'Sorria, a vida tem surpresas boas reservadas!'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image 
          source={this.state.img}
          style={styles.img} 
        />

        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: 'orange',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange'
  }

});

export default App;