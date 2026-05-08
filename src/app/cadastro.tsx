import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RegistrationScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('');

  const validarFormulario = () => {
    if (!nome || !cargo || !experiencia || !tecnologia || !cor) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return false;
    }
    return true;
  };

  const handleGerarCartao = () => {
    if (validarFormulario()) {
      router.push({
        pathname: '/preview',
        params: {
          nome,
          cargo,
          empresa,
          experiencia,
          tecnologia,
          cor,
        }
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crie seu Cartão</Text>

      <Text style={styles.label}>Nome Completo *</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Ex: João da Silva"
      />

      <Text style={styles.label}>Cargo *</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
        placeholder="Ex: Desenvolvedor Mobile"
      />

      <Text style={styles.label}>Empresa (Opcional)</Text>
      <TextInput
        style={styles.input}
        value={empresa}
        onChangeText={setEmpresa}
        placeholder="Ex: Tech Corp"
      />

      <Text style={styles.label}>Anos de Experiência *</Text>
      <TextInput
        style={styles.input}
        value={experiencia}
        onChangeText={setExperiencia}
        placeholder="Ex: 3"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Tecnologia Favorita *</Text>
      <TextInput
        style={styles.input}
        value={tecnologia}
        onChangeText={setTecnologia}
        placeholder="Ex: React Native"
      />

      <Text style={styles.label}>Cor do Cartão *</Text>
      <View style={styles.colorContainer}>
        {['Azul', 'Verde', 'Roxo'].map((colorOption) => (
          <TouchableOpacity
            key={colorOption}
            style={[
              styles.colorButton,
              cor === colorOption && styles.colorButtonSelected
            ]}
            onPress={() => setCor(colorOption)}
          >
            <Text style={[
              styles.colorButtonText,
              cor === colorOption && styles.colorButtonTextSelected
            ]}>
              {colorOption}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleGerarCartao}>
        <Text style={styles.submitButtonText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 0,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  colorButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 0,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colorButtonSelected: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  colorButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  colorButtonTextSelected: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 0,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
