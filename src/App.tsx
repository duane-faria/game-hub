import { Grid, GridItem, Show, Text } from '@chakra-ui/react'

import NavBar from './components/NavBar'

function App() {


  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg={'tomato'}>
        <NavBar />
      </GridItem>

      <Show above='lg'>
        <GridItem area="aside" backgroundColor={'coral'}>
          <Text> aside </Text>
        </GridItem>
      </Show>

      <GridItem area="main" backgroundColor={'gold'}>
        <Text> main </Text>

      </GridItem>
    </Grid>
  )
}

export default App
