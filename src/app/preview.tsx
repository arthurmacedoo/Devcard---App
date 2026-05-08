import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function PreviewScreen() {
  const router = useRouter();
  const params: any = useLocalSearchParams();

  const { nome, cargo, empresa, experiencia, tecnologia, cor } = params;

  let backgroundColor = 'blue';
  if (cor === 'Azul') {
    backgroundColor = 'blue';
  } else if (cor === 'Verde') {
    backgroundColor = 'green';
  } else if (cor === 'Roxo') {
    backgroundColor = 'purple';
  }

  const exp = parseInt(experiencia || '0');
  let levelLabel = 'Sênior';
  let levelColor = 'orange';
  
  if (exp <= 2) {
    levelLabel = 'Júnior';
    levelColor = 'gray';
  } else if (exp <= 5) {
    levelLabel = 'Pleno';
    levelColor = 'cyan';
  }

  const primeiraLetra = nome ? String(nome).charAt(0).toUpperCase() : '?';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preview do Cartão</Text>

      <View style={[styles.card, { backgroundColor: backgroundColor }]}>
        <View style={styles.avatarContainer}>
          <Text style={[styles.avatarText, { color: backgroundColor }]}>
            {primeiraLetra}
          </Text>
        </View>

        <Text style={styles.cardName}>{nome}</Text>
        <Text style={styles.cardRole}>{cargo}</Text>
        {empresa ? <Text style={styles.cardCompany}>{empresa}</Text> : null}

        <View style={styles.divider} />

        <Text style={styles.cardTech}>Especialista em {tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: levelColor }]}>
          <Text style={styles.badgeText}>{levelLabel}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.editButtonText}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.finishButton} 
          onPress={() => router.replace('/sucesso')}
        >
          <Text style={styles.finishButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
  },
  card: {
    borderRadius: 0,
    padding: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  cardName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 18,
    color: 'white',
    marginBottom: 2,
  },
  cardCompany: {
    fontSize: 16,
    color: 'white',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 16,
  },
  cardTech: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  badgeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    flex: 1,
    backgroundColor: 'gray',
    paddingVertical: 15,
    borderRadius: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finishButton: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 0,
    marginLeft: 10,
    alignItems: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
