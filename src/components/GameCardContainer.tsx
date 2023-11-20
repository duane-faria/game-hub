import React from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

export default function GameCardContainer({
  children,
}: GameCardContainerProps) {
  return <Box width="300px" overflow="hidden" borderRadius={10}>{children}</Box>;
}
