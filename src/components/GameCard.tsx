import { FunctionComponent } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import { getCroppedImageUrl } from "../services/image-crop";
import GameCardContainer from "./GameCardContainer";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard: FunctionComponent<GameCardProps> = ({
  game,
}: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginTop={2}>
            <PlatformList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
