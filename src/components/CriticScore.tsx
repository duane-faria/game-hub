import { Tag } from "@chakra-ui/react";

export default function CriticScore({ score }: { score: number }) {
  const color = score < 50 ? 'red' : score < 75 ? 'yellow' : 'green';
  
  return <Tag colorScheme={color} size={'md'}>{score}</Tag>;
}
