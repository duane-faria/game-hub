import { FunctionComponent } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
    game: Game;
}
 
const GameCard: FunctionComponent<GameCardProps> = ({game}: GameCardProps) => {
    return ( 
        <Card overflow="hidden">
            <Image src={game.background_image} height="100px" objectFit="fill"/>
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
     );
}
 
export default GameCard;