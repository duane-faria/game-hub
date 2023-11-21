import { Box, Text, VStack } from '@chakra-ui/react'
import GenreList from './GenreList'

export default function Aside() {
  return (
    <VStack>
      <Text fontWeight={600} fontSize='24px'>
        Genres
      </Text>
      <GenreList />
    </VStack>
  )
}
