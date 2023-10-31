import { FunctionComponent } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import { getCroppedImageUrl } from "../services/image-crop";

interface GameCardProps {
    game: Game;
}

const GameCard: FunctionComponent<GameCardProps> = ({ game }: GameCardProps) => {
    return (
        <Card overflow="hidden" width="300px">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
                <PlatformList platforms={game.parent_platforms.map(({ platform }) => platform)} />
            </CardBody>
        </Card>
    );
}

export default GameCard;