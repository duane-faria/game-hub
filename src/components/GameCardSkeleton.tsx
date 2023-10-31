import { Card, CardBody, Skeleton } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width="300px" overflow="hidden" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton height="20px" width="200px" />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
